#!/usr/bin/env python3
"""
╔══════════════════════════════════════════════════════════════════╗
║                    MEGA APP — START SERVER                       ║
║  Run:  python start.py                                           ║
║  Then: open http://localhost:3000 in your browser                ║
║                                                                  ║
║  Requirements:  none (standard library only)                     ║
║  Ollama:        ollama serve  (in a separate terminal)           ║
╚══════════════════════════════════════════════════════════════════╝
"""

import hashlib
import json
import mimetypes
import os
import sys
import time
import uuid
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import URLError

# ── Config ──────────────────────────────────────────────────────────
HTTP_PORT  = 3000
OLLAMA_URL = "http://localhost:11434"
ACCOUNTS_F = "accounts.json"
ROOT_DIR   = Path(__file__).parent

# ── Helpers ─────────────────────────────────────────────────────────
def sha256(s: str) -> str:
    return hashlib.sha256(s.encode()).hexdigest()

def load_accounts() -> dict:
    if not os.path.exists(ACCOUNTS_F):
        return {"users": {}, "sessions": {}}
    with open(ACCOUNTS_F) as f:
        return json.load(f)

def save_accounts(data: dict):
    with open(ACCOUNTS_F, "w") as f:
        json.dump(data, f, indent=2)

def new_token() -> str:
    return str(uuid.uuid4()).replace("-", "")

def cors() -> dict:
    return {
        "Access-Control-Allow-Origin":  "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-Session-Token",
    }

# ── HTTP Handler ─────────────────────────────────────────────────────
class MegaHandler(BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        pass  # quiet logging

    def send_json(self, code: int, data: dict):
        body = json.dumps(data).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", len(body))
        for k, v in cors().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def send_err(self, code: int, msg: str):
        self.send_json(code, {"error": msg})

    def body(self) -> dict:
        n = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(n)) if n else {}

    def session_user(self):
        token = self.headers.get("X-Session-Token", "")
        if not token:
            return None
        data = load_accounts()
        sess = data["sessions"].get(token)
        if not sess:
            return None
        return data["users"].get(sess["user_id"])

    def proxy_ollama(self, path: str):
        """Stream request to Ollama and pipe back the response."""
        url = OLLAMA_URL + path[len("/ollama"):]
        n = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(n) if n else None
        try:
            req = Request(url, data=body, method=self.command,
                          headers={"Content-Type": "application/json"})
            with urlopen(req, timeout=120) as resp:
                self.send_response(resp.status)
                self.send_header("Content-Type",
                                 resp.headers.get("Content-Type", "application/json"))
                for k, v in cors().items():
                    self.send_header(k, v)
                self.end_headers()
                while True:
                    chunk = resp.read(4096)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    self.wfile.flush()
        except URLError as e:
            self.send_err(502, f"Ollama unreachable — run: ollama serve ({e})")

    # ── GET ──────────────────────────────────────────────────────────
    def do_GET(self):
        path = urlparse(self.path).path

        if path.startswith("/ollama"):
            self.proxy_ollama(path)
            return

        if path == "/api/me":
            user = self.session_user()
            if user:
                safe = {k: v for k, v in user.items() if k != "password_hash"}
                self.send_json(200, {"user": safe})
            else:
                self.send_err(401, "Not authenticated")
            return

        # Static files
        if path in ("/", ""):
            path = "/mega-app.html"
        fpath = ROOT_DIR / path.lstrip("/")
        if fpath.exists() and fpath.is_file():
            mime, _ = mimetypes.guess_type(str(fpath))
            data = fpath.read_bytes()
            self.send_response(200)
            self.send_header("Content-Type", mime or "application/octet-stream")
            self.send_header("Content-Length", len(data))
            for k, v in cors().items():
                self.send_header(k, v)
            self.end_headers()
            self.wfile.write(data)
        else:
            self.send_err(404, f"Not found: {path}")

    # ── OPTIONS ──────────────────────────────────────────────────────
    def do_OPTIONS(self):
        self.send_response(204)
        for k, v in cors().items():
            self.send_header(k, v)
        self.end_headers()

    # ── POST ─────────────────────────────────────────────────────────
    def do_POST(self):
        path = urlparse(self.path).path

        if path.startswith("/ollama"):
            self.proxy_ollama(path)
            return

        if path == "/api/login":
            b = self.body()
            username = b.get("username", "").strip().lower()
            password = b.get("password", "")
            data = load_accounts()
            user = next((u for u in data["users"].values()
                         if u["username"].lower() == username
                         or u.get("email", "").lower() == username), None)
            if not user or user["password_hash"] != sha256(password):
                self.send_err(401, "Wrong username or password")
                return
            token = new_token()
            data["sessions"][token] = {"user_id": user["id"], "ts": time.time()}
            save_accounts(data)
            safe = {k: v for k, v in user.items() if k != "password_hash"}
            self.send_json(200, {"token": token, "user": safe})
            return

        if path == "/api/signup":
            b = self.body()
            username = b.get("username", "").strip()
            email    = b.get("email", "").strip().lower()
            password = b.get("password", "")
            avatar   = b.get("avatar", "😊")
            if not username or not password:
                self.send_err(400, "Username and password required")
                return
            if len(password) < 4:
                self.send_err(400, "Password must be at least 4 characters")
                return
            data = load_accounts()
            for u in data["users"].values():
                if u["username"].lower() == username.lower():
                    self.send_err(409, "Username already taken")
                    return
                if email and u.get("email") == email:
                    self.send_err(409, "Email already in use")
                    return
            uid = new_token()[:12]
            user = {
                "id": uid,
                "username": username,
                "email": email,
                "avatar": avatar,
                "password_hash": sha256(password),
                "joined": time.strftime("%Y-%m-%d"),
            }
            data["users"][uid] = user
            token = new_token()
            data["sessions"][token] = {"user_id": uid, "ts": time.time()}
            save_accounts(data)
            safe = {k: v for k, v in user.items() if k != "password_hash"}
            print(f"  ✅ New user: {username}")
            self.send_json(201, {"token": token, "user": safe})
            return

        if path == "/api/logout":
            token = self.headers.get("X-Session-Token", "")
            if token:
                data = load_accounts()
                data["sessions"].pop(token, None)
                save_accounts(data)
            self.send_json(200, {"ok": True})
            return


        if path == "/api/profile":
            user = self.session_user()
            if not user:
                self.send_err(401, "Not authenticated")
                return
            b = self.body()
            data = load_accounts()
            uid = user["id"]
            if b.get("username"):
                uname = b["username"].strip()
                if uname and uname != data["users"][uid]["username"]:
                    for u in data["users"].values():
                        if u["id"] != uid and u["username"].lower() == uname.lower():
                            self.send_err(409, "Username already taken")
                            return
                data["users"][uid]["username"] = uname
            if "bio" in b:
                data["users"][uid]["bio"] = b["bio"][:200]
            if b.get("avatar"):
                data["users"][uid]["avatar"] = b["avatar"]
            save_accounts(data)
            safe = {k:v for k,v in data["users"][uid].items() if k != "password_hash"}
            self.send_json(200, {"user": safe})
            return

        if path == "/api/change-password":
            user = self.session_user()
            if not user:
                self.send_err(401, "Not authenticated")
                return
            b = self.body()
            cur = b.get("current", "")
            new_pw = b.get("newPassword", "")
            if not cur or not new_pw:
                self.send_err(400, "Missing fields")
                return
            if len(new_pw) < 4:
                self.send_err(400, "Password must be at least 4 characters")
                return
            data = load_accounts()
            uid = user["id"]
            if data["users"][uid]["password_hash"] != sha256(cur):
                self.send_err(401, "Current password is wrong")
                return
            data["users"][uid]["password_hash"] = sha256(new_pw)
            save_accounts(data)
            self.send_json(200, {"ok": True})
            return

        self.send_err(404, "Unknown endpoint")


# ── Entry point ──────────────────────────────────────────────────────
def main():
    print()
    print("  ╔══════════════════════════════════════╗")
    print("  ║         MEGA APP SERVER              ║")
    print("  ╚══════════════════════════════════════╝")
    print()

    if not (ROOT_DIR / "mega-app.html").exists():
        print("  ❌  mega-app.html not found!")
        sys.exit(1)

    if not (ROOT_DIR / "dictionary-data.js").exists():
        print("  ⚠️  dictionary-data.js missing — dictionary will show a notice")
    else:
        print("  📖  dictionary-data.js  ✓")

    if not os.path.exists(ACCOUNTS_F):
        save_accounts({"users": {}, "sessions": {}})
        print("  📁  accounts.json created")

    print(f"  🚀  Server  →  http://localhost:{HTTP_PORT}")
    print(f"  🤖  Ollama  →  {OLLAMA_URL}  (run: ollama serve)")
    print()
    print("  Open http://localhost:3000 in your browser")
    print("  Press Ctrl+C to stop")
    print()

    server = HTTPServer(("localhost", HTTP_PORT), MegaHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  👋 Stopped. Goodbye!")


if __name__ == "__main__":
    main()
