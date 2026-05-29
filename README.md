# 🚀 Mega App Beta v0.5

A local-first AI workspace — calculator, color picker, notes, wellness, weather, dictionary, and a full suite of specialized AI assistants. Everything runs on your machine. No cloud. No subscriptions. No BS.

---

## ✨ Features

### 🤖 AI Panels (powered by Ollama — all local, all private)

| AI | Specialty | Color |
|---|---|---|
| 🤖 Mega AI | General purpose | `#7c6aff` |
| ∑ Abstract AI | Mathematics | `#1f1f1f` |
| 🌑 Void AI | Geography | `#000000` |
| ✍️ Dark AI | Language & Writing | `#ff6b9d` |
| 🔬 Pure AI | Science | `#ff0062` |
| 🧪 Fire AI | Chemistry | `#ff0000` |
| 🎵 Lava AI | Music | `#ff5500` |
| ☀️ Sun AI | Social Media | `#ff8400` |
| 💻 Golden AI | Coding | `#ffb300` |
| 💰 Electric AI | Finance | `#ffff00` |
| 🩺 Cure AI | Medical Info | `#d4ff00` |
| 📰 Poison AI | News | `#00ff00` |
| 👗 Light AI | Fashion | `#00fcd7` |
| ⚖️ Water AI | Law (educational) | `#00b4ff` |
| 🍳 Ice AI | Cooking | `#1565c0` |
| ⛈️ Thunder AI | Weather & Meteorology | `#7700ff` |
| 🌌 Galaxy AI | Space & Astronomy | `#ad66ff` |
| 🌿 Lavender AI | Plant Science & Gardening | `#d2abff` |
| ♾️ Infinity AI | The Forbidden & Deep Questions | `#ffffff` |
| ⭐ Hyper AI | Ultra-detailed, cross-disciplinary | `#bdbdbd` |
| 🖥️ ULTRA AI | Computer Science & Programming | `#4d4d4d` |

> **21 AI specialists.** All powered by Ollama — your data never leaves your machine.

---

### 🛠️ Tools

| Tool | Features |
|---|---|
| 🖩 **Calculator** | Basic, Scientific, Ultra, Programmer, Unit Converter, Tip Calculator, Matrix (2×2 to 4×4) |
| 🎨 **Color Picker** | Full HSV canvas with crosshair, hex/RGB/HSL/HSVA formats, color harmonies, saved colors, palettes, eyedropper |
| 📝 **Notes** | Rich text editor — bold, italic, underline, bullet lists, headings, font family, font size, text color, highlight |
| 🌤️ **Weather** | Live weather via Open-Meteo (free, no API key needed), 5-day forecast, UV, pressure, weather facts widget |
| 🧘 **Wellness** | Mood tracker, Pomodoro focus timer, water intake tracker with streaks |
| 📖 **Dictionary** | 15+ categories: Words, Plants, Animals, Space, History, Food, Music, Human Body, Geography, Tech, Weather, Elements (all 118), Symbols, Emoji, Math — 600+ entries |
| 📅 **Calendar** | Pre-populated events, upcoming dates |
| 💬 **Chat Rooms** | Coming soon |
| ⚙️ **Settings** | Themes, accent color/gradient, font size, language, profile editing, friends list, credits |
| 🏆 **Achievements** | Unlockable achievements across the app |

---

## 📁 File Structure

```
mega-app/
├── mega-app.html        ← the entire app (single HTML file)
├── start.py             ← local Python server
├── dictionary-data.js   ← dictionary content (600+ entries, 15 categories)
├── weather-data.js      ← cloud atlas, storm records, weather facts
├── README.md
├── .gitignore
└── accounts.json        ← auto-created on first run (gitignored)
```

---

## 🚀 Getting Started

### Requirements
- **Python 3.8+** — standard library only, no pip installs needed
- **Ollama** — for all AI features → [ollama.ai](https://ollama.ai)
- A modern browser (Chrome, Firefox, Edge, Safari)

### Setup

```bash
# 1. Clone
git clone https://github.com/yourusername/mega-app.git
cd mega-app

# 2. Pull an AI model
ollama pull mistral
# Other options: llama3.2, phi3, gemma2, qwen2.5, llama3.1

# 3. Start Ollama (keep this running)
ollama serve

# 4. Start the app (new terminal)
python start.py

# 5. Open in browser
# → http://localhost:3000
```

---

## 🔧 Architecture

```
Browser ←─────────────────→ start.py  (port 3000)
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
             Static files    /api/*      /ollama/*
             (HTML, JS)    Accounts    Ollama proxy
                                      (localhost:11434)
```

- **AI calls** → proxied through `start.py` to Ollama
- **Accounts** → stored in `accounts.json` (SHA-256 hashed passwords)
- **Notes, Wellness, Achievements** → browser `localStorage`
- **Weather** → [Open-Meteo API](https://open-meteo.com) (free, no key)
- **Dictionary/Weather data** → loaded from local `.js` files

---

## 🎨 Customization

In the **⚙️ Settings** panel:
- **Dark themes** — Void, Abyss, Midnight, Carbon, Obsidian
- **Accent color** — gradient support, fully customizable
- **Font size** — Small / Medium / Large
- **Language** — English, French, Spanish, Arabic, Japanese, and more
- **Profile** — Avatar, display name, bio, password change
- **Friends list** — Add friends by username

---

## 🔒 Privacy

- Zero data sent anywhere except weather (city name only to Open-Meteo)
- All AI conversations stay on your machine via Ollama
- Accounts stored locally in `accounts.json`
- No analytics, no tracking, no ads, no telemetry

---

## 🙏 Thanks

Special thanks to the people who helped, supported, and contributed ideas — you know who you are.

*Listed in the app under Settings → Credits*

---

## 🤝 Contributing

Issues and PRs welcome! Open an issue for:
- New AI panel ideas
- Dictionary category suggestions
- Bug reports
- Feature requests

---

## 📄 License

MIT — do whatever you want with it.

---

*Mega App Beta v0.5 — built with 🤖 + ☕ — runs entirely on your machine, also, some features do not work, later, when v0.75 or v1.0 is out, they may work, no release date, YET.*
