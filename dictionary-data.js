// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Dictionary Data File
//  Place this file in the same folder as mega-app.html
//  This file provides all dictionary content: words, plants, fruits,
//  symbols, emoji, math, and the full periodic table (118 elements)
// ═══════════════════════════════════════════════════════════════════

window.DICT_EXTRA = true; // signals the app that this file loaded

// ── Merge helper ──────────────────────────────────────────────────
(function(){
  if (typeof DICT_DATA === 'undefined') return;
  Object.keys(DICT_EXTRA_DATA).forEach(function (cat) {
    if (!DICT_DATA[cat]) DICT_DATA[cat] = [];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_EXTRA_DATA[cat] || []);
  })();
  if (typeof initDictionary === 'function') initDictionary();
});

const DICT_EXTRA_DATA = {

// ─────────────────────────────────────────────────────────────────
// WORDS  (100 fascinating English words)
// ─────────────────────────────────────────────────────────────────
words: [
  {icon:'✨',name:'Ephemeral',sci:'adj.',desc:'Lasting for a very short time. From Greek ephemeros — "lasting only a day".',tag:'English',facts:{Origin:'Greek "ephemeros"',Antonym:'Eternal, permanent'}},
  {icon:'🌊',name:'Petrichor',sci:'n.',desc:'The pleasant earthy smell after rain. Caused by geosmin released by soil bacteria.',tag:'Science',facts:{Coined:'1964 — Bear & Thomas',Cause:'Geosmin from Streptomyces bacteria'}},
  {icon:'🌀',name:'Serendipity',sci:'n.',desc:'Finding something good without looking for it. Coined by Horace Walpole in 1754.',tag:'English',facts:{Coined:'Horace Walpole, 1754',From:'The Three Princes of Serendip'}},
  {icon:'🎭',name:'Schadenfreude',sci:'n.',desc:'Pleasure from another person\'s misfortune. German loanword with no direct English equivalent.',tag:'German',facts:{Language:'German',Literally:'"Damage-joy"'}},
  {icon:'🌙',name:'Crepuscular',sci:'adj.',desc:'Relating to twilight. Animals active at dawn or dusk are crepuscular.',tag:'Biology',facts:{Origin:'Latin crepusculum (twilight)',Examples:'Deer, rabbits, cats'}},
  {icon:'🦋',name:'Liminal',sci:'adj.',desc:'At a threshold or transition point — between two states. Used in psychology and architecture.',tag:'Psychology',facts:{Origin:'Latin limen (threshold)',Use:'Liminal spaces, rites of passage'}},
  {icon:'🧠',name:'Sonder',sci:'n.',desc:'The realization that every stranger has a life as vivid and complex as your own.',tag:'Coined',facts:{Origin:'Dictionary of Obscure Sorrows',Author:'John Koenig'}},
  {icon:'🌺',name:'Halcyon',sci:'adj.',desc:'Denoting a golden, peaceful period of the past. From the mythological bird that calmed the seas.',tag:'Literary',facts:{Greek_myth:'Halcyon nested on calm winter seas',Meaning:'Idyllically happy and peaceful'}},
  {icon:'💡',name:'Hiraeth',sci:'n.',desc:'A Welsh word for a deep longing — homesickness mixed with grief for something lost or unattainable.',tag:'Welsh',facts:{No_English:'No direct English translation',Feeling:'Nostalgia, grief, and longing combined'}},
  {icon:'🔥',name:'Mamihlapinatapai',sci:'n.',desc:'A look between two people that says "I wish you would start." From the Yagán language of Tierra del Fuego.',tag:'Yagán',facts:{Language:'Yagán (nearly extinct)',Recognition:'Once listed in Guinness as most succinct word'}},
  {icon:'🌈',name:'Psithurism',sci:'n.',desc:'The sound of wind through leaves. One of the most beautiful onomatopoeic words in English.',tag:'English',facts:{Origin:'Greek "psithuros" (whispering)',Pronunciation:'SIT-hyoo-rizm'}},
  {icon:'💫',name:'Sillage',sci:'n.',desc:'The scent left in the air by a passing person. Used in perfumery to rate how far a fragrance travels.',tag:'French',facts:{Origin:'French "sillage" (wake of a ship)',Perfumery:'Measures how far scent projects'}},
  {icon:'🌊',name:'Meraki',sci:'n.',desc:'Doing something with soul, creativity, and love — putting a piece of yourself into your work.',tag:'Greek',facts:{Origin:'Modern Greek',Feeling:'Passion poured into work'}},
  {icon:'☁️',name:'Vellichor',sci:'n.',desc:'The strange wistfulness of used bookshops. Another word from the Dictionary of Obscure Sorrows.',tag:'Coined',facts:{Author:'John Koenig',Dictionary:'Dictionary of Obscure Sorrows'}},
  {icon:'🎵',name:'Lacuna',sci:'n.',desc:'A missing portion in a text or argument — a gap. Also used in anatomy for tiny cavities.',tag:'English',facts:{Origin:'Latin lacuna (pit, pool)',Plural:'Lacunae or lacunas'}},
  {icon:'🌿',name:'Sylvan',sci:'adj.',desc:'Relating to the woods. A beautifully archaic word for forest settings.',tag:'Literary',facts:{Origin:'Latin "silva" (forest)',Use:'Sylvan glade, sylvan retreat'}},
  {icon:'⚡',name:'Sempiternal',sci:'adj.',desc:'Eternal and unchanging — existing forever. More poetic than "eternal".',tag:'Literary',facts:{Origin:'Latin "semper" (always) + "aeternus" (eternal)',Use:'Elevated, poetic register'}},
  {icon:'🎨',name:'Chiaroscuro',sci:'n.',desc:'The contrast of light and shadow in art. Used by Caravaggio and Leonardo to create dramatic depth.',tag:'Art',facts:{Origin:'Italian: "chiaro" (light) + "oscuro" (dark)',Masters:'Caravaggio, Rembrandt, Leonardo'}},
  {icon:'🔮',name:'Ennui',sci:'n.',desc:'A feeling of listless boredom from lack of excitement. A very French kind of existential boredom.',tag:'French',facts:{Origin:'French "ennui"',Feeling:'Deeper than boredom — existential listlessness'}},
  {icon:'🌙',name:'Lugubrious',sci:'adj.',desc:'Looking or sounding mournful and dismal. One of the most satisfying sad words to say aloud.',tag:'English',facts:{Origin:'Latin "lugere" (to mourn)',Pronunciation:'loo-GOO-bree-us'}},
  {icon:'💎',name:'Mellifluous',sci:'adj.',desc:'Sweet or musical — pleasantly smooth to hear. A word that sounds like what it means.',tag:'English',facts:{Origin:'Latin "mel" (honey) + "fluere" (to flow)',Synonym:'Dulcet, honeyed, euphonious'}},
  {icon:'🧩',name:'Quixotic',sci:'adj.',desc:'Extremely idealistic and impractical. From Don Quixote, who tilted at windmills.',tag:'Literary',facts:{From:'Don Quixote (Cervantes, 1605)',Meaning:'Impractically romantic or idealistic'}},
  {icon:'🌊',name:'Defenestration',sci:'n.',desc:'The act of throwing someone out of a window. Has its own word because it happened historically enough to need one.',tag:'History',facts:{Historical:'Defenestrations of Prague (1419, 1618)',Origin:'Latin "de" (from) + "fenestra" (window)'}},
  {icon:'🔬',name:'Petrichor',sci:'n.',desc:'The distinctive earthy scent after rain. One of the most universally loved smells on Earth.',tag:'Science',facts:{Cause:'Geosmin from Streptomyces bacteria',Coined:'Isabel Joy Bear, 1964'}},
  {icon:'🌺',name:'Limerence',sci:'n.',desc:'An involuntary state of deep romantic infatuation — obsessive thoughts about another person.',tag:'Psychology',facts:{Coined:'Dorothy Tennov, 1979',Different_from:'Love — less about the other, more about the feeling'}},
  {icon:'✨',name:'Ineffable',sci:'adj.',desc:'Too great or extreme to be expressed in words. Beauty, grief, love — sometimes language fails.',tag:'English',facts:{Origin:'Latin "ineffabilis" (unutterable)',Antonym:'Expressible, articulable'}},
  {icon:'🧠',name:'Palimpsest',sci:'n.',desc:'A manuscript page reused after earlier writing was scraped off. Metaphorically: layers of history on a place.',tag:'Literary',facts:{Origin:'Greek "palimpsestos" (scraped again)',Modern_use:'Layered history of a place'}},
  {icon:'🎭',name:'Prosopagnosia',sci:'n.',desc:'Face blindness — inability to recognize faces. Brad Pitt and Oliver Sacks both had this condition.',tag:'Neurology',facts:{Famous:'Brad Pitt, Oliver Sacks',Cause:'Damage to fusiform face area'}},
  {icon:'🌙',name:'Apricity',sci:'n.',desc:'The warmth of the sun in winter. An archaic English word that deserves a comeback.',tag:'Archaic',facts:{Origin:'Latin "apricus" (warmed by the sun)',Status:'Archaic — rarely used today'}},
  {icon:'🎵',name:'Numinous',sci:'adj.',desc:'Having a strong spiritual quality — awe-inspiring and mysterious. Used by Rudolf Otto.',tag:'Philosophy',facts:{Coined:'Rudolf Otto, 1917',Feeling:'Overwhelming presence of the divine'}},
  {icon:'💫',name:'Tintinnabulation',sci:'n.',desc:'A ringing or tinkling sound of bells. Edgar Allan Poe used it famously in "The Bells".',tag:'Literary',facts:{Origin:'Latin "tintinnabulum" (bell)',Poe:'"The Bells" (1849)'}},
  {icon:'🌿',name:'Vesperal',sci:'adj.',desc:'Of or relating to the evening. More poetic than "evening".',tag:'Literary',facts:{Origin:'Latin "vesper" (evening)',Related:'Vespers — evening prayer'}},
  {icon:'⚡',name:'Kairos',sci:'n.',desc:'The perfect, opportune moment. In ancient Greek thought: qualitative time vs chronos (quantitative time).',tag:'Greek',facts:{Opposite:'Chronos (clock time)',Use:'In rhetoric: the right moment to speak'}},
  {icon:'🔥',name:'Somniloquy',sci:'n.',desc:'The act of talking in your sleep. More common in children and more frequent during stress.',tag:'Medicine',facts:{Also_called:'Sleep-talking',Cause:'Often stress, fever, or sleep deprivation'}},
  {icon:'🌈',name:'Alexithymia',sci:'n.',desc:'Difficulty identifying and expressing emotions. Estimated to affect 10% of the population.',tag:'Psychology',facts:{Prevalence:'~10% of people',Associated:'Autism, PTSD, depression'}},
  {icon:'💡',name:'Phosphene',sci:'n.',desc:'The light you see when you press your eyes shut. Also caused by head trauma or electrical stimulation.',tag:'Neurology',facts:{Cause:'Pressure on the retina or optic nerve',Type:'Entoptic phenomenon'}},
  {icon:'🎨',name:'Cwtch',sci:'n.',desc:'A Welsh word meaning a small storage space — or a warm, safe hug. Both meanings are used.',tag:'Welsh',facts:{Pronunciation:'"Cutch"',Meaning:'A cupboard, or a loving embrace'}},
  {icon:'🌊',name:'Komorebi',sci:'n.',desc:'The Japanese word for sunlight filtering through leaves — the interplay of light and foliage.',tag:'Japanese',facts:{No_English:'No direct English equivalent',Feeling:'Dappled woodland light'}},
  {icon:'🌙',name:'Mono no Aware',sci:'n.',desc:'A Japanese concept of the bittersweet awareness of impermanence — beauty tinged with sadness.',tag:'Japanese',facts:{Literally:'"The pathos of things"',Feeling:'Bittersweet transience of life'}},
  {icon:'🧩',name:'Toska',sci:'n.',desc:'Russian word for a longing with nothing to long for — a vague restlessness and dissatisfaction.',tag:'Russian',facts:{Nabokov:'Nabokov called it "ache of the soul"',Feeling:'Longing for an unknown something'}},
  {icon:'✨',name:'Mamihlapinatapei',sci:'n.',desc:'A shared look between two people who both want something but neither will start. Yagán language.',tag:'Yagán',facts:{Language:'Yagán (Tierra del Fuego)',Listed:'Guinness as most succinct word'}},
  {icon:'🔮',name:'Acatalepsy',sci:'n.',desc:'The impossibility of comprehending the universe or knowing anything with certainty.',tag:'Philosophy',facts:{School:'Ancient Greek skepticism',Related:'Agnosticism, epistemic humility'}},
  {icon:'🌺',name:'Eigengrau',sci:'n.',desc:'The dark grey colour seen by the eye in perfect darkness. German for "intrinsic grey".',tag:'German',facts:{Literally:'"Intrinsic grey"',Colour:'#16161d approximately'}},
  {icon:'🎵',name:'Eldritch',sci:'adj.',desc:'Strange and sinister — from a mysterious realm. Especially associated with Lovecraftian horror.',tag:'Literary',facts:{Origin:'Old English',Lovecraft:'Central to cosmic horror'}},
  {icon:'💎',name:'Syzygy',sci:'n.',desc:'The alignment of three celestial bodies. Also one of the hardest English words to spell.',tag:'Astronomy',facts:{Example:'Sun-Earth-Moon during eclipses',Spelling:'All Y\'s — no standard vowels'}},
  {icon:'🌙',name:'Fugacious',sci:'adj.',desc:'Fleeting, transient — passing quickly. A more poetic word for ephemeral.',tag:'Literary',facts:{Origin:'Latin "fugax" (fleeting)',Synonym:'Ephemeral, evanescent, transient'}},
  {icon:'🧠',name:'Kenopsia',sci:'n.',desc:'The eerie atmosphere of a place that is usually busy but is now empty — airports at 3am, empty schools.',tag:'Coined',facts:{Origin:'Dictionary of Obscure Sorrows',Feeling:'Empty spaces that should be full'}},
  {icon:'🌊',name:'Clinomania',sci:'n.',desc:'An obsessive desire to stay in bed. Distinct from laziness — a genuine compulsion.',tag:'Psychology',facts:{Related:'Dysania — difficulty getting out of bed',Note:'Can indicate depression'}},
  {icon:'⚡',name:'Callipygian',sci:'adj.',desc:'Having well-shaped buttocks. Used in classical art to describe the Venus Kallipygos.',tag:'Classical',facts:{Origin:'Greek "kalos" (beautiful) + "pyge" (buttocks)',Classical:'Venus Kallipygos — famous Greek statue'}},
  {icon:'🎭',name:'Obambulate',sci:'v.',desc:'To walk about aimlessly. A rare but perfectly descriptive verb for wandering without purpose.',tag:'Archaic',facts:{Origin:'Latin "ob" (around) + "ambulare" (to walk)',Status:'Rare, archaic'}},
],

// ─────────────────────────────────────────────────────────────────
// PLANTS & FRUITS
// ─────────────────────────────────────────────────────────────────
plants: [
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#e8f5e9"/><path d="M20 35 Q20 20 10 12" stroke="#2e7d32" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M20 25 Q14 18 8 20" stroke="#388e3c" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 20 Q26 13 32 15" stroke="#388e3c" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="20" cy="35" r="3" fill="#795548"/></svg>',name:'Fern',sci:'Polypodiopsida',desc:'Ancient plants predating dinosaurs by millions of years. Reproduce via spores, not seeds.',tag:'Plant',facts:{Age:'360 million years',Species:'10,500+',Reproduction:'Spores'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff3e0"/><circle cx="20" cy="20" r="12" fill="#ff9800" opacity=".9"/><circle cx="20" cy="20" r="8" fill="#f57c00"/><path d="M20 8 L20 4" stroke="#388e3c" stroke-width="2" stroke-linecap="round"/><path d="M20 4 Q16 2 14 5" stroke="#388e3c" stroke-width="1.5" fill="none"/><path d="M20 4 Q24 2 26 5" stroke="#388e3c" stroke-width="1.5" fill="none"/></svg>',name:'Orange',sci:'Citrus sinensis',desc:'A hybrid of pomelo and mandarin created in ancient China. Most consumed citrus worldwide.',tag:'Fruit',facts:{Origin:'Ancient China',Hybrid:'Pomelo + Mandarin',Vitamin_C:'70mg per fruit'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fce4ec"/><ellipse cx="20" cy="22" rx="13" ry="12" fill="#e91e63" opacity=".85"/><ellipse cx="16" cy="18" rx="13" ry="12" fill="#c2185b" opacity=".8"/><path d="M18 10 Q20 6 22 8" stroke="#388e3c" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 8 L20 4" stroke="#388e3c" stroke-width="1.5" stroke-linecap="round"/></svg>',name:'Apple',sci:'Malus domestica',desc:'Over 7,500 cultivars exist. The science of apple growing is pomology.',tag:'Fruit',facts:{Cultivars:'7,500+',Science:'Pomology',Record:'Most grown fruit in temperate zones'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#e8f5e9"/><ellipse cx="20" cy="24" rx="13" ry="11" fill="#4caf50" opacity=".9"/><ellipse cx="20" cy="24" rx="9" ry="7" fill="#388e3c" opacity=".8"/><path d="M20 13 L20 6" stroke="#2e7d32" stroke-width="2.5" stroke-linecap="round"/><path d="M20 9 Q16 7 14 10" stroke="#388e3c" stroke-width="1.5" fill="none"/><path d="M20 9 Q24 7 26 10" stroke="#388e3c" stroke-width="1.5" fill="none"/></svg>',name:'Avocado',sci:'Persea americana',desc:'A berry with one seed, originally spread by now-extinct giant ground sloths.',tag:'Fruit',facts:{Technically:'Single-seeded berry',Spread_by:'Extinct giant ground sloths',Fat:'Highest fat of any fruit'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff8e1"/><ellipse cx="20" cy="24" rx="14" ry="10" fill="#ffeb3b" opacity=".9"/><ellipse cx="20" cy="24" rx="10" ry="7" fill="#fdd835"/><path d="M20 14 Q20 8 17 6 Q22 8 20 14" fill="#8bc34a"/><ellipse cx="16" cy="10" rx="4" ry="3" fill="#66bb6a" transform="rotate(-20 16 10)"/></svg>',name:'Banana',sci:'Musa acuminata',desc:'The banana plant is technically the world\'s largest herb, not a tree.',tag:'Fruit',facts:{Technically:'Worlds largest herb',Wild:'Full of large hard seeds',Cultivar:'Cavendish is global standard'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fbe9e7"/><ellipse cx="20" cy="22" rx="13" ry="12" fill="#ff7043" opacity=".9"/><ellipse cx="20" cy="22" rx="9" ry="8" fill="#f4511e" opacity=".8"/><path d="M20 10 L20 4" stroke="#795548" stroke-width="2.5" stroke-linecap="round"/></svg>',name:'Mango',sci:'Mangifera indica',desc:'National fruit of India, Pakistan, and the Philippines. Over 500 varieties exist.',tag:'Fruit',facts:{National_fruit:'India, Pakistan, Philippines',Cultivated:'4,000+ years',Varieties:'500+'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#f3e5f5"/><ellipse cx="20" cy="23" rx="11" ry="13" fill="#9c27b0" opacity=".85"/><ellipse cx="20" cy="23" rx="8" ry="10" fill="#7b1fa2" opacity=".7"/><path d="M20 8 L20 4" stroke="#388e3c" stroke-width="2" stroke-linecap="round"/></svg>',name:'Fig',sci:'Ficus carica',desc:'One of the first plants cultivated — 11,400 years ago. Each fig contains hundreds of flowers inside.',tag:'Fruit',facts:{Cultivated:'11,400 years ago',Inside:'Hundreds of tiny flowers',Sacred:'Christianity, Islam, Buddhism'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fff8e1"/><ellipse cx="20" cy="24" rx="13" ry="11" fill="#ff9800" opacity=".9"/><ellipse cx="20" cy="24" rx="10" ry="8" fill="#f57c00"/><path d="M13 12 Q16 6 20 8 Q24 10 25 16" stroke="#388e3c" stroke-width="1.5" fill="#8bc34a" opacity=".9"/></svg>',name:'Papaya',sci:'Carica papaya',desc:'Contains papain — an enzyme that breaks down protein. Goes from seed to fruit in 11 months.',tag:'Fruit',facts:{Enzyme:'Papain',Uses:'Meat tenderizer, digestive aid',Growth:'Seed to fruit in 11 months'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#fce4ec"/><ellipse cx="20" cy="22" rx="12" ry="13" fill="#ef5350" opacity=".9"/><ellipse cx="20" cy="18" rx="10" ry="11" fill="#c62828" opacity=".7"/><path d="M20 9 L20 4" stroke="#795548" stroke-width="2" stroke-linecap="round"/></svg>',name:'Pomegranate',sci:'Punica granatum',desc:'Contains 600+ seeds on average. One of the earliest cultivated fruits — since 3000 BCE.',tag:'Fruit',facts:{Seeds:'600+ per fruit',Cultivated:'Since 3000 BCE',Symbol:'Prosperity and fertility'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#e8f5e9"/><ellipse cx="20" cy="24" rx="14" ry="11" fill="#66bb6a" opacity=".9"/><path d="M8 22 L32 22" stroke="#2e7d32" stroke-width="1" opacity=".3"/><path d="M20 13 L20 6" stroke="#2e7d32" stroke-width="2.5" stroke-linecap="round"/></svg>',name:'Watermelon',sci:'Citrullus lanatus',desc:'92% water by weight. Native to northeast Africa.',tag:'Fruit',facts:{Water_content:'92%',Origin:'Northeast Africa',Seedless:'Triploid hybrids'}},
  {icon:'<svg viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#f3e5f5"/><circle cx="14" cy="22" r="8" fill="#9c27b0" opacity=".8"/><circle cx="22" cy="20" r="7" fill="#7b1fa2" opacity=".8"/><circle cx="18" cy="14" r="6" fill="#ab47bc" opacity=".8"/><path d="M20 8 L18 4" stroke="#795548" stroke-width="2" stroke-linecap="round"/></svg>',name:'Grapes',sci:'Vitis vinifera',desc:'Cultivated for 8,000 years. The oldest winery dates to 4100 BCE in Armenia.',tag:'Fruit',facts:{Cultivated:'8,000+ years',Oldest_winery:'4100 BCE, Armenia',Varieties:'10,000+'}},
  {icon:'🌸',name:'Cherry Blossom',sci:'Prunus serrulata',desc:'Symbol of impermanence in Japanese culture. Peak bloom lasts only 1-2 weeks.',tag:'Tree',facts:{Japan:'Symbol of mono no aware',Season:'Spring — 1-2 week peak bloom',Hanami:'Tradition of viewing blossoms'}},
  {icon:'🌹',name:'Rose',sci:'Rosa',desc:'Over 300 species and 30,000+ cultivars. One of the most cultivated plants in human history.',tag:'Flower',facts:{Species:'300+',Cultivars:'30,000+',Oldest_living:'1,000-year-old rose in Hildesheim, Germany'}},
  {icon:'🌻',name:'Sunflower',sci:'Helianthus annuus',desc:'Young sunflowers track the sun — called heliotropism. Each head contains up to 2,000 tiny seeds.',tag:'Flower',facts:{Heliotropism:'Young flowers track the sun',Seeds:'Up to 2,000 per head',Height:'Up to 9 metres (record)'}},
  {icon:'🌵',name:'Saguaro Cactus',sci:'Carnegiea gigantea',desc:'The iconic columnar cactus of the American Southwest. Can live 150-200 years.',tag:'Succulent',facts:{Lifespan:'150-200 years',Arms:'First arm grows at 70-75 years',Protected:'Illegal to damage in Arizona'}},
  {icon:'🪴',name:'Monstera',sci:'Monstera deliciosa',desc:'Its holes are called fenestrations and help leaves withstand heavy rainfall and wind in tropical forests.',tag:'Tropical',facts:{Holes_called:'Fenestrations',Origin:'Central America',Name:'"Monstera" from Latin for monstrous'}},
  {icon:'🎋',name:'Bamboo',sci:'Bambusoideae',desc:'The fastest-growing plant on Earth — can grow 91cm in a single day. Technically a grass, not a tree.',tag:'Grass',facts:{Growth:'Up to 91cm per day',Technically:'A grass, not a tree',Strength:'Stronger than steel by weight'}},
  {icon:'🌷',name:'Tulip',sci:'Tulipa',desc:'Caused the first recorded economic bubble — Tulip Mania in 1637 Holland. Bulbs traded for house prices.',tag:'Flower',facts:{Tulip_Mania:'1637 Netherlands economic bubble',Origin:'Central Asia',Varieties:'Over 3,000'}},
  {icon:'🍄',name:'Truffle',sci:'Tuber melanosporum',desc:'The most expensive food by weight — black truffles cost up to $3,000/kg. They are a type of fungus.',tag:'Fungus',facts:{Price:'Up to $3,000/kg',Found_by:'Trained pigs or dogs',Season:'Winter (Nov-Mar)'}},
  {icon:'🌾',name:'Wheat',sci:'Triticum aestivum',desc:'The crop that built civilisation — domesticated 10,000 years ago in the Fertile Crescent.',tag:'Grain',facts:{Domesticated:'10,000 years ago',Region:'Fertile Crescent',Annual_harvest:'800 million tonnes'}},
  {icon:'🍀',name:'Four-leaf Clover',sci:'Trifolium repens',desc:'Occurs in about 1 in 5,000 clovers. The extra leaf is caused by a recessive gene.',tag:'Plant',facts:{Probability:'1 in 5,000',Cause:'Recessive gene mutation',Record:'The most four-leaf clovers found: 166 in one hour'}},
],

// ─────────────────────────────────────────────────────────────────
// SYMBOLS
// ─────────────────────────────────────────────────────────────────
symbols: [
  {icon:'☯️',name:'Yin Yang',sci:'☯ U+262F',desc:'Taoist symbol of duality — opposing forces that are interconnected and interdependent.',tag:'Philosophy',facts:{Origin:'Ancient China',Concept:'Balance of opposing forces'}},
  {icon:'∞',name:'Infinity',sci:'∞ U+221E',desc:'Introduced by John Wallis in 1655. Based on the Roman numeral for 1,000.',tag:'Mathematics',facts:{Introduced:'John Wallis, 1655',Based_on:'Roman numeral M (1,000)'}},
  {icon:'☮️',name:'Peace Sign',sci:'☮ U+262E',desc:'Designed by Gerald Holtom in 1958 for the Campaign for Nuclear Disarmament.',tag:'Political',facts:{Designer:'Gerald Holtom',Year:'1958',Original:'Nuclear disarmament symbol'}},
  {icon:'⚕️',name:'Caduceus',sci:'⚕ U+2695',desc:'Medical symbol — staff of Hermes with two snakes. Often confused with the Rod of Asclepius (one snake).',tag:'Medicine',facts:{Correct_medical:'Rod of Asclepius (one snake)',Caduceus:'Hermes — commerce, not medicine',Common_error:'US military medicine adopted wrong symbol'}},
  {icon:'♾️',name:'Ouroboros',sci:'🐍→',desc:'A snake eating its own tail — one of the oldest symbols of infinity and cyclical renewal.',tag:'Ancient',facts:{Age:'Over 3,000 years',Origin:'Ancient Egypt',Meaning:'Infinity, cyclicality, self-reference'}},
  {icon:'☢️',name:'Radioactive',sci:'☢ U+2622',desc:'Designed in 1946 at UC Berkeley. Intentionally designed to look trefoil — striking but meaningless.',tag:'Science',facts:{Designed:'1946, UC Berkeley',Intent:'Striking and meaningless outside context',ISO:'Defined in ISO 361'}},
  {icon:'☣️',name:'Biohazard',sci:'☣ U+2623',desc:'Designed in 1966 at Dow Chemical. Chosen for being memorable and having no prior associations.',tag:'Science',facts:{Designed:'1966, Dow Chemical',Choice_criteria:'Memorable, meaningless, unique'}},
  {icon:'⚛️',name:'Atom Symbol',sci:'⚛ U+269B',desc:'Represents atomic energy and nuclear science.',tag:'Science',facts:{Represents:'Atomic energy, nuclear physics',Nucleus:'Central dot represents nucleus'}},
  {icon:'⚖️',name:'Scales of Justice',sci:'⚖ U+2696',desc:'Ancient symbol of justice. Used in Egypt to weigh the soul against a feather after death.',tag:'Law',facts:{Ancient_Egypt:'Weighing of the heart ceremony',Libra:'Also the Libra zodiac symbol'}},
  {icon:'🔱',name:'Trident',sci:'🔱 U+1F531',desc:'Weapon of Poseidon/Neptune and Shiva. Represents power over the sea, land, and sky.',tag:'Mythology',facts:{Poseidon:'Greek god of the sea',Shiva:'Hindu god — holds trishula'}},
  {icon:'⚜️',name:'Fleur-de-Lis',sci:'⚜ U+269C',desc:'Stylized lily representing French royalty. Also used by the Boy Scouts and New Orleans Saints.',tag:'Heraldry',facts:{Represents:'French royalty',Also:'Boy Scouts, New Orleans Saints'}},
  {icon:'🧿',name:'Nazar',sci:'🧿 U+1F9FF',desc:'The evil eye amulet. Common across Turkey, Greece, Iran, and the Middle East for protection.',tag:'Cultural',facts:{Cultures:'Turkey, Greece, Iran, Levant',Purpose:'Protection from evil eye'}},
  {icon:'☸️',name:'Dharma Wheel',sci:'☸ U+2638',desc:'The Dharmachakra — symbol of Buddhism. Eight spokes represent the Noble Eightfold Path.',tag:'Religion',facts:{Spokes:'8 — Noble Eightfold Path',Buddhism:'Central symbol',Age:'Over 2,500 years'}},
  {icon:'✡️',name:'Star of David',sci:'✡ U+2721',desc:'The hexagram — symbol of Judaism. Became a Jewish symbol in the Middle Ages.',tag:'Religion',facts:{Hebrew:'Magen David (Shield of David)',Medieval:'Became Jewish symbol in Middle Ages'}},
  {icon:'☦️',name:'Orthodox Cross',sci:'☦ U+2626',desc:'The Russian Orthodox cross with three horizontal bars. The lower bar is slanted to represent the footrest.',tag:'Religion',facts:{Lower_bar:'Represents footrest of the cross',Slant:'One end up (thief who repented), one down'}},
  {icon:'🔰',name:'Wakaba Mark',sci:'🔰 U+1F530',desc:'A Japanese symbol for new drivers — required on cars in the first year of holding a licence. Shaped like a young leaf.',tag:'Japanese',facts:{Japan:'Required for new drivers',Shape:'Young leaf (wakaba)',Meaning:'Inexperienced, new'}},
],

// ─────────────────────────────────────────────────────────────────
// EMOJI
// ─────────────────────────────────────────────────────────────────
emoji: [
  {icon:'😂',name:'Face with Tears of Joy',sci:'U+1F602',desc:'The most used emoji globally. Oxford named it Word of the Year 2015.',tag:'Smileys',facts:{Rank:'#1 most used emoji',Oxford:'Word of the Year 2015'}},
  {icon:'🥺',name:'Pleading Face',sci:'U+1F97A',desc:'Large puppy-dog eyes. Consistently one of the top-5 most used emoji since release.',tag:'Smileys',facts:{Added:'Unicode 11.0 (2018)',Use:'Begging, cuteness, sadness'}},
  {icon:'💀',name:'Skull',sci:'U+1F480',desc:'Gen Z uses it to mean "dead from laughing" — replacing 😂 in many contexts.',tag:'Smileys',facts:{Gen_Z_use:'"Im literally dead" (laughter)',Traditional:'Death, danger'}},
  {icon:'🗿',name:'Moai',sci:'U+1F5FF',desc:'Easter Island statue emoji. Internet shorthand for a stoic, unimpressed, or speechless reaction.',tag:'Objects',facts:{Real:'Moai statues, Easter Island',Meme:'Stoic / unimpressed reaction'}},
  {icon:'🤌',name:'Italian Hand Pinch',sci:'U+1F90C',desc:'The classic Italian gesture meaning "what do you want?" Added in 2020.',tag:'Hands',facts:{Added:'Unicode 13.0 (2020)',Gesture:'Italian "che vuoi?" (what do you want?)'}},
  {icon:'🫠',name:'Melting Face',sci:'U+1FAE0',desc:'Added in 2021. Used to express embarrassment, awkwardness, or feeling overwhelmed.',tag:'Smileys',facts:{Added:'Unicode 14.0 (2021)',Use:'Embarrassment, "im dying", extreme heat'}},
  {icon:'🪄',name:'Magic Wand',sci:'U+1FA84',desc:'Added in 2020. Used for magic, making things appear, or the TikTok duet feature.',tag:'Objects',facts:{Added:'Unicode 13.0 (2020)',TikTok:'Used for duet/stitch button'}},
  {icon:'🧋',name:'Bubble Tea',sci:'U+1F9CB',desc:'Added in 2020 after years of requests. Originated in Taiwan in the 1980s.',tag:'Food',facts:{Added:'Unicode 13.0 (2020)',Origin:'Taiwan, 1980s'}},
  {icon:'🦕',name:'Sauropod',sci:'U+1F995',desc:'The long-necked dinosaur emoji, representing Brachiosaurus or similar sauropods.',tag:'Animals',facts:{Added:'Unicode 10.0 (2017)',Type:'Sauropod dinosaur'}},
  {icon:'🌚',name:'New Moon Face',sci:'U+1F31A',desc:'Used ironically to indicate dark humor, uncomfortable situations, or lurking.',tag:'Smileys',facts:{Use:'Dark humor, lurking, uncomfortable silence',Irony:'Often paired with sus situations'}},
  {icon:'💅',name:'Nail Polish',sci:'U+1F485',desc:'Originally just for beauty. Now used to express unbothered confidence or "not my problem".',tag:'Gestures',facts:{Evolved:'From beauty to "unbothered" attitude',Pop_culture:'Popularized by drag culture'}},
  {icon:'🫡',name:'Saluting Face',sci:'U+1FAE1',desc:'Added in 2022. Used for respect, compliance, or military-style affirmation.',tag:'Smileys',facts:{Added:'Unicode 14.0 (2022)',Use:'Respect, "yes sir", compliance'}},
  {icon:'🪸',name:'Coral',sci:'U+1FAB8',desc:'Added in 2022 partly to raise awareness of coral reef bleaching due to climate change.',tag:'Nature',facts:{Added:'Unicode 14.0 (2022)',Purpose:'Partly climate awareness'}},
  {icon:'🐉',name:'Dragon',sci:'U+1F409',desc:'Represents mythological dragons. Appears in over 20 different forms across emoji platforms.',tag:'Mythological',facts:{Platforms:'Looks wildly different across OS',Fantasy:'DnD, Game of Thrones associations'}},
  {icon:'🎭',name:'Performing Arts',sci:'U+1F3AD',desc:'Comedy and tragedy masks — the classic symbol of theatre dating back to ancient Greece.',tag:'Arts',facts:{Ancient_Greece:'Thalia (comedy) and Melpomene (tragedy)',Use:'Theatre, drama, performance'}},
],

// ─────────────────────────────────────────────────────────────────
// MATH
// ─────────────────────────────────────────────────────────────────
math: [
  {icon:'π',name:'Pi',sci:'π ≈ 3.14159...',desc:'The ratio of a circle\'s circumference to its diameter. Infinite, non-repeating.',tag:'Constant',facts:{Digits_computed:'Over 100 trillion',Pi_Day:'March 14 (3/14)',Memorized_record:'70,030 digits by Rajveer Meena'}},
  {icon:'φ',name:'Golden Ratio',sci:'φ ≈ 1.61803...',desc:'A proportion found throughout nature, art, and architecture. Pleasing to the human eye.',tag:'Constant',facts:{Value:'(1 + √5) / 2',Found_in:'Nautilus shells, Parthenon, human face'}},
  {icon:'e',name:"Euler's Number",sci:'e ≈ 2.71828...',desc:'The base of natural logarithms. Fundamental to calculus and compound interest.',tag:'Constant',facts:{Discovered:'Euler, 18th century',Applications:'Compound interest, exponential growth'}},
  {icon:'∑',name:'Sigma',sci:'∑ U+2211',desc:'Capital Greek sigma denoting summation. Σ(1 to n) means "sum all values from 1 to n".',tag:'Operation',facts:{Greek:'Capital sigma',Use:'Summation notation'}},
  {icon:'∫',name:'Integral',sci:'∫ U+222B',desc:'Symbol for integration — the continuous sum. Introduced by Leibniz in 1675 as an elongated S (summa).',tag:'Calculus',facts:{Leibniz:'1675 — elongated S for "summa"',Newton:'Used different notation (fluxions)'}},
  {icon:'√',name:'Square Root',sci:'√ U+221A',desc:'The radical sign. Introduced in 1525 by Christoph Rudolff — possibly from the letter "r" (radix).',tag:'Operation',facts:{Introduced:'Christoph Rudolff, 1525',Origin:'Possibly from "r" in "radix" (root)'}},
  {icon:'∞',name:'Infinity',sci:'∞ U+221E',desc:'There are different sizes of infinity. Georg Cantor proved some infinities are larger than others.',tag:'Concept',facts:{Cantor:'Proved different sizes of infinity',Introduced:'John Wallis, 1655',Aleph:'ℵ₀ is countable infinity'}},
  {icon:'Δ',name:'Delta',sci:'Δ U+0394',desc:'Used to represent change or difference. ΔT means change in temperature.',tag:'Symbol',facts:{Use:'Change, difference, discriminant',Physics:'ΔE, ΔT, Δx common in equations'}},
  {icon:'≈',name:'Approximately Equal',sci:'≈ U+2248',desc:'Used when a value is close but not exactly equal. π ≈ 3.14 is a classic example.',tag:'Symbol',facts:{Unicode:'U+2248',Also:'~ (tilde) used informally'}},
  {icon:'∅',name:'Empty Set',sci:'∅ U+2205',desc:'The set with no elements. Introduced by André Weil in 1939, inspired by the Norwegian letter Ø.',tag:'Set Theory',facts:{Introduced:'André Weil, 1939',Inspired_by:'Norwegian letter Ø'}},
  {icon:'i',name:'Imaginary Unit',sci:'i = √-1',desc:'The square root of -1. Opens up the complex plane. Used in quantum mechanics and electrical engineering.',tag:'Complex Numbers',facts:{Coined:'René Descartes, 1637 (derogatorily)',Euler:'Made the notation standard'}},
  {icon:'∇',name:'Nabla',sci:'∇ U+2207',desc:'The del or nabla operator. Used for gradient, divergence, and curl in vector calculus.',tag:'Calculus',facts:{Name:'Nabla — from ancient harp shape',Operations:'Gradient, divergence, curl, Laplacian'}},
  {icon:'⊕',name:'XOR / Direct Sum',sci:'⊕ U+2295',desc:'Exclusive OR in logic; direct sum in algebra. Two inputs are different → true.',tag:'Logic',facts:{Logic:'True when inputs differ',Algebra:'Direct sum of vector spaces'}},
  {icon:'∀',name:'Universal Quantifier',sci:'∀ U+2200',desc:'Means "for all" in logic. ∀x: x²≥0 means "for all x, x squared is non-negative".',tag:'Logic',facts:{Reads:'"For all" or "for every"',Introduced:'Gerhard Gentzen, 1935'}},
  {icon:'∃',name:'Existential Quantifier',sci:'∃ U+2203',desc:'Means "there exists" in logic. ∃x: x²=4 means "there exists an x where x²=4".',tag:'Logic',facts:{Reads:'"There exists"',Introduced:'Giuseppe Peano, 1897'}},
],

// ─────────────────────────────────────────────────────────────────
// PERIODIC TABLE (all 118 elements)
// ─────────────────────────────────────────────────────────────────
elements: [
  {n:1,sym:'H',name:'Hydrogen',mass:'1.008',cat:'nonmetal',desc:'Lightest and most abundant element in the universe.'},
  {n:2,sym:'He',name:'Helium',mass:'4.003',cat:'noble',desc:'Second lightest element. Used in balloons and cryogenics.'},
  {n:3,sym:'Li',name:'Lithium',mass:'6.941',cat:'alkali',desc:'Lightest metal. Used in batteries and mood-stabilizing drugs.'},
  {n:4,sym:'Be',name:'Beryllium',mass:'9.012',cat:'alkaline',desc:'Lightweight and stiff. Used in aerospace and X-ray windows.'},
  {n:5,sym:'B',name:'Boron',mass:'10.81',cat:'metalloid',desc:'Essential for plant growth. Used in borosilicate glass.'},
  {n:6,sym:'C',name:'Carbon',mass:'12.011',cat:'nonmetal',desc:'Basis of all known life. Forms diamonds, graphite, and graphene.'},
  {n:7,sym:'N',name:'Nitrogen',mass:'14.007',cat:'nonmetal',desc:'Makes up 78% of Earth\'s atmosphere.'},
  {n:8,sym:'O',name:'Oxygen',mass:'15.999',cat:'nonmetal',desc:'21% of Earth\'s atmosphere. Essential for aerobic life.'},
  {n:9,sym:'F',name:'Fluorine',mass:'18.998',cat:'halogen',desc:'Most electronegative element. Extremely reactive.'},
  {n:10,sym:'Ne',name:'Neon',mass:'20.180',cat:'noble',desc:'Used in neon signs. Discovered in 1898.'},
  {n:11,sym:'Na',name:'Sodium',mass:'22.990',cat:'alkali',desc:'Reacts violently with water. Essential for nerve function.'},
  {n:12,sym:'Mg',name:'Magnesium',mass:'24.305',cat:'alkaline',desc:'Used in lightweight alloys. Essential for chlorophyll.'},
  {n:13,sym:'Al',name:'Aluminium',mass:'26.982',cat:'post-transition',desc:'Most abundant metal in Earth\'s crust.'},
  {n:14,sym:'Si',name:'Silicon',mass:'28.086',cat:'metalloid',desc:'Foundation of computer chips and solar panels.'},
  {n:15,sym:'P',name:'Phosphorus',mass:'30.974',cat:'nonmetal',desc:'Essential for DNA, ATP, and bones.'},
  {n:16,sym:'S',name:'Sulfur',mass:'32.06',cat:'nonmetal',desc:'Used in sulfuric acid production. Smells like rotten eggs.'},
  {n:17,sym:'Cl',name:'Chlorine',mass:'35.45',cat:'halogen',desc:'Used to purify water. First chemical weapon in WWI.'},
  {n:18,sym:'Ar',name:'Argon',mass:'39.948',cat:'noble',desc:'Third most abundant gas in Earth\'s atmosphere.'},
  {n:19,sym:'K',name:'Potassium',mass:'39.098',cat:'alkali',desc:'Symbol K from Latin kalium. Essential for muscle function.'},
  {n:20,sym:'Ca',name:'Calcium',mass:'40.078',cat:'alkaline',desc:'Most abundant metal in the human body — in bones and teeth.'},
  {n:21,sym:'Sc',name:'Scandium',mass:'44.956',cat:'transition',desc:'Used in high-intensity lights and aerospace alloys.'},
  {n:22,sym:'Ti',name:'Titanium',mass:'47.867',cat:'transition',desc:'Strong as steel but 45% lighter. Biocompatible.'},
  {n:23,sym:'V',name:'Vanadium',mass:'50.942',cat:'transition',desc:'Used in high-strength steel alloys.'},
  {n:24,sym:'Cr',name:'Chromium',mass:'51.996',cat:'transition',desc:'Used to make stainless steel. Gives rubies their red color.'},
  {n:25,sym:'Mn',name:'Manganese',mass:'54.938',cat:'transition',desc:'Essential for photosynthesis and enzyme function.'},
  {n:26,sym:'Fe',name:'Iron',mass:'55.845',cat:'transition',desc:'Most produced metal worldwide. Core of Earth is iron-nickel.'},
  {n:27,sym:'Co',name:'Cobalt',mass:'58.933',cat:'transition',desc:'Used in lithium-ion batteries and blue pigment.'},
  {n:28,sym:'Ni',name:'Nickel',mass:'58.693',cat:'transition',desc:'Used in stainless steel and coins.'},
  {n:29,sym:'Cu',name:'Copper',mass:'63.546',cat:'transition',desc:'One of the first metals used by humans — 10,000 years ago.'},
  {n:30,sym:'Zn',name:'Zinc',mass:'65.38',cat:'transition',desc:'Essential nutrient. Used to galvanize steel.'},
  {n:31,sym:'Ga',name:'Gallium',mass:'69.723',cat:'post-transition',desc:'Melts in your hand (29.76°C). Used in semiconductors.'},
  {n:32,sym:'Ge',name:'Germanium',mass:'72.630',cat:'metalloid',desc:'Predicted by Mendeleev before discovery. Used in fiber optics.'},
  {n:33,sym:'As',name:'Arsenic',mass:'74.922',cat:'metalloid',desc:'Historic poison. Used in semiconductors and wood preservatives.'},
  {n:34,sym:'Se',name:'Selenium',mass:'78.971',cat:'nonmetal',desc:'Essential micronutrient. Used in solar cells and photocopiers.'},
  {n:35,sym:'Br',name:'Bromine',mass:'79.904',cat:'halogen',desc:'One of two liquid elements at room temperature.'},
  {n:36,sym:'Kr',name:'Krypton',mass:'83.798',cat:'noble',desc:'Used in high-performance lighting. Not just from Superman.'},
  {n:37,sym:'Rb',name:'Rubidium',mass:'85.468',cat:'alkali',desc:'Used in atomic clocks. Reacts violently with water.'},
  {n:38,sym:'Sr',name:'Strontium',mass:'87.62',cat:'alkaline',desc:'Gives fireworks their red color.'},
  {n:39,sym:'Y',name:'Yttrium',mass:'88.906',cat:'transition',desc:'Named after Ytterby, Sweden — along with Yb, Er, Tb.'},
  {n:40,sym:'Zr',name:'Zirconium',mass:'91.224',cat:'transition',desc:'Used in nuclear reactors and cubic zirconia gems.'},
  {n:41,sym:'Nb',name:'Niobium',mass:'92.906',cat:'transition',desc:'Used in superconducting magnets and steel alloys.'},
  {n:42,sym:'Mo',name:'Molybdenum',mass:'95.96',cat:'transition',desc:'Has the third-highest melting point of any element.'},
  {n:43,sym:'Tc',name:'Technetium',mass:'98',cat:'transition',desc:'First artificially produced element. Radioactive.'},
  {n:44,sym:'Ru',name:'Ruthenium',mass:'101.07',cat:'transition',desc:'Used in hard disk coatings and solar cells.'},
  {n:45,sym:'Rh',name:'Rhodium',mass:'102.91',cat:'transition',desc:'Most expensive naturally occurring metal. Used in catalytic converters.'},
  {n:46,sym:'Pd',name:'Palladium',mass:'106.42',cat:'transition',desc:'Used in catalytic converters and hydrogen purification.'},
  {n:47,sym:'Ag',name:'Silver',mass:'107.87',cat:'transition',desc:'Best electrical conductor of all elements.'},
  {n:48,sym:'Cd',name:'Cadmium',mass:'112.41',cat:'transition',desc:'Used in rechargeable NiCd batteries. Toxic.'},
  {n:49,sym:'In',name:'Indium',mass:'114.82',cat:'post-transition',desc:'Used in touchscreen coatings (ITO).'},
  {n:50,sym:'Sn',name:'Tin',mass:'118.71',cat:'post-transition',desc:'Symbol Sn from Latin stannum. Used in soldering and cans.'},
  {n:51,sym:'Sb',name:'Antimony',mass:'121.76',cat:'metalloid',desc:'Used in flame retardants and semiconductor devices.'},
  {n:52,sym:'Te',name:'Tellurium',mass:'127.60',cat:'metalloid',desc:'One of the rarest stable elements in Earth\'s crust.'},
  {n:53,sym:'I',name:'Iodine',mass:'126.90',cat:'halogen',desc:'Essential for thyroid function. Purplish-black solid.'},
  {n:54,sym:'Xe',name:'Xenon',mass:'131.29',cat:'noble',desc:'Used in flash lamps, anesthesia, and ion propulsion engines.'},
  {n:55,sym:'Cs',name:'Cesium',mass:'132.91',cat:'alkali',desc:'Used in atomic clocks — the most accurate timekeepers.'},
  {n:56,sym:'Ba',name:'Barium',mass:'137.33',cat:'alkaline',desc:'Used in barium meals for GI tract X-rays.'},
  {n:57,sym:'La',name:'Lanthanum',mass:'138.91',cat:'lanthanide',desc:'Used in camera and telescope lenses.'},
  {n:58,sym:'Ce',name:'Cerium',mass:'140.12',cat:'lanthanide',desc:'Most abundant rare earth element. Used in catalytic converters.'},
  {n:59,sym:'Pr',name:'Praseodymium',mass:'140.91',cat:'lanthanide',desc:'Used in aircraft engines and strong magnets.'},
  {n:60,sym:'Nd',name:'Neodymium',mass:'144.24',cat:'lanthanide',desc:'Used in the strongest permanent magnets (Nd₂Fe₁₄B).'},
  {n:61,sym:'Pm',name:'Promethium',mass:'145',cat:'lanthanide',desc:'Radioactive. Only naturally occurring via uranium decay.'},
  {n:62,sym:'Sm',name:'Samarium',mass:'150.36',cat:'lanthanide',desc:'Used in nuclear reactor control rods.'},
  {n:63,sym:'Eu',name:'Europium',mass:'151.96',cat:'lanthanide',desc:'Used in euro banknote fluorescent ink.'},
  {n:64,sym:'Gd',name:'Gadolinium',mass:'157.25',cat:'lanthanide',desc:'Used as MRI contrast agent.'},
  {n:65,sym:'Tb',name:'Terbium',mass:'158.93',cat:'lanthanide',desc:'Named after Ytterby, Sweden. Used in green phosphors.'},
  {n:66,sym:'Dy',name:'Dysprosium',mass:'162.50',cat:'lanthanide',desc:'Used in neodymium magnets for electric vehicles.'},
  {n:67,sym:'Ho',name:'Holmium',mass:'164.93',cat:'lanthanide',desc:'Highest magnetic moment of any element.'},
  {n:68,sym:'Er',name:'Erbium',mass:'167.26',cat:'lanthanide',desc:'Used in fiber optic signal amplifiers.'},
  {n:69,sym:'Tm',name:'Thulium',mass:'168.93',cat:'lanthanide',desc:'Used in portable X-ray devices.'},
  {n:70,sym:'Yb',name:'Ytterbium',mass:'173.04',cat:'lanthanide',desc:'Used in atomic clocks and fiber lasers.'},
  {n:71,sym:'Lu',name:'Lutetium',mass:'174.97',cat:'lanthanide',desc:'Densest rare earth element.'},
  {n:72,sym:'Hf',name:'Hafnium',mass:'178.49',cat:'transition',desc:'Used in nuclear control rods and microchips.'},
  {n:73,sym:'Ta',name:'Tantalum',mass:'180.95',cat:'transition',desc:'Used in capacitors for mobile phones.'},
  {n:74,sym:'W',name:'Tungsten',mass:'183.84',cat:'transition',desc:'Highest melting point of all elements: 3,422°C.'},
  {n:75,sym:'Re',name:'Rhenium',mass:'186.21',cat:'transition',desc:'Second highest melting point. Used in jet engine turbines.'},
  {n:76,sym:'Os',name:'Osmium',mass:'190.23',cat:'transition',desc:'Densest naturally occurring element.'},
  {n:77,sym:'Ir',name:'Iridium',mass:'192.22',cat:'transition',desc:'Most corrosion-resistant element. Found in K-Pg boundary.'},
  {n:78,sym:'Pt',name:'Platinum',mass:'195.08',cat:'transition',desc:'Used in catalytic converters, jewelry, and cancer drugs.'},
  {n:79,sym:'Au',name:'Gold',mass:'196.97',cat:'transition',desc:'Symbol Au from Latin aurum. Excellent conductor, never corrodes.'},
  {n:80,sym:'Hg',name:'Mercury',mass:'200.59',cat:'transition',desc:'Only metal that is liquid at room temperature.'},
  {n:81,sym:'Tl',name:'Thallium',mass:'204.38',cat:'post-transition',desc:'Highly toxic. Once used as rat poison and murderer\'s choice.'},
  {n:82,sym:'Pb',name:'Lead',mass:'207.2',cat:'post-transition',desc:'Symbol Pb from Latin plumbum. Dense, toxic, once used in paint.'},
  {n:83,sym:'Bi',name:'Bismuth',mass:'208.98',cat:'post-transition',desc:'Colorful oxide crystals. Used in Pepto-Bismol.'},
  {n:84,sym:'Po',name:'Polonium',mass:'209',cat:'post-transition',desc:'Discovered by Marie Curie. Named after Poland.'},
  {n:85,sym:'At',name:'Astatine',mass:'210',cat:'halogen',desc:'Rarest naturally occurring element on Earth.'},
  {n:86,sym:'Rn',name:'Radon',mass:'222',cat:'noble',desc:'Radioactive gas that seeps from ground. Second leading cause of lung cancer.'},
  {n:87,sym:'Fr',name:'Francium',mass:'223',cat:'alkali',desc:'Most unstable naturally occurring element.'},
  {n:88,sym:'Ra',name:'Radium',mass:'226',cat:'alkaline',desc:'Discovered by Marie Curie. Used to glow-in-the-dark watch hands until 1968.'},
  {n:89,sym:'Ac',name:'Actinium',mass:'227',cat:'actinide',desc:'Gives its name to the actinide series. Highly radioactive.'},
  {n:90,sym:'Th',name:'Thorium',mass:'232.04',cat:'actinide',desc:'Potential future nuclear fuel — more abundant than uranium.'},
  {n:91,sym:'Pa',name:'Protactinium',mass:'231.04',cat:'actinide',desc:'Highly radioactive. Decays into actinium.'},
  {n:92,sym:'U',name:'Uranium',mass:'238.03',cat:'actinide',desc:'Fuel for nuclear reactors. Named after planet Uranus.'},
  {n:93,sym:'Np',name:'Neptunium',mass:'237',cat:'actinide',desc:'First synthetic transuranic element.'},
  {n:94,sym:'Pu',name:'Plutonium',mass:'244',cat:'actinide',desc:'Used in nuclear weapons and RTG power sources.'},
  {n:95,sym:'Am',name:'Americium',mass:'243',cat:'actinide',desc:'Used in household smoke detectors.'},
  {n:96,sym:'Cm',name:'Curium',mass:'247',cat:'actinide',desc:'Named after Marie and Pierre Curie.'},
  {n:97,sym:'Bk',name:'Berkelium',mass:'247',cat:'actinide',desc:'Named after Berkeley, California.'},
  {n:98,sym:'Cf',name:'Californium',mass:'251',cat:'actinide',desc:'Used in cancer treatment and nuclear startup detectors.'},
  {n:99,sym:'Es',name:'Einsteinium',mass:'252',cat:'actinide',desc:'Named after Albert Einstein. Discovered in H-bomb debris.'},
  {n:100,sym:'Fm',name:'Fermium',mass:'257',cat:'actinide',desc:'Named after Enrico Fermi. Discovered in Ivy Mike H-bomb test.'},
  {n:101,sym:'Md',name:'Mendelevium',mass:'258',cat:'actinide',desc:'Named after Dmitri Mendeleev, creator of the periodic table.'},
  {n:102,sym:'No',name:'Nobelium',mass:'259',cat:'actinide',desc:'Named after Alfred Nobel.'},
  {n:103,sym:'Lr',name:'Lawrencium',mass:'266',cat:'actinide',desc:'Named after Ernest Lawrence, inventor of the cyclotron.'},
  {n:104,sym:'Rf',name:'Rutherfordium',mass:'267',cat:'transition',desc:'First transactinide element. Named after Ernest Rutherford.'},
  {n:105,sym:'Db',name:'Dubnium',mass:'268',cat:'transition',desc:'Named after Dubna, Russia (JINR research institute).'},
  {n:106,sym:'Sg',name:'Seaborgium',mass:'269',cat:'transition',desc:'Named after Glenn Seaborg (while he was still alive).'},
  {n:107,sym:'Bh',name:'Bohrium',mass:'270',cat:'transition',desc:'Named after Niels Bohr.'},
  {n:108,sym:'Hs',name:'Hassium',mass:'277',cat:'transition',desc:'Named after Hesse, Germany.'},
  {n:109,sym:'Mt',name:'Meitnerium',mass:'278',cat:'transition',desc:'Named after Lise Meitner, physicist who discovered nuclear fission.'},
  {n:110,sym:'Ds',name:'Darmstadtium',mass:'281',cat:'transition',desc:'Named after Darmstadt, Germany (GSI Helmholtz Centre).'},
  {n:111,sym:'Rg',name:'Roentgenium',mass:'282',cat:'transition',desc:'Named after Wilhelm Röntgen, discoverer of X-rays.'},
  {n:112,sym:'Cn',name:'Copernicium',mass:'285',cat:'transition',desc:'Named after Nicolaus Copernicus.'},
  {n:113,sym:'Nh',name:'Nihonium',mass:'286',cat:'post-transition',desc:'Named after Japan (Nihon). First element discovered in Asia.'},
  {n:114,sym:'Fl',name:'Flerovium',mass:'289',cat:'post-transition',desc:'Named after Flerov Laboratory, Dubna.'},
  {n:115,sym:'Mc',name:'Moscovium',mass:'290',cat:'post-transition',desc:'Named after Moscow Oblast, Russia.'},
  {n:116,sym:'Lv',name:'Livermorium',mass:'293',cat:'post-transition',desc:'Named after Lawrence Livermore National Laboratory.'},
  {n:117,sym:'Ts',name:'Tennessine',mass:'294',cat:'halogen',desc:'Named after Tennessee (Oak Ridge, Vanderbilt, UTK).'},
  {n:118,sym:'Og',name:'Oganesson',mass:'294',cat:'noble',desc:'Heaviest known element. Named after Yuri Oganessian (while alive).'},
],

}; // end DICT_EXTRA_DATA

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Extended Dictionary Data (Part 2)
//  More words, animals, space, history, food, music, architecture
// ═══════════════════════════════════════════════════════════════════

(function(){
  if (typeof DICT_DATA === 'undefined') return;
  if (!DICT_DATA.animals)   DICT_DATA.animals   = [];
  if (!DICT_DATA.space)     DICT_DATA.space     = [];
  if (!DICT_DATA.history)   DICT_DATA.history   = [];
  if (!DICT_DATA.food)      DICT_DATA.food      = [];
  if (!DICT_DATA.music)     DICT_DATA.music     = [];
  if (!DICT_DATA.body)      DICT_DATA.body      = [];
  if (!DICT_DATA.geography) DICT_DATA.geography = [];
  if (!DICT_DATA.tech)      DICT_DATA.tech      = [];
  if (!DICT_DATA.weather)   DICT_DATA.weather   = [];

  Object.keys(DICT_EXTRA_DATA2).forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat]=[];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_EXTRA_DATA2[cat]||[]);
  })();

  // Add new category buttons to dictionary sidebar
  const sidebar = document.querySelector('#dcat-elements')?.parentElement;
  if(sidebar && !document.getElementById('dcat-animals')){
    const cats = [
      {id:'animals',   label:'🦁 Animals'},
      {id:'space',     label:'🚀 Space'},
      {id:'history',   label:'📜 History'},
      {id:'food',      label:'🍕 Food'},
      {id:'music',     label:'🎵 Music'},
      {id:'body',      label:'🫀 Human Body'},
      {id:'geography', label:'🌍 Geography'},
      {id:'tech',      label:'💻 Technology'},
      {id:'weather',   label:'⛅ Weather'},
    ];
    cats.forEach(cat=>{
      const btn = document.createElement('button');
      btn.id = 'dcat-'+cat.id;
      btn.style.cssText='width:100%;padding:9px 14px;border:none;border-left:3px solid transparent;background:transparent;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;font-family:Outfit,sans-serif';
      btn.textContent = cat.label;
      btn.onclick = function(){ dictSetCat(cat.id, this); };
      sidebar.appendChild(btn);
    });
  }
});

const DICT_EXTRA_DATA2 = {

// ─────────────────────────────────────────────────────────────────
// MORE WORDS
// ─────────────────────────────────────────────────────────────────
words: [
  {icon:'🌑',name:'Absquatulate',sci:'v.',desc:'To leave abruptly or secretly. A 19th-century American slang word that deserves a comeback.',tag:'Archaic',facts:{Era:'19th century American slang',Meaning:'To flee suddenly'}},
  {icon:'🎭',name:'Accismus',sci:'n.',desc:'Pretending to refuse something you actually want. Playing hard to get is accismus.',tag:'Rhetoric',facts:{Greek:'Feigned refusal',Example:'Refusing a compliment while secretly wanting it'}},
  {icon:'🌊',name:'Agastopia',sci:'n.',desc:'Admiration of a particular part of someone\'s body. From the Dictionary of Obscure Sorrows.',tag:'Coined',facts:{Origin:'Dictionary of Obscure Sorrows'}},
  {icon:'🔮',name:'Agelast',sci:'n.',desc:'A person who never laughs. From Greek "a-" (not) + "gelaein" (to laugh).',tag:'Greek',facts:{Origin:'Greek — not laughing',Rabelais:'Used by François Rabelais'}},
  {icon:'💡',name:'Aglet',sci:'n.',desc:'The small plastic or metal tip at the end of a shoelace. You\'ve seen thousands and never knew its name.',tag:'English',facts:{Purpose:'Prevents lace from fraying',Material:'Usually plastic or metal'}},
  {icon:'🌿',name:'Aleatoric',sci:'adj.',desc:'Depending on chance or random events. Aleatoric music incorporates randomness into composition.',tag:'Music/Philosophy',facts:{Origin:'Latin "alea" (dice)',Music:'John Cage pioneered aleatoric music'}},
  {icon:'✨',name:'Alexipharmic',sci:'adj.',desc:'Acting as an antidote to poison. A word that sounds like magic.',tag:'Medicine',facts:{Origin:'Greek "alexein" (to ward off) + "pharmakon" (poison)'}},
  {icon:'🎵',name:'Anfractuous',sci:'adj.',desc:'Sinuous and full of twists and turns. Describes a winding road or a complicated argument.',tag:'English',facts:{Origin:'Latin "anfractus" (a bending)'}},
  {icon:'🧠',name:'Anhedonia',sci:'n.',desc:'The inability to feel pleasure. A core symptom of depression and other conditions.',tag:'Psychology',facts:{Greek:'Without pleasure',Depression:'Key diagnostic symptom',Treatment:'Often responds to medication'}},
  {icon:'🌙',name:'Antinomy',sci:'n.',desc:'A contradiction between two reasonable conclusions. Kant used it to describe limits of reason.',tag:'Philosophy',facts:{Kant:'Central to Kantian philosophy',Example:'Free will vs determinism'}},
  {icon:'🔥',name:'Apodyopsis',sci:'n.',desc:'The act of mentally undressing someone. There is literally a word for this.',tag:'Coined',facts:{Origin:'Greek roots',Type:'Obscure vocabulary'}},
  {icon:'⚡',name:'Apophenia',sci:'n.',desc:'The tendency to perceive connections between unrelated things. Seeing faces in clouds is apophenia.',tag:'Psychology',facts:{Coined:'Klaus Conrad, 1958',Related:'Pareidolia (faces in objects)',Can_indicate:'Schizophrenia in extreme cases'}},
  {icon:'🌺',name:'Aprosexia',sci:'n.',desc:'Inability to concentrate. Chronic difficulty with sustained attention.',tag:'Medicine',facts:{Related:'ADHD symptoms',Greek:'Without attention'}},
  {icon:'💎',name:'Arboreal',sci:'adj.',desc:'Relating to or living in trees. Arboreal animals include monkeys, sloths, and many birds.',tag:'Biology',facts:{Examples:'Monkeys, sloths, koalas, chameleons',Opposite:'Terrestrial (ground-dwelling)'}},
  {icon:'🎨',name:'Arcadian',sci:'adj.',desc:'Relating to an idealized simple rural life. From Arcadia — a region of ancient Greece idealised as a paradise.',tag:'Literary',facts:{Region:'Ancient Greece — Arcadia',Use:'Pastoral paradise, simple bliss'}},
  {icon:'🌊',name:'Arenicolous',sci:'adj.',desc:'Living or burrowing in sand. Many beach and desert organisms are arenicolous.',tag:'Biology',facts:{Origin:'Latin "arena" (sand)',Examples:'Sand crabs, mole crabs, lugworms'}},
  {icon:'🔮',name:'Armillary',sci:'adj.',desc:'Relating to rings or bracelets. An armillary sphere is a model of the celestial sphere from ancient astronomy.',tag:'Astronomy',facts:{Armillary_sphere:'Ancient astronomical instrument',Use:'Modeled celestial equator and ecliptic'}},
  {icon:'💡',name:'Arvo',sci:'n.',desc:'Australian slang for afternoon. Australians shorten everything and add -o.',tag:'Australian',facts:{Country:'Australia',Pattern:'Aussies add -o to shortened words (servo, rego, ambo)'}},
  {icon:'🌿',name:'Atavism',sci:'n.',desc:'The reappearance of an ancestral trait after many generations. Rare humans are born with tails — atavism.',tag:'Biology',facts:{Examples:'Humans born with tails or extra nipples',Mechanism:'Dormant genes re-expressed'}},
  {icon:'✨',name:'Atelier',sci:'n.',desc:'A workshop or studio of an artist or designer. French word now used in English for creative workspaces.',tag:'French',facts:{Origin:'French for workshop',Use:'Fashion, art, and craft studios'}},
  {icon:'🎵',name:'Atrabilious',sci:'adj.',desc:'Melancholy and bad-tempered. From the old humoral theory — caused by excess black bile.',tag:'Archaic',facts:{Humours:'Black bile caused melancholy',Latin:'"Atra bilis" (black bile)'}},
  {icon:'🧠',name:'Autotelic',sci:'adj.',desc:'Having a purpose in itself rather than seeking external reward. Flow states are autotelic activities.',tag:'Psychology',facts:{Csikszentmihalyi:'Related to flow theory',Examples:'Art for art\'s sake, play'}},
  {icon:'🌙',name:'Awry',sci:'adj./adv.',desc:'Away from the correct position. "Something went awry" — a phrase used constantly but rarely thought about.',tag:'English',facts:{Origin:'Middle English "a wry" (twisted)',Pronunciation:'ah-RYE (not AW-ree)'}},
  {icon:'🔥',name:'Bailiwick',sci:'n.',desc:'One\'s particular area of interest, skill, or authority. Often used in "that\'s not my bailiwick".',tag:'English',facts:{Origin:'Middle English — area of a bailiff',Modern:'"That\'s not my bailiwick" = not my area'}},
  {icon:'⚡',name:'Balderdash',sci:'n.',desc:'Senseless talk or writing. Nonsense.',tag:'English',facts:{Origin:'Origin unknown — 16th century',Use:'British exclamation for nonsense'}},
  {icon:'🌺',name:'Bathysphere',sci:'n.',desc:'A pressurized metal sphere for deep sea observation. First used by William Beebe in 1930.',tag:'Science',facts:{Inventor:'William Beebe, 1930',Depth:'609 metres first descent'}},
  {icon:'💎',name:'Beguile',sci:'v.',desc:'To charm or enchant, sometimes in a deceptive way. To beguile time is to pass it pleasantly.',tag:'English',facts:{Origin:'Middle English "bigylen"',Senses:'Both positive (charming) and negative (deceiving)'}},
  {icon:'🎨',name:'Benighted',sci:'adj.',desc:'In a state of ignorance. Literally: overtaken by darkness (archaic). Metaphorically: unenlightened.',tag:'English',facts:{Literal:'Caught in darkness at night',Figurative:'Intellectually or morally unenlightened'}},
  {icon:'🌊',name:'Bibliosmia',sci:'n.',desc:'The smell of old books. Caused by the breakdown of cellulose and lignin releasing vanilla and almond notes.',tag:'Science',facts:{Chemicals:'Benzaldehyde, vanillin, furfural',Old_books:'Lignin breakdown produces vanilla scent'}},
  {icon:'🔮',name:'Billet-doux',sci:'n.',desc:'A love letter. From French "billet" (note) + "doux" (sweet).',tag:'French',facts:{Literally:'"Sweet note"',Plural:'Billets-doux'}},
  {icon:'💡',name:'Blandishment',sci:'n.',desc:'Flattery used to persuade. Sweet talk with an ulterior motive.',tag:'English',facts:{Origin:'Latin "blandus" (flattering)',Usually:'Plural — blandishments'}},
  {icon:'🌿',name:'Borborygmus',sci:'n.',desc:'The rumbling sound made by gas moving through the intestines. The official word for a growling stomach.',tag:'Medicine',facts:{Greek:'Onomatopoeic origin',Medical:'Completely normal intestinal noise'}},
  {icon:'✨',name:'Brabble',sci:'v./n.',desc:'To argue loudly about something trivial. A beautiful word for petty quarrelling.',tag:'Archaic',facts:{Origin:'Dutch "brabbelen" (to jabber)',Status:'Archaic but delightful'}},
  {icon:'🎵',name:'Braggadocio',sci:'n.',desc:'Empty boasting. Arrogant talk that doesn\'t match reality.',tag:'Literary',facts:{From:'Spenser\'s Faerie Queene (character Braggadocchio)',Synonym:'Fanfaronade, rodomontade'}},
  {icon:'🧠',name:'Brumous',sci:'adj.',desc:'Foggy and wintry. Characteristic of grey, misty weather.',tag:'Literary',facts:{Origin:'Latin "bruma" (winter solstice)',Use:'Poetic description of gloomy weather'}},
  {icon:'🌙',name:'Bumptious',sci:'adj.',desc:'Irritatingly self-assertive and confident. Obnoxiously pushy.',tag:'English',facts:{Origin:'Blend of "bump" + "fractious"',Use:'A bumptious upstart'}},
  {icon:'🔥',name:'Cacoethes',sci:'n.',desc:'An irresistible urge to do something inadvisable. A bad habit you can\'t stop.',tag:'Greek',facts:{Origin:'Greek "kakos" (bad) + "ethos" (habit)',Use:'Cacoethes scribendi — irresistible urge to write'}},
  {icon:'⚡',name:'Callithump',sci:'n.',desc:'A noisy, discordant parade or celebration. From American English.',tag:'American',facts:{Origin:'19th century American English',Type:'Charivari — noisy mock parade'}},
  {icon:'🌺',name:'Canorous',sci:'adj.',desc:'Melodious and pleasant-sounding. A canorous voice is richly musical.',tag:'Literary',facts:{Origin:'Latin "canorus" from "canere" (to sing)',Synonym:'Melodious, dulcet, euphonious'}},
  {icon:'💎',name:'Captious',sci:'adj.',desc:'Tending to find fault or raise petty objections. Excessively critical.',tag:'English',facts:{Origin:'Latin "captiosus" (fallacious)',Synonym:'Nitpicking, cavilling, fault-finding'}},
  {icon:'🎨',name:'Catoptric',sci:'adj.',desc:'Relating to mirrors and reflection. Catoptric telescopes use mirrors, not lenses.',tag:'Science',facts:{Greek:'"Katoptron" (mirror)',Newton:'"Newtonian telescope" is catoptric'}},
  {icon:'🌊',name:'Celerity',sci:'n.',desc:'Swiftness of movement. Speed, especially of action.',tag:'Literary',facts:{Origin:'Latin "celeritas" (speed)',Synonym:'Alacrity, swiftness, velocity'}},
  {icon:'🔮',name:'Chatoyant',sci:'adj.',desc:'Having a changeable lustre like a cat\'s eye. Used in gemology.',tag:'Gemology',facts:{Origin:'French "chatoyer" (to shine like a cat\'s eye)',Gems:'Tiger\'s eye, cat\'s eye chrysoberyl'}},
  {icon:'💡',name:'Chevelure',sci:'n.',desc:'A head of hair, especially when flowing. Also the tail of a comet.',tag:'French',facts:{Origin:'French — from Latin "capillatura"',Astronomy:'Also used for comet\'s tail'}},
  {icon:'🌿',name:'Chiliad',sci:'n.',desc:'A group of one thousand. A period of one thousand years.',tag:'Literary',facts:{Origin:'Greek "chilias" (thousand)',Related:'Millennium, millenarian'}},
  {icon:'✨',name:'Chrematistic',sci:'adj.',desc:'Relating to the pursuit of wealth. From Greek "chremata" (money, goods).',tag:'Philosophy',facts:{Aristotle:'Distinguished chrematistics from economics',Meaning:'Money-making as an end in itself'}},
  {icon:'🎵',name:'Circumbendibus',sci:'n.',desc:'A roundabout way of doing something. Unnecessary detour or complication.',tag:'Humorous',facts:{Type:'Comic formation',Use:'A circumbendibus route = unnecessarily winding path'}},
  {icon:'🧠',name:'Clairaudience',sci:'n.',desc:'The supposed ability to hear sounds beyond normal sensory range.',tag:'Parapsychology',facts:{Claimed:'Psychics and mediums',Related:'Clairvoyance (seeing), clairsentience (feeling)'}},
  {icon:'🌙',name:'Clerisy',sci:'n.',desc:'Educated people collectively, especially those with professional or intellectual standing.',tag:'English',facts:{Coined:'Samuel Taylor Coleridge',Use:'The educated class or intelligentsia'}},
  {icon:'🔥',name:'Cloaca',sci:'n.',desc:'A sewer or drain. In biology: a single posterior opening for digestive, urinary, and reproductive tracts.',tag:'Biology',facts:{Biology:'Birds, reptiles, amphibians have cloaca',Latin:'Latin for sewer'}},
  {icon:'⚡',name:'Cockaigne',sci:'n.',desc:'An imaginary land of luxury and idleness. A medieval European utopian fantasy.',tag:'Medieval',facts:{Medieval:'Peasant fantasy — rivers of wine, roasted pigs',Literature:'Poem "The Land of Cockaigne" (1305)'}},
  {icon:'🌺',name:'Cogitate',sci:'v.',desc:'To think deeply and carefully about something.',tag:'English',facts:{Origin:'Latin "cogitare" (to think)',Related:'Cogito ergo sum (I think, therefore I am)'}},
  {icon:'💎',name:'Colloquy',sci:'n.',desc:'A formal conversation or conference. A high-level academic discussion.',tag:'English',facts:{Origin:'Latin "colloquium" (conference)',Use:'Academic and diplomatic contexts'}},
  {icon:'🎨',name:'Colophon',sci:'n.',desc:'A brief statement at the end of a book identifying the publisher, printer, and date.',tag:'Publishing',facts:{Greek:'"Kolophon" (summit, finishing touch)',Publishing:'End matter of a book'}},
  {icon:'🌊',name:'Colubriform',sci:'adj.',desc:'Snake-shaped. Having the form or appearance of a snake.',tag:'Biology',facts:{Origin:'Latin "coluber" (snake)',Use:'Describes snake-like shapes in biology'}},
  {icon:'🔮',name:'Compunction',sci:'n.',desc:'A feeling of guilt or moral scruple. "Without compunction" means without guilt.',tag:'English',facts:{Origin:'Latin "compungere" (to prick sharply)',Use:'"Without compunction" — common phrase'}},
  {icon:'💡',name:'Confabulate',sci:'v.',desc:'To fill memory gaps with fabricated information — without knowing it\'s false. A real neurological phenomenon.',tag:'Neurology',facts:{Condition:'Korsakoff syndrome — classic confabulation',Not:'Not lying — patient believes their story'}},
],

// ─────────────────────────────────────────────────────────────────
// ANIMALS
// ─────────────────────────────────────────────────────────────────
animals: [
  {icon:'🦈',name:'Whale Shark',sci:'Rhincodon typus',desc:'The largest fish on Earth — up to 12 metres. Despite the size, it feeds only on tiny plankton.',tag:'Fish',facts:{Length:'Up to 12 metres',Diet:'Plankton, small fish',Status:'Endangered'}},
  {icon:'🐙',name:'Octopus',sci:'Octopoda',desc:'Has three hearts, blue blood, and can edit its own RNA. Each arm has its own neural cluster.',tag:'Cephalopod',facts:{Hearts:'3 — one systemic, two branchial',Blood:'Blue (copper-based haemocyanin)',RNA_editing:'Can recode proteins on the fly'}},
  {icon:'🦅',name:'Peregrine Falcon',sci:'Falco peregrinus',desc:'Fastest animal on Earth — reaches 389 km/h in a dive (stoop). Recovers from near-extinction due to DDT.',tag:'Bird',facts:{Speed:'389 km/h in stoop',Recovery:'Recovered after DDT ban',Habitat:'Every continent except Antarctica'}},
  {icon:'🐘',name:'African Elephant',sci:'Loxodonta africana',desc:'Largest land animal. Can recognize themselves in mirrors, mourn their dead, and communicate via infrasound.',tag:'Mammal',facts:{Weight:'Up to 6,350 kg',Memory:'Decades-long',Infrasound:'Below 20 Hz — travels kilometres'}},
  {icon:'🦁',name:'Lion',sci:'Panthera leo',desc:'Only truly social cat. Lions are the only cats that live in groups (prides). Males sleep up to 20 hours a day.',tag:'Mammal',facts:{Social:'Only social wild cat',Sleep:'Up to 20 hours/day (males)',Roar:'Heard up to 8 km away'}},
  {icon:'🐬',name:'Bottlenose Dolphin',sci:'Tursiops truncatus',desc:'Uses names for each other — unique signature whistles. One of the few animals that has sex for pleasure.',tag:'Mammal',facts:{Names:'Individual signature whistles',Intelligence:'Problem solving, self-recognition',Communication:'Complex social calls'}},
  {icon:'🦧',name:'Chimpanzee',sci:'Pan troglodytes',desc:'Our closest living relative — 98.7% identical DNA. Uses tools, has culture, and can learn sign language.',tag:'Primate',facts:{DNA:'98.7% same as humans',Tools:'Sticks, stones, leaves',Culture:'Different chimp populations have different customs'}},
  {icon:'🐢',name:'Greenland Shark',sci:'Somniosus microcephalus',desc:'The longest-lived vertebrate — over 400 years old. Reaches sexual maturity at 150 years.',tag:'Shark',facts:{Lifespan:'400+ years',Maturity:'At ~150 years',Speed:'Extremely slow swimmer'}},
  {icon:'🦋',name:'Monarch Butterfly',sci:'Danaus plexippus',desc:'Migrates up to 4,800 km from Canada to Mexico. No individual lives to complete the round trip — it takes 4 generations.',tag:'Insect',facts:{Migration:'Up to 4,800 km',Generations:'Takes 4 generations round trip',Navigation:'Uses sun and Earth\'s magnetic field'}},
  {icon:'🐳',name:'Blue Whale',sci:'Balaenoptera musculus',desc:'Largest animal ever to have lived on Earth. Heart is the size of a car. Can be heard 1,600 km away.',tag:'Mammal',facts:{Length:'Up to 33 metres',Heart:'Size of a small car',Call:'Heard up to 1,600 km away'}},
  {icon:'🦎',name:'Axolotl',sci:'Ambystoma mexicanum',desc:'Never undergoes metamorphosis — stays larval its whole life. Can regenerate limbs, heart, and parts of brain.',tag:'Amphibian',facts:{Neoteny:'Stays permanently larval',Regeneration:'Limbs, heart, spinal cord, brain tissue',Wild:'Critically endangered — Lake Xochimilco only'}},
  {icon:'🐦',name:'Arctic Tern',sci:'Sterna paradisaea',desc:'Migrates from Arctic to Antarctic and back — up to 90,000 km per year. Sees two summers every year.',tag:'Bird',facts:{Migration:'~90,000 km per year',Lifespan:'30 years — travels 3x distance to moon in lifetime',Diet:'Fish, krill'}},
  {icon:'🦑',name:'Mantis Shrimp',sci:'Stomatopoda',desc:'Has 16 types of colour receptors (humans have 3). Can punch with the force of a bullet.',tag:'Crustacean',facts:{Vision:'16 colour receptors vs human 3',Punch:'90 km/h — force of a bullet',Cavitation:'Strike creates cavitation bubbles'}},
  {icon:'🐝',name:'Honeybee',sci:'Apis mellifera',desc:'Communicates via the waggle dance — a precise dance that encodes distance and direction to flowers.',tag:'Insect',facts:{Dance:'Waggle dance encodes flower location',Colony:'50,000-80,000 bees',Honey:'A bee produces 1/12 tsp in its lifetime'}},
  {icon:'🦩',name:'Flamingo',sci:'Phoenicopteridae',desc:'Pink colour comes entirely from carotenoids in their food. Without it, they\'d be white.',tag:'Bird',facts:{Color:'From carotenoids in algae and crustaceans',Born:'Chicks are grey-white',Legs:'Bend the other way — the "knee" is actually the ankle'}},
  {icon:'🐊',name:'Crocodile',sci:'Crocodylidae',desc:'Unchanged for 200 million years. Can go without food for over a year. Has the most acidic stomach of any vertebrate.',tag:'Reptile',facts:{Age:'Unchanged since Mesozoic',Fasting:'Over a year without food',Stomach:'Most acidic vertebrate digestive system'}},
  {icon:'🦟',name:'Tardigrade',sci:'Tardigrada',desc:'Microscopic "water bears" — survive vacuum of space, radiation, -272°C, and 150°C. Virtually indestructible.',tag:'Micro-animal',facts:{Survive:'Space vacuum, radiation, extreme temperatures',Size:'0.1–1.5 mm',Cryptobiosis:'Enter suspended animation when dry'}},
  {icon:'🦓',name:'Zebra',sci:'Equus quagga',desc:'Every zebra\'s stripe pattern is unique — like a fingerprint. Stripes may deter biting flies.',tag:'Mammal',facts:{Stripes:'Unique to each individual',Function:'Possibly deters tsetse flies',Social:'Live in harems led by a stallion'}},
  {icon:'🐍',name:'King Cobra',sci:'Ophiophagus hannah',desc:'Longest venomous snake — up to 5.5 metres. Only snake that builds a nest for its eggs.',tag:'Reptile',facts:{Length:'Up to 5.5 metres',Unique:'Only snake that builds a nest',Venom:'Enough to kill an elephant'}},
  {icon:'🦦',name:'Sea Otter',sci:'Enhydra lutris',desc:'Holds hands with other otters while sleeping so they don\'t drift apart. Uses tools — smashes shellfish on rocks.',tag:'Mammal',facts:{Holding_hands:'To avoid drifting apart while sleeping',Tools:'Uses rocks to crack shellfish',Fur:'Densest fur of any animal — 1 million hairs/cm²'}},
  {icon:'🐉',name:'Komodo Dragon',sci:'Varanus komodoensis',desc:'Can reproduce via parthenogenesis — females can produce offspring without fertilisation.',tag:'Reptile',facts:{Parthenogenesis:'Can reproduce without male',Length:'Up to 3 metres',Bite:'Anticoagulant venom'}},
  {icon:'🦜',name:'African Grey Parrot',sci:'Psittacus erithacus',desc:'Demonstrated understanding of concepts like zero — one of the only non-human animals to do so.',tag:'Bird',facts:{Intelligence:'Understands abstract concepts like zero',Alex:'Alex the parrot — breakthrough research subject',Lifespan:'50-60 years'}},
  {icon:'🐋',name:'Sperm Whale',sci:'Physeter macrocephalus',desc:'Has the largest brain of any animal. Dives over 2 km deep. Its head is filled with a waxy oil (spermaceti).',tag:'Mammal',facts:{Brain:'Largest of any animal',Dive:'Over 2,000 metres deep',Spermaceti:'Waxy oil used for echolocation focusing'}},
  {icon:'🦔',name:'Hedgehog',sci:'Erinaceinae',desc:'Anoints itself with strange-smelling substances by licking them and covering its spines — purpose unknown.',tag:'Mammal',facts:{Anointing:'Self-anointing behaviour — purpose unknown',Spines:'Around 5,000–7,000 hollow keratin spines',Diet:'Insects, worms, berries'}},
  {icon:'🐠',name:'Clownfish',sci:'Amphiprioninae',desc:'All clownfish are born male. The dominant fish becomes female if the female dies.',tag:'Fish',facts:{Gender:'All born male; dominant becomes female',Symbiosis:'Immune to anemone stings',Nemo:'Finding Nemo got the biology backwards'}},
],

// ─────────────────────────────────────────────────────────────────
// SPACE
// ─────────────────────────────────────────────────────────────────
space: [
  {icon:'☀️',name:'The Sun',sci:'Sol',desc:'The Sun contains 99.86% of all mass in the solar system. Its core temperature is 15 million°C.',tag:'Star',facts:{Core_temp:'15 million°C',Mass:'99.86% of solar system',Light_time:'8 minutes 20 seconds to Earth'}},
  {icon:'🌕',name:'The Moon',sci:'Luna',desc:'Moving away from Earth at 3.8 cm per year. Formed from debris when a Mars-sized body hit proto-Earth.',tag:'Moon',facts:{Moving:'3.8 cm further each year',Formation:'Giant impact hypothesis',Tidal_lock:'Always shows same face to Earth'}},
  {icon:'🪐',name:'Saturn',sci:'Saturn',desc:'Saturn\'s rings are only 20 metres thick on average but span 282,000 km. It\'s less dense than water.',tag:'Planet',facts:{Ring_thickness:'~20 metres',Ring_diameter:'282,000 km',Density:'Less than water — it would float'}},
  {icon:'🌌',name:'Milky Way',sci:'Via Lactea',desc:'Our galaxy contains 200-400 billion stars. The supermassive black hole at its centre is 4 million solar masses.',tag:'Galaxy',facts:{Stars:'200-400 billion',Centre:'Sagittarius A* — 4 million solar masses',Diameter:'100,000 light years'}},
  {icon:'⭐',name:'Neutron Star',sci:'Pulsar',desc:'A teaspoon of neutron star material weighs about 10 million tonnes. They spin up to 716 times per second.',tag:'Stellar',facts:{Density:'Teaspoon = 10 million tonnes',Spin:'Up to 716 rotations/second',Diameter:'~20 km'}},
  {icon:'🕳️',name:'Black Hole',sci:'Singularity',desc:'Time slows near a black hole due to extreme gravity. Anything past the event horizon cannot escape — including light.',tag:'Cosmic',facts:{Event_horizon:'Point of no return',Time_dilation:'Time slows near the horizon',Hawking_radiation:'Black holes slowly evaporate'}},
  {icon:'🌠',name:'Supernova',sci:'Stellar explosion',desc:'Produces more energy in seconds than the Sun will emit in its entire 10-billion-year lifetime.',tag:'Event',facts:{Energy:'More than Sun emits in 10 billion years',Heavy_elements:'Gold, uranium created in supernovae',Rate:'~1 per century per galaxy'}},
  {icon:'🪨',name:'Asteroid Belt',sci:'Main Belt',desc:'Despite millions of asteroids, the belt is mostly empty space. All asteroids combined weigh less than the Moon.',tag:'Belt',facts:{Total_mass:'Less than the Moon',Mostly:'Empty space — not dense like in movies',Ceres:'Largest object — a dwarf planet'}},
  {icon:'☄️',name:'Halley\'s Comet',sci:'1P/Halley',desc:'Visible from Earth every 75-79 years. Next perihelion in 2061. Edmond Halley proved it was the same comet.',tag:'Comet',facts:{Period:'~75-79 years',Next:'2061',Halley:'First predicted return — 1705'}},
  {icon:'🌍',name:'Pale Blue Dot',sci:'Earth from 6 billion km',desc:'Carl Sagan\'s famous phrase for Earth as seen from Voyager 1. "Every king and peasant, every mother and father" lived on it.',tag:'Philosophy',facts:{Distance:'6 billion km from Earth',Photo:'Taken February 14, 1990',Sagan:'"That\'s here. That\'s home. That\'s us."'}},
  {icon:'🌑',name:'Dark Matter',sci:'Unknown',desc:'Makes up 27% of the universe but cannot be seen or directly detected. Only inferred from gravitational effects.',tag:'Cosmic',facts:{Proportion:'27% of universe',Detection:'Only via gravitational effects',Composition:'Unknown — not any known particle'}},
  {icon:'💫',name:'Quasar',sci:'Quasi-stellar object',desc:'The most luminous objects in the universe — powered by supermassive black holes consuming matter.',tag:'Cosmic',facts:{Luminosity:'Trillions of times brighter than stars',Powered_by:'Supermassive black holes',Distance:'Billions of light years away'}},
  {icon:'🔭',name:'James Webb Telescope',sci:'JWST',desc:'Can see light from 13.6 billion years ago — just 100 million years after the Big Bang.',tag:'Telescope',facts:{Launched:'December 25, 2021',Sees:'13.6 billion years back',Mirror:'6.5 metres gold-plated beryllium'}},
  {icon:'🚀',name:'Voyager 1',sci:'NASA spacecraft',desc:'Farthest human-made object. Now over 23 billion km from the Sun, in interstellar space.',tag:'Spacecraft',facts:{Distance:'23+ billion km from Sun',Launched:'September 5, 1977',Signal_delay:'~22 hours one-way'}},
  {icon:'🌋',name:'Olympus Mons',sci:'Mars volcano',desc:'The largest volcano in the solar system — 22 km high and 600 km wide. Three times the height of Everest.',tag:'Geology',facts:{Height:'22 km (vs Everest\'s 8.8 km)',Width:'600 km — size of France',Status:'Likely dormant'}},
  {icon:'🌊',name:'Europa',sci:'Moon of Jupiter',desc:'Has a liquid water ocean under its ice shell — twice as much water as Earth. Top candidate for extraterrestrial life.',tag:'Moon',facts:{Ocean:'Twice Earth\'s ocean volume',Life:'Top candidate in solar system',Ice_shell:'15-25 km thick'}},
  {icon:'⚡',name:'Lightning on Jupiter',sci:'Jovian lightning',desc:'Jupiter has lightning 1,000 times more powerful than Earth\'s, concentrated near the poles.',tag:'Atmospheric',facts:{Power:'1,000x Earth lightning',Location:'Near poles (opposite to Earth)',Cause:'Water and ammonia convection'}},
  {icon:'🎯',name:'Lagrange Points',sci:'L1-L5',desc:'Points in space where the gravity of two bodies balances perfectly. James Webb sits at L2.',tag:'Physics',facts:{Count:'5 Lagrange points per system',L2:'1.5 million km from Earth',JWST:'Sits at Sun-Earth L2'}},
  {icon:'🌀',name:'Magnetar',sci:'SGR 1806-20',desc:'The most magnetic objects in the universe. A magnetar\'s field would erase your credit card from 150,000 km away.',tag:'Stellar',facts:{Field:'1 quadrillion times Earth\'s field',Range:'Would affect Earth from 150,000 km',SGR_1806:'One of the strongest known'}},
  {icon:'🪐',name:'Titan',sci:'Moon of Saturn',desc:'Saturn\'s largest moon has lakes of liquid methane and ethane, a thick nitrogen atmosphere, and rain.',tag:'Moon',facts:{Lakes:'Liquid methane and ethane',Atmosphere:'Thicker than Earth\'s — mostly nitrogen',Rain:'Methane rain cycles'}},
],

// ─────────────────────────────────────────────────────────────────
// HISTORY
// ─────────────────────────────────────────────────────────────────
history: [
  {icon:'🏛️',name:'Roman Concrete',sci:'Opus caementicium',desc:'Roman concrete was stronger than modern concrete. Sea water actually made it stronger over centuries.',tag:'Ancient Rome',facts:{Ingredient:'Volcanic ash (pozzolana)',Sea_water:'Actually strengthened it over time',Durability:'2,000 years and still standing'}},
  {icon:'📜',name:'Code of Hammurabi',sci:'1754 BCE',desc:'One of the earliest written legal codes — 282 laws carved on a 2.25m stele. Includes "an eye for an eye".',tag:'Ancient',facts:{Date:'~1754 BCE',Laws:'282 carved on black diorite stele',Location:'Louvre Museum, Paris'}},
  {icon:'⚔️',name:'Battle of Thermopylae',sci:'480 BCE',desc:'300 Spartans (plus ~7,000 Greek allies) held off ~100,000 Persians for 3 days. The actual numbers matter.',tag:'Ancient Greece',facts:{Spartans:'300 — plus 5,000-7,000 other Greeks',Persian:'Estimated 70,000-300,000',Result:'Persian victory — but Greece survived'}},
  {icon:'🌍',name:'Silk Road',sci:'2nd century BCE–15th CE',desc:'A network of trade routes connecting China to Rome. Spread not just goods but diseases, religions, and ideas.',tag:'Trade',facts:{Distance:'6,400 km of routes',Goods:'Silk, spices, paper, gunpowder, ideas',Disease:'Also spread plague and smallpox'}},
  {icon:'📚',name:'Library of Alexandria',sci:'~285 BCE–391 CE',desc:'Ancient world\'s greatest library. Held up to 700,000 scrolls. Its destruction was gradual — not one dramatic fire.',tag:'Ancient Egypt',facts:{Scrolls:'Up to 700,000',Destruction:'Gradual decline, not one fire',Significance:'Loss of irreplaceable ancient knowledge'}},
  {icon:'🔬',name:'Black Death',sci:'1347–1351',desc:'Killed 30-60% of Europe\'s population. Paradoxically, survivors enjoyed better wages and social mobility.',tag:'Medieval',facts:{Deaths:'30-60% of Europe',Cause:'Yersinia pestis bacterium',Legacy:'Accelerated end of feudalism'}},
  {icon:'🌊',name:'Age of Exploration',sci:'15th-17th century',desc:'European navigators mapped the world. Also brought devastating colonization and the transatlantic slave trade.',tag:'Modern',facts:{Columbus:'1492 — Americas',Magellan:'1519-1522 — first circumnavigation',Consequence:'Colonization and slave trade'}},
  {icon:'⚡',name:'Industrial Revolution',sci:'1760–1840',desc:'Transformed human civilization in 80 years. Child labour, urbanization, pollution — and enormous productivity gains.',tag:'Modern',facts:{Location:'Britain first',Power:'Steam engine changed everything',Population:'Urban population exploded'}},
  {icon:'💣',name:'Manhattan Project',sci:'1942–1945',desc:'12,000 people worked at Oak Ridge not knowing what they were making. Only 6 people knew the full scope.',tag:'WWII',facts:{Workers:'130,000+ total',Secrecy:'Most workers didn\'t know the goal',Cost:'$2 billion (~$28 billion today)'}},
  {icon:'🚀',name:'Moon Landing',sci:'July 20, 1969',desc:'Apollo 11 had less computing power than a modern calculator. The landing computer had 4KB of RAM.',tag:'Space Race',facts:{Computer:'4KB RAM — less than a calculator',Risk:'Nixon had a speech prepared for failure',Watched:'600 million people — 1/5 of Earth'}},
  {icon:'🧬',name:'Discovery of DNA',sci:'1953',desc:'Watson and Crick built on Rosalind Franklin\'s X-ray crystallography data — without her knowledge or credit.',tag:'Science',facts:{Franklin:'Her Photo 51 was key',Watson_Crick:'1953 paper in Nature',Nobel:'1962 — Franklin had died 1958'}},
  {icon:'🌐',name:'World Wide Web',sci:'1991',desc:'Tim Berners-Lee invented it while at CERN and gave it away for free to humanity — no patent.',tag:'Technology',facts:{Inventor:'Tim Berners-Lee, CERN',Year:'1991 — first website',Patent:'Deliberately not patented'}},
  {icon:'🏺',name:'Ancient Egypt',sci:'3100–30 BCE',desc:'Lasted over 3,000 years — longer than the time between Cleopatra and now. Cleopatra was closer to the Moon landing than to the pyramids.',tag:'Civilisation',facts:{Duration:'3,000+ years',Cleopatra:'Closer to Moon landing than to Khufu',Great_Pyramid:'Built in ~20 years'}},
  {icon:'🎭',name:'Renaissance',sci:'14th–17th century',desc:'A rebirth of classical learning. Leonardo da Vinci left 13,000+ pages of notebooks covering art, science, anatomy, engineering.',tag:'Cultural',facts:{Da_Vinci:'13,000+ notebook pages',Centers:'Florence, Venice, Rome',Key_idea:'Humanism — human potential central'}},
  {icon:'⚓',name:'Titanic',sci:'April 15, 1912',desc:'Sank in 2 hours 40 minutes. First SOS distress signal ever used. A nearby ship ignored distress flares.',tag:'Modern',facts:{Sank:'2h 40m',SOS:'First major use of SOS signal',SS_Californian:'Nearby ship ignored flares'}},
],

// ─────────────────────────────────────────────────────────────────
// FOOD
// ─────────────────────────────────────────────────────────────────
food: [
  {icon:'🍕',name:'Pizza',sci:'Neapolitan origin',desc:'Neapolitan pizza is protected by EU law. True Margherita was made for Queen Margherita of Savoy in 1889.',tag:'Italian',facts:{Protection:'EU Protected Designation of Origin',Margherita:'Created for Queen Margherita, 1889',Global:'Most popular dish on Earth'}},
  {icon:'☕',name:'Coffee',sci:'Coffea arabica',desc:'Second most traded commodity after oil. The world drinks 2.25 billion cups per day.',tag:'Drink',facts:{Trade:'2nd most traded commodity',Cups:'2.25 billion/day worldwide',Origin:'Ethiopia — Kaffa region'}},
  {icon:'🍫',name:'Chocolate',sci:'Theobroma cacao',desc:'"Theobroma" means "food of the gods." Dark chocolate contains more antioxidants than blueberries.',tag:'Confection',facts:{Name:'"Food of the gods" in Greek',Antioxidants:'More than blueberries',Aztec:'Used as currency by Aztecs'}},
  {icon:'🧀',name:'Cheese',sci:'Dairy product',desc:'There are over 1,800 varieties of cheese worldwide. The oldest was found in Egyptian tombs — 3,200 years old.',tag:'Dairy',facts:{Varieties:'1,800+ worldwide',Oldest:'3,200-year-old in Egyptian tombs',Most_stolen:'Cheese is most stolen food in the world'}},
  {icon:'🍞',name:'Bread',sci:'Leavened bread',desc:'The oldest leavened bread dates to 14,400 years ago — pre-agriculture. Bread pre-dates farming.',tag:'Staple',facts:{Age:'14,400 years — pre-agriculture',Varieties:'Every culture has bread',Sliced_bread:'Introduced 1928 — "greatest since sliced bread"'}},
  {icon:'🌶️',name:'Chilli Pepper',sci:'Capsicum annuum',desc:'Capsaicin triggers pain receptors — the "heat" is actually a pain signal. Birds are immune and spread seeds.',tag:'Spice',facts:{Capsaicin:'Binds TRPV1 pain receptors',Birds:'Completely immune — spread seeds',Scoville:'Unit of heat measurement'}},
  {icon:'🍯',name:'Honey',sci:'Apis mellifera product',desc:'Never spoils — edible honey was found in Egyptian tombs 3,000 years old. Enzymes make it antimicrobial.',tag:'Natural',facts:{Spoilage:'Never spoils if sealed',Ancient:'Edible honey found in tombs',Antimicrobial:'H₂O₂ and low pH prevent bacteria'}},
  {icon:'🧄',name:'Garlic',sci:'Allium sativum',desc:'Allicin — released when garlic is crushed — has powerful antimicrobial properties. Used medicinally for 5,000 years.',tag:'Herb',facts:{Compound:'Allicin — antimicrobial',History:'5,000 years of medicinal use',Vampire:'Eastern European folklore repellent'}},
  {icon:'🍵',name:'Tea',sci:'Camellia sinensis',desc:'All tea comes from one plant — Camellia sinensis. Green, black, white, and oolong differ only in processing.',tag:'Drink',facts:{All_one:'One plant — different processing',Origin:'China — 2737 BCE (legendary)',Second_most:'Most consumed drink after water'}},
  {icon:'🥢',name:'Sushi',sci:'Fermented rice origin',desc:'Original sushi was fermented fish preserved in rice — the rice was thrown away. Modern sushi is 200 years old.',tag:'Japanese',facts:{Origin:'Southeast Asian fermented fish',Old_rice:'The rice was discarded originally',Modern:'Edo-period fast food'}},
  {icon:'🫒',name:'Olive Oil',sci:'Olea europaea',desc:'Olive trees can live 2,000+ years and still bear fruit. The oil has been central to Mediterranean civilisation.',tag:'Mediterranean',facts:{Tree_age:'2,000+ year old trees still productive',History:'5,000 years of cultivation',Health:'Monounsaturated fat — Mediterranean diet'}},
  {icon:'🌮',name:'Fermentation',sci:'Microbial process',desc:'Fermentation is one of humanity\'s oldest technologies — 13,000 years. Gives us beer, wine, cheese, yogurt, bread.',tag:'Science',facts:{Age:'13,000+ years old',Products:'Bread, beer, wine, cheese, kimchi, yogurt',Science:'Pasteur explained it in 1857'}},
  {icon:'🍜',name:'Umami',sci:'Fifth taste',desc:'Discovered by Japanese chemist Kikunae Ikeda in 1908. The savoury, meaty taste of glutamate.',tag:'Science',facts:{Discovered:'Kikunae Ikeda, 1908',Compound:'Monosodium glutamate (MSG)',Sources:'Tomatoes, mushrooms, Parmesan, soy sauce'}},
  {icon:'🌽',name:'Maize/Corn',sci:'Zea mays',desc:'The most produced crop in the world. Domesticated from wild teosinte 9,000 years ago — unrecognisable ancestral form.',tag:'Grain',facts:{Production:'Most produced crop globally',Ancestor:'Teosinte — tiny, rocky cobs',Products:'1,500+ uses including fuel, plastic, food'}},
  {icon:'🫙',name:'Salt',sci:'NaCl',desc:'The word "salary" comes from the Latin "salarium" — salt given to Roman soldiers as payment.',tag:'Mineral',facts:{Salary:'From Latin "salarium" — salt pay',Preservation:'Pre-refrigeration preservation',Body:'Essential for nerve and muscle function'}},
],

// ─────────────────────────────────────────────────────────────────
// MUSIC
// ─────────────────────────────────────────────────────────────────
music: [
  {icon:'🎸',name:'Electric Guitar',sci:'Leo Fender / Les Paul',desc:'The Fender Telecaster (1951) and Gibson Les Paul (1952) defined modern music. Strats and Les Pauls still dominate.',tag:'Instrument',facts:{Telecaster:'1951 — first mass production solid body',Les_Paul:'1952',Most_recorded:'Stratocaster probably most recorded guitar'}},
  {icon:'🎹',name:'Piano',sci:'Pianoforte',desc:'Invented by Bartolomeo Cristofori around 1700. Its full name "pianoforte" means "soft-loud" in Italian.',tag:'Instrument',facts:{Inventor:'Bartolomeo Cristofori, ~1700',Name:'"Pianoforte" = soft-loud',Keys:'Standard 88 keys'}},
  {icon:'🎺',name:'Bach\'s Crab Canon',sci:'Musical Offering, BWV 1079',desc:'A piece that can be played simultaneously forwards and backwards and still be harmonically correct.',tag:'Baroque',facts:{Technique:'Cancrizans (crab canon)',Bach:'Musical Offering, 1747',Structure:'Reads the same reversed'}},
  {icon:'🎵',name:'432 Hz vs 440 Hz',sci:'Concert pitch',desc:'Standard concert pitch is A=440 Hz. Some claim 432 Hz is "more natural" — no scientific evidence supports this.',tag:'Theory',facts:{Standard:'A=440 Hz since 1939','432_claim':'No scientific basis',History:'Pitch varied wildly before standardisation'}},
  {icon:'🎷',name:'Jazz',sci:'American art form',desc:'Emerged in New Orleans ~1900 from African and European traditions. The first distinctly American art form.',tag:'Genre',facts:{Origin:'New Orleans, ~1900',Influences:'African rhythms + European harmony',Improvisation:'Core principle'}},
  {icon:'🎻',name:'Stradivarius',sci:'Antonio Stradivari',desc:'Stradivari made ~1,100 instruments; ~650 survive. The "Lady Blunt" sold for £9.8 million in 2011.',tag:'Violin',facts:{Made:'~1,100 instruments',Surviving:'~650 still exist',Record:'£9.8 million (2011)'}},
  {icon:'🥁',name:'The Talking Drum',sci:'Dundun',desc:'West African drums that can mimic tonal languages — transmitting words and sentences up to 8 km.',tag:'African',facts:{Range:'Up to 8 km',Language:'Mimics tonal language tones',Used_for:'Communication between villages'}},
  {icon:'🎶',name:'Absolute Pitch',sci:'Perfect pitch',desc:'The ability to identify any musical note without a reference tone. Estimated in 1 in 10,000 people.',tag:'Neuroscience',facts:{Prevalence:'~1 in 10,000',Language:'More common in tonal language speakers',Famous:'Mozart, Beethoven, Hendrix'}},
  {icon:'🔊',name:'Brown Note',sci:'Infrasound myth',desc:'The alleged frequency that causes loss of bowel control. MythBusters tested it — it doesn\'t exist.',tag:'Myth',facts:{Claim:'18 Hz causes involuntary defecation',MythBusters:'Tested and debunked',Real:'Infrasound can cause nausea and unease'}},
  {icon:'📯',name:'Gregorian Chant',sci:'Plainchant',desc:'Single-line sacred music with no fixed rhythm. The foundation of Western music theory.',tag:'Medieval',facts:{Origin:'Codified by Pope Gregory I (590–604)',Polyphony:'Led to development of harmony',Notation:'Early music notation system'}},
  {icon:'🎤',name:'Autotune',sci:'Andy Hildebrand',desc:'Invented by Andy Hildebrand in 1997 using oil industry signal-processing technology.',tag:'Technology',facts:{Inventor:'Andy Hildebrand, 1997',Origin:'Adapted oil exploration signal processing',Cher:'"Believe" (1998) — first notable use'}},
  {icon:'🪗',name:'Twelve-Tone',sci:'Serialism',desc:'Arnold Schoenberg\'s 1921 method uses all 12 notes equally — rejecting tonal hierarchy and traditional melody.',tag:'Theory',facts:{Inventor:'Arnold Schoenberg, 1921',Method:'Each of 12 notes used once per row',Legacy:'Controversial — rejected by some, embraced by others'}},
  {icon:'🎸',name:'Power Chord',sci:'Power chord',desc:'Two-note chord (root + fifth) — no third, so neither major nor minor. The sound of rock and metal.',tag:'Theory',facts:{Notes:'Root + perfect fifth',No_third:'Neither major nor minor — ambiguous',Sound:'Distortion-friendly, powerful'}},
  {icon:'🎼',name:'Counterpoint',sci:'Contrapuntal music',desc:'The art of combining independent melodic lines. Bach\'s fugues are the pinnacle — up to 6 independent voices.',tag:'Theory',facts:{Bach:'Perfected the fugue form',Voices:'Up to 6 independent melodic lines',Rules:'Strict rules about note movements'}},
],

// ─────────────────────────────────────────────────────────────────
// HUMAN BODY
// ─────────────────────────────────────────────────────────────────
body: [
  {icon:'🫀',name:'Heart',sci:'Cor',desc:'Beats ~100,000 times per day, ~3 billion in a lifetime. Generates enough pressure to squirt blood 9 metres.',tag:'Organ',facts:{Beats:'~100,000/day, ~3 billion lifetime',Pressure:'Squirts blood 9 metres',Weight:'~300g'}},
  {icon:'🧠',name:'Brain',sci:'Cerebrum',desc:'Contains ~86 billion neurons — each connected to ~7,000 others. Uses 20% of your energy despite being 2% of body weight.',tag:'Organ',facts:{Neurons:'~86 billion',Connections:'Each connected to ~7,000 others',Energy:'20% of body energy'}},
  {icon:'🫁',name:'Lungs',sci:'Pulmones',desc:'The total surface area of the lungs is roughly 70 m² — the size of a tennis court.',tag:'Organ',facts:{Surface:'~70 m² (tennis court)',Breaths:'~20,000 per day',Left:'Slightly smaller — makes room for heart'}},
  {icon:'🦴',name:'Skeleton',sci:'Osseous system',desc:'Born with ~270 bones; adults have 206 — bones fuse as you grow. Hardest substance in the body is tooth enamel.',tag:'System',facts:{Baby:'~270 bones',Adult:'206 bones',Hardest:'Tooth enamel — harder than bone'}},
  {icon:'🩸',name:'Blood',sci:'Sanguis',desc:'Your body contains about 5 litres. Red blood cells have no nucleus — they sacrifice it to carry more oxygen.',tag:'System',facts:{Volume:'~5 litres',RBC:'No nucleus — maximises O₂ capacity',Lifespan:'Red cells live ~120 days'}},
  {icon:'👁️',name:'Eyes',sci:'Oculi',desc:'The human eye can distinguish about 10 million colours. It ignores its own blind spot by filling it in from context.',tag:'Organ',facts:{Colours:'~10 million distinguishable',Blind_spot:'Brain fills it in — you never notice',Muscles:'6 muscles per eye — fastest in body'}},
  {icon:'👂',name:'Ears',sci:'Aures',desc:'The smallest bones in the body are in the ear — the malleus, incus, and stapes (hammer, anvil, stirrup).',tag:'Organ',facts:{Smallest:'Stapes — 3mm, smallest bone',Never_sleep:'Ears never stop hearing — brain filters',Balance:'Vestibular system in inner ear'}},
  {icon:'🦷',name:'Teeth',sci:'Dentes',desc:'Tooth enamel is the hardest substance the human body produces. Unlike bone, it cannot regenerate.',tag:'Structure',facts:{Hardest:'Hardest substance body produces',No_regeneration:'Cannot regrow unlike bone',DNA:'Teeth preserve DNA best'}},
  {icon:'🧬',name:'DNA',sci:'Deoxyribonucleic acid',desc:'If you stretched out all the DNA in one cell, it would be ~2 metres. All your DNA end-to-end: ~67 billion km.',tag:'Molecular',facts:{Cell_length:'~2 metres per cell',Total_body:'~67 billion km',Information:'3 billion base pairs per cell'}},
  {icon:'💪',name:'Muscles',sci:'Musculatura',desc:'The body has ~600 muscles. The strongest (by force) is the masseter (jaw). The longest is the sartorius.',tag:'System',facts:{Count:'~600 muscles',Strongest:'Masseter (jaw muscle)',Longest:'Sartorius — hip to knee'}},
  {icon:'🩺',name:'Appendix',sci:'Cecal appendix',desc:'Once thought useless, it now appears to function as a reservoir for gut bacteria after illness.',tag:'Organ',facts:{Old_view:'Vestigial — no function',New_view:'Reservoir for good gut bacteria',Removal:'Not harmful if removed'}},
  {icon:'🌡️',name:'Body Temperature',sci:'~37°C',desc:'37°C is actually an average. Normal range is 36.1–37.2°C. The old standard was based on 1850s data.',tag:'Physiology',facts:{Range:'36.1–37.2°C normal',History:'98.6°F from 1850s German study',Declining:'Average has slowly dropped over 200 years'}},
  {icon:'💤',name:'Sleep',sci:'Circadian rhythm',desc:'During REM sleep, the brain paralyses your body to stop you acting out dreams. Missing one night impairs you like being drunk.',tag:'Neuroscience',facts:{REM:'Body paralysed to prevent acting dreams',Sleep_deprivation:'24h = 0.1% BAC equivalent impairment',Stages:'4-6 sleep cycles per night'}},
  {icon:'😂',name:'Laughter',sci:'Gelotology',desc:'Laughter is studied in gelotology. You\'re 30x more likely to laugh with others than alone.',tag:'Psychology',facts:{Science:'Gelotology',Social:'30x more likely with others',Contagious:'Genuinely contagious — mirror neurons'}},
  {icon:'😱',name:'Fight or Flight',sci:'Acute stress response',desc:'Adrenaline reaches muscles in 3 seconds. Pupils dilate, pain perception drops, superhuman strength possible.',tag:'Physiology',facts:{Speed:'Adrenaline in 3 seconds',Pain:'Analgesia — pain suppressed',Strength:'Documented superhuman feats'}},
],

// ─────────────────────────────────────────────────────────────────
// GEOGRAPHY
// ─────────────────────────────────────────────────────────────────
geography: [
  {icon:'🏔️',name:'Mount Everest',sci:'8,848.86m',desc:'Not the tallest mountain from centre of Earth — Chimborazo in Ecuador is, due to Earth\'s equatorial bulge.',tag:'Mountain',facts:{Height:'8,848.86m above sea level',From_center:'Chimborazo is taller from Earth\'s center',Climbed:'First summit: Hillary & Tenzing, 1953'}},
  {icon:'🌊',name:'Mariana Trench',sci:'Challenger Deep',desc:'The deepest point on Earth at 11,034m. Pressure is 1,086 bar — 1,000x atmospheric pressure.',tag:'Ocean',facts:{Depth:'11,034 metres',Pressure:'1,086 bar',Life:'Microbes found even here'}},
  {icon:'🏜️',name:'Sahara Desert',sci:'Largest hot desert',desc:'The Sahara was green and lush 11,000 years ago. It transitions from wet to desert every ~21,000 years.',tag:'Desert',facts:{Area:'9.2 million km²',Green:'Was a grassland 11,000 years ago',Cycle:'Wet-dry cycle every ~21,000 years'}},
  {icon:'🌋',name:'Ring of Fire',sci:'Circum-Pacific Belt',desc:'90% of the world\'s earthquakes and 75% of its volcanoes occur along the Ring of Fire.',tag:'Geology',facts:{Earthquakes:'90% of world total',Volcanoes:'75% of active volcanoes',Length:'40,000 km'}},
  {icon:'🏝️',name:'Greenland',sci:'Largest island',desc:'Greenland is the world\'s largest island — 836,000 km². Australia is classified as a continent, not island.',tag:'Island',facts:{Area:'836,000 km²',Ice:'80% covered by ice sheet',Population:'~56,000 — least densely populated'}},
  {icon:'🌍',name:'Amazon River',sci:'Amazonas',desc:'Discharges 20% of all river water entering the world\'s oceans. Has no bridges — runs through jungle.',tag:'River',facts:{Discharge:'20% of all river flow to oceans',Bridges:'Zero — no bridge crosses it',Length:'6,400 km'}},
  {icon:'❄️',name:'Antarctica',sci:'Southern continent',desc:'Antarctica holds 70% of Earth\'s fresh water. If it melted, sea levels would rise 60+ metres.',tag:'Continent',facts:{Fresh_water:'70% of Earth\'s fresh water',Sea_level:'60+ metre rise if melted',Country:'Not owned by any nation — Antarctic Treaty'}},
  {icon:'🏔️',name:'Dead Sea',sci:'Hypersaline lake',desc:'The lowest point on Earth\'s surface at 430m below sea level. 10x saltier than ocean — you float effortlessly.',tag:'Lake',facts:{Elevation:'-430m below sea level',Salinity:'34% vs ocean 3.5%',Sinking:'Dropping ~1m per year'}},
  {icon:'🌐',name:'International Date Line',sci:'180th meridian',desc:'Crossing it eastward gains a day; westward loses one. It zigzags around Pacific islands to avoid splitting countries.',tag:'Concept',facts:{Crossing:'East = gain day, West = lose day',Zigzag:'Avoids splitting island nations',Official:'Not a treaty — conventional line'}},
  {icon:'🌊',name:'Great Barrier Reef',sci:'Coral reef system',desc:'Visible from space. Largest living structure on Earth — 2,300 km long. Severely threatened by bleaching.',tag:'Ecosystem',facts:{Length:'2,300 km',Visibility:'Visible from space',Bleaching:'Severely damaged — 50%+ coral lost'}},
  {icon:'🌿',name:'Amazon Rainforest',sci:'Biome',desc:'Produces 20% of Earth\'s oxygen. Home to 10% of all species on Earth. Called "lungs of the planet".',tag:'Forest',facts:{Oxygen:'~20% of Earth\'s O₂',Species:'10% of all Earth species',Deforestation:'~17% already cleared'}},
  {icon:'🏔️',name:'Tectonic Plates',sci:'Plate tectonics',desc:'Earth has 7-8 major plates moving 2-10 cm per year. In 250 million years, continents will form a new Pangaea.',tag:'Geology',facts:{Plates:'7-8 major, ~15 minor',Speed:'2-10 cm per year',Future:'New supercontinent in ~250 million years'}},
],

// ─────────────────────────────────────────────────────────────────
// TECHNOLOGY
// ─────────────────────────────────────────────────────────────────
tech: [
  {icon:'💻',name:'Moore\'s Law',sci:'Gordon Moore, 1965',desc:'The number of transistors on a chip doubles every ~2 years. Held for 50 years — now slowing.',tag:'Computing',facts:{Coined:'Gordon Moore, Intel co-founder, 1965',Held:'~50 years',Status:'Slowing — approaching physical limits'}},
  {icon:'🌐',name:'Internet',sci:'ARPANET origin',desc:'ARPANET\'s first message (October 29, 1969) was "LO" — the system crashed trying to send "LOGIN".',tag:'Network',facts:{First_message:'"LO" — crashed sending "LOGIN"',ARPANET:'1969 — 4 nodes initially',TCP_IP:'Vinton Cerf & Bob Kahn, 1974'}},
  {icon:'📱',name:'Smartphone',sci:'iPhone 2007',desc:'The first iPhone had no copy-paste, no App Store, and no 3G. Steve Jobs called it "5 years ahead of anything else".',tag:'Device',facts:{iPhone_1:'No copy-paste, no App Store, no 3G',2007:'Announced January 9',Android:'Google announced Android in 2007 too'}},
  {icon:'🔐',name:'RSA Encryption',sci:'Asymmetric cryptography',desc:'Relies on factoring large prime numbers being computationally impossible. Quantum computers could break it.',tag:'Security',facts:{Math:'Factoring large primes',Named:'Rivest, Shamir, Adleman (1977)',Quantum_threat:'Shor\'s algorithm could break it'}},
  {icon:'🤖',name:'Artificial Intelligence',sci:'Machine Learning',desc:'The term "artificial intelligence" was coined in 1956 by John McCarthy at the Dartmouth Conference.',tag:'AI',facts:{Term_coined:'John McCarthy, 1956',Dartmouth:'First AI conference',Neural_nets:'Inspired by biological neurons'}},
  {icon:'⚡',name:'Transistor',sci:'Bell Labs, 1947',desc:'Invented at Bell Labs on December 23, 1947. The entire modern world runs on transistors — 15 quintillion made per year.',tag:'Electronics',facts:{Invented:'Bell Labs, December 23, 1947',Annual_production:'~15 quintillion per year',Modern:'2nm chips have billions of transistors'}},
  {icon:'🛰️',name:'GPS',sci:'Global Positioning System',desc:'Uses Einstein\'s relativity corrections — without them, GPS would drift 10km per day due to time dilation.',tag:'Navigation',facts:{Satellites:'31 active satellites',Relativity:'Requires relativity corrections',Accuracy:'~3-5 metres civilian'}},
  {icon:'💾',name:'Floppy Disk',sci:'IBM, 1967',desc:'The save icon of every software app. Still used in some hospitals, aircraft, and industrial systems.',tag:'Storage',facts:{Invented:'IBM, 1967',Capacity:'1.44 MB (3.5" format)',Still_used:'Boeing 747s used them until 2020s'}},
  {icon:'🔋',name:'Lithium-Ion Battery',sci:'John Goodenough',desc:'Invented by John Goodenough at age 57. He won the Nobel Prize at age 97 — the oldest Nobel laureate ever.',tag:'Energy',facts:{Inventor:'John Goodenough, 1980',Nobel:'Awarded 2019 — at age 97',Oldest_Nobel:'97 years old — record'}},
  {icon:'🖥️',name:'ENIAC',sci:'First general computer',desc:'ENIAC (1945) weighed 30 tonnes, used 18,000 vacuum tubes, and consumed 150kW — the entire city block.',tag:'Computing',facts:{Weight:'30 tonnes',Vacuum_tubes:'18,000',Power:'150kW to run'}},
  {icon:'📡',name:'Radio Waves',sci:'Heinrich Hertz',desc:'Heinrich Hertz proved electromagnetic waves exist in 1887. He said the discovery was useless. Within 15 years: radio.',tag:'Physics',facts:{Hertz:'"Useless discovery" he said',Marconi:'First transatlantic radio 1901',Speed:'Travels at speed of light'}},
  {icon:'🌍',name:'Blockchain',sci:'Distributed ledger',desc:'Bitcoin\'s blockchain has never been hacked. The vulnerability is always in the systems around it, not the chain itself.',tag:'Technology',facts:{Bitcoin:'First blockchain, 2009',Immutable:'No block ever changed',Energy:'Bitcoin uses ~120 TWh/year'}},
],

// ─────────────────────────────────────────────────────────────────
// WEATHER
// ─────────────────────────────────────────────────────────────────
weather: [
  {icon:'⛈️',name:'Thunderstorm',sci:'Cumulonimbus',desc:'Lightning is 5x hotter than the surface of the Sun — 30,000°C. Thunder is the rapid expansion of heated air.',tag:'Storm',facts:{Lightning_temp:'30,000°C — 5x hotter than Sun surface',Thunder:'Rapid air expansion from heat',Frequency:'~40-50 lightning strikes/second globally'}},
  {icon:'🌀',name:'Hurricane',sci:'Tropical Cyclone',desc:'A hurricane releases energy equivalent to 10,000 nuclear bombs per day. Needs 26°C+ sea water to form.',tag:'Storm',facts:{Energy:'~10,000 nuclear bombs per day',Formation:'Needs 26°C+ ocean water',Eye:'Centre — calm, lowest pressure'}},
  {icon:'🌪️',name:'Tornado',sci:'Vortex',desc:'Can have wind speeds of 480 km/h. The US gets more tornadoes than any other country — ~1,000 per year.',tag:'Storm',facts:{Wind_speed:'Up to 480 km/h',USA:'~1,000 per year',Tornado_Alley:'Kansas, Oklahoma, Texas'}},
  {icon:'❄️',name:'Blizzard',sci:'Winter storm',desc:'Official blizzard requires winds of 56 km/h+, visibility under 400m, and 3+ hours duration.',tag:'Winter',facts:{Definition:'56 km/h winds, 400m visibility, 3+ hours',Worst:'Bhutan 1993 — 9.9m of snow',Thundersnow:'Rare — lightning during blizzard'}},
  {icon:'🌈',name:'Rainbow',sci:'Optical phenomenon',desc:'A rainbow is a full circle — you only see a semicircle from the ground. From a plane you can see the full ring.',tag:'Optics',facts:{Shape:'Full circle — ground shows half',Colours:'Red on outside, violet inside (primary bow)',Double:'Second bow has reversed colours'}},
  {icon:'🌫️',name:'Fog',sci:'Ground-level cloud',desc:'Fog is just a cloud at ground level. The difference between fog and mist is visibility — fog is under 1km.',tag:'Atmospheric',facts:{Definition:'Cloud at ground level',Fog_vs_mist:'Fog under 1km visibility',Thickest:'Grand Banks of Newfoundland'}},
  {icon:'⚡',name:'Ball Lightning',sci:'Unexplained phenomenon',desc:'Rare luminous spheres that appear during thunderstorms. Science still doesn\'t have a full explanation.',tag:'Mystery',facts:{Appearance:'Glowing sphere during storms',Duration:'Seconds to minutes',Status:'No fully accepted scientific explanation'}},
  {icon:'🌡️',name:'Heat Island',sci:'Urban heat island',desc:'Cities can be 5-10°C hotter than surrounding rural areas due to concrete, asphalt, and waste heat.',tag:'Climate',facts:{Difference:'5-10°C hotter in cities',Cause:'Dark surfaces absorb heat',Mitigation:'Green roofs, parks, light surfaces'}},
  {icon:'🌬️',name:'Chinook Wind',sci:'Föhn wind',desc:'Warm, dry winds that descend mountain slopes. Can raise temperature by 20°C in minutes. Called "snow eater".',tag:'Wind',facts:{Temperature:'Can rise 20°C in minutes',Name:'"Snow eater" by Indigenous people',Europe:'Called Föhn in the Alps'}},
  {icon:'🌊',name:'El Niño',sci:'ENSO warm phase',desc:'Periodic warming of Pacific waters that disrupts global weather patterns. Occurs every 2-7 years.',tag:'Climate',facts:{Period:'Every 2-7 years',Effects:'Drought in Australia, floods in South America',Name:'Spanish for "The Christ Child" — peaks at Christmas'}},
  {icon:'☁️',name:'Mammatus Clouds',sci:'Cumulonimbus mammatus',desc:'Rare pouch-like clouds hanging from a storm\'s base. Often a sign of severe weather approaching.',tag:'Cloud',facts:{Appearance:'Pouches hanging from cloud base',Association:'Severe thunderstorms',Cause:'Cold air sinking into warm, moist air'}},
  {icon:'🌤️',name:'Nacreous Clouds',sci:'Polar stratospheric clouds',desc:'Rare iridescent clouds forming 15-25km up in polar winters. Beautiful — but destroy ozone.',tag:'Cloud',facts:{Altitude:'15-25 km — stratosphere',Iridescence:'Ice crystals diffract light',Ozone:'Contribute to ozone destruction'}},
  {icon:'🌧️',name:'Rain Shadow',sci:'Orographic effect',desc:'Mountains force air up, causing rain on the windward side. The leeward side gets little rain — a "shadow".',tag:'Phenomenon',facts:{Mechanism:'Orographic lift and precipitation',Example:'Atacama Desert behind Andes',Result:'Driest place on Earth on one side'}},
  {icon:'❄️',name:'Snowflake',sci:'Ice crystal',desc:'No two snowflakes are identical in the strict sense. A snowflake can take up to 2 hours to fall from cloud to ground.',tag:'Crystal',facts:{Unique:'No two identical at molecular level',Fall_time:'Up to 2 hours from cloud',Structure:'Always 6-sided — hexagonal crystal'}},
  {icon:'🌬️',name:'Jet Stream',sci:'High-altitude wind band',desc:'Rivers of fast-moving air 9-16km up. Speeds up planes flying east, slows them flying west. Can reach 450 km/h.',tag:'Atmospheric',facts:{Altitude:'9-16 km up',Speed:'Up to 450 km/h',Flight:'Saves ~2 hours on transatlantic east-bound flights'}},
  {icon:'⛅',name:'Cloud Iridescence',sci:'Irisation',desc:'Rainbow-like colours seen in clouds when tiny water droplets or ice crystals diffract sunlight.',tag:'Optics',facts:{Cause:'Diffraction by uniform droplets',Best_seen:'Near the sun, slightly obscured',Rare:'Requires very uniform droplet sizes'}},
  {icon:'🌩️',name:'Dry Lightning',sci:'Arid thunderstorm',desc:'Lightning without rain reaching the ground — rain evaporates in hot, dry air. Major cause of wildfires.',tag:'Fire',facts:{Cause:'Rain evaporates before landing',Danger:'Primary cause of wildfires',Region:'Common in US West and Australia'}},
  {icon:'🌊',name:'Rogue Wave',sci:'Extreme wave',desc:'Waves over 25m appearing suddenly from calm seas. Once thought mythical — now confirmed by satellite.',tag:'Ocean',facts:{Height:'25+ metres',Confirmed:'Draupner wave (1995) first satellite proof',Cause:'Wave superposition and focusing'}},
],

}; // end DICT_EXTRA_DATA2

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Dictionary Expansion Pack 3
//  Adds: Science, Psychology, Philosophy, Art, Architecture,
//        Languages, Sports, Movies, Internet, Mythology
// ═══════════════════════════════════════════════════════════════════

(function(){
  if (typeof DICT_DATA === 'undefined') return;
  var newCats = ['science','psychology','philosophy','art','architecture','languages','sports','internet','mythology','coding'];
  newCats.forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat] = [];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_EXPANSION[cat]||[]);
  })();
  // Also expand existing categories
  ['words','animals','space','history','food','music','body','geography','tech','weather','elements','symbols','emoji','math','plants'].forEach(function(cat){
    if(DICT_EXPANSION[cat] && DICT_DATA[cat]){
      DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_EXPANSION[cat]);
    }
  });

  // Add new category buttons if not already present
  var sidebar = document.getElementById('dcat-elements') && document.getElementById('dcat-elements').parentElement;
  if(sidebar){
    var newBtns = [
      {id:'science',    label:'🔬 Science'},
      {id:'psychology', label:'🧠 Psychology'},
      {id:'philosophy', label:'💭 Philosophy'},
      {id:'art',        label:'🎨 Art & Design'},
      {id:'architecture',label:'🏛️ Architecture'},
      {id:'languages',  label:'🗣️ Languages'},
      {id:'sports',     label:'⚽ Sports'},
      {id:'internet',   label:'🌐 Internet'},
      {id:'mythology',  label:'⚡ Mythology'},
      {id:'coding',     label:'💻 Coding Terms'},
    ];
    newBtns.forEach(function(cat){
      if(!document.getElementById('dcat-'+cat.id)){
        var btn = document.createElement('button');
        btn.id = 'dcat-'+cat.id;
        btn.style.cssText = 'width:100%;padding:9px 14px;border:none;border-left:3px solid transparent;background:transparent;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;font-family:Outfit,sans-serif';
        btn.textContent = cat.label;
        btn.onclick = function(){ dictSetCat(cat.id, this); };
        sidebar.appendChild(btn);
      }
    });
  }
});

const DICT_EXPANSION = {

// ── More WORDS ────────────────────────────────────────────────────
words: [
  {icon:'🌀',name:'Absurdism',sci:'Philosophy',desc:'The conflict between the human desire for meaning and the universe\'s silence. Camus explored this deeply.',tag:'Philosophy',facts:{Camus:'The Myth of Sisyphus (1942)',Response:'Embrace the absurd and live fully anyway'}},
  {icon:'✨',name:'Adumbrate',sci:'v.',desc:'To outline or sketch in a shadowy way. To foreshadow.',tag:'Literary',facts:{Origin:'Latin adumbrare (to shade)'}},
  {icon:'🌊',name:'Aegis',sci:'n.',desc:'Under someone\'s protection or sponsorship. Originally the shield of Zeus.',tag:'Greek',facts:{Origin:'Zeus\'s shield in Greek mythology'}},
  {icon:'🔥',name:'Afflatus',sci:'n.',desc:'A divine creative impulse or inspiration. The breath of the divine into the creative mind.',tag:'Literary',facts:{Origin:'Latin afflatus (blown upon)',Use:'Artistic or poetic inspiration'}},
  {icon:'💡',name:'Agathokakological',sci:'adj.',desc:'Composed of both good and evil. A rare word for the dual nature of humanity.',tag:'Rare',facts:{Greek:'"Agathos" (good) + "kakos" (bad)'}},
  {icon:'🌙',name:'Alacrity',sci:'n.',desc:'Brisk and cheerful readiness. Enthusiasm and speed in doing something.',tag:'English',facts:{Origin:'Latin alacritas',Synonym:'Eagerness, promptness, zeal'}},
  {icon:'🎭',name:'Allegory',sci:'n.',desc:'A story where characters and events symbolize deeper moral or political meanings.',tag:'Literary',facts:{Examples:'Animal Farm, The Pilgrim\'s Progress',Use:'Critique of society or politics'}},
  {icon:'🔮',name:'Aloft',sci:'adv.',desc:'Up in the air; overhead.',tag:'English',facts:{Origin:'Old Norse a lopt (in the air)'}},
  {icon:'💎',name:'Ameliorate',sci:'v.',desc:'To make something bad better. To improve a difficult situation.',tag:'English',facts:{Origin:'Latin melior (better)',Synonym:'Improve, mitigate, alleviate'}},
  {icon:'🌈',name:'Anachronism',sci:'n.',desc:'Something placed in the wrong time period. A smartphone in a medieval movie is anachronistic.',tag:'Literary',facts:{Greek:'Ana (against) + chronos (time)'}},
  {icon:'⚡',name:'Anagnorisis',sci:'n.',desc:'The moment of critical discovery in a dramatic work. When the hero realises the truth.',tag:'Drama',facts:{Aristotle:'Defined in Poetics',Examples:'Oedipus realising he killed his father'}},
  {icon:'🌿',name:'Animism',sci:'n.',desc:'The belief that all things — rivers, mountains, animals — have a spirit or soul.',tag:'Philosophy',facts:{Prevalence:'Found in most indigenous cultures worldwide'}},
  {icon:'🧠',name:'Anomie',sci:'n.',desc:'Social instability from a breakdown of values and norms. Durkheim\'s concept.',tag:'Sociology',facts:{Coined:'Emile Durkheim, 1893',Modern:'Alienation and purposelessness in modern society'}},
  {icon:'🌊',name:'Antediluvian',sci:'adj.',desc:'Belonging to the time before the Biblical flood. Extremely old-fashioned.',tag:'English',facts:{Origin:'Latin ante (before) + diluvium (flood)',Use:'Very old, primitive, outdated'}},
  {icon:'🎵',name:'Aphorism',sci:'n.',desc:'A pithy observation expressing a general truth. "The unexamined life is not worth living."',tag:'Literary',facts:{Examples:'"Actions speak louder than words"',Origin:'Greek aphorismos (definition)'}},
  {icon:'💡',name:'Apocryphal',sci:'adj.',desc:'Of doubtful authenticity. A story widely believed but probably not true.',tag:'English',facts:{Origin:'Greek apokruphos (hidden)',Use:'Stories about historical figures that are probably invented'}},
  {icon:'🌙',name:'Apotheosis',sci:'n.',desc:'The highest point in the development of something. The elevation of a person to divine status.',tag:'Literary',facts:{Greek:'Apo (away) + theos (god)'}},
  {icon:'🔥',name:'Arcane',sci:'adj.',desc:'Understood by few; mysterious and secret.',tag:'English',facts:{Origin:'Latin arcanus (secret)'}},
  {icon:'✨',name:'Ardor',sci:'n.',desc:'Intense enthusiasm or passion. A burning eagerness.',tag:'English',facts:{Origin:'Latin ardor (flame)',Synonym:'Passion, zeal, fervour'}},
  {icon:'🌀',name:'Argot',sci:'n.',desc:'The jargon or slang of a particular group. Criminal argot, thieves\' argot.',tag:'French',facts:{Origin:'French argot (slang of criminals)'}},
],

// ── SCIENCE ──────────────────────────────────────────────────────
science: [
  {icon:'⚛️',name:'Quantum Entanglement',sci:'Physics',desc:'Two particles linked so measuring one instantly affects the other, regardless of distance. Einstein called it "spooky action at a distance."',tag:'Quantum',facts:{Einstein:'Called it spooky action at a distance',Proven:'Bell\'s theorem experiments confirmed it',Use:'Quantum cryptography and computing'}},
  {icon:'🧬',name:'CRISPR-Cas9',sci:'Gene editing',desc:'A molecular tool that cuts DNA at precise locations, allowing genes to be edited. Revolutionized biology since 2012.',tag:'Biology',facts:{Discovered:'Jennifer Doudna and Emmanuelle Charpentier',Nobel:'2020 Nobel Prize in Chemistry',Applications:'Disease treatment, agriculture'}},
  {icon:'🌊',name:'Entropy',sci:'Thermodynamics',desc:'The tendency of systems to move toward disorder. The universe\'s entropy always increases — the second law of thermodynamics.',tag:'Physics',facts:{Second_law:'Entropy of universe always increases',Arrow_of_time:'Why time moves forward',Heat_death:'Universe\'s ultimate fate'}},
  {icon:'🔬',name:'Mitosis',sci:'Cell division',desc:'The process by which a cell duplicates its DNA and splits into two identical daughter cells.',tag:'Biology',facts:{Phases:'Prophase, metaphase, anaphase, telophase',Result:'Two identical cells',Vs_meiosis:'Meiosis produces 4 genetically unique cells'}},
  {icon:'⚡',name:'Electromagnetism',sci:'Physics',desc:'One of the four fundamental forces. Governs electricity, magnetism, light, and chemistry.',tag:'Physics',facts:{Maxwell:'James Clerk Maxwell unified it in 1865',Photon:'Carrier particle',Unification:'First force to be unified (with weak force)'}},
  {icon:'🌍',name:'Plate Tectonics',sci:'Geology',desc:'Earth\'s crust is divided into plates that move 2-10cm per year. Explains earthquakes, volcanoes, and mountain formation.',tag:'Geology',facts:{Proposed:'Alfred Wegener, 1912',Mechanism:'Convection currents in the mantle',Evidence:'Matching fossils on separated continents'}},
  {icon:'🧪',name:'The pH Scale',sci:'Chemistry',desc:'Measures acidity (0-14). Below 7 is acidic, 7 is neutral, above 7 is alkaline. A pH change of 1 is a 10x change in acidity.',tag:'Chemistry',facts:{Logarithmic:'Each unit is 10x change',Stomach_acid:'pH 1.5-3.5',Blood:'pH 7.35-7.45'}},
  {icon:'🔭',name:'Doppler Effect',sci:'Physics',desc:'The change in frequency of waves when the source moves relative to the observer. Explains ambulance sirens and red-shift.',tag:'Physics',facts:{Sound:'Ambulance siren changes pitch',Light:'Red-shift shows galaxies moving away',Named:'Christian Doppler, 1842'}},
  {icon:'🧬',name:'Epigenetics',sci:'Biology',desc:'Changes in gene expression without changes to DNA sequence. Your environment and behaviour can affect gene expression.',tag:'Biology',facts:{Meaning:'Above genetics',Heritable:'Some epigenetic changes are inherited',Examples:'Stress, diet, trauma affect gene expression'}},
  {icon:'⚛️',name:'Antimatter',sci:'Particle physics',desc:'Every particle has an antiparticle with opposite charge. Matter and antimatter annihilate each other on contact.',tag:'Physics',facts:{Discovery:'Paul Dirac predicted it 1928',Asymmetry:'Universe has more matter than antimatter (why we exist)',Use:'PET scans in medicine'}},
  {icon:'🌊',name:'Chaos Theory',sci:'Mathematics',desc:'Small changes in initial conditions lead to wildly different outcomes. The butterfly effect.',tag:'Physics',facts:{Lorenz:'Edward Lorenz coined butterfly effect 1972',Fractals:'Chaotic systems produce fractal patterns',Weather:'Why long-term forecasting is impossible'}},
  {icon:'🔬',name:'Osmosis',sci:'Biology/Chemistry',desc:'Water moves through a semi-permeable membrane from low to high solute concentration until equilibrium.',tag:'Biology',facts:{Reverse_osmosis:'Purifies water — used in desalination',Turgor_pressure:'Why plants stay rigid',Cells:'How cells regulate water content'}},
  {icon:'⚡',name:'Superconductivity',sci:'Physics',desc:'Some materials conduct electricity with zero resistance at very low temperatures. Could revolutionize energy.',tag:'Physics',facts:{Temperature:'Usually near absolute zero (-273°C)',MRI:'Superconducting magnets power MRI machines',Room_temp:'Room-temperature superconductor is the holy grail'}},
  {icon:'🧪',name:'Catalysis',sci:'Chemistry',desc:'A catalyst speeds up a chemical reaction without being consumed. Enzymes are biological catalysts.',tag:'Chemistry',facts:{Nobel:'Many Nobel Prizes in catalysis',Enzymes:'Biological catalysts',Industrial:'90% of industrial chemicals use catalysts'}},
  {icon:'🌍',name:'Carbon Cycle',sci:'Earth Science',desc:'Carbon moves between atmosphere, oceans, land, and living things in a continuous cycle vital to all life.',tag:'Earth Science',facts:{Disruption:'Fossil fuel burning breaks the cycle',Sink:'Oceans absorb 25% of CO₂',Residence_time:'CO₂ stays 300-1000 years'}},
],

// ── PSYCHOLOGY ────────────────────────────────────────────────────
psychology: [
  {icon:'🧠',name:'Cognitive Dissonance',sci:'Leon Festinger, 1957',desc:'The discomfort felt when holding two contradictory beliefs, or when behaviour conflicts with beliefs.',tag:'Social',facts:{Festinger:'Coined 1957 at Stanford',Resolution:'Change belief, change behaviour, or rationalise',Classic_experiment:'$1 vs $20 for lying — $1 group believed the task more'}},
  {icon:'🔮',name:'Confirmation Bias',sci:'Cognitive bias',desc:'The tendency to search for and favour information that confirms existing beliefs while ignoring contradictions.',tag:'Cognitive',facts:{Universal:'Affects everyone, even scientists',Social_media:'Algorithms exploit this bias',Counter:'Actively seek contradicting evidence'}},
  {icon:'💭',name:'Dunning-Kruger Effect',sci:'1999',desc:'People with limited knowledge overestimate their competence. Experts underestimate theirs.',tag:'Social',facts:{Kruger_Dunning:'1999 Cornell study',Irony:'The incompetent can\'t recognise their incompetence',Opposite:'Impostor syndrome — competent people doubt themselves'}},
  {icon:'🌊',name:'Flow State',sci:'Csikszentmihalyi',desc:'Complete absorption in an activity. Time disappears. Named by Mihaly Csikszentmihalyi.',tag:'Positive',facts:{Conditions:'Challenge slightly exceeds skill',Activities:'Sports, music, coding, art',Benefits:'Happiness, peak performance'}},
  {icon:'🎭',name:'The Halo Effect',sci:'Cognitive bias',desc:'If we perceive one positive quality in someone, we assume they have other positive qualities.',tag:'Social',facts:{Thorndike:'Edward Thorndike, 1920',Example:'Attractive people judged as more intelligent',Advertising:'Celebrities endorse products via halo effect'}},
  {icon:'⚡',name:'Operant Conditioning',sci:'B.F. Skinner',desc:'Behaviour is shaped by its consequences: rewards increase behaviour, punishments decrease it.',tag:'Behavioural',facts:{Skinner:'B.F. Skinner, mid-20th century',Reinforcement:'Positive and negative reinforcement',Apps:'Social media uses variable ratio reinforcement — slot machines'}},
  {icon:'🧬',name:'Attachment Theory',sci:'John Bowlby',desc:'Early bonds with caregivers shape all future relationships. Four attachment styles: secure, anxious, avoidant, disorganised.',tag:'Developmental',facts:{Bowlby:'John Bowlby, 1960s',Ainsworth:'Mary Ainsworth added styles',Impact:'Predicts relationship patterns throughout life'}},
  {icon:'🌙',name:'Maslow\'s Hierarchy',sci:'Abraham Maslow, 1943',desc:'Five levels of needs: physiological, safety, love, esteem, self-actualisation. Lower needs must be met first.',tag:'Motivation',facts:{Triangle:'Often shown as pyramid',Criticism:'Not always hierarchical',Self-actualisation:'Reaching full potential'}},
  {icon:'💎',name:'Gaslighting',sci:'Psychological manipulation',desc:'Making someone question their own memory and perception. Named after the 1944 film Gaslight.',tag:'Abuse',facts:{Film:'Gaslight (1944)',Signs:'Denying events happened, shifting blame',Danger:'Can cause victim to doubt their sanity'}},
  {icon:'🔬',name:'Milgram Experiment',sci:'1961',desc:'Stanley Milgram showed 65% of people would administer lethal electric shocks when ordered by authority.',tag:'Social',facts:{Milgram:'Stanley Milgram, Yale, 1961',Eichmann:'Inspired by Adolf Eichmann\'s trial',Lesson:'Ordinary people obey authority to terrible extremes'}},
  {icon:'🌿',name:'Neuroplasticity',sci:'Brain science',desc:'The brain\'s ability to rewire itself in response to experience and learning throughout life.',tag:'Neuroscience',facts:{Discovery:'Overturned dogma that adult brains cannot change',Learning:'How skills and habits are formed',Recovery:'Allows recovery from brain injury'}},
  {icon:'✨',name:'Pavlovian Conditioning',sci:'Ivan Pavlov, 1897',desc:'Pairing a neutral stimulus with an unconditioned stimulus creates a conditioned response. Pavlov\'s dogs salivated at a bell.',tag:'Behavioural',facts:{Dogs:'Dogs salivated to bell associated with food',Pavlov:'Ivan Pavlov, Nobel Prize 1904',Modern:'Advertising uses classical conditioning constantly'}},
],

// ── PHILOSOPHY ────────────────────────────────────────────────────
philosophy: [
  {icon:'💭',name:'Solipsism',sci:'Epistemology',desc:'The view that only your own mind can be known to exist. Everything else might be an illusion.',tag:'Metaphysics',facts:{Problem:'Cannot be disproven',Matrix:'Inspired The Matrix premise',Response:'Pragmatism — act as if others exist'}},
  {icon:'🌀',name:'Nihilism',sci:'Philosophy',desc:'Life has no inherent meaning, purpose, or value. Associated with Nietzsche (who actually opposed it).',tag:'Existentialism',facts:{Nietzsche:'He warned against nihilism',Types:'Existential, moral, epistemological',Dostoyevsky:'Explored in Crime and Punishment'}},
  {icon:'⚡',name:'The Trolley Problem',sci:'Philippa Foot, 1967',desc:'Do you divert a trolley to kill one person instead of five? Tests utilitarian vs deontological ethics.',tag:'Ethics',facts:{Foot:'Philippa Foot, 1967',Variations:'Many — fat man, loop track, etc.',Reveals:'Our moral intuitions are inconsistent'}},
  {icon:'🔮',name:'Utilitarianism',sci:'Bentham / Mill',desc:'The right action is what produces the greatest happiness for the greatest number.',tag:'Ethics',facts:{Bentham:'Jeremy Bentham founded it',Mill:'John Stuart Mill refined it',Criticism:'Can justify harming the minority for the majority'}},
  {icon:'🌊',name:'Stoicism',sci:'Ancient Greece',desc:'Focus only on what you can control. Accept what you cannot. Founded by Zeno of Citium around 300 BCE.',tag:'Ethics',facts:{Founders:'Zeno, Epictetus, Marcus Aurelius, Seneca',Core:'Virtue is the only good',Modern:'Huge revival in self-help and therapy'}},
  {icon:'💎',name:'The Ship of Theseus',sci:'Paradox',desc:'If a ship has every plank replaced, is it the same ship? Questions identity and persistence over time.',tag:'Metaphysics',facts:{Origin:'Ancient Greek paradox',Modern:'Applied to cells replacing in human body',Sorites:'Related to sorites paradox of heaps'}},
  {icon:'🧠',name:'Cartesian Dualism',sci:'Rene Descartes',desc:'Mind and body are fundamentally different substances. The mind is non-physical; the body is physical.',tag:'Metaphysics',facts:{Descartes:'Cogito ergo sum — I think therefore I am',Problem:'How do they interact?',Modern:'Replaced by monism and materialism'}},
  {icon:'🌙',name:'Existentialism',sci:'20th century',desc:'We create our own meaning. Existence precedes essence. Associated with Sartre, Camus, Kierkegaard.',tag:'Existentialism',facts:{Sartre:'Existence precedes essence',Camus:'Absurdism — embrace meaninglessness',Kierkegaard:'Father of existentialism'}},
  {icon:'🔥',name:'Kant\'s Categorical Imperative',sci:'Immanuel Kant',desc:'Act only according to rules you would want to be universal laws. The foundation of deontological ethics.',tag:'Ethics',facts:{Kant:'Critique of Pure Reason, 1781',Formula:'Would it work if everyone did it?',Vs_consequentialism:'Duty matters more than outcomes'}},
  {icon:'✨',name:'Plato\'s Allegory of the Cave',sci:'Republic, ~380 BCE',desc:'Prisoners in a cave mistake shadows for reality. Knowledge requires leaving the comfortable familiar.',tag:'Epistemology',facts:{Plato:'The Republic, ~380 BCE',Meaning:'Most people live in illusion',Forms:'Points to Plato\'s theory of ideal forms'}},
],

// ── ART & DESIGN ──────────────────────────────────────────────────
art: [
  {icon:'🎨',name:'Impressionism',sci:'1860s-1880s France',desc:'Captured fleeting moments and light rather than precise detail. Rejected by the Paris Salon — became one of art history\'s most beloved movements.',tag:'Movement',facts:{Founded:'Monet, Renoir, Degas, Pissarro',Name:'From Monet\'s "Impression Sunrise" (1872)',Technique:'Small brushstrokes, focus on light'}},
  {icon:'🖼️',name:'The Golden Ratio',sci:'φ = 1.618...',desc:'A proportion appearing in nature and used by artists for millennia. Found in the Parthenon, Mona Lisa, and nautilus shells.',tag:'Design',facts:{Value:'1.61803398...',Nature:'Nautilus shells, flower petals, human body',Art:'Composition tool since ancient Greece'}},
  {icon:'💫',name:'Cubism',sci:'1907-1920s',desc:'Objects depicted from multiple viewpoints simultaneously. Shattered traditional perspective. Picasso and Braque pioneered it.',tag:'Movement',facts:{Founders:'Picasso and Braque',First:'Les Demoiselles d\'Avignon (1907)',Influence:'Greatest influence on 20th century art'}},
  {icon:'🌊',name:'Bauhaus',sci:'1919-1933',desc:'German design school that unified art and industrial design. "Form follows function." Killed by the Nazis in 1933.',tag:'Design',facts:{Founded:'Walter Gropius, Weimar 1919',Closed:'Nazi pressure, 1933',Legacy:'Modern graphic design, architecture, typography'}},
  {icon:'🔮',name:'Dadaism',sci:'1916-1920s',desc:'Anti-war art movement that rejected reason and logic. Embraced absurdity and chance. Precursor to surrealism.',tag:'Movement',facts:{Founded:'Zurich 1916 — Hugo Ball',Duchamp:'Fountain (urinal) as art',Reaction:'Against WWI and bourgeois society'}},
  {icon:'⚡',name:'Colour Theory',sci:'Johannes Itten',desc:'Red, yellow, blue are primary colours. Mixing gives secondary colours. Complementary colours enhance each other.',tag:'Design',facts:{Itten:'Bauhaus teacher, 1920s',Complementary:'Opposite on colour wheel',Psychology:'Colours trigger emotional responses'}},
  {icon:'🎭',name:'Negative Space',sci:'Design principle',desc:'The empty space around and between subjects that gives them breathing room and can itself become the subject.',tag:'Design',facts:{Famous:'FedEx arrow in negative space',Japanese:'Ma — negative space in Japanese aesthetics',Gestalt:'Exploits figure-ground perception'}},
  {icon:'🌿',name:'Art Nouveau',sci:'1890-1910',desc:'Organic flowing lines inspired by natural forms. Rejected industrial mass production. Gaudi\'s architecture is its peak.',tag:'Movement',facts:{Gaudi:'Sagrada Familia, Casa Batllo',Mucha:'Famous poster art',Reaction:'Against industrialisation'}},
  {icon:'💎',name:'Pointillism',sci:'Georges Seurat',desc:'Images built from tiny dots of pure colour that blend in the viewer\'s eye. Seurat\'s A Sunday on La Grande Jatte.',tag:'Technique',facts:{Seurat:'Georges Seurat, 1880s',Science:'Optical mixing vs paint mixing',Pixels:'Precursor to digital pixel art'}},
  {icon:'✨',name:'Wabi-Sabi',sci:'Japanese aesthetics',desc:'Finding beauty in imperfection, impermanence, and incompleteness. Cracked pottery, weathered wood, faded leaves.',tag:'Japanese',facts:{Wabi:'Rustic simplicity',Sabi:'Beauty of aging and wear',Philosophy:'Accepts transience and imperfection'}},
],

// ── ARCHITECTURE ──────────────────────────────────────────────────
architecture: [
  {icon:'🏛️',name:'Gothic Architecture',sci:'12th-16th century',desc:'Flying buttresses, ribbed vaults, pointed arches, and enormous stained glass windows. Notre-Dame de Paris is its masterpiece.',tag:'Medieval',facts:{Innovation:'Flying buttresses allowed thinner walls and larger windows',Height:'Competed to build the tallest spires',Notre_Dame:'Construction began 1163, took 200 years'}},
  {icon:'🏗️',name:'Brutalism',sci:'1950s-1970s',desc:'Raw concrete, geometric forms, heavy appearance. Loved and hated in equal measure. Named from French "beton brut" (raw concrete).',tag:'Modern',facts:{Name:'From beton brut — raw concrete',Le_Corbusier:'Major influence',Revival:'Currently experiencing design revival'}},
  {icon:'🌊',name:'Fallingwater',sci:'Frank Lloyd Wright, 1939',desc:'House built over a waterfall in Pennsylvania. Considered the greatest work of American architecture.',tag:'Modern',facts:{Wright:'Frank Lloyd Wright, 1939',Style:'Organic architecture',Cantilever:'Bold cantilevers over the waterfall'}},
  {icon:'⚡',name:'The Sagrada Familia',sci:'Antoni Gaudi, 1882-',desc:'Barcelona cathedral started in 1882, still under construction. Gaudi spent his last 15 years entirely dedicated to it.',tag:'Religious',facts:{Start:'1882',Expected_completion:'2026',Gaudi:'Died 1926 — hit by a tram'}},
  {icon:'🏛️',name:'Deconstructivism',sci:'Frank Gehry',desc:'Architecture that appears fragmented, chaotic, unpredictable. Challenges traditional notions of structure and form.',tag:'Modern',facts:{Gehry:'Bilbao Guggenheim, 1997',Zaha_Hadid:'Key practitioner',Inspired:'Deconstructionist philosophy'}},
  {icon:'💎',name:'Feng Shui',sci:'Ancient Chinese',desc:'The arrangement of space to harmonise with natural energy flows. Over 3,500 years old.',tag:'Traditional',facts:{Age:'3,500+ years',Principles:'Chi flow, five elements, yin and yang',Modern:'Used in architecture, interior design, city planning'}},
  {icon:'🌿',name:'Biophilic Design',sci:'Modern architecture',desc:'Incorporating nature into built environments. Living walls, natural light, water features. Proven to reduce stress.',tag:'Modern',facts:{Benefits:'Reduces stress, improves productivity',Living_walls:'Vertical gardens inside buildings',Origins:'E.O. Wilson\'s biophilia hypothesis'}},
  {icon:'🔮',name:'Geodesic Dome',sci:'Buckminster Fuller',desc:'A spherical structure of triangular elements. Most efficient way to enclose space. Bucky Fuller patented it in 1954.',tag:'Modern',facts:{Fuller:'R. Buckminster Fuller, 1954',Efficiency:'Most volume for least surface area',Example:'Epcot Center, Montreal Biosphere'}},
],

// ── LANGUAGES ─────────────────────────────────────────────────────
languages: [
  {icon:'🗣️',name:'Linguistic Relativity',sci:'Sapir-Whorf',desc:'The language you speak shapes how you think. The Sapir-Whorf hypothesis in its strong form — language determines thought.',tag:'Linguistics',facts:{Strong:'Language determines thought (mostly rejected)',Weak:'Language influences thought (evidence supports)',Colour:'Russians see more shades of blue due to two words for blue'}},
  {icon:'🌐',name:'Proto-Indo-European',sci:'Reconstructed language',desc:'The common ancestor of most European and many Asian languages, spoken ~4,500 years ago. Never written — reconstructed from patterns.',tag:'Historical',facts:{Descendants:'English, Hindi, Persian, Greek, Latin, Russian',Homeland:'Possibly Pontic steppe (Ukraine/Russia)',Word:'*pater = father in many descendants'}},
  {icon:'💬',name:'Tonal Languages',sci:'Linguistics',desc:'Languages where pitch changes word meaning. Mandarin has 4 tones — the same sound "ma" can mean mother, hemp, horse, or scold.',tag:'Phonology',facts:{Examples:'Mandarin, Cantonese, Vietnamese, Thai',Mandarin:'4 tones',Vietnamese:'6 tones'}},
  {icon:'📚',name:'Esperanto',sci:'Constructed language',desc:'The most widely spoken constructed language, created by L.L. Zamenhof in 1887. About 2 million speakers worldwide.',tag:'Conlang',facts:{Created:'L.L. Zamenhof, 1887',Speakers:'~2 million',Goal:'A universal second language for world peace'}},
  {icon:'🔤',name:'The Phoneme',sci:'Linguistics',desc:'The smallest unit of sound that changes meaning. "Cat" and "bat" differ by one phoneme. English has ~44 phonemes.',tag:'Phonology',facts:{English:'~44 phonemes, 26 letters',Smallest:'Smallest unit of meaningful sound',IPA:'International Phonetic Alphabet represents all phonemes'}},
  {icon:'✍️',name:'Logographic Writing',sci:'Writing system',desc:'Characters represent words or morphemes rather than sounds. Chinese has 50,000+ characters (2,000 for basic literacy).',tag:'Writing',facts:{Examples:'Chinese, Japanese Kanji, Egyptian hieroglyphs',Characters:'Chinese has 50,000+',Literacy:'2,000 needed for Chinese newspapers'}},
  {icon:'🌍',name:'Language Death',sci:'Sociolinguistics',desc:'A language dies roughly every 2 weeks. About 50% of the world\'s ~7,000 languages may vanish by 2100.',tag:'Endangerment',facts:{Death_rate:'One every ~2 weeks',Endangered:'3,000+ languages at risk',Most_diverse:'Papua New Guinea — 840 languages'}},
],

// ── SPORTS ────────────────────────────────────────────────────────
sports: [
  {icon:'⚽',name:'Offside Rule',sci:'Association Football',desc:'A player is offside if they are nearer the opponent\'s goal than both the ball and the second-to-last defender when the ball is played.',tag:'Football',facts:{Introduction:'1925 — changed to two defenders',VAR:'Video review changed how it\'s applied',Most_debated:'Most contested rule in football'}},
  {icon:'🏊',name:'Phelps\' Wingspan',sci:'Michael Phelps',desc:'Michael Phelps\' wingspan (arm span) is 201cm but his height is 193cm. This 8cm advantage is extraordinary for swimming.',tag:'Swimming',facts:{Gold_medals:'23 Olympic gold medals',Wingspan:'201cm vs 193cm height',Flexibility:'Double-jointed ankles — feet act like flippers'}},
  {icon:'🎾',name:'Tennis Scoring',sci:'Origin disputed',desc:'"Love" for zero, 15-30-40-game. The bizarre scoring system may come from medieval French gambling games using a clock face.',tag:'Tennis',facts:{Love:'Zero — possibly from French l\'oeuf (egg)',Clock_face:'Possibly from clock-face scoring',Deuce:'From French deux (two points needed)'}},
  {icon:'🏈',name:'The Forward Pass',sci:'American Football',desc:'The forward pass was legalised in 1906 by President Roosevelt to reduce deaths in football. It transformed the sport.',tag:'American Football',facts:{Roosevelt:'Threatened to ban football — it was killing players',1906:'Forward pass legalised',Revolution:'Changed from rugby-like game to modern football'}},
  {icon:'🏋️',name:'The Fosbury Flop',sci:'Dick Fosbury, 1968',desc:'Dick Fosbury won 1968 Olympic gold by going over the bar backwards — a technique no one had tried. Now the standard.',tag:'Athletics',facts:{Fosbury:'Dick Fosbury, Mexico City 1968',Before:'Athletes jumped forwards or straddle',Now:'Every elite high jumper uses it'}},
  {icon:'⛷️',name:'Moneyball',sci:'Sabermetrics',desc:'Billy Beane\'s 2002 Oakland A\'s used statistics rather than scouting instinct to build a cheap winning team.',tag:'Baseball',facts:{Beane:'Billy Beane, Oakland A\'s',Book:'Michael Lewis, Moneyball (2003)',Revolution:'Changed how all sports evaluate players'}},
  {icon:'🏆',name:'FIFA World Cup',sci:'1930-present',desc:'The most watched sporting event on Earth. The 2018 final had 1.12 billion viewers. More watched than the Olympics.',tag:'Football',facts:{First:'Uruguay, 1930',Viewers:'1.12 billion for 2018 final',Host_wins:'Host nation has won 6 times'}},
],

// ── INTERNET ──────────────────────────────────────────────────────
internet: [
  {icon:'🌐',name:'HTTP',sci:'HyperText Transfer Protocol',desc:'The foundation of data communication on the web. Created by Tim Berners-Lee at CERN in 1989.',tag:'Protocol',facts:{Berners_Lee:'Tim Berners-Lee, 1989',HTTPS:'S = Secure (encrypted)',First_website:'info.cern.ch — still live'}},
  {icon:'🔐',name:'End-to-End Encryption',sci:'E2E',desc:'Only the sender and recipient can read messages. Not even the service provider can access them.',tag:'Security',facts:{Examples:'WhatsApp, Signal, iMessage',How:'Public-private key cryptography',Backdoors:'Governments want backdoors — security experts oppose'}},
  {icon:'🤖',name:'Bot Traffic',sci:'Internet traffic',desc:'About 49% of all internet traffic is bots — automated scripts. Not all are malicious; search crawlers are bots too.',tag:'Security',facts:{Amount:'~49% of internet traffic',Good_bots:'Search crawlers, monitoring bots',Bad_bots:'DDoS attacks, credential stuffing'}},
  {icon:'📡',name:'Net Neutrality',sci:'Policy',desc:'The principle that ISPs must treat all internet traffic equally. Preventing ISPs from blocking or slowing specific sites.',tag:'Policy',facts:{FCC:'US repealed it in 2017',EU:'Protected by law in Europe',Debate:'Ongoing globally'}},
  {icon:'💾',name:'The Cloud',sci:'Cloud computing',desc:'Servers hosted in massive data centres worldwide. AWS, Google Cloud, Azure host a huge fraction of the internet.',tag:'Infrastructure',facts:{AWS:'Amazon Web Services — 33% market share',Energy:'Data centres use ~1% of world electricity',Location:'Not actually in the sky — mostly in rural areas'}},
  {icon:'🌍',name:'The Dark Web',sci:'Tor network',desc:'A part of the internet only accessible via the Tor browser. Not indexed by search engines. Not all of it is illegal.',tag:'Network',facts:{Tor:'The Onion Router — developed by US Navy',Size:'Small — estimated <0.01% of the web',Uses:'Journalism, privacy, crime'}},
  {icon:'🔗',name:'Hyperlink',sci:'Ted Nelson coined hypertext',desc:'Clickable links between documents. Proposed by Ted Nelson in 1965. The foundation of the web.',tag:'Web',facts:{Nelson:'Ted Nelson, 1965',Berners_Lee:'Implemented in WWW in 1991',Anchor:'HTML a href tag'}},
  {icon:'🧩',name:'The Turing Test',sci:'Alan Turing, 1950',desc:'Can a machine convince a human it\'s also human? If yes, it passes the Turing Test and can be considered intelligent.',tag:'AI',facts:{Paper:'Computing Machinery and Intelligence, 1950',Passed:'Some claim GPT-4 passes informal versions',Criticism:'John Searle\'s Chinese Room thought experiment'}},
],

// ── MYTHOLOGY ────────────────────────────────────────────────────
mythology: [
  {icon:'⚡',name:'Zeus / Jupiter',sci:'King of Olympians',desc:'King of the Greek gods. God of sky, lightning, and thunder. Roman equivalent: Jupiter. His weapon is the thunderbolt.',tag:'Greek/Roman',facts:{Mount:'Olympus',Symbol:'Thunderbolt, eagle, oak tree',Weakness:'Famous for his many affairs'}},
  {icon:'🌊',name:'Poseidon / Neptune',sci:'God of the Sea',desc:'God of the sea, earthquakes, and horses. Created horses by striking his trident on the ground.',tag:'Greek/Roman',facts:{Trident:'Three-pronged spear',Horses:'Said to have created them',Atlantis:'Often associated with its sinking'}},
  {icon:'🔥',name:'Prometheus',sci:'Titan',desc:'Stole fire from the gods and gave it to humanity. Punished by Zeus — chained to a rock, eagle ate his liver daily. It regrew.',tag:'Greek',facts:{Fire:'Symbol of knowledge and civilisation',Punishment:'Eternal liver-eating eagle',Prometheus_Bound:'Aeschylus\'s play'}},
  {icon:'🌙',name:'Anansi',sci:'West African/Caribbean',desc:'The spider god of stories and wisdom from Ashanti mythology. Tricked more powerful gods to own all the world\'s stories.',tag:'African',facts:{Ashanti:'Ghanaian Ashanti mythology',Spider:'Always depicted as spider',Diaspora:'Survived in Caribbean via slave trade'}},
  {icon:'🐉',name:'The Nine-Headed Hydra',sci:'Greek mythology',desc:'For every head Heracles cut off, two grew back. He and Iolaus learned to burn the stumps — defeating it.',tag:'Greek',facts:{Heracles:'Second Labour of Heracles',Lernaean:'Also called Lernaean Hydra',Poison:'Its blood and breath were lethal'}},
  {icon:'⚔️',name:'Ragnarok',sci:'Norse mythology',desc:'The apocalyptic battle at the end of the Norse world. Gods and giants destroy each other. Then a new world rises.',tag:'Norse',facts:{Odin:'Killed by Fenrir wolf',Thor:'Kills the Midgard Serpent, dies from its venom',Survivors:'Some gods and humans survive to repopulate'}},
  {icon:'🌸',name:'Amaterasu',sci:'Japanese mythology',desc:'The Japanese sun goddess. When she hid in a cave, the world went dark. Gods lured her out with a great celebration.',tag:'Japanese',facts:{Shinto:'Chief deity of Shinto religion',Cave:'Her hiding plunged world into darkness',Emperor:'Japanese emperors claim descent from her'}},
  {icon:'💀',name:'Anubis',sci:'Egyptian mythology',desc:'The jackal-headed god of the afterlife. Guided souls and weighed their hearts against a feather. Heavy heart = devoured.',tag:'Egyptian',facts:{Jackal_head:'Associated with death and mummification',Scale:'Weighed heart against feather of Ma\'at',Devourer:'Ammit ate the unworthy heart'}},
  {icon:'🔱',name:'The Mahabharata',sci:'Hindu epic',desc:'The longest poem ever written — 1.8 million words. Contains the Bhagavad Gita. 10x longer than the Iliad and Odyssey combined.',tag:'Hindu',facts:{Length:'1.8 million words',Contains:'Bhagavad Gita',Battle:'Kurukshetra War — Pandavas vs Kauravas'}},
  {icon:'🌟',name:'Quetzalcoatl',sci:'Mesoamerican',desc:'The feathered serpent god of the Aztec and Maya. God of wind, air, and learning. One of the most important Mesoamerican deities.',tag:'Aztec/Maya',facts:{Feathered:'Serpent with feathers — combines earth and sky',Toltec:'Also worshipped by Toltecs and Maya',Return:'Cortez may have been mistaken for him'}},
],

// ── CODING TERMS ──────────────────────────────────────────────────
coding: [
  {icon:'💻',name:'Recursion',sci:'Computer Science',desc:'A function that calls itself. Must have a base case to stop, or it runs forever (stack overflow).',tag:'Concept',facts:{Base_case:'Must exist or you get infinite recursion',Classic:'Fibonacci, factorial, tree traversal',Joke:'"To understand recursion, see: recursion"'}},
  {icon:'🔄',name:'Big O Notation',sci:'Algorithm complexity',desc:'Describes how an algorithm\'s performance scales with input size. O(n²) is much worse than O(log n) for large inputs.',tag:'Algorithms',facts:{O1:'Constant time — ideal',On:'Linear — acceptable',On2:'Quadratic — becomes slow fast',Ologn:'Logarithmic — very efficient'}},
  {icon:'🌐',name:'REST API',sci:'Representational State Transfer',desc:'An architectural style for web services. Uses HTTP methods (GET, POST, PUT, DELETE) to interact with resources.',tag:'Web Dev',facts:{Fielding:'Roy Fielding, 2000 dissertation',Stateless:'Server stores no client state',vs_GraphQL:'GraphQL gives clients more control over data fetched'}},
  {icon:'⚡',name:'Mutex',sci:'Concurrency',desc:'A Mutual Exclusion lock. Prevents multiple threads from accessing the same resource simultaneously.',tag:'Systems',facts:{Deadlock:'Two threads waiting for each other — frozen forever',Race_condition:'When result depends on timing of threads',Semaphore:'More general version of mutex'}},
  {icon:'🔧',name:'Idempotency',sci:'API Design',desc:'An operation that produces the same result no matter how many times it\'s called. GET and PUT are idempotent; POST is not.',tag:'API Design',facts:{GET:'Always idempotent',POST:'Not idempotent — creates new resource each time',Importance:'Critical for safe retries in distributed systems'}},
  {icon:'🧩',name:'Polymorphism',sci:'OOP',desc:'The ability of different objects to respond to the same message differently. A dog and a cat both "speak" but differently.',tag:'OOP',facts:{Types:'Compile-time (overloading) and runtime (overriding)',Duck_typing:'If it walks like a duck and quacks like a duck...',Languages:'Java, Python, C++ all support it'}},
  {icon:'🔐',name:'SQL Injection',sci:'Security',desc:'Inserting malicious SQL code into an input field to manipulate a database. One of the oldest and most common web vulnerabilities.',tag:'Security',facts:{XKCD:'Little Bobby Tables comic is famous',Prevention:'Parameterised queries / prepared statements',OWASP:'Consistently in top 10 web vulnerabilities'}},
  {icon:'💾',name:'Git',sci:'Version control',desc:'Distributed version control system created by Linus Torvalds in 2005. The most widely used VCS in the world.',tag:'Tools',facts:{Torvalds:'Created in 2 weeks, named it after himself (git = idiot)',GitHub:'Built on top of Git',Commit:'Snapshot of your project at a point in time'}},
  {icon:'🏗️',name:'SOLID Principles',sci:'Software Design',desc:'Five design principles for OOP: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',tag:'Design',facts:{Robert_Martin:'Uncle Bob Martin',Acronym:'Each letter is a principle',Goal:'Maintainable, scalable, testable code'}},
  {icon:'🌊',name:'The Halting Problem',sci:'Alan Turing, 1936',desc:'It\'s impossible to write a program that determines whether any given program will halt or run forever. A fundamental limit of computation.',tag:'Theory',facts:{Turing:'Alan Turing proved it 1936',Proof:'By contradiction — assuming it exists leads to paradox',Implication:'Some problems are fundamentally unsolvable by computers'}},
],

}; // end DICT_EXPANSION

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Hyper Dictionary Expansion
//  Adds 400+ entries across 12 new and existing categories
// ═══════════════════════════════════════════════════════════════════

(function(){
  if(typeof DICT_DATA==='undefined') return;
  var cats = Object.keys(HYPER_DICT);
  cats.forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat]=[];
    DICT_DATA[cat] = DICT_DATA[cat].concat(HYPER_DICT[cat]);
  })();
  // Inject new sidebar buttons
  var sb = document.getElementById('dcat-elements')&&document.getElementById('dcat-elements').parentElement;
  if(sb){
    var newCats=[
      {id:'science',    label:'🔬 Science'},
      {id:'psychology', label:'🧠 Psychology'},
      {id:'philosophy', label:'💭 Philosophy'},
      {id:'art',        label:'🎨 Art & Design'},
      {id:'architecture',label:'🏛️ Architecture'},
      {id:'languages',  label:'🗣️ Languages'},
      {id:'sports',     label:'⚽ Sports'},
      {id:'internet',   label:'🌐 Internet'},
      {id:'mythology',  label:'⚡ Mythology'},
      {id:'coding',     label:'💻 Coding'},
      {id:'economics',  label:'💰 Economics'},
      {id:'medicine',   label:'🩺 Medicine'},
      {id:'physics',    label:'⚛️ Physics'},
      {id:'biology',    label:'🧬 Biology'},
      {id:'literature', label:'📚 Literature'},
    ];
    newCats.forEach(function(cat){
      if(!document.getElementById('dcat-'+cat.id)){
        var btn=document.createElement('button');
        btn.id='dcat-'+cat.id;
        btn.style.cssText='width:100%;padding:9px 14px;border:none;border-left:3px solid transparent;background:transparent;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;font-family:Outfit,sans-serif';
        btn.textContent=cat.label;
        btn.onclick=function(){dictSetCat(cat.id,this);};
        sb.appendChild(btn);
      }
    });
  }
});

const HYPER_DICT = {

// ── SCIENCE ──────────────────────────────────────────────────────
science: [
  {icon:'⚛️',name:'Quantum Entanglement',sci:'Physics',desc:'Two particles linked so that measuring one instantly determines the state of the other, regardless of distance. Einstein called it "spooky action at a distance."',tag:'Quantum',facts:{Einstein:'Spooky action at a distance',Proven:'Bell inequality experiments',Use:'Quantum cryptography, computing'}},
  {icon:'🧬',name:'CRISPR-Cas9',sci:'Gene editing',desc:'A molecular scissors tool that cuts DNA at precise locations, allowing genes to be edited, deleted, or inserted. Revolutionary since 2012.',tag:'Biology',facts:{Nobel:'Doudna and Charpentier, 2020',Precision:'Targets specific DNA sequences',Use:'Treating genetic diseases, agriculture'}},
  {icon:'🌊',name:'Entropy',sci:'Thermodynamics',desc:'The universe tends toward disorder. The second law of thermodynamics states entropy always increases. This is why ice melts, never spontaneously forms.',tag:'Physics',facts:{Second_law:'Total entropy of universe always increases',Arrow_of_time:'Why time moves forward',Heat_death:'Ultimate fate of universe'}},
  {icon:'🔭',name:'Doppler Effect',sci:'Physics',desc:'The change in frequency of waves when source and observer move relative to each other. Explains ambulance sirens changing pitch and galactic red-shift.',tag:'Physics',facts:{Sound:'Ambulance pitch changes',Light:'Galaxies moving away shift red',Named:'Christian Doppler, 1842'}},
  {icon:'🌍',name:'Plate Tectonics',sci:'Geology',desc:'The Earth\'s crust is broken into massive plates that drift 2-10 cm per year on the molten mantle. Explains earthquakes, volcanoes, and mountains.',tag:'Earth Science',facts:{Wegener:'Alfred Wegener proposed it, 1912',Evidence:'Matching fossils on separated continents',Speed:'About the rate your fingernails grow'}},
  {icon:'⚡',name:'Electromagnetism',sci:'Maxwell, 1865',desc:'One of the four fundamental forces, governing electricity, magnetism, and light. James Clerk Maxwell unified them in four elegant equations in 1865.',tag:'Physics',facts:{Maxwell:'4 equations unified everything',Speed_of_light:'Predicted from his equations',Photon:'Force-carrying particle of EM'}},
  {icon:'🧪',name:'Osmosis',sci:'Biology/Chemistry',desc:'Water molecules pass through a semi-permeable membrane from low solute concentration to high solute concentration until equilibrium is reached.',tag:'Biology',facts:{Reverse_osmosis:'Used in water purification',Plants:'How plants absorb water from soil',Cells:'How animal cells regulate water content'}},
  {icon:'🌡️',name:'Thermodynamics Laws',sci:'Physics',desc:'The four laws: 0) Temperature is transitive. 1) Energy is conserved. 2) Entropy increases. 3) Absolute zero is unreachable.',tag:'Physics',facts:{Zeroth:'If A=B temp and B=C temp then A=C',First:'Energy cannot be created or destroyed',Second:'Entropy always increases',Third:'Cannot reach absolute zero'}},
  {icon:'💡',name:'Photoelectric Effect',sci:'Einstein, 1905',desc:'Light striking metal ejects electrons. Einstein showed light travels in discrete packets (photons). This won him the Nobel Prize — not relativity.',tag:'Physics',facts:{Einstein:'1905 Nobel Prize',Photon:'Established particle nature of light',Solar_panels:'How they generate electricity'}},
  {icon:'🌊',name:'Wave-Particle Duality',sci:'Quantum physics',desc:'Electrons and photons exhibit both wave and particle properties depending on how they are observed. The double-slit experiment demonstrates this dramatically.',tag:'Quantum',facts:{Double_slit:'Electrons create interference pattern alone',Observer:'Observing changes the result',Bohr:'Complementarity principle'}},
  {icon:'🧲',name:'Superconductivity',sci:'Physics',desc:'Below critical temperatures, some materials conduct electricity with zero resistance. MRI machines, particle accelerators, and future power grids use this.',tag:'Physics',facts:{Temperature:'Usually near absolute zero',MRI:'Superconducting magnets',Holy_grail:'Room-temperature superconductor'}},
  {icon:'🔬',name:'Mitosis vs Meiosis',sci:'Cell biology',desc:'Mitosis produces two identical diploid cells (for growth/repair). Meiosis produces four unique haploid cells (for sexual reproduction).',tag:'Biology',facts:{Mitosis:'Body growth and repair',Meiosis:'Sex cells (gametes)',Key_difference:'Meiosis has two divisions, creates genetic diversity'}},
  {icon:'🌌',name:'Dark Energy',sci:'Cosmology',desc:'An unknown force causing the expansion of the universe to accelerate. Makes up about 68% of the universe. Completely unknown in nature.',tag:'Cosmology',facts:{Discovered:'1998 — Nobel Prize 2011',Amount:'68% of universe',Unknown:'No idea what it actually is'}},
  {icon:'🧬',name:'Epigenetics',sci:'Biology',desc:'Changes in gene expression without DNA sequence changes. Your diet, stress, and environment can switch genes on or off, and some changes can be inherited.',tag:'Biology',facts:{Example:'Identical twins diverge over time',Inheritance:'Some changes pass to children',Histone:'Chemical tags on DNA control expression'}},
  {icon:'⚡',name:'Chaos Theory',sci:'Mathematics',desc:'Tiny changes in initial conditions lead to wildly different outcomes. The butterfly effect. Makes long-term prediction of complex systems impossible.',tag:'Mathematics',facts:{Lorenz:'Edward Lorenz, 1963',Butterfly:'A butterfly flapping wings...',Fractals:'Chaotic systems produce fractal patterns'}},
],

// ── PSYCHOLOGY ────────────────────────────────────────────────────
psychology: [
  {icon:'🧠',name:'Cognitive Dissonance',sci:'Festinger, 1957',desc:'Mental discomfort when holding contradictory beliefs or when behaviour contradicts beliefs. We resolve it by changing beliefs, behaviour, or rationalising.',tag:'Social',facts:{Experiment:'$1 vs $20 — $1 group believed the task was fun',Resolution:'Change belief or behaviour',Advertising:'Used to encourage brand loyalty'}},
  {icon:'💭',name:'Dunning-Kruger Effect',sci:'1999',desc:'People with limited knowledge overestimate their competence. Experts underestimate theirs. The more you know, the more you know what you don\'t know.',tag:'Cognitive',facts:{Study:'Cornell 1999',Opposite:'Impostor syndrome in experts',Universal:'Affects everyone including experts in other fields'}},
  {icon:'🌊',name:'Flow State',sci:'Csikszentmihalyi',desc:'Complete absorption in a challenging activity. Time seems to stop. Described by Mihaly Csikszentmihalyi as the optimal experience.',tag:'Positive',facts:{Conditions:'Challenge slightly exceeds skill',Examples:'Sports, music, coding, art, writing',Benefits:'Peak happiness and performance'}},
  {icon:'🎭',name:'Halo Effect',sci:'Thorndike, 1920',desc:'One positive quality causes us to assume someone has other positive qualities. Attractive people are judged as more intelligent, competent, and trustworthy.',tag:'Social',facts:{Thorndike:'First described 1920',Advertising:'Celebrity endorsements exploit it',Court:'Attractive defendants get lighter sentences (studies show)'}},
  {icon:'⚡',name:'Pavlovian Conditioning',sci:'Pavlov, 1897',desc:'Pairing a neutral stimulus with a meaningful one creates a conditioned response. Pavlov\'s dogs salivated to a bell. Advertising uses this constantly.',tag:'Behavioural',facts:{Pavlov:'Nobel Prize 1904',Bell:'Neutral stimulus became conditioned',Modern:'Logos, jingles, brand colours'}},
  {icon:'🔮',name:'Attachment Theory',sci:'Bowlby & Ainsworth',desc:'Early caregiver bonds create a template for all future relationships. Four styles: secure, anxious-preoccupied, dismissive-avoidant, disorganised.',tag:'Developmental',facts:{Bowlby:'John Bowlby, 1960s',Strange_situation:'Mary Ainsworth test',Adult_attachment:'Predicts relationship patterns throughout life'}},
  {icon:'🌙',name:'Milgram Experiment',sci:'Stanley Milgram, 1961',desc:'65% of participants administered what they believed were lethal electric shocks when instructed by an authority figure. Inspired by the Holocaust.',tag:'Social',facts:{Result:'65% went to maximum 450 volts',Inspired:'Eichmann trial — ordinary people in Nazi Germany',Legacy:'Most replicated and controversial psychology study'}},
  {icon:'💎',name:'Gaslighting',sci:'Psychological manipulation',desc:'Making someone question their own perceptions and memory. Named after the 1944 film where a husband manipulates his wife into thinking she is going insane.',tag:'Abuse',facts:{Film:'Gaslight, 1944',Signs:'Denying events, shifting blame, trivialising feelings',Effect:'Victim doubts their own sanity and judgment'}},
  {icon:'🧬',name:'Neuroplasticity',sci:'Neuroscience',desc:'The brain rewires itself in response to experience throughout your whole life. Learning creates new synaptic connections. Skills are literally carved into the brain.',tag:'Neuroscience',facts:{Old_view:'Adult brain was fixed',New_view:'Constant reorganisation',London_taxis:'Hippocampus grows larger in cab drivers'}},
  {icon:'✨',name:'Locus of Control',sci:'Julian Rotter, 1954',desc:'Internal locus: I control my outcomes. External locus: outcomes are determined by luck and others. Internal locus is strongly linked to better life outcomes.',tag:'Personality',facts:{Internal:'Better health, career success, wellbeing',External:'More depression and anxiety',Can_change:'Locus of control can be shifted with practice'}},
  {icon:'🌿',name:'Maslow\'s Hierarchy',sci:'Abraham Maslow, 1943',desc:'Five levels of needs: physiological → safety → love/belonging → esteem → self-actualisation. Lower needs must be met before higher ones can be pursued.',tag:'Motivation',facts:{Order:'Must satisfy lower before higher',Criticism:'Not always hierarchical in real life',Peak_experience:'Self-actualisation moments'}},
  {icon:'🔥',name:'Operant Conditioning',sci:'B.F. Skinner',desc:'Behaviour is shaped by consequences. Rewards increase behaviour frequency. Punishment decreases it. Variable ratio schedules (slot machines) are most powerful.',tag:'Behavioural',facts:{Variable_ratio:'Most resistant to extinction',Social_media:'Uses variable ratio reinforcement',Skinner_box:'Rats pressed levers for rewards'}},
],

// ── PHILOSOPHY ────────────────────────────────────────────────────
philosophy: [
  {icon:'💭',name:'Solipsism',sci:'Epistemology',desc:'The position that only your own mind can be verified to exist. Everything else, including other people, might be constructed by your mind. Impossible to disprove.',tag:'Metaphysics',facts:{Impossible:'Cannot be refuted',Response:'Pragmatism — act as if external world exists',Matrix:'Same idea in popular culture'}},
  {icon:'🌀',name:'Nihilism',sci:'Philosophy',desc:'The view that life has no inherent meaning or value. Associated with but misunderstood through Nietzsche, who actually saw nihilism as a problem to overcome.',tag:'Existentialism',facts:{Nietzsche:'Warned against nihilism, did not endorse it',Types:'Existential, moral, epistemological nihilism',Response:'Create your own meaning (existentialism)'}},
  {icon:'⚡',name:'The Trolley Problem',sci:'Philippa Foot, 1967',desc:'Do you pull a lever to divert a trolley from killing 5 to killing 1? Tests whether consequences alone determine ethics. No consensus after 60 years.',tag:'Ethics',facts:{Foot:'Philippa Foot, 1967',Variants:'Dozens — fat man, loop track, transplant surgeon',Result:'Reveals our moral intuitions are deeply inconsistent'}},
  {icon:'🌊',name:'Stoicism',sci:'Zeno of Citium, ~300 BCE',desc:'Focus only on what you can control. Accept what you cannot. Virtue is the only true good. Extraordinary modern revival in therapy and self-help.',tag:'Ethics',facts:{Founders:'Zeno, Epictetus, Marcus Aurelius, Seneca',Core:'The dichotomy of control',Modern:'CBT therapy shares Stoic foundations'}},
  {icon:'💎',name:'Ship of Theseus',sci:'Ancient Greek paradox',desc:'If every plank in a ship is replaced, is it still the same ship? What if you rebuild the old ship from the discarded planks? Which is the real one?',tag:'Metaphysics',facts:{Application:'Applied to human identity — cells replace every 7-10 years',Variants:'George Washington\'s axe, Granddad\'s broom',Identity:'What constitutes continuity of identity?'}},
  {icon:'🧠',name:'The Hard Problem of Consciousness',sci:'David Chalmers, 1995',desc:'Why does subjective experience (qualia) exist at all? Why is seeing red accompanied by an inner experience? Science can explain brain function but not why it feels like anything.',tag:'Philosophy of Mind',facts:{Chalmers:'David Chalmers coined it 1995',Easy_problems:'Explaining brain function — solvable',Hard_problem:'Why there is subjective experience at all',Unsolved:'No consensus after 30 years'}},
  {icon:'🌙',name:'Existentialism',sci:'20th century',desc:'We are radically free and must create our own meaning. Existence precedes essence — we are not born with a fixed nature. We define ourselves through choices.',tag:'Existentialism',facts:{Sartre:'Existence precedes essence',Camus:'Absurdism — embrace meaninglessness joyfully',Kierkegaard:'Father of existentialism, focused on the individual'}},
  {icon:'🔥',name:'Plato\'s Forms',sci:'~380 BCE',desc:'The physical world is an imperfect shadow of perfect abstract Forms. The perfect circle exists nowhere in nature — only in the realm of Forms.',tag:'Metaphysics',facts:{Cave:'Allegory of the Cave illustrates this',Mathematics:'Numbers are Forms for Plato',Influence:'Vast — shaped Western philosophy and theology'}},
  {icon:'✨',name:'Utilitarianism',sci:'Bentham & Mill',desc:'The morally right action is whatever produces the greatest happiness for the greatest number. Consequences are what matter morally, not intentions.',tag:'Ethics',facts:{Bentham:'Jeremy Bentham, 1789',Mill:'Refined with quality of pleasure',Criticism:'Can justify harming minority for majority benefit'}},
  {icon:'🔮',name:'Kant\'s Categorical Imperative',sci:'Immanuel Kant, 1785',desc:'Act only according to principles you would want to become universal laws. Do not treat people merely as means to an end. The foundation of deontological ethics.',tag:'Ethics',facts:{Formula_1:'Could you universalise this maxim?',Formula_2:'Never treat persons merely as means',Deontological:'Duty and rules matter more than consequences'}},
],

// ── ECONOMICS ─────────────────────────────────────────────────────
economics: [
  {icon:'💰',name:'Supply and Demand',sci:'Foundation',desc:'Price is determined by the intersection of supply and demand curves. When demand rises or supply falls, prices rise. The core model of market economics.',tag:'Microeconomics',facts:{Equilibrium:'Where supply equals demand',Price_ceiling:'Causes shortage',Price_floor:'Causes surplus'}},
  {icon:'📈',name:'Compound Interest',sci:'Finance',desc:'Interest on interest. Einstein allegedly called it "the eighth wonder of the world." $1,000 at 7% annually becomes $7,612 in 30 years.',tag:'Finance',facts:{Formula:'A = P(1+r/n)^nt',Rule_of_72:'72 / rate = years to double',Power:'Key reason to invest early'}},
  {icon:'💸',name:'Inflation',sci:'Macroeconomics',desc:'The general rise in price levels over time, eroding purchasing power. Central banks target ~2% annual inflation as healthy. Hyperinflation destroys economies.',tag:'Macroeconomics',facts:{Zimbabwe:'100 trillion dollar notes',Weimar:'1923 German hyperinflation',CPI:'Consumer Price Index measures it'}},
  {icon:'🏦',name:'Fractional Reserve Banking',sci:'Banking',desc:'Banks hold only a fraction of deposits as reserves and lend out the rest. This creates money — $100 deposit can create $1,000 in loans system-wide.',tag:'Banking',facts:{Multiplier:'1/reserve ratio = money multiplier',Risk:'Bank runs when everyone withdraws simultaneously',Creation:'Most money is created this way'}},
  {icon:'📊',name:'GDP',sci:'Gross Domestic Product',desc:'The total monetary value of all goods and services produced in a country in a year. The primary measure of economic size and growth.',tag:'Macroeconomics',facts:{Components:'Consumption + Investment + Gov + Net Exports',Limitation:'Does not measure inequality or wellbeing',GNP:'GDP = within borders; GNP = by nationals'}},
  {icon:'🔄',name:'Opportunity Cost',sci:'Microeconomics',desc:'The true cost of any choice is what you give up by not choosing the next best alternative. The real cost of going to university is not just tuition.',tag:'Microeconomics',facts:{TINSTAAFL:'There Is No Such Thing As A Free Lunch',Example:'Working vs university — lost wages are opportunity cost',Sunk_cost:'Already-spent costs should be ignored going forward'}},
  {icon:'💡',name:'Comparative Advantage',sci:'David Ricardo, 1817',desc:'Countries should specialise in producing goods they produce relatively most efficiently, even if another country can produce everything more cheaply.',tag:'Trade',facts:{Ricardo:'David Ricardo, 1817',Example:'Portugal and England in cloth and wine',Foundation:'Basis of free trade theory'}},
  {icon:'🌊',name:'The Business Cycle',sci:'Macroeconomics',desc:'Economies fluctuate between expansion, peak, contraction (recession), and trough. Recessions are defined as two consecutive quarters of negative GDP growth.',tag:'Macroeconomics',facts:{Expansion:'GDP growth, low unemployment',Recession:'Two quarters negative growth',Recovery:'Returns to expansion'}},
  {icon:'🎯',name:'Game Theory',sci:'Nash, von Neumann',desc:'Mathematical study of strategic decision-making. The Nash equilibrium is a state where no player can improve by unilaterally changing strategy.',tag:'Economics',facts:{Nash:'John Nash, 1950',Prisoners_dilemma:'Classic game — cooperation vs defection',Applications:'Economics, biology, politics, AI'}},
  {icon:'⚖️',name:'The Invisible Hand',sci:'Adam Smith, 1776',desc:'Individuals pursuing self-interest in competitive markets inadvertently promote the public good. The central metaphor of laissez-faire capitalism.',tag:'Theory',facts:{Smith:'Wealth of Nations, 1776',Metaphor:'Only used three times in his writings',Critique:'Ignores externalities like pollution'}},
  {icon:'📉',name:'Keynesian Economics',sci:'John Maynard Keynes',desc:'During recessions, governments should increase spending to stimulate demand. The paradox of thrift: when everyone saves, the economy shrinks.',tag:'Macroeconomics',facts:{Great_Depression:'Inspired by 1930s crisis',Multiplier:'Government spending has multiplied effect',Critics:'Monetarists favour controlling money supply instead'}},
],

// ── MEDICINE ──────────────────────────────────────────────────────
medicine: [
  {icon:'🩺',name:'Germ Theory',sci:'Pasteur & Koch',desc:'Disease is caused by specific microorganisms. Revolutionary in the 1860s — before this, doctors did not wash hands. Pasteur and Koch proved it.',tag:'History',facts:{Before:'Miasma theory — bad air caused disease',Pasteur:'Swan-neck flask experiment',Semmelweis:'Proved handwashing saves lives before Pasteur'}},
  {icon:'💉',name:'Vaccination',sci:'Jenner, 1796',desc:'Edward Jenner noticed milkmaids rarely got smallpox and inoculated a boy with cowpox, conferring immunity. Smallpox was eradicated in 1980.',tag:'Immunology',facts:{Jenner:'1796, cowpox to smallpox',Eradicated:'Smallpox 1980 — only disease eradicated',mRNA:'New approach used in COVID-19 vaccines'}},
  {icon:'🧬',name:'DNA Replication',sci:'Cell biology',desc:'Before cell division, DNA is copied by DNA polymerase using the original strand as a template. Each new cell gets a complete identical copy.',tag:'Molecular',facts:{Semiconservative:'Each new DNA has one old and one new strand',Polymerase:'The enzyme that copies DNA',Error_rate:'About 1 error per billion base pairs'}},
  {icon:'🔬',name:'Antibiotic Resistance',sci:'Public health crisis',desc:'Bacteria evolve resistance to antibiotics. Over 1.2 million people die from resistant infections annually. Called the "silent pandemic."',tag:'Microbiology',facts:{Fleming:'Penicillin discovered 1928',MRSA:'Methicillin-resistant Staphylococcus aureus',Solution:'New antibiotics, phage therapy, less overuse'}},
  {icon:'🫀',name:'The Immune System',sci:'Immunology',desc:'Innate immunity is fast, non-specific. Adaptive immunity is slow (days) but specific and has memory — why vaccines work.',tag:'Immunology',facts:{Innate:'Immediate, general defence',Adaptive:'Specific, creates memory',Memory_cells:'Why second exposure is faster'}},
  {icon:'💊',name:'Placebo Effect',sci:'Clinical psychology',desc:'Inert treatments produce real measurable effects. The expectation of healing triggers actual physiological changes. Real, measurable, and not "just in your head."',tag:'Psychology',facts:{Open_label:'Even works when patients know it\'s placebo',Nocebo:'Negative expectations cause negative effects',Surgery:'Fake surgery sometimes works as well as real'}},
  {icon:'🩸',name:'Blood Types',sci:'Immunology',desc:'ABO system discovered by Karl Landsteiner (Nobel 1930). O negative is universal donor. AB positive is universal recipient. Mismatched blood causes fatal reactions.',tag:'Haematology',facts:{Landsteiner:'Karl Landsteiner, Nobel 1930',Universal_donor:'O negative',Rh_factor:'Positive or negative based on Rh protein'}},
  {icon:'🧠',name:'Neurodegeneration',sci:'Neurology',desc:'Progressive loss of neurons underlying Alzheimer\'s, Parkinson\'s, and ALS. No cures exist. Alzheimer\'s affects 50 million people globally.',tag:'Neurology',facts:{Alzheimer:'Most common — 50 million globally',Parkinson:'Dopamine neurons in substantia nigra',ALS:'Motor neuron disease — Stephen Hawking'}},
  {icon:'😴',name:'Sleep Medicine',sci:'Neuroscience',desc:'Sleep deprivation is linked to dementia, cardiovascular disease, obesity, and immune dysfunction. REM sleep consolidates memory. Missing one night impairs like being drunk.',tag:'Sleep',facts:{REM:'Brain paralises body to prevent acting dreams',Memory:'Sleep consolidates what you learned that day',Deprivation:'24h awake = 0.1% blood alcohol equivalent'}},
  {icon:'🌡️',name:'Inflammation',sci:'Immunology',desc:'The body\'s immediate response to injury or infection. Acute inflammation is protective. Chronic low-grade inflammation underlies heart disease, diabetes, and cancer.',tag:'Pathology',facts:{Acute:'Short-term, protective — redness, swelling, heat',Chronic:'Persistent, damaging',C_reactive_protein:'Blood marker for chronic inflammation'}},
],

// ── PHYSICS ───────────────────────────────────────────────────────
physics: [
  {icon:'⚛️',name:'Standard Model',sci:'Particle physics',desc:'The theory of fundamental particles and forces. Describes 17 particles (quarks, leptons, bosons) and 3 of the 4 forces. Excludes gravity.',tag:'Particle Physics',facts:{Particles:'6 quarks, 6 leptons, 4 force bosons, Higgs',Higgs:'Confirmed 2012, CERN',Missing:'Does not include gravity'}},
  {icon:'🌌',name:'General Relativity',sci:'Einstein, 1915',desc:'Gravity is the curvature of spacetime caused by mass. Predicts black holes, gravitational waves, time dilation, and the expanding universe.',tag:'Cosmology',facts:{E_equals:'E=mc² from special relativity',GPS:'Requires GR corrections',Waves:'Gravitational waves detected 2015 (LIGO)}'},
  {icon:'⚡',name:'Quantum Mechanics',sci:'1920s',desc:'The physics of the very small. Particles have no definite position until observed (superposition). Probabilities, not certainties. Profoundly counterintuitive.',tag:'Quantum',facts:{Heisenberg:'Uncertainty principle — position and momentum cannot both be known exactly',Schrodinger:'Wave function describes probabilities',Born:'Interpretation: wave function gives probabilities}'},
  {icon:'🌊',name:'Special Relativity',sci:'Einstein, 1905',desc:'The speed of light is the same for all observers. Time slows for fast-moving objects (time dilation). Mass and energy are equivalent (E=mc²).',tag:'Relativity',facts:{Time_dilation:'GPS satellites run slightly fast',Mass_energy:'E=mc²',Twin_paradox:'Travelling twin ages more slowly}'},
  {icon:'💡',name:'The Higgs Field',sci:'Peter Higgs, 1964',desc:'A field permeating all of space. Particles gain mass by interacting with it. The Higgs boson is the field\'s particle, confirmed at CERN in 2012.',tag:'Particle Physics',facts:{Higgs:'Peter Higgs, Nobel 2013',Boson:'Discovered at CERN, Large Hadron Collider',Why:'Without it, particles would have no mass}'},
  {icon:'🌑',name:'Black Holes',sci:'Astrophysics',desc:'Regions where gravity is so strong nothing can escape — not even light. The event horizon is the point of no return. Time stops at the singularity.',tag:'Astrophysics',facts:{Schwarzschild:'Karl Schwarzschild solved Einstein\'s equations 1916',Event_horizon:'Point of no return',Hawking_radiation:'Black holes slowly evaporate over time}'},
  {icon:'🔬',name:'The Four Forces',sci:'Physics',desc:'Gravity (weakest, infinite range), Electromagnetism (infinite range), Weak Nuclear (radioactive decay), Strong Nuclear (holds nucleus together, strongest).',tag:'Fundamental',facts:{Gravity:'Weakest but dominates at large scales',EM:'Second strongest, infinite range',Strong:'Strongest — holds quarks in protons',Grand_unification:'Theory unifying all four is the holy grail}'},
  {icon:'🌊',name:'String Theory',sci:'Theoretical physics',desc:'Proposes fundamental particles are 1D vibrating strings of energy. Requires 10-11 dimensions. Beautiful mathematics but no experimental evidence yet.',tag:'Theoretical',facts:{Dimensions:'Requires 10 or 11 dimensions',Prediction:'Predicts supersymmetric partners for all particles',Criticism:'Not yet testable — some say not science}'},
  {icon:'⚡',name:'Antimatter',sci:'Dirac, 1928',desc:'Every particle has an antiparticle with opposite charge. Matter and antimatter annihilate on contact. The universe is made of matter — the asymmetry is unexplained.',tag:'Particle Physics',facts:{Dirac:'Predicted 1928, found 1932',Annihilation:'Converts entirely to energy',Mystery:'Why is there more matter than antimatter?}'},
  {icon:'💫',name:'Dark Matter',sci:'Cosmology',desc:'Invisible matter making up 27% of the universe, inferred from gravitational effects on visible matter. Galaxies would fly apart without it. Still unknown composition.',tag:'Cosmology',facts:{Evidence:'Galaxy rotation curves, gravitational lensing',Amount:'27% of universe',Candidates:'WIMPs, axions, sterile neutrinos}'},
],

// ── BIOLOGY ───────────────────────────────────────────────────────
biology: [
  {icon:'🧬',name:'DNA Structure',sci:'Watson & Crick, 1953',desc:'A double helix of nucleotide base pairs: adenine-thymine and guanine-cytosine. Franklin\'s X-ray crystallography provided the key data, uncredited at the time.',tag:'Molecular',facts:{Franklin:'Photo 51 was crucial, she was not credited',Watson_Crick:'Nobel 1962 with Wilkins',Pairs:'A-T and G-C always pair together}'},
  {icon:'🌿',name:'Natural Selection',sci:'Darwin, 1859',desc:'Organisms with heritable traits that improve survival and reproduction pass more traits to offspring. Over time this produces adaptation and new species.',tag:'Evolution',facts:{Darwin:'On the Origin of Species, 1859',Wallace:'Proposed it simultaneously',Genetics:'Darwin did not know about genes — Mendel published same year}'},
  {icon:'🦠',name:'Microbiome',sci:'Microbiology',desc:'Trillions of bacteria, fungi, and viruses live in and on your body. Your gut microbiome influences mood, immunity, metabolism, and even behaviour.',tag:'Microbiology',facts:{Bacteria:'10x more bacteria cells than human cells (by some counts)',Gut_brain:'Gut-brain axis affects mental health',Diversity:'Higher diversity = better health}'},
  {icon:'🐙',name:'Cephalopod Intelligence',sci:'Neurobiology',desc:'Octopuses can edit their RNA to adapt to temperature changes in real-time. They have distributed nervous systems — each arm processes information semi-independently.',tag:'Neurobiology',facts:{Arms:'Each arm has its own neural cluster',Camouflage:'Can change colour when colourblind',RNA_editing:'Can recode their own proteins on the fly}'},
  {icon:'🌸',name:'Photosynthesis',sci:'Plant biology',desc:'Plants use light energy to convert CO₂ and water into glucose and oxygen. The light reactions and Calvin cycle. Produces essentially all food and oxygen on Earth.',tag:'Plant Biology',facts:{Light_reactions:'Split water, produce ATP/NADPH',Calvin_cycle:'Fixes CO₂ into sugar',Output:'All food and most O₂ on Earth}'},
  {icon:'🧠',name:'Neurons and Synapses',sci:'Neuroscience',desc:'Neurons fire electrical signals (action potentials). Synapses transmit signals chemically (neurotransmitters). The human brain has ~86 billion neurons with ~100 trillion connections.',tag:'Neuroscience',facts:{Action_potential:'All-or-nothing electrical spike',Neurotransmitters:'Dopamine, serotonin, glutamate, GABA',Plasticity:'Connections strengthen with use}'},
  {icon:'🦋',name:'Metamorphosis',sci:'Entomology',desc:'Complete metamorphosis: egg → larva → pupa → adult. Inside the chrysalis, the caterpillar completely liquefies, then reorganises into a butterfly using imaginal discs.',tag:'Entomology',facts:{Liquefies:'Caterpillar dissolves into cellular soup',Imaginal_discs:'Groups of cells that become adult structures',Memory:'Some memories survive metamorphosis}'},
  {icon:'🌊',name:'Deep Sea Biology',sci:'Marine biology',desc:'Life exists at full ocean depth in complete darkness. Hydrothermal vent ecosystems are entirely independent of sunlight, powered by chemosynthesis.',tag:'Marine Biology',facts:{Deepest:'Mariana Trench — life at 11,000m',Chemosynthesis:'Energy from hydrogen sulfide, not sunlight',Species:'Thousands of undiscovered species}'},
  {icon:'⚡',name:'Bioluminescence',sci:'Biology',desc:'Light produced by living organisms via chemical reactions involving luciferin. Used for hunting, camouflage, communication, and attracting mates.',tag:'Marine Biology',facts:{Luciferin:'The compound that reacts to make light',Examples:'Fireflies, anglerfish, deep sea jellyfish',Blue_dominant:'Ocean bioluminescence is usually blue}'},
  {icon:'🧬',name:'Horizontal Gene Transfer',sci:'Microbiology',desc:'Bacteria can transfer genes directly to other bacteria, even different species. This is how antibiotic resistance spreads rapidly across bacterial populations.',tag:'Microbiology',facts:{Conjugation:'Bacteria share genes via pili tubes',Rate:'Much faster than vertical evolution',Resistance:'How MRSA spread across hospitals}'},
],

// ── LITERATURE ────────────────────────────────────────────────────
literature: [
  {icon:'📚',name:'The Iliad',sci:'Homer, ~750 BCE',desc:'The greatest war epic. 24 books covering the final weeks of the Trojan War, focused on Achilles\'s rage. Oral tradition for centuries before writing.',tag:'Ancient Greek',facts:{Books:'24 books, ~15,000 lines',Oral:'Performed by bards for centuries',Achilles:'His rage and honour drive the plot}'},
  {icon:'📖',name:'One Thousand and One Nights',sci:'Islamic Golden Age',desc:'Scheherazade tells stories every night to delay her execution. Frame narrative containing Sinbad, Aladdin, Ali Baba. Collected over centuries from Persian, Arabic, Indian sources.',tag:'Middle Eastern',facts:{Scheherazade:'Tells stories to survive',Origins:'Persian, Arabic, Indian tales merged over centuries',Nights:'Not actually 1001 — symbolic number}'},
  {icon:'🌊',name:'Don Quixote',sci:'Cervantes, 1605',desc:'Often called the first modern novel. An ageing man reads too many chivalric romances and believes he is a knight. Tilts at windmills. A masterpiece of irony.',tag:'Spanish',facts:{First_novel:'Often called first modern novel',Quixotism:'Term for idealistic impracticality',Influence:'Inspired metafiction — novel is self-aware}'},
  {icon:'💡',name:'Hamlet',sci:'Shakespeare, ~1600',desc:'"To be, or not to be" — meditation on mortality. Prince of Denmark delays revenge while questioning existence, action, and death. The most complex character in literature.',tag:'English',facts:{Soliloquies:'Seven major soliloquies',Delay:'His procrastination drives the entire plot',Language:'Invented ~1700 words used for the first time}'},
  {icon:'🌑',name:'1984',sci:'George Orwell, 1949',desc:'Totalitarian dystopia with Newspeak, thoughtcrime, Room 101, and Big Brother. Prophetic about surveillance states, propaganda, and the destruction of truth.',tag:'Dystopian',facts:{Published:'1949',Newspeak:'Language designed to prevent thoughtcrime',Big_Brother:'Always watching — surveillance state}'},
  {icon:'🔮',name:'Magic Realism',sci:'Literary genre',desc:'Realistic narrative with magical elements treated as ordinary. Gabriel García Márquez\'s One Hundred Years of Solitude — the defining text. Latin American tradition.',tag:'Genre',facts:{Marquez:'One Hundred Years of Solitude, 1967',Kafka:'Earlier European variant',Characteristics:'Magic accepted as normal in otherwise realistic world}'},
  {icon:'⚡',name:'Stream of Consciousness',sci:'Narrative technique',desc:'Narrative that follows the unfiltered flow of thoughts and feelings. James Joyce\'s Ulysses and Mrs Dalloway by Woolf. The interior life made visible.',tag:'Technique',facts:{Joyce:'Ulysses — peak of the form',Woolf:'Mrs Dalloway',William_James:'Coined the term in psychology}'},
  {icon:'🌿',name:'The Epic of Gilgamesh',sci:'~2100 BCE',desc:'The oldest surviving literature. Sumerian king Gilgamesh seeks immortality after his friend Enkidu dies. Includes the earliest flood myth — predates Genesis by 1000 years.',tag:'Ancient',facts:{Age:'~2100 BCE',Flood:'Flood story 1000 years before Genesis',Theme:'First exploration of mortality in literature}'},
  {icon:'🎭',name:'Magical Realism',sci:'García Márquez',desc:'One Hundred Years of Solitude (1967) by García Márquez: the Buendía family across seven generations in Macondo. Ghosts and miracles treated as everyday events.',tag:'Latin American',facts:{Nobel:'García Márquez, Nobel 1982',Influence:'Isabel Allende, Salman Rushdie, Toni Morrison',Latin_America:'Emerged from postcolonial context}'},
  {icon:'💎',name:'The Canterbury Tales',sci:'Chaucer, ~1390',desc:'Collection of 24 stories told by pilgrims travelling to Canterbury. Revolutionary for using everyday Middle English rather than French or Latin.',tag:'Medieval English',facts:{Language:'Middle English — vernacular, not Latin',Frame:'Pilgrims tell stories as a storytelling contest',Knight:'First tale sets the tone — knight, honour, love}'},
],

// ── CODING ────────────────────────────────────────────────────────
coding: [
  {icon:'💻',name:'Recursion',sci:'Computer Science',desc:'A function that calls itself until reaching a base case. Elegant for tree traversal and divide-and-conquer algorithms. Stack overflow if base case is missing.',tag:'Concept',facts:{Stack:'Each call adds a frame to the call stack',Memoisation:'Cache results to avoid recomputing',Classic:'Fibonacci, factorial, binary search tree traversal}'},
  {icon:'🔄',name:'Big O Notation',sci:'Algorithm Analysis',desc:'Describes worst-case time or space complexity as input size n grows. O(1) is ideal. O(n²) becomes catastrophic for large inputs.',tag:'Algorithms',facts:{O1:'Constant — hash table lookup',On:'Linear — iterate array',Ologn:'Logarithmic — binary search',On2:'Quadratic — nested loops — avoid for large n}'},
  {icon:'🌐',name:'REST API',sci:'Roy Fielding, 2000',desc:'Architectural style for web services using HTTP verbs. GET (read), POST (create), PUT (update), DELETE (remove). Stateless — each request is complete.',tag:'Web Dev',facts:{Stateless:'Server stores no client session',Richardson:'Maturity model for REST',vs_GraphQL:'GraphQL lets client specify exact data needed}'},
  {icon:'🔐',name:'Public Key Cryptography',sci:'1976',desc:'Two keys: public (share freely) and private (secret). Anyone can encrypt with public key; only private key can decrypt. Powers HTTPS, email, and blockchain.',tag:'Security',facts:{Diffie_Hellman:'Key exchange protocol, 1976',RSA:'Rivest, Shamir, Adleman — factoring hard problem',TLS:'Transport Layer Security uses it}'},
  {icon:'🧩',name:'Design Patterns',sci:'Gang of Four, 1994',desc:'23 reusable solutions to common software design problems. Singleton, Factory, Observer, Strategy, Command. Shared vocabulary for developers.',tag:'Software Design',facts:{Book:'Design Patterns, 1994 — Gang of Four',Singleton:'One instance only',Observer:'Subscribe/publish pattern — events}'},
  {icon:'⚡',name:'Async/Await',sci:'Modern JavaScript',desc:'Syntactic sugar over Promises that makes asynchronous code look synchronous. The event loop handles async operations without blocking the thread.',tag:'JavaScript',facts:{Promise:'Represents eventual value',Event_loop:'Single-threaded but non-blocking',await:'Pauses function, not the thread}'},
  {icon:'🔧',name:'SOLID Principles',sci:'Robert Martin',desc:'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. The foundation of maintainable object-oriented code.',tag:'OOP',facts:{Uncle_Bob:'Robert C. Martin',Each:'One principle per letter',Goal:'Maintainable, extensible, testable code}'},
  {icon:'🌿',name:'Functional Programming',sci:'Lambda calculus',desc:'Functions are first-class citizens. No shared mutable state. Pure functions — same input always gives same output. Enables parallelism and testability.',tag:'Paradigm',facts:{Pure_functions:'No side effects',Immutability:'Data never changes — create new data',Languages:'Haskell, Elm, Clojure; features in Python, JS}'},
  {icon:'🏗️',name:'Microservices',sci:'Architecture',desc:'Breaking an application into small, independent services. Each does one thing, communicates via APIs. Enables independent scaling and deployment.',tag:'Architecture',facts:{vs_Monolith:'Monolith is simpler; microservices scale better',Netflix:'Pioneered microservices at scale',Challenges:'Distributed systems — networking, consistency}'},
  {icon:'💾',name:'Database Indexing',sci:'Database design',desc:'A data structure that speeds up retrieval at the cost of storage and write speed. Like a book index. Without indexes, queries scan every row.',tag:'Databases',facts:{B_tree:'Most common index structure',Trade_off:'Faster reads, slower writes',Over_indexing:'Too many indexes hurts write performance}'},
  {icon:'🌊',name:'TCP/IP',sci:'Networking',desc:'TCP (Transmission Control Protocol) ensures reliable, ordered delivery of data. IP (Internet Protocol) handles addressing and routing. The internet runs on these.',tag:'Networking',facts:{TCP:'Handshake, reliability, ordering',IP:'Logical addressing, routing',UDP:'Faster but no reliability — used for video/games}'},
  {icon:'🔬',name:'Memory Management',sci:'Systems programming',desc:'Manual (C/C++): programmer allocates and frees. Garbage collected (Java/Python): runtime cleans up. Rust: ownership system at compile time.',tag:'Systems',facts:{Malloc_free:'C manual memory management',GC:'Java, Python, Go — automatic but overhead',Rust:'Ownership model — safe without GC}'},
],

// ── INTERNET ──────────────────────────────────────────────────────
internet: [
  {icon:'🌐',name:'HTTP/HTTPS',sci:'Tim Berners-Lee',desc:'HyperText Transfer Protocol transfers web data. HTTPS adds TLS encryption. The S means your ISP cannot read the content (just metadata).',tag:'Protocol',facts:{Berners_Lee:'Invented HTTP 1989 at CERN',TLS:'Transport Layer Security encrypts data',HTTP3:'Uses UDP via QUIC protocol for speed}'},
  {icon:'📡',name:'DNS',sci:'Domain Name System',desc:'Translates human-readable domain names to IP addresses. Your computer asks a DNS server what IP address corresponds to "google.com".',tag:'Networking',facts:{Hierarchy:'Root → TLD → Authoritative servers',Cache:'Responses cached to speed future lookups',Poisoning:'DNS cache poisoning attack redirects traffic}'},
  {icon:'🔐',name:'TLS/SSL',sci:'Security',desc:'Transport Layer Security encrypts web traffic. The padlock in your browser. Uses asymmetric encryption to establish a session key, then symmetric for speed.',tag:'Security',facts:{Handshake:'Client and server negotiate cipher suite',Certificate:'Proves server identity',MITM:'Prevents man-in-the-middle attacks}'},
  {icon:'🤖',name:'Bot Traffic',sci:'Internet statistics',desc:'About 49% of internet traffic is automated bots. Good bots include search crawlers and monitoring. Bad bots include DDoS tools and credential-stuffers.',tag:'Security',facts:{Amount:'~49% of all traffic',Good:'Search crawlers, uptime monitors',Bad:'DDoS, credential stuffing, scraping}'},
  {icon:'💾',name:'The Cloud',sci:'Infrastructure',desc:'Virtualised computing resources delivered over the internet. AWS holds 33% market share. Data centres consume ~1% of global electricity.',tag:'Infrastructure',facts:{AWS:'33% market share',Azure:'Microsoft — 22%',GCP:'Google Cloud Platform — 10%}'},
  {icon:'🌍',name:'Tor Network',sci:'Anonymity network',desc:'Routes traffic through multiple encrypted relays. Originally developed by the US Navy. Used by journalists, dissidents, and unfortunately criminals.',tag:'Privacy',facts:{Onion:'Each relay removes one encryption layer',Origin:'US Naval Research Laboratory',Use:'Journalism, privacy, whistleblowing, illegal markets}'},
  {icon:'⚡',name:'WebSockets',sci:'Real-time web',desc:'Persistent bidirectional connection between browser and server. Unlike HTTP request-response, server can push data. Powers chat, live sports scores, trading.',tag:'Protocol',facts:{Upgrade:'HTTP request upgrades to WebSocket',Persistent:'Connection stays open',Use:'Chat apps, live data, collaborative editing}'},
  {icon:'🔗',name:'Content Delivery Networks',sci:'CDN',desc:'Distributed servers that cache content close to users. Netflix, Cloudflare, Akamai. Load the same website faster from New York or Tokyo.',tag:'Infrastructure',facts:{Cloudflare:'Handles 20% of global web traffic',Latency:'Reduces by serving from nearest node',DDoS:'CDNs absorb DDoS attacks}'},
],

// ── MYTHOLOGY ────────────────────────────────────────────────────
mythology: [
  {icon:'⚡',name:'Zeus / Jupiter',sci:'Greek/Roman',desc:'King of the Olympians. God of sky, thunder, lightning, law, order, and justice. Famous for his many affairs with mortals and gods, producing demigods.',tag:'Greek/Roman',facts:{Symbol:'Thunderbolt, eagle, oak tree',Children:'Hercules, Perseus, Helen, Apollo, Artemis (and many more)',Weakness:'Chronic infidelity}'},
  {icon:'🌊',name:'Poseidon / Neptune',sci:'Greek/Roman',desc:'God of the seas, earthquakes, and horses. Strikes his trident on the ground to cause earthquakes. His moods control the oceans.',tag:'Greek/Roman',facts:{Trident:'Three-pronged weapon',Horses:'Created them by striking rock',Rivalry:'Lost Athens to Athena in a contest}'},
  {icon:'🔥',name:'Prometheus',sci:'Greek Mythology',desc:'Titan who stole fire from the gods and gave it to humanity. Zeus punished him by chaining him to a rock where an eagle ate his liver daily. It regenerated each night.',tag:'Greek',facts:{Fire:'Symbol of knowledge and civilisation',Eternal_punishment:'Liver regenerated — suffered forever',Aeschylus:'Prometheus Bound — Greek tragedy}'},
  {icon:'🌸',name:'Amaterasu',sci:'Japanese Shinto',desc:'Supreme sun goddess of the Shinto pantheon. When she retreated to a cave after her brother\'s violence, the world fell into darkness. Gods tricked her out.',tag:'Japanese',facts:{Shinto:'Chief deity of Japan\'s state religion',Emperor:'Imperial family claims descent from her',Cave:'World went dark — gods celebrated to lure her out}'},
  {icon:'💀',name:'Anubis',sci:'Egyptian',desc:'Jackal-headed god of the dead and embalming. Guided souls through the Duat and weighed their hearts against Ma\'at\'s feather. Heavier heart meant destruction.',tag:'Egyptian',facts:{Weighing:'Heart weighed against feather of truth',Ammit:'Devoured unworthy hearts',Embalming:'Patron of mummification}'},
  {icon:'⚔️',name:'Ragnarok',sci:'Norse',desc:'The apocalyptic destruction of the Norse cosmos. Gods and giants destroy each other. Odin killed by Fenrir. Thor kills the Midgard Serpent but dies from its venom.',tag:'Norse',facts:{Odin:'Killed and eaten by Fenrir wolf',Thor:'Kills Jormungandr, walks 9 steps then dies',Survivors:'New world rises with surviving gods and humans}'},
  {icon:'🌟',name:'Quetzalcoatl',sci:'Aztec/Maya',desc:'The Feathered Serpent god. Lord of wind, air, and learning. One of the major Mesoamerican deities. His peaceful return was a belief Cortes may have exploited.',tag:'Mesoamerican',facts:{Name:'Feathered Serpent in Nahuatl',Cortez:'Aztec belief he might be Quetzalcoatl returning',Calendar:'Associated with Venus}'},
  {icon:'🐉',name:'The Hydra',sci:'Greek',desc:'Nine-headed water serpent. For every head Heracles cut off, two grew back. Heracles solved this by cauterising each stump. Second Labour of Heracles.',tag:'Greek',facts:{Regeneration:'Two heads grew for each cut one',Solution:'Burn the stumps — Iolaus helped',Poison:'Blood and breath were lethal}'},
  {icon:'🌺',name:'Isis',sci:'Egyptian',desc:'The great mother goddess of magic and healing. Assembled and resurrected Osiris after Set dismembered him. Mother of Horus. The most popular goddess in the ancient world.',tag:'Egyptian',facts:{Resurrection:'Reassembled dismembered Osiris',Magic:'Learned Ra\'s secret name — source of her power',Spread:'Worshipped across Roman Empire by 1st century}'},
  {icon:'🔱',name:'Shiva',sci:'Hindu',desc:'The Destroyer and Transformer. Third of the Trimurti with Brahma and Vishnu. Dances the universe into and out of existence. God of yoga and meditation.',tag:'Hindu',facts:{Trimurti:'Creator-Preserver-Destroyer',Nataraja:'Cosmic dance of creation/destruction',Lingam:'Symbolic representation of Shiva}'},
],

// ── MORE WORDS ────────────────────────────────────────────────────
words: [
  {icon:'✨',name:'Abstruse',sci:'adj.',desc:'Difficult to understand; obscure. Used for concepts requiring deep expertise.',tag:'English',facts:{Origin:'Latin abstrudere (to hide away)',Synonym:'Arcane, esoteric, recondite'}},
  {icon:'🌙',name:'Accretion',sci:'n.',desc:'The process of growth by gradual accumulation. Used in astronomy for planets forming from dust.',tag:'Science/English',facts:{Astronomy:'Planets form by accretion',Origin:'Latin accretionem (increase)'}},
  {icon:'🔮',name:'Acrimony',sci:'n.',desc:'Bitterness or ill feeling. The debate ended in acrimony.',tag:'English',facts:{Origin:'Latin acrimonia (sharpness)',Related:'Acrimonious (adj.)'}},
  {icon:'⚡',name:'Adumbrate',sci:'v.',desc:'To outline vaguely; to foreshadow. The opening chapter adumbrates the themes of the novel.',tag:'Literary',facts:{Origin:'Latin adumbrare (to shade)',Use:'Literary criticism and philosophy'}},
  {icon:'🌿',name:'Aegis',sci:'n.',desc:'Protection, backing, or support. Under the aegis of the United Nations.',tag:'English/Greek',facts:{Origin:'Zeus\'s shield in Greek mythology',Use:'Under the aegis of'}},
  {icon:'💡',name:'Afflatus',sci:'n.',desc:'A divine creative impulse or inspiration. The afflatus of genius.',tag:'Literary',facts:{Origin:'Latin afflatus (blown upon)',Use:'Poetic inspiration'}},
  {icon:'🌊',name:'Akimbo',sci:'adj./adv.',desc:'With hands on hips and elbows turned outward. Hands akimbo. The only use of this word in English.',tag:'English',facts:{Only_use:'Always "arms akimbo" or "hands akimbo"',Origin:'Middle English, unknown ultimately'}},
  {icon:'🎭',name:'Aleatory',sci:'adj.',desc:'Depending on the throw of a die; random. Used in music for compositions with random elements.',tag:'Music/Philosophy',facts:{Origin:'Latin aleatorius (of a gambler)',Music:'John Cage pioneered aleatory music'}},
  {icon:'🔥',name:'Alluvial',sci:'adj.',desc:'Relating to deposits left by flowing water. The alluvial plains of ancient Mesopotamia.',tag:'Geography',facts:{Formation:'Sediment left by river floods',Fertile:'Most fertile farmland is alluvial'}},
  {icon:'💎',name:'Amanuensis',sci:'n.',desc:'A person who writes from dictation or copies manuscripts. Milton dictated Paradise Lost to his amanuensis after going blind.',tag:'Historical',facts:{Milton:'Dictated Paradise Lost to daughters',Origin:'Latin a manu (by hand) + scribe'}},
  {icon:'🌈',name:'Amiable',sci:'adj.',desc:'Having a friendly and pleasant manner. Likeable.',tag:'English',facts:{Origin:'Latin amicabilis (friendly)',Vs_amicable:'Amicable = friendly relationship; amiable = friendly person'}},
  {icon:'🌙',name:'Anodyne',sci:'adj./n.',desc:'Not likely to cause offence; uncontroversial. Or: a painkilling drug. Meaningless, anodyne platitudes.',tag:'English',facts:{Origin:'Greek anodynos (free from pain)',Dual_meaning:'Medical and social meanings'}},
  {icon:'🎵',name:'Animosity',sci:'n.',desc:'Strong hostility. The animosity between the two factions had grown over decades.',tag:'English',facts:{Origin:'Latin animositas (boldness, spirit)',Synonym:'Enmity, antipathy, rancour'}},
  {icon:'⚡',name:'Aphorism',sci:'n.',desc:'A pithy, memorable statement of truth. "Know thyself." All aphorisms strive for compression.',tag:'Literary',facts:{Examples:'"The unexamined life is not worth living"',Hippocrates:'First major aphorist',Form:'Short, punchy, universal'}},
  {icon:'🌊',name:'Approbation',sci:'n.',desc:'Approval or praise, especially from an authority.',tag:'English',facts:{Origin:'Latin approbationem',Formal:'Used in formal and legal contexts'}},
  {icon:'🧠',name:'Arcadian',sci:'adj.',desc:'Relating to an idealised simple, pleasant, rural life. An Arcadian landscape of meadows and streams.',tag:'Literary',facts:{Arcadia:'A mountainous region of ancient Greece',Et_in_Arcadia_ego:'Even in paradise, death exists'}},
  {icon:'🌿',name:'Ardent',sci:'adj.',desc:'Enthusiastic or passionate. An ardent supporter of the cause.',tag:'English',facts:{Origin:'Latin ardentem (burning)',Synonym:'Fervent, zealous, impassioned'}},
  {icon:'🔮',name:'Arrogance',sci:'n.',desc:'Exaggerated sense of one\'s own importance. The arrogance of power.',tag:'English',facts:{Origin:'Latin arrogare (to claim)',Hubris:'Greek equivalent — leads to downfall'}},
  {icon:'💡',name:'Ascetic',sci:'adj./n.',desc:'Characterized by severe self-discipline and abstention from pleasure. Monks who live ascetic lives.',tag:'Philosophy',facts:{Ascetics:'Buddhist, Christian, Hindu traditions',Origin:'Greek asketes (one who exercises, monk)'}},
  {icon:'🎨',name:'Assuage',sci:'v.',desc:'To make an unpleasant feeling less intense. Nothing could assuage his grief.',tag:'English',facts:{Origin:'Old French assouagier',Synonym:'Alleviate, mitigate, ease'}},
],

// ── ART ───────────────────────────────────────────────────────────
art: [
  {icon:'🎨',name:'Impressionism',sci:'1860s France',desc:'Captured light and movement with rapid brushstrokes rather than precise detail. Rejected by the Paris Salon. Monet, Renoir, Degas, Pissarro.',tag:'Movement',facts:{Origin:'Monet\'s "Impression Sunrise" (1872)',Rejection:'First exhibition was mocked by critics',Legacy:'Most beloved art movement globally'}},
  {icon:'🌊',name:'Cubism',sci:'Picasso & Braque, 1907',desc:'Objects depicted from multiple viewpoints simultaneously. Shattered the single-point perspective that had dominated Western art for 500 years.',tag:'Movement',facts:{First:'Les Demoiselles d\'Avignon (1907)',Braque:'Developed alongside Picasso',Influence:'Greatest impact on 20th century art'}},
  {icon:'⚡',name:'Dadaism',sci:'1916, Zurich',desc:'Anti-war, anti-rationality art that embraced absurdity. Duchamp\'s Fountain (a urinal) declared art. Challenged what art even is.',tag:'Movement',facts:{Location:'Cabaret Voltaire, Zurich 1916',Duchamp:'Fountain as readymade art',Legacy:'Conceptual art, punk, postmodernism'}},
  {icon:'💡',name:'Surrealism',sci:'André Breton, 1924',desc:'Art shaped by the unconscious mind and dreams. Dali\'s melting clocks. Magritte\'s bowler hats. Freud\'s influence was central.',tag:'Movement',facts:{Manifesto:'André Breton, 1924',Freud:'Dream imagery and unconscious',Dali:'The most famous Surrealist}'},
  {icon:'🔮',name:'Abstract Expressionism',sci:'New York, 1940s',desc:'Gestural, emotional large-scale abstract painting. Pollock dripped paint. Rothko made colour fields. The first major American art movement.',tag:'Movement',facts:{Pollock:'Drip painting technique',Rothko:'Color field — emotionally overwhelming',US_dominance:'New York replaced Paris as art capital}'},
  {icon:'🌿',name:'The Golden Ratio',sci:'φ = 1.618',desc:'A proportion found in nature, human anatomy, and art. Whether artists consciously used it or viewers perceive it as beautiful remains debated.',tag:'Design',facts:{Value:'(1+√5)/2 = 1.618...',Nature:'Nautilus shells, sunflower seeds',Debate:'Intentional use in Parthenon disputed}'},
  {icon:'🎭',name:'Chiaroscuro',sci:'Italian technique',desc:'The dramatic contrast between light and dark. Caravaggio mastered it. Creates depth, volume, and emotional intensity. From Italian "light-dark."',tag:'Technique',facts:{Caravaggio:'Most dramatic practitioner',Rembrandt:'Used for psychological depth',Origin:'Italian chiaro (light) + oscuro (dark)}'},
  {icon:'💎',name:'Wabi-Sabi',sci:'Japanese aesthetics',desc:'Finding beauty in imperfection, incompleteness, and impermanence. Cracked pottery, weathered wood, faded leaves. The opposite of Western ideals of perfection.',tag:'Japanese',facts:{Wabi:'Rustic, simple, imperfect',Sabi:'Aged, worn, beautiful patina',Kintsugi:'Repairing broken pottery with gold}'},
  {icon:'✨',name:'Colour Theory',sci:'Johannes Itten',desc:'Primary colours mix to secondary colours. Complementary colours (opposite on wheel) create maximum contrast. Warm colours advance; cool colours recede.',tag:'Design',facts:{Primary:'Red, yellow, blue (traditional)',Complementary:'Opposite on wheel — create vibrancy',Temperature:'Warm advances, cool recedes}'},
  {icon:'🌙',name:'Perspective',sci:'Renaissance',desc:'Filippo Brunelleschi developed linear perspective in 1420. Objects appear smaller with distance, lines converge at vanishing point. Revolutionary for realism.',tag:'Technique',facts:{Brunelleschi:'Demonstrated in 1420 Florence',Before:'No consistent perspective in medieval art',Types:'1-point, 2-point, 3-point perspective}'},
],

};

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Dictionary Expansion Pack 4
//  Adds 300+ more entries across all categories
// ═══════════════════════════════════════════════════════════════════

(function(){
  if(typeof DICT_DATA==='undefined') return;
  Object.keys(DICT_PACK4).forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat]=[];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_PACK4[cat]);
  })();
});

const DICT_PACK4 = {

// ── MORE WORDS ────────────────────────────────────────────────────
words: [
  {icon:'🌊',name:'Abstemious',sci:'adj.',desc:'Indulging only very moderately in food or drink. A rare word notable for containing all five vowels in order.',tag:'English',facts:{Vowels:'a-e-i-o-u all appear in order',Origin:'Latin abstemius (abstaining)'}},
  {icon:'💡',name:'Acumen',sci:'n.',desc:'The ability to make good judgments and quick decisions. Business acumen.',tag:'English',facts:{Origin:'Latin acumen (sharpness)',Synonym:'Shrewdness, astuteness, perspicacity'}},
  {icon:'🎭',name:'Adroit',sci:'adj.',desc:'Clever or skillful in using the hands or mind. An adroit negotiator.',tag:'English',facts:{Origin:'French adroit (to the right)',Antonym:'Maladroit (clumsy)'}},
  {icon:'🌙',name:'Alacrity',sci:'n.',desc:'Brisk, cheerful readiness. She accepted the invitation with alacrity.',tag:'English',facts:{Origin:'Latin alacritas (liveliness)',Synonym:'Eagerness, promptness, enthusiasm'}},
  {icon:'🔥',name:'Ambivalent',sci:'adj.',desc:'Having mixed feelings about something. Uncertainty about which of two opposing views is correct.',tag:'Psychology',facts:{Coined:'Eugen Bleuler, 1911',Common_use:'I have ambivalent feelings about it'}},
  {icon:'⚡',name:'Anachronism',sci:'n.',desc:'Something or someone placed in the wrong time period. A smartphone in a medieval film.',tag:'Literary',facts:{Greek:'Ana (against) + chronos (time)',Examples:'Shakespeare had clocks in ancient Rome'}},
  {icon:'🌿',name:'Anodyne',sci:'adj.',desc:'Unlikely to cause offence but also unlikely to be interesting. Safe, bland, inoffensive.',tag:'English',facts:{Also:'A painkilling medicine (archaic)',Use:'Anodyne platitudes, anodyne music'}},
  {icon:'✨',name:'Antithesis',sci:'n.',desc:'The direct opposite of something. Or a rhetorical contrast of ideas. "It was the best of times, it was the worst of times."',tag:'Literary/Rhetoric',facts:{Greek:'Anti (against) + thesis (position)',Dickens:'Opening of A Tale of Two Cities'}},
  {icon:'🧠',name:'Apathy',sci:'n.',desc:'Lack of interest, enthusiasm, or concern. Political apathy is a major challenge in democracies.',tag:'Psychology',facts:{Origin:'Greek apatheia (without feeling)',Related:'Anhedonia (inability to feel pleasure)'}},
  {icon:'🌊',name:'Apotheosis',sci:'n.',desc:'The highest point in development. The elevation to divine status. The apotheosis of his career.',tag:'Literary',facts:{Greek:'Apo (away) + theos (god)',Example:'Mozart was the apotheosis of classical music'}},
  {icon:'🔮',name:'Arcane',sci:'adj.',desc:'Known or understood by very few; mysterious. The arcane rituals of the secret society.',tag:'English',facts:{Origin:'Latin arcanus (shut up, secret)',Synonym:'Esoteric, obscure, cryptic'}},
  {icon:'💎',name:'Arduous',sci:'adj.',desc:'Involving or requiring strenuous effort; difficult and tiring.',tag:'English',facts:{Origin:'Latin arduus (steep, high)',Synonym:'Gruelling, laborious, onerous'}},
  {icon:'🎵',name:'Arrogant',sci:'adj.',desc:'Having an exaggerated sense of one\'s own importance or abilities.',tag:'English',facts:{Origin:'Latin arrogare (to claim for oneself)',Greek_equivalent:'Hubris — excessive pride before a fall'}},
  {icon:'🌸',name:'Astute',sci:'adj.',desc:'Having an ability to accurately assess situations or people and turn this to one\'s advantage.',tag:'English',facts:{Origin:'Latin astutus (crafty)',Synonym:'Shrewd, perceptive, sharp'}},
  {icon:'🌙',name:'Augment',sci:'v.',desc:'To make something greater by adding to it. To augment one\'s income.',tag:'English',facts:{Origin:'Latin augmentare (to increase)',Related:'Augmented reality (AR)'}},
  {icon:'⚡',name:'Auspicious',sci:'adj.',desc:'Conducive to success; favourable. An auspicious start to the year.',tag:'English',facts:{Origin:'Latin auspicium (omen from birds)',Antonym:'Inauspicious'}},
  {icon:'💡',name:'Avarice',sci:'n.',desc:'Extreme greed for wealth or material gain. One of the seven deadly sins.',tag:'English',facts:{Seven_sins:'Avarice is one of the seven deadly sins',Origin:'Latin avaritia (greediness)',Synonym:'Greed, cupidity, covetousness'}},
  {icon:'🌿',name:'Axiom',sci:'n.',desc:'A statement or proposition regarded as self-evidently true. "All men are mortal" is an axiom.',tag:'Philosophy/Math',facts:{Greek:'Axioma (that which is thought fitting)',Math:'Euclid\'s 5 axioms founded geometry'}},
  {icon:'🎭',name:'Azure',sci:'adj./n.',desc:'Bright blue in color, like a clear sky. The azure waters of the Mediterranean.',tag:'English',facts:{Origin:'Arabic lazaward (lapis lazuli)',Heraldry:'The colour blue in coats of arms'}},
  {icon:'🔥',name:'Banal',sci:'adj.',desc:'So lacking in originality as to be obvious and boring. Predictable clichés.',tag:'English',facts:{Origin:'French banal (common to all)',Noun:'Banality',Synonym:'Trite, hackneyed, vapid'}},
],

// ── MORE ANIMALS ──────────────────────────────────────────────────
animals: [
  {icon:'🦩',name:'Secretary Bird',sci:'Sagittarius serpentarius',desc:'A large bird of prey that walks on the ground and kills snakes by stamping on them. Named for its quill-like head feathers resembling an 18th-century secretary.',tag:'Bird',facts:{Hunting:'Stamps on prey with 195N force',Legs:'Long legs protect from snake bites',Status:'Endangered'}},
  {icon:'🐻',name:'Wolverine',sci:'Gulo gulo',desc:'The largest land-dwelling mustelid. Pound for pound one of the strongest animals — can drive bears and wolves off their kills.',tag:'Mammal',facts:{Strength:'Drives off animals 10x its size',Scent:'Powerful musk marks territory',Range:'Circumpolar — Alaska to Siberia'}},
  {icon:'🦜',name:'Kea',sci:'Nestor notabilis',desc:'The world\'s only alpine parrot, found in New Zealand. Highly intelligent and mischievous — known to dismantle cars searching for food.',tag:'Bird',facts:{IQ:'Solves multi-step puzzles',Cars:'Pulls rubber from windshields',Status:'Endangered — only 3,000-7,000 left'}},
  {icon:'🐙',name:'Mimic Octopus',sci:'Thaumoctopus mimicus',desc:'Can impersonate over 15 different species including lionfish, flatfish, and sea snakes. Chooses which predator to mimic based on the threat.',tag:'Cephalopod',facts:{Species:'Mimics 15+ species',Intelligence:'Chooses appropriate mimicry for each threat',Discovery:'First described 1998'}},
  {icon:'🦦',name:'Platypus',sci:'Ornithorhynchus anatinus',desc:'One of the few venomous mammals. Detects prey using electroreception — sensing the electrical fields of muscle contractions underwater.',tag:'Mammal',facts:{Venom:'Males have venomous ankle spurs',Electroreception:'40,000 electroreceptors in bill',Eggs:'One of five egg-laying mammals'}},
  {icon:'🐘',name:'Hummingbird',sci:'Trochilidae',desc:'The only bird that can fly backwards. Heart beats 1,200 times per minute during flight. Visits 1,000-2,000 flowers per day.',tag:'Bird',facts:{Heartrate:'Up to 1,200 bpm in flight',Metabolism:'Highest of any animal for its size',Memory:'Remembers every flower it has visited'}},
  {icon:'🦈',name:'Greenland Shark',sci:'Somniosus microcephalus',desc:'The longest-lived vertebrate on Earth — over 500 years old. Reaches sexual maturity at around 150 years of age. Nearly blind due to parasites.',tag:'Shark',facts:{Lifespan:'400-500+ years',Maturity:'Sexual maturity at ~150 years',Blind:'Copepod parasites live on its corneas'}},
  {icon:'🐝',name:'Pistol Shrimp',sci:'Alpheidae',desc:'Creates a cavitation bubble by snapping its claw at 25 m/s. The bubble reaches 8,000°C briefly — hotter than the Sun\'s surface.',tag:'Crustacean',facts:{Speed:'Claw snap at 25 m/s',Temperature:'8,000°C bubble momentarily',Sound:'Among loudest animals in the ocean'}},
  {icon:'🦁',name:'Naked Mole Rat',sci:'Heterocephalus glaber',desc:'Almost immune to cancer. Feels no pain from acid or capsaicin. Lives 30+ years — 10x longer than similar-sized rodents. Cold-blooded mammal.',tag:'Mammal',facts:{Cancer:'Extraordinary cancer resistance',Pain:'Cannot feel acid or chilli heat',Lifespan:'30+ years vs 3-4 for other rodents'}},
  {icon:'🐦',name:'Clark\'s Nutcracker',sci:'Nucifraga columbiana',desc:'Hides up to 98,000 pine seeds across thousands of locations per season. Recovers most of them months later. Has the best spatial memory of any animal studied.',tag:'Bird',facts:{Seeds:'Caches 98,000 seeds per season',Memory:'Retrieves 70-90% of hidden caches',Hippocampus:'Proportionally massive brain region'}},
],

// ── MORE SPACE ────────────────────────────────────────────────────
space: [
  {icon:'🌌',name:'Cosmic Web',sci:'Large-scale structure',desc:'The largest structure in the universe. Galaxies form along vast filaments connecting at nodes, with enormous voids in between. Looks like neurons in a brain.',tag:'Cosmology',facts:{Filaments:'Billions of light-years long',Voids:'Regions nearly empty of matter',Similarity:'Strikingly similar to neural networks'}},
  {icon:'⭐',name:'Pulsar',sci:'Neutron star',desc:'A rapidly rotating neutron star that emits beams of electromagnetic radiation. Some spin 716 times per second. First detected in 1967 — initially thought to be aliens.',tag:'Stellar',facts:{First_detection:'Jocelyn Bell Burnell, 1967',Alien_thought:'Briefly called LGM-1 (Little Green Men)',Speed:'Up to 716 rotations per second'}},
  {icon:'🌑',name:'Ceres',sci:'Dwarf planet',desc:'The largest object in the asteroid belt. A dwarf planet with bright spots — salt deposits from ancient liquid water. The first dwarf planet visited by spacecraft.',tag:'Dwarf Planet',facts:{Bright_spots:'Sodium carbonate deposits',Dawn:'NASA spacecraft visited 2015-2018',Size:'940 km diameter'}},
  {icon:'🔭',name:'Cosmic Microwave Background',sci:'CMB',desc:'The afterglow of the Big Bang — light from 380,000 years after the Big Bang when the universe cooled enough for atoms to form. The oldest light we can see.',tag:'Cosmology',facts:{Age:'13.8 billion years old',Discovery:'Accidentally found by Bell Labs, 1965',Temperature:'2.725 Kelvin above absolute zero'}},
  {icon:'🪐',name:'Great Red Spot',sci:'Jupiter',desc:'A storm larger than Earth that has raged for at least 350 years. It\'s actually shrinking — was once three times Earth\'s diameter, now only 1.3x.',tag:'Atmospheric',facts:{Size:'1.3x Earth diameter currently',Shrinking:'Was 3x Earth size in 1800s',Depth:'500 km deep'}},
  {icon:'💫',name:'Gravitational Lensing',sci:'General Relativity',desc:'Massive objects bend light from objects behind them. Einstein rings occur when alignment is perfect. Used to detect dark matter and see the early universe.',tag:'Physics',facts:{Einstein:'Predicted by General Relativity',Einstein_ring:'Perfect alignment creates ring',Dark_matter:'Revealed by unexpected lensing'}},
  {icon:'🌠',name:'Fast Radio Bursts',sci:'FRBs',desc:'Millisecond-long bursts of radio waves from billions of light-years away. Energy output of our Sun in 80 years released in milliseconds. Cause largely unknown.',tag:'Mystery',facts:{Duration:'Milliseconds',Energy:'Sun\'s 80-year output in ms',Cause:'Mostly unknown — magnetars suspected'}},
  {icon:'🚀',name:'Lagrange Points',sci:'Orbital mechanics',desc:'Five points in space where gravity from two large bodies balances centripetal force. Objects placed here stay stable. James Webb Telescope sits at Sun-Earth L2.',tag:'Physics',facts:{Count:'5 per two-body system',L2:'James Webb Telescope location',L4_L5:'Trojan asteroids cluster here'}},
  {icon:'🌍',name:'Earth\'s Magnetic Field',sci:'Geophysics',desc:'Generated by liquid iron in Earth\'s outer core. Protects us from solar wind. It has reversed hundreds of times — north and south poles swap every 200,000-300,000 years.',tag:'Earth Science',facts:{Generator:'Convecting liquid iron outer core',Reversals:'Hundreds of times in Earth history',Overdue:'Last reversal 780,000 years ago'}},
  {icon:'☄️',name:'Oort Cloud',sci:'Hypothetical region',desc:'A vast spherical shell of icy objects surrounding the solar system, extending 100,000 AU from the Sun. Never directly observed — inferred from long-period comets.',tag:'Solar System',facts:{Distance:'Up to 100,000 AU from Sun',Hypothetical:'Never directly observed',Comets:'Source of long-period comets'}},
],

// ── MORE HISTORY ──────────────────────────────────────────────────
history: [
  {icon:'🏛️',name:'The Mongol Empire',sci:'1206-1368',desc:'The largest contiguous land empire in history. Under Genghis Khan and successors, it stretched from the Pacific to Eastern Europe. Killed 10% of the world\'s population.',tag:'Medieval',facts:{Size:'24 million km² at peak',Population:'40 million killed — 10% of world',Trade:'Pax Mongolica enabled Silk Road trade'}},
  {icon:'📜',name:'The Printing Press',sci:'Gutenberg, 1440',desc:'Johannes Gutenberg\'s movable type press democratised knowledge. The Bible was the first major book printed. Within 50 years, 20 million books were in circulation.',tag:'Technology',facts:{Gutenberg:'Johannes Gutenberg, ~1440',First_book:'Gutenberg Bible',Impact:'Enabled Reformation, Scientific Revolution'}},
  {icon:'⚔️',name:'The Thirty Years War',sci:'1618-1648',desc:'A devastating European war that killed 8 million people — 25-40% of Germany\'s population. Ended with the Peace of Westphalia, establishing modern state sovereignty.',tag:'European',facts:{Deaths:'8 million — mostly civilians and famine',Germany:'Lost up to 40% of population',Legacy:'Birth of modern nation-state system'}},
  {icon:'🌊',name:'The Great Fire of London',sci:'1666',desc:'Destroyed 13,200 houses, 87 churches, and St Paul\'s Cathedral. Ironically helped end the Great Plague. Only 6 confirmed deaths despite devastating destruction.',tag:'British',facts:{Houses:'13,200 destroyed',Deaths:'Only 6 confirmed',Plague:'Helped end the Great Plague of 1665'}},
  {icon:'💡',name:'The Enlightenment',sci:'17th-18th century',desc:'An intellectual movement emphasising reason, individualism, and science over tradition and religion. Produced Locke, Voltaire, Rousseau, and inspired the American and French Revolutions.',tag:'Intellectual',facts:{Key_thinkers:'Locke, Voltaire, Hume, Rousseau, Kant',Revolutions:'Inspired American and French Revolutions',Legacy:'Democracy, human rights, scientific method'}},
  {icon:'🔬',name:'The Scientific Revolution',sci:'1543-1687',desc:'Copernicus, Galileo, and Newton overturned ancient knowledge. The Earth moved around the Sun. Gravity explained. The scientific method was born.',tag:'Science',facts:{Copernicus:'Heliocentric model, 1543',Galileo:'Confirmed with telescope, persecuted by Church',Newton:'Principia Mathematica, 1687'}},
  {icon:'🌍',name:'The Transatlantic Slave Trade',sci:'1500s-1800s',desc:'An estimated 12.5 million Africans were transported to the Americas. The largest forced migration in history. Foundational to the wealth of Western nations.',tag:'Modern',facts:{Numbers:'12.5 million transported',Deaths:'2 million died during the Middle Passage',Legacy:'Profound ongoing impact on society and inequality'}},
  {icon:'💣',name:'Hiroshima and Nagasaki',sci:'August 1945',desc:'The only use of nuclear weapons in war. Hiroshima: 6 August, Nagasaki: 9 August 1945. 129,000-226,000 immediate deaths. Japan surrendered 6 days later.',tag:'WWII',facts:{Hiroshima:'70,000-80,000 immediate deaths',Nagasaki:'40,000-60,000 immediate deaths',Surrender:'Japan surrendered August 15, 1945'}},
  {icon:'🌐',name:'The Cold War',sci:'1947-1991',desc:'A geopolitical struggle between the US and USSR involving nuclear brinkmanship, space race, proxy wars, and ideological conflict. Ended with the USSR\'s dissolution.',tag:'Modern',facts:{Space_race:'Sputnik 1957, Moon 1969',Close_calls:'Cuban Missile Crisis 1962',End:'USSR dissolved December 25, 1991'}},
  {icon:'📱',name:'The Digital Revolution',sci:'1980s-present',desc:'The shift from analogue to digital technology. Personal computers, the internet, smartphones, and AI have transformed every aspect of human life within decades.',tag:'Modern',facts:{Speed:'Faster than any previous revolution',Billions:'4.9 billion internet users',AI:'Current frontier of transformation'}},
],

// ── MORE FOOD ─────────────────────────────────────────────────────
food: [
  {icon:'🍜',name:'Noodles',sci:'Ancient China',desc:'Noodles predate pasta by millennia — the oldest noodles found are 4,000 years old, discovered in China in 2005. The debate over who invented pasta is settled.',tag:'Staple',facts:{Oldest:'4,000-year-old noodles found in China',Varieties:'Thousands of types globally',Marco_Polo:'Did NOT bring pasta from China — it was already in Italy'}},
  {icon:'🧃',name:'Orange Juice',sci:'Nutrition',desc:'Fresh squeezed OJ starts losing vitamin C within 30 minutes. Most supermarket OJ is stored in tanks for up to a year, then flavour packs are added.',tag:'Beverage',facts:{Fresh:'Loses vitamin C quickly',Storage:'Stored in tanks up to 1 year',Flavor_packs:'Added to restore taste after storage'}},
  {icon:'🫙',name:'Fermentation',sci:'Ancient technology',desc:'Over 10,000 years old — one of humanity\'s oldest food technologies. Beer, wine, bread, cheese, yogurt, kimchi, miso, vinegar, and soy sauce all involve fermentation.',tag:'Process',facts:{Age:'10,000+ years old',Products:'Beer, wine, bread, cheese, kimchi, miso',Pasteur:'Louis Pasteur explained it in 1857'}},
  {icon:'🌶️',name:'Capsaicin',sci:'Chemistry',desc:'The compound that makes peppers hot. It binds to TRPV1 pain receptors — the same ones that detect heat. Birds cannot feel it and disperse seeds; mammals avoid the fruit.',tag:'Chemistry',facts:{Receptor:'TRPV1 — same as heat detection',Birds:'Immune — important seed dispersers',Milk:'Casein in milk dissolves capsaicin; water doesn\'t'}},
  {icon:'🍫',name:'Cacao',sci:'Theobroma cacao',desc:'Used as currency by the Aztecs. Dark chocolate has more antioxidants than blueberries. The cacao tree produces flowers and fruit directly from its trunk.',tag:'Food',facts:{Currency:'Aztec currency',Antioxidants:'More than blueberries or green tea',Trunk:'Flowers grow directly from trunk (cauliflory)'}},
  {icon:'🧂',name:'MSG',sci:'Monosodium glutamate',desc:'Discovered by Kikunae Ikeda in 1908. Naturally occurs in tomatoes, Parmesan, and mushrooms. The "Chinese restaurant syndrome" was debunked — MSG is safe.',tag:'Food Science',facts:{Discovered:'Kikunae Ikeda, 1908',Natural:'In tomatoes, Parmesan, soy sauce, seaweed',Safety:'Thoroughly studied — no evidence of harm'}},
  {icon:'🍞',name:'Yeast',sci:'Saccharomyces cerevisiae',desc:'Single-celled fungi used for 6,000 years to leaven bread and ferment beer. The first eukaryote to have its genome fully sequenced (1996).',tag:'Microbiology',facts:{Use:'6,000+ years of use',First_eukaryote:'First eukaryotic genome sequenced (1996)',Cells:'Baker\'s and brewer\'s yeast are same species'}},
  {icon:'☕',name:'Caffeine',sci:'Stimulant',desc:'The world\'s most widely consumed psychoactive drug. Works by blocking adenosine receptors (which cause sleepiness). Takes 5-7 hours to halve in the body.',tag:'Biochemistry',facts:{Most_used:'Most widely consumed psychoactive substance',Half_life:'5-7 hours in adults',Adenosine:'Blocks receptors that cause drowsiness'}},
  {icon:'🫒',name:'Vinegar',sci:'Acetic acid',desc:'One of humanity\'s oldest condiments — found in Egyptian urns from 3000 BCE. Made by a two-step fermentation. Used for preservation, medicine, and cleaning for millennia.',tag:'Condiment',facts:{Age:'Found in Egyptian urns 3000 BCE',Process:'Alcohol → acetic acid via bacteria',Uses:'Food, medicine, cleaning, warfare (dissolving stones)'}},
  {icon:'🌽',name:'Popcorn',sci:'Zea mays everta',desc:'Humans have been eating popcorn for at least 5,000 years. Native Americans brought popcorn to the first Thanksgiving. The US produces 40% of the world\'s popcorn.',tag:'Snack',facts:{Age:'5,000+ years old',Temperature:'Pops at 180°C',US:'Produces 40% of world supply'}},
],

// ── MORE MUSIC ────────────────────────────────────────────────────
music: [
  {icon:'🎸',name:'The Blues',sci:'American music',desc:'Originated in the Deep South from African spiritual music, work songs, and field hollers. The foundation of virtually all Western popular music — rock, jazz, R&B, country.',tag:'Genre',facts:{Origin:'Mississippi Delta, late 1800s',Foundation:'Basis of rock, jazz, R&B, country',Structure:'12-bar blues is the backbone'}},
  {icon:'🎵',name:'The Circle of Fifths',sci:'Music theory',desc:'A diagram showing the relationships between all 12 tones of the chromatic scale. Moving clockwise adds one sharp; anti-clockwise adds one flat. Essential for understanding key relationships.',tag:'Theory',facts:{Use:'Navigate between keys',Composition:'Bach and Mozart used it instinctively',Sharps:'Each clockwise step adds one sharp'}},
  {icon:'🎹',name:'Equal Temperament',sci:'Tuning system',desc:'Divides the octave into 12 equal semitones. Before this, different keys sounded in tune and others did not. Bach\'s Well-Tempered Clavier celebrated it.',tag:'Theory',facts:{Bach:'WTC demonstrated it worked',Before:'Pythagorean tuning — some keys unusable',Modern:'All Western instruments use equal temperament'}},
  {icon:'🎺',name:'Swing Music',sci:'1930s-40s',desc:'Big band jazz with a driving, danceable rhythm. The most popular music in America during the 1930s-40s. Benny Goodman, Glenn Miller, Duke Ellington.',tag:'Genre',facts:{Era:'Great Depression and WWII era',Goodman:'Benny Goodman — King of Swing',Zoot_suit:'Fashion era tied to swing culture'}},
  {icon:'🎵',name:'Hip-Hop',sci:'1970s, Bronx NY',desc:'Born at a block party in the Bronx, 1973. DJ Kool Herc isolated drum breaks. Now the world\'s most-streamed genre. A culture: MCing, DJing, breakdancing, graffiti.',tag:'Genre',facts:{Birth:'DJ Kool Herc, Bronx party 1973',Elements:'MCing, DJing, breakdancing, graffiti',Global:'Most-streamed genre worldwide'}},
  {icon:'🎸',name:'The Electric Bass',sci:'Leo Fender, 1951',desc:'Leo Fender invented the Fender Precision Bass in 1951. Replaced the upright double bass in popular music. Changed how rhythm sections worked fundamentally.',tag:'Instrument',facts:{Fender:'Leo Fender, 1951',Precision_bass:'First mass-produced electric bass',Impact:'Completely changed rhythm in popular music'}},
  {icon:'🎼',name:'Polyrhythm',sci:'Rhythm',desc:'Multiple rhythms played simultaneously. Central to African music, jazz, and modern genres. West African drumming can combine 3-against-2, 4-against-3 simultaneously.',tag:'Theory',facts:{Africa:'Central to West African drumming traditions',Jazz:'Dave Brubeck\'s Take Five — 5/4 time',Modern:'Radiohead, Meshuggah use complex polyrhythm'}},
  {icon:'🔊',name:'Dynamic Range',sci:'Audio',desc:'The ratio between the loudest and softest sounds in a recording. The loudness war of the 1990s-2000s compressed dynamics to make music louder on radio.',tag:'Audio Engineering',facts:{Loudness_war:'1990s-2000s — maximising perceived loudness',LUFS:'Modern streaming normalises loudness',Vinyl:'Forces wider dynamic range than CD'}},
  {icon:'🎵',name:'Solfège',sci:'Music education',desc:'Do-Re-Mi-Fa-Sol-La-Ti-Do. A system for sight-singing. Invented by Guido d\'Arezzo in the 11th century, using syllables from a Latin hymn to St John.',tag:'Theory',facts:{Invented:'Guido d\'Arezzo, 11th century',Source:'Latin hymn Ut queant laxis',Sound_of_Music:'Popularised the system globally'}},
  {icon:'🎸',name:'Distortion',sci:'Guitar effects',desc:'Overdriving an amplifier creates harmonic distortion — the sound of rock and metal. Originally accidental (broken speakers). Now a fundamental sound design tool.',tag:'Audio',facts:{Accident:'Originally broken equipment',Link_Wray:'1958 — first recorded use of distortion',Fuzz:'Fuzz boxes created it intentionally in 1960s'}},
],

// ── MORE BODY ─────────────────────────────────────────────────────
body: [
  {icon:'👁️',name:'Visual Cortex',sci:'Neuroscience',desc:'Takes up 30% of the brain\'s cortex — more than any other sense. Processes edges, colours, motion, faces, and depth in parallel streams.',tag:'Neuroscience',facts:{Area:'30% of brain cortex',Parallel:'Multiple streams process different features simultaneously',Dreams:'Active during REM sleep — why we see in dreams'}},
  {icon:'🫁',name:'Diaphragm',sci:'Anatomy',desc:'The dome-shaped muscle beneath the lungs responsible for breathing. Hiccups are caused by spasms of the diaphragm. We breathe 20,000 times per day.',tag:'Anatomy',facts:{Breathing:'Primary muscle of respiration',Hiccups:'Diaphragm spasms',Daily:'20,000 breaths per day'}},
  {icon:'🧬',name:'Mitochondria',sci:'Cell biology',desc:'Power stations of the cell, producing ATP via cellular respiration. They have their own DNA — evidence they were once free-living bacteria that were absorbed.',tag:'Cell Biology',facts:{ATP:'Produce adenosine triphosphate (energy)',Own_DNA:'Remnant of bacterial ancestry',Maternal:'Inherited only from mother'}},
  {icon:'💊',name:'The Liver',sci:'Anatomy',desc:'The only internal organ that can fully regenerate. Performs 500+ functions including detoxification, protein synthesis, and producing bile for digestion.',tag:'Anatomy',facts:{Regenerates:'Can regrow from 25% of original mass',Functions:'500+ known functions',Largest:'Largest internal organ'}},
  {icon:'🦠',name:'Gut-Brain Axis',sci:'Neuroscience',desc:'The bidirectional communication between gut and brain via the vagus nerve. The gut has 100 million neurons — its own nervous system. Gut bacteria influence mood.',tag:'Neuroscience',facts:{Neurons:'100 million in the gut',Vagus:'Main communication highway',Serotonin:'90% of serotonin is in the gut, not brain'}},
  {icon:'🩸',name:'Platelets',sci:'Haematology',desc:'Tiny cell fragments that clump together to form blood clots. They have no nucleus. Live only 5-9 days. Aspirin works by irreversibly blocking platelet aggregation.',tag:'Haematology',facts:{No_nucleus:'Not true cells',Lifespan:'5-9 days',Aspirin:'Permanently inactivates platelet enzymes'}},
  {icon:'🧠',name:'Working Memory',sci:'Cognitive psychology',desc:'Short-term memory you can actively manipulate. Capacity: 7±2 chunks (George Miller, 1956). Why phone numbers are 7 digits. Severely reduced by stress and multitasking.',tag:'Psychology',facts:{Capacity:'7±2 items (Miller\'s Law)',Miller:'George Miller, 1956',Stress:'Dramatically reduces working memory capacity'}},
  {icon:'🫀',name:'The Vagus Nerve',sci:'Anatomy',desc:'The longest cranial nerve, running from brainstem to abdomen. Controls heart rate, digestion, immune response. Vagal stimulation can treat depression and epilepsy.',tag:'Anatomy',facts:{Longest:'Longest cranial nerve',Controls:'Heart, lungs, digestive tract',Therapy:'Vagus nerve stimulation treats epilepsy and depression'}},
  {icon:'💪',name:'Fascia',sci:'Anatomy',desc:'The connective tissue that wraps around every muscle, organ, nerve, and blood vessel. Once ignored, now recognised as a sensory organ and central to chronic pain.',tag:'Anatomy',facts:{Everywhere:'Wraps every structure in the body',Sensory:'Has more nerve endings than muscles',Pain:'Central to understanding chronic pain'}},
  {icon:'😴',name:'Adenosine',sci:'Neuroscience',desc:'A chemical that builds up in the brain during waking hours, causing sleepiness. Caffeine blocks adenosine receptors. Sleep clears it via the glymphatic system.',tag:'Neuroscience',facts:{Build_up:'Accumulates while awake',Caffeine:'Blocks its receptors',Glymphatic:'Brain\'s waste clearance system active during sleep'}},
],

// ── MORE GEOGRAPHY ────────────────────────────────────────────────
geography: [
  {icon:'🌍',name:'The Sahara\'s Green Past',sci:'Palaeoclimatology',desc:'11,000 years ago the Sahara was green — a savannah with lakes, hippos, and crocodiles. Rock art from this period shows giraffes and cattle. It cycles every 41,000 years.',tag:'Climate',facts:{Timing:'Green approximately 11,000 to 5,000 years ago',Evidence:'Rock art, fossil lake beds',Cycle:'Driven by Milankovitch orbital cycles'}},
  {icon:'🏔️',name:'K2',sci:'8,611m',desc:'The second highest mountain, far more deadly than Everest. 23% of summit attempts result in death vs Everest\'s 1.5%. Never climbed in winter until 2021.',tag:'Mountain',facts:{Height:'8,611 metres',Death_rate:'23% summit attempt fatality rate',Winter:'First winter summit: January 16, 2021'}},
  {icon:'🌊',name:'The Gulf Stream',sci:'Ocean current',desc:'A powerful Atlantic ocean current carrying warm water from the Gulf of Mexico to Western Europe. Without it, the UK would be as cold as Canada at the same latitude.',tag:'Ocean',facts:{Heat:'Keeps Western Europe 5-10°C warmer',Speed:'Up to 2.5 m/s',Weakening:'Slowing due to climate change'}},
  {icon:'🏜️',name:'Atacama Desert',sci:'South America',desc:'The driest non-polar desert on Earth. Some areas have never recorded rainfall. But after rare rains, it blooms into a carpet of wildflowers.',tag:'Desert',facts:{Driest:'Some areas never receive rain',Altitude:'Average 4,000m above sea level',Bloom:'Desierto Florido after rare rains'}},
  {icon:'🌿',name:'The Congo Basin',sci:'Central Africa',desc:'The world\'s second largest rainforest after the Amazon. The only rainforest that absorbs more CO₂ than it emits. Home to bonobos, gorillas, and forest elephants.',tag:'Forest',facts:{Size:'3.7 million km²',Carbon:'Net carbon sink',Biodiversity:'Bonobos, gorillas, okapis, forest elephants'}},
  {icon:'🏔️',name:'The Marianas Trench',sci:'Pacific Ocean',desc:'The deepest point in any ocean at 11,034 metres. Pressure is 1,086 times atmospheric. Life exists even here — bacteria in sediment, amphipods, and snailfish.',tag:'Ocean',facts:{Depth:'11,034 metres (Challenger Deep)',Pressure:'1,086 bar',Life:'Snailfish found at 8,336m — record depth'}},
  {icon:'🌊',name:'Dead Sea',sci:'Middle East',desc:'The lowest point on Earth\'s land surface at 430m below sea level. 10x saltier than the ocean. The shoreline is dropping about 1 metre per year due to water diversion.',tag:'Lake',facts:{Elevation:'-430m below sea level',Salinity:'34% vs ocean 3.5%',Sinking:'~1 metre per year'}},
  {icon:'❄️',name:'Permafrost',sci:'Cryosphere',desc:'Ground that remains frozen for two or more consecutive years. Covers 25% of the Northern Hemisphere\'s land surface. Contains twice as much carbon as the atmosphere.',tag:'Climate',facts:{Area:'25% of Northern Hemisphere land',Carbon:'Contains 2x atmospheric carbon',Thawing:'Releases methane as it melts — feedback loop'}},
  {icon:'🌋',name:'Iceland',sci:'North Atlantic',desc:'Sits on the Mid-Atlantic Ridge where two tectonic plates pull apart at 2cm per year. Growing larger every year. 30% of all lava erupted on Earth since 1500 came from Iceland.',tag:'Island',facts:{Ridge:'Spreading at 2cm per year',Lava:'30% of global eruptions since 1500',Geothermal:'90% of homes heated geothermally'}},
  {icon:'🌍',name:'The Nile',sci:'11th longest river',desc:'Historically considered the world\'s longest river at 6,650km, but the Amazon may actually be longer depending on how source and mouth are measured.',tag:'River',facts:{Length:'6,650km',Dispute:'Amazon may be longer — measurement method matters',Civilisation:'Egyptian civilisation entirely dependent on its floods'}},
],

// ── MORE TECH ─────────────────────────────────────────────────────
tech: [
  {icon:'💻',name:'Unix Philosophy',sci:'Software design',desc:'Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams. Created by Ken Thompson and Dennis Ritchie.',tag:'Design',facts:{Authors:'Ken Thompson and Dennis Ritchie, Bell Labs',Year:'1969',Influence:'Foundational to Linux, macOS, and modern computing'}},
  {icon:'⚡',name:'Quantum Computing',sci:'Computing',desc:'Uses quantum superposition and entanglement to process information. Not just faster — solves fundamentally different problems. Could break RSA encryption.',tag:'Computing',facts:{Qubits:'Quantum bits — can be 0, 1, or both',Advantage:'Certain problems impossible for classical computers',Threat:'Shor\'s algorithm breaks RSA encryption'}},
  {icon:'🔐',name:'Zero Trust Security',sci:'Cybersecurity',desc:'Never trust, always verify. Every user and device must be authenticated for every access request, even inside the network perimeter. Modern security architecture.',tag:'Security',facts:{Principle:'Never trust, always verify',vs_VPN:'Replaces the concept of trusted network perimeter',Adoption:'Accelerated by remote work post-2020'}},
  {icon:'🌐',name:'IPv6',sci:'Networking',desc:'The successor to IPv4. IPv4 has 4.3 billion addresses (exhausted in 2011). IPv6 has 340 undecillion addresses — enough for every atom on Earth to have multiple.',tag:'Networking',facts:{IPv4:'4.3 billion addresses — exhausted',IPv6:'340 undecillion addresses',Adoption:'Still only ~40% of traffic globally'}},
  {icon:'🤖',name:'Neural Networks',sci:'Machine Learning',desc:'Inspired by biological neurons. Layers of interconnected nodes learn patterns from data by adjusting weights. Deep learning stacks many layers for complex pattern recognition.',tag:'AI',facts:{Inspiration:'Modelled on biological neural networks',Perceptron:'First artificial neuron, 1958',Deep_learning:'Many layers = deep neural network'}},
  {icon:'💾',name:'RAID',sci:'Storage',desc:'Redundant Array of Inexpensive Disks. RAID 0 stripes for speed. RAID 1 mirrors for redundancy. RAID 5 stripes with parity. Used in servers and NAS devices.',tag:'Storage',facts:{RAID_0:'Striping — faster but no redundancy',RAID_1:'Mirroring — full redundancy',RAID_5:'Striping with distributed parity'}},
  {icon:'🔧',name:'Docker',sci:'Containerisation',desc:'Packages applications with all dependencies into containers that run identically anywhere. "Works on my machine" is no longer an excuse. Changed software deployment fundamentally.',tag:'DevOps',facts:{Year:'2013',Containers:'Isolated environments sharing OS kernel',vs_VMs:'Lighter than virtual machines'}},
  {icon:'🌊',name:'The Tor Project',sci:'Anonymity',desc:'Routes internet traffic through 6,000+ volunteer relays, encrypting at each hop. Developed by the US Navy for secure communications. Now used for privacy and sometimes crime.',tag:'Privacy',facts:{Relays:'6,000+ volunteer nodes',Origin:'US Naval Research Laboratory',Users:'2 million daily users'}},
  {icon:'⚡',name:'WebAssembly',sci:'Web technology',desc:'A binary format that runs in browsers at near-native speed. Allows C, C++, Rust code to run on the web. Enables complex applications like AutoCAD in the browser.',tag:'Web',facts:{Speed:'Near-native execution speed',Languages:'C, C++, Rust, Go compile to Wasm',Use:'Games, video editing, CAD in browser'}},
  {icon:'🔬',name:'LIDAR',sci:'Remote sensing',desc:'Light Detection And Ranging. Pulses laser light and measures return time to create 3D maps. Used in self-driving cars, archaeology (finding hidden cities), and mapping.',tag:'Technology',facts:{Principle:'Time of flight of laser pulses',Self_driving:'Key sensor in autonomous vehicles',Archaeology:'Revealed Mayan cities hidden under jungle'}},
],

// ── MORE WEATHER ──────────────────────────────────────────────────
weather: [
  {icon:'🌩️',name:'Supercell Thunderstorm',sci:'Meteorology',desc:'The most severe type of thunderstorm, characterised by a persistent rotating updraft (mesocyclone). Produces the most violent tornadoes, giant hail, and extreme winds.',tag:'Storm',facts:{Rotation:'Defined by rotating updraft',Hail:'Can produce softball-sized hail',Tornado:'Almost all significant tornadoes come from supercells'}},
  {icon:'❄️',name:'Lake-Effect Snow',sci:'Meteorology',desc:'Cold air passing over warm lake water picks up moisture and dumps heavy snow on downwind shores. Buffalo, NY gets 250cm per year from Lake Erie and Ontario.',tag:'Winter',facts:{Buffalo:'Gets 250cm+ from Great Lakes',Mechanism:'Cold air, warm water, massive moisture',Great_Lakes:'Major producers in North America'}},
  {icon:'🌬️',name:'Trade Winds',sci:'Atmospheric',desc:'Steady easterly winds in the tropics, blowing toward the equator. They powered sailing ships across the Atlantic for centuries. Named because they enabled trade routes.',tag:'Atmospheric',facts:{Direction:'Easterly, toward the equator',Named:'For their importance to merchant shipping',El_Nino:'Weaken during El Nino events'}},
  {icon:'🌡️',name:'Urban Heat Island',sci:'Climatology',desc:'Cities can be 5-10°C hotter than surrounding rural areas. Dark surfaces absorb heat, concrete stores it, air conditioning exhausts heat. Worsening with climate change.',tag:'Climate',facts:{Temperature:'5-10°C hotter than rural',Cause:'Dark surfaces, concrete, waste heat',Mitigation:'Green roofs, trees, light-coloured surfaces'}},
  {icon:'⛈️',name:'Derecho',sci:'Meteorology',desc:'A widespread, long-lived straight-line wind storm associated with a band of rapidly moving showers or thunderstorms. Can travel 400+ km and cause hurricane-force damage.',tag:'Storm',facts:{Meaning:'Straight in Spanish',Distance:'400+ km without breaks',Damage:'Equivalent to F1-F2 tornado damage over wide area'}},
  {icon:'🌊',name:'Storm Surge',sci:'Coastal hazard',desc:'An abnormal rise of water generated by a storm over and above astronomical tide. The most deadly aspect of hurricanes — responsible for 49% of Atlantic hurricane deaths.',tag:'Hazard',facts:{Deaths:'49% of hurricane fatalities',Katrina:'8.5m surge in New Orleans',Cause:'Low pressure + onshore winds push water inland'}},
  {icon:'🌬️',name:'The Mistral',sci:'Regional wind',desc:'A strong, cold, dry northerly wind that blows through the Rhône valley and into the Mediterranean. Can reach 100 km/h and last for days. Famous for driving people mad.',tag:'Wind',facts:{Speed:'Up to 100 km/h',Duration:'Can last days',Van_Gogh:'Painted during Mistral — explains his turbulent skies'}},
  {icon:'❄️',name:'Frost Hollow',sci:'Microclimate',desc:'A depression or valley floor where cold air collects on calm, clear nights. Temperatures can be 10°C colder than surrounding hillsides just metres away.',tag:'Microclimate',facts:{Mechanism:'Cold air sinks and pools',Temperature:'Up to 10°C colder than nearby hillsides',Agriculture:'Frost hollows destroy crops while hilltops survive'}},
  {icon:'🌈',name:'Glory',sci:'Optical phenomenon',desc:'A circular rainbow-like optical phenomenon seen around the shadow of your head when looking at a cloud or fog bank below you. Only appears opposite the sun.',tag:'Optics',facts:{Appears:'Around shadow of observer',Cause:'Backscattering of light from water droplets',Seen_from:'Aircraft or mountain when looking down at clouds'}},
  {icon:'⚡',name:'Sprites and Elves',sci:'Atmospheric electricity',desc:'Transient luminous events in the upper atmosphere above thunderstorms. Sprites are red jellyfish shapes at 50-90 km altitude. Elves are disc-shaped flashes. Both last milliseconds.',tag:'Phenomenon',facts:{Sprites:'Red, jellyfish-shaped, 50-90km altitude',Elves:'Disc-shaped expanding rings',Duration:'Milliseconds — incredibly brief'}},
],

}; // end DICT_PACK4

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Dictionary Expansion Pack 5
//  Adds 250+ entries: Cinema, Architecture, Linguistics,
//  Mathematics, Fashion, Sports, Law, Philosophy of Mind,
//  Oceanography, Inventions
// ═══════════════════════════════════════════════════════════════════

(function(){
  if(typeof DICT_DATA==='undefined') return;
  Object.keys(DICT_PACK5).forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat]=[];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_PACK5[cat]);
  })();
  var sb=document.getElementById('dcat-elements') ? document.getElementById('dcat-elements').parentElement : null;
  if(sb){
    var newCats=[
      {id:'cinema',    label:'🎬 Cinema'},
      {id:'math',      label:'📐 Mathematics'},
      {id:'fashion',   label:'👗 Fashion'},
      {id:'law',       label:'⚖️ Law'},
      {id:'ocean',     label:'🌊 Oceanography'},
      {id:'inventions',label:'💡 Inventions'},
    ];
    newCats.forEach(function(cat){
      if(!document.getElementById('dcat-'+cat.id)){
        var btn=document.createElement('button');
        btn.id='dcat-'+cat.id;
        btn.style.cssText='width:100%;padding:9px 14px;border:none;border-left:3px solid transparent;background:transparent;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;font-family:Outfit,sans-serif';
        btn.textContent=cat.label;
        btn.onclick=function(){dictSetCat(cat.id,this);};
        sb.appendChild(btn);
      }
    });
  }
});

const DICT_PACK5 = {

// ── CINEMA ────────────────────────────────────────────────────────
cinema: [
  {icon:'🎬',name:'Method Acting',sci:'Acting technique',desc:'The actor lives as the character between shoots, drawing on personal emotional memories. Marlon Brando and Dustin Hoffman pioneered it. Daniel Day-Lewis is its greatest practitioner.',tag:'Technique',facts:{Origin:'Konstantin Stanislavski system',Hoffman:'Dustin Hoffman stayed awake 3 days for Marathon Man. Laurence Olivier said "try acting, dear boy."',Day_Lewis:'Stayed in character for entire shoots'}},
  {icon:'🎥',name:'The Kuleshov Effect',sci:'Film editing',desc:'The same shot of a neutral face means different things depending on what follows it. Food = hunger. Coffin = grief. Girl = lust. Editing creates meaning.',tag:'Editing',facts:{Kuleshov:'Lev Kuleshov, Soviet filmmaker 1910s-20s',Implication:'Audience creates emotion, not the actor',Montage:'Foundation of Soviet montage theory'}},
  {icon:'🎭',name:'The 180-Degree Rule',sci:'Cinematography',desc:'Keep the camera on one side of an imaginary line between two characters. Crossing it disorients the viewer. The foundational rule of spatial continuity.',tag:'Cinematography',facts:{Purpose:'Maintains screen direction',Breaking:'Breaking it intentionally signals disorientation',Godard:'French New Wave deliberately broke it'}},
  {icon:'🌊',name:'Film Noir',sci:'1940s-50s genre',desc:'Dark, cynical crime films defined by shadowy lighting, femmes fatales, and morally ambiguous protagonists. Influenced by German Expressionism and hard-boiled fiction.',tag:'Genre',facts:{Lighting:'High contrast, shadows, venetian blinds',Femme_fatale:'The dangerous woman archetype',Examples:'The Maltese Falcon, Double Indemnity, Sunset Boulevard'}},
  {icon:'⚡',name:'Practical Effects',sci:'Filmmaking',desc:'Physical effects created on set — explosions, puppets, miniatures, prosthetics. Before CGI. The Alien xenomorph, The Thing, Star Wars\' practical sets.',tag:'Production',facts:{Alien:'H.R. Giger designed the creature',Jurassic_Park:'Blend of animatronic and early CGI',Nolan:'Christopher Nolan prefers practical effects'}},
  {icon:'🔮',name:'The Bechdel Test',sci:'Film criticism',desc:'Does the film have (1) two named women who (2) talk to each other about (3) something other than a man? Over 50% of films fail. Named after cartoonist Alison Bechdel.',tag:'Criticism',facts:{Origin:'Alison Bechdel cartoon, 1985',Pass_rate:'About 57% of films pass',Limitation:'Passing does not mean feminist; failing does not mean sexist'}},
  {icon:'💡',name:'Deep Focus',sci:'Cinematography',desc:'Everything from foreground to background is in sharp focus simultaneously. Orson Welles and cinematographer Gregg Toland used it extensively in Citizen Kane.',tag:'Technique',facts:{Citizen_Kane:'1941 — landmark use',Toland:'Gregg Toland developed the technique',vs_shallow:'Shallow focus isolates subject; deep focus shows relationships'}},
  {icon:'🎵',name:'Diegetic Sound',sci:'Film theory',desc:'Sound that exists within the world of the film — characters can hear it. Non-diegetic is the score — characters cannot hear it. This line is constantly played with.',tag:'Theory',facts:{Diegetic:'On-screen radio, speech, footsteps',Non_diegetic:'Score, narration, sound effects added in post',Blurring:'Psycho shower scene — diegetic or not?'}},
  {icon:'🎬',name:'French New Wave',sci:'1950s-60s',desc:'Godard, Truffaut, Chabrol broke all the rules — jump cuts, handheld cameras, location shooting, improvised dialogue. Reaction against polished Hollywood cinema.',tag:'Movement',facts:{Manifesto:'Cahiers du Cinema critics turned directors',Godard:'Breathless (1960) — jump cuts shocked audiences',Influence:'Changed world cinema permanently'}},
  {icon:'🌟',name:'The Uncanny Valley',sci:'Robotics/CGI',desc:'Almost-human characters trigger revulsion rather than empathy. Coined by Masahiro Mori in 1970. Explains why hyperrealistic CGI humans feel deeply wrong.',tag:'Psychology',facts:{Mori:'Masahiro Mori, 1970',CGI:'Explains failure of hyperrealistic digital humans',Zombies:'May explain why zombies are universally disturbing'}},
],

// ── MATHEMATICS ───────────────────────────────────────────────────
math: [
  {icon:'∞',name:'Infinity',sci:'Mathematics',desc:'Not a number but a concept. Georg Cantor proved some infinities are larger than others. The infinity of real numbers is strictly larger than the infinity of integers.',tag:'Set Theory',facts:{Cantor:'Georg Cantor, 1874',Countable:'Integers are countably infinite',Uncountable:'Real numbers are uncountably infinite — a larger infinity'}},
  {icon:'π',name:'Pi (π)',sci:'Mathematics',desc:'The ratio of a circle\'s circumference to its diameter. Irrational — never ends, never repeats. Known to 100 trillion digits. Ancient Egyptians estimated 3.16.',tag:'Constants',facts:{Value:'3.14159265358979...',Computed:'100 trillion digits (2022)',Irrational:'Proven irrational by Lambert in 1761'}},
  {icon:'🔢',name:'The Fibonacci Sequence',sci:'Mathematics',desc:'Each number is the sum of the previous two: 0, 1, 1, 2, 3, 5, 8, 13, 21... The ratio of consecutive terms approaches the Golden Ratio (φ = 1.618).',tag:'Sequences',facts:{Fibonacci:'Leonardo of Pisa, 1202',Nature:'Sunflower seeds, pine cones, nautilus shells',Golden_ratio:'Ratio approaches φ = 1.618...'}},
  {icon:'🌀',name:'Fractals',sci:'Mathematics',desc:'Self-similar patterns that repeat at every scale. The Mandelbrot set has infinite complexity. Coastlines, snowflakes, and broccoli are fractal.',tag:'Chaos Theory',facts:{Mandelbrot:'Benoit Mandelbrot, 1975',Self_similar:'Zoom in infinitely — same patterns appear',Nature:'Coastlines, lightning, blood vessels, broccoli'}},
  {icon:'💡',name:'Godel\'s Incompleteness',sci:'Logic',desc:'Any consistent mathematical system strong enough for arithmetic will contain true statements that cannot be proved within that system. Proof can never be complete.',tag:'Logic',facts:{Godel:'Kurt Godel, 1931',Implication:'Mathematics is fundamentally incomplete',Shock:'Shook the foundations of mathematics'}},
  {icon:'⚡',name:'Prime Numbers',sci:'Number theory',desc:'Numbers divisible only by 1 and themselves. Infinitely many primes — proved by Euclid 300 BCE. The largest known prime has 24 million digits.',tag:'Number Theory',facts:{Infinite:'Euclid proved infinite primes ~300 BCE',Largest:'24,862,048 digits (2018)',RSA:'Cryptography relies on factoring large primes being hard'}},
  {icon:'🎲',name:'Bayes\' Theorem',sci:'Probability',desc:'Updates probability beliefs based on new evidence. P(A|B) = P(B|A)P(A)/P(B). The foundation of Bayesian statistics and machine learning.',tag:'Statistics',facts:{Bayes:'Thomas Bayes, 1763 (posthumous)',Applications:'Spam filters, medical diagnosis, AI',Bayesian:'Entire branch of statistics based on it'}},
  {icon:'🌊',name:'The Travelling Salesman',sci:'Computer Science',desc:'What is the shortest route visiting n cities once each? With 15 cities there are 43 billion possible routes. It belongs to the NP-hard class — believed to have no fast solution.',tag:'Algorithms',facts:{NP_hard:'No known polynomial-time solution',Cities:'15 cities = 43 billion routes',Applications:'Logistics, circuit board drilling, DNA sequencing'}},
  {icon:'🔮',name:'Non-Euclidean Geometry',sci:'Mathematics',desc:'Geometry on curved surfaces where parallel lines meet. Essential for General Relativity. On a sphere, the angles of a triangle sum to more than 180°.',tag:'Geometry',facts:{Euclid:'5th postulate — parallel lines never meet',Riemann:'Curved geometry where they do',Einstein:'General Relativity uses Riemannian geometry'}},
  {icon:'💎',name:'The Monty Hall Problem',sci:'Probability',desc:'Three doors: one has a car. You pick one. The host opens a goat door. Should you switch? Yes — switching wins 2/3 of the time. Counter-intuitive but proven.',tag:'Probability',facts:{Origin:'Let\'s Make a Deal TV show',Marilyn:'Marilyn vos Savant gave correct answer — attacked by mathematicians',Simulation:'Thousands of simulations confirm: always switch'}},
  {icon:'✨',name:'Euler\'s Identity',sci:'Mathematics',desc:'e^(iπ) + 1 = 0 — called the most beautiful equation in mathematics. It links five fundamental constants: e, i, π, 1, and 0.',tag:'Constants',facts:{Euler:'Leonhard Euler',Beauty:'Voted most beautiful theorem in mathematics repeatedly',Constants:'e, i, π, 1, 0 — five most important'}},
  {icon:'🧩',name:'Graph Theory',sci:'Mathematics',desc:'The study of networks of nodes and edges. Founded by Euler solving the Konigsberg Bridge problem in 1736. Underlies GPS routing, social networks, and internet structure.',tag:'Discrete Math',facts:{Euler:'Seven Bridges of Konigsberg, 1736',Applications:'GPS, internet, social networks, chemistry',Four_colour:'Four colours always enough to colour any map'}},
],

// ── FASHION ───────────────────────────────────────────────────────
fashion: [
  {icon:'👗',name:'Haute Couture',sci:'High fashion',desc:'Hand-made to measure garments for private clients. True haute couture is regulated by the French government. Only about 4,000 people worldwide buy it regularly.',tag:'Industry',facts:{French_law:'Regulated by Chambre Syndicale',Buyers:'~4,000 worldwide',Hours:'A single garment can take 700+ hours to make'}},
  {icon:'🧵',name:'Coco Chanel',sci:'Fashion history',desc:'Revolutionised women\'s fashion by liberating them from corsets and elaborate frills. Introduced jersey fabric, the little black dress, bobbed hair, and sunbathing.',tag:'Designer',facts:{LBD:'Little black dress — democratised elegance',Jersey:'Borrowed men\'s fabric for women',Tan:'Made suntans fashionable — previously a mark of working class'}},
  {icon:'👠',name:'Stiletto Heel',sci:'Footwear',desc:'The stiletto exerts more pressure per square inch than an elephant\'s foot. Invented in the 1950s. The name comes from the Italian dagger of the same shape.',tag:'Footwear',facts:{Pressure:'More psi than an elephant',Name:'From Italian stiletto (dagger)',Inventor:'Debated — Roger Vivier often credited'}},
  {icon:'🎨',name:'The Pantone System',sci:'Colour standardisation',desc:'A standardised colour matching system used in print, textiles, and design. Allows precise colour communication across industries globally. 10,000+ colours catalogued.',tag:'Design',facts:{Founded:'1963',Colors:'10,000+ standardised colours',Use:'Print, textile, product design, branding'}},
  {icon:'🧥',name:'Fast Fashion',sci:'Industry',desc:'High-speed, low-cost clothing production inspired by catwalk trends. Zara takes a design from sketch to store in 2 weeks. Fashion is the world\'s second most polluting industry.',tag:'Industry',facts:{Zara:'2 weeks from concept to store',Pollution:'Second most polluting industry after oil (disputed)',Waste:'300,000 tonnes of clothing landfilled per year in UK alone'}},
  {icon:'👔',name:'The Suit',sci:'Menswear',desc:'Descends from 17th century English country attire. Beau Brummell standardised it around 1800. The power suit of the 1980s. Now being displaced by casual wear.',tag:'History',facts:{Origin:'English countryside, 17th century',Brummell:'Beau Brummell standardised men\'s style 1800s',Decline:'Remote work accelerated move to casual'}},
  {icon:'👟',name:'Air Jordan',sci:'Nike, 1984',desc:'Nike signed Michael Jordan as a rookie for $500,000 per year — revolutionary at the time. The Air Jordan 1 was banned by the NBA (Jordan paid $5,000 per game). Sold $126 million in first year.',tag:'Sneakers',facts:{Deal:'$500K per year plus royalties',NBA_ban:'$5,000 fine per game paid by Nike',Year_1:'$126 million in sales — unprecedented'}},
  {icon:'💍',name:'Diamond Engagement Ring',sci:'De Beers, 1947',desc:'"A Diamond is Forever" — one of the most successful advertising campaigns in history. De Beers created the expectation of diamond engagement rings through marketing, not tradition.',tag:'Jewellery',facts:{Campaign:'De Beers "A Diamond is Forever," 1947',Before:'Engagement rings were not traditionally diamonds',Stockpile:'De Beers controlled 90% of world diamond supply'}},
  {icon:'🕶️',name:'Ray-Ban Wayfarers',sci:'1952',desc:'Designed in 1952. Nearly discontinued in the early 1980s — then Ray-Ban paid to have Tom Cruise wear them in Risky Business (1983). Sales increased 2,000%.',tag:'Eyewear',facts:{Year:'1952',Risky_Business:'Product placement rescued the brand',Sales:'2,000% increase after the film'}},
  {icon:'👜',name:'The Hermès Birkin',sci:'1984',desc:'Created after Jane Birkin complained to Hermès CEO Jean-Louis Dumas about needing a better bag. Waitlists of years. Some sell for $500,000 at auction. Better investment than gold.',tag:'Luxury',facts:{Creation:'Jane Birkin + Jean-Louis Dumas, 1984',Value:'Outperforms gold as investment',Waitlist:'Years-long waitlists at retail'}},
],

// ── LAW ───────────────────────────────────────────────────────────
law: [
  {icon:'⚖️',name:'Habeas Corpus',sci:'Legal right',desc:'Latin for "you shall have the body." A writ requiring a person under arrest to be brought before a judge. The fundamental protection against unlawful imprisonment. Dates to Magna Carta.',tag:'Constitutional',facts:{Latin:'You shall have the body',Magna_Carta:'Rooted in 1215',Suspension:'Can be suspended in extreme emergencies — controversial'}},
  {icon:'📜',name:'Presumption of Innocence',sci:'Criminal law',desc:'Every defendant is presumed innocent until proven guilty beyond a reasonable doubt. The prosecution bears the entire burden of proof. Foundational to criminal justice.',tag:'Criminal',facts:{Burden:'Prosecution must prove guilt',Standard:'Beyond reasonable doubt — highest legal standard',Not_guilty:'Never "innocent" — just not proven guilty'}},
  {icon:'🔏',name:'Miranda Rights',sci:'US law, 1966',desc:'You have the right to remain silent. Anything you say can be used against you. You have the right to an attorney. Established by Miranda v. Arizona, 1966.',tag:'Criminal Procedure',facts:{Case:'Miranda v. Arizona, Supreme Court 1966',Required:'Must be read before custodial interrogation',Waiver:'Rights can be waived voluntarily'}},
  {icon:'💼',name:'Intellectual Property',sci:'IP Law',desc:'Legal rights to creations of the mind. Patents (inventions, 20 years), copyright (expression, life+70 years), trademarks (brands), trade secrets.',tag:'IP',facts:{Patents:'20 years protection',Copyright:'Life of author + 70 years',Trademark:'Indefinite if maintained and used'}},
  {icon:'🌍',name:'International Law',sci:'Public international law',desc:'Governs relations between states. Not enforced by any world government — relies on treaties, diplomacy, and consent. The UN Security Council can authorise force.',tag:'International',facts:{Enforcement:'No world government to enforce it',ICJ:'International Court of Justice — only if states consent',Custom:'Customary international law is also binding'}},
  {icon:'⚡',name:'Mens Rea',sci:'Criminal law',desc:'Latin for "guilty mind." The mental element of a crime — intent, knowledge, recklessness, or negligence. Without mens rea, most crimes cannot be committed.',tag:'Criminal',facts:{Latin:'Guilty mind',Actus_reus:'Actus reus = guilty act (both needed)',Strict_liability:'Some crimes have no mens rea requirement'}},
  {icon:'🏛️',name:'Stare Decisis',sci:'Common law',desc:'Latin for "to stand by things decided." The principle that courts follow prior decisions (precedent). Provides predictability and consistency in common law systems.',tag:'Procedure',facts:{Latin:'To stand by things decided',Precedent:'Binding on lower courts',Overrule:'Higher courts can overturn their own precedent'}},
  {icon:'📋',name:'Tort Law',sci:'Civil law',desc:'Civil wrongs that cause harm. Negligence (most common), defamation, trespass, nuisance. The McDonald\'s hot coffee case is the most misunderstood tort case in history.',tag:'Civil',facts:{Negligence:'Most common tort',McDonalds:'Coffee was 82°C — caused 3rd degree burns — plaintiff had real case',Damages:'Compensatory and punitive damages'}},
  {icon:'🔐',name:'Attorney-Client Privilege',sci:'Evidence law',desc:'Communications between a lawyer and client are confidential and cannot be disclosed without consent. One of the oldest privileges in common law. Survives death.',tag:'Evidence',facts:{Oldest:'One of oldest legal privileges',Death:'Survives client\'s death',Crime_fraud:'Exception: if lawyer is used to facilitate crime'}},
  {icon:'🌐',name:'Jurisdiction',sci:'Procedural law',desc:'The authority of a court to hear a case. Personal jurisdiction over the parties. Subject matter jurisdiction over the type of case. Courts cannot act beyond their jurisdiction.',tag:'Procedure',facts:{Personal:'Authority over the persons involved',Subject_matter:'Authority over the type of dispute',Long_arm:'States can reach out-of-state defendants in some cases'}},
],

// ── OCEANOGRAPHY ──────────────────────────────────────────────────
ocean: [
  {icon:'🌊',name:'Thermohaline Circulation',sci:'Oceanography',desc:'The global ocean conveyor belt driven by differences in temperature and salinity. Distributes heat around the planet. Disruption could cause dramatic regional climate change.',tag:'Ocean Currents',facts:{Scale:'Moves 100x more water than Amazon River',Speed:'A drop of water takes 1,000 years to complete circuit',Climate:'Collapse would cool Europe dramatically'}},
  {icon:'🐋',name:'The Midnight Zone',sci:'Deep sea',desc:'200-1000m depth — no sunlight reaches here. Bioluminescent creatures dominate. The anglerfish, vampire squid, and siphonophores live here.',tag:'Deep Sea',facts:{Depth:'200-1000m',No_light:'Completely dark — bioluminescence only',Pressure:'20-100 atmospheres'}},
  {icon:'🧂',name:'Ocean Salinity',sci:'Chemistry',desc:'The ocean contains enough salt to cover all land to a depth of 150 metres. Average salinity 3.5%. Freshwater rivers constantly add salt, water evaporates — salt remains.',tag:'Chemistry',facts:{Amount:'50 quadrillion tonnes of salt',Average:'3.5% salinity',Dead_Sea:'34% salinity — extreme example'}},
  {icon:'🌊',name:'Rogue Waves',sci:'Physical oceanography',desc:'Waves twice the significant wave height that appear without warning. Once thought to be sailor myth. Now proven — satellites and oil platforms have recorded them.',tag:'Waves',facts:{Definition:'More than 2x surrounding wave height',Documented:'Draupner wave 1995 — first scientific confirmation',Cause:'Non-linear wave interactions — poorly understood'}},
  {icon:'🐙',name:'The Twilight Zone',sci:'Ocean layer',desc:'The mesopelagic zone, 200-1000m. Organisms migrate to the surface at night to feed, return to depth to avoid predators during the day. Largest animal migration on Earth.',tag:'Biology',facts:{Migration:'Largest daily animal migration on Earth',Biomass:'Enormous — largely uncounted',Carbon:'Critical for carbon storage'}},
  {icon:'🌡️',name:'Ocean Acidification',sci:'Climate change',desc:'Oceans absorb 25% of human CO₂ emissions, forming carbonic acid. pH has dropped from 8.2 to 8.1 since industrialisation — a 26% increase in acidity.',tag:'Climate',facts:{Absorption:'25% of human CO₂ emissions',pH_change:'8.2 to 8.1 = 26% more acidic',Coral:'Dissolves coral skeletons and shellfish shells'}},
  {icon:'🦠',name:'Marine Snow',sci:'Biological oceanography',desc:'A continuous shower of organic particles drifting from upper ocean to the deep sea floor — dead organisms, faecal matter, and aggregates. Critical carbon transport pathway.',tag:'Biology',facts:{Particles:'Dead organisms, faeces, mucus aggregates',Speed:'Slowly sinks at 100m per day',Carbon:'Major pathway for carbon to the deep ocean'}},
  {icon:'🌊',name:'El Nino',sci:'ENSO',desc:'A periodic warming of Pacific surface waters that disrupts global weather patterns, causing droughts in Australia, floods in South America, and warmer winters in Northern Europe.',tag:'Climate',facts:{Cycle:'Every 2-7 years',El_Nino:'Warm phase',La_Nina:'Cool phase — opposite effects',Global:'Affects weather globally'}},
  {icon:'🐠',name:'Coral Bleaching',sci:'Marine biology',desc:'When water is too warm, corals expel their symbiotic algae (zooxanthellae) and turn white. Without algae they slowly starve. Mass bleaching events are increasing.',tag:'Ecology',facts:{Cause:'Water temperature 1°C above average for weeks',Algae:'Zooxanthellae provide 90% of coral energy',Great_Barrier:'50% bleached in 2016 and 2017 events'}},
  {icon:'🌊',name:'Tsunamis',sci:'Physical oceanography',desc:'Caused by undersea earthquakes, landslides, or volcanic eruptions. In the open ocean just 30cm high. Near shore they compress into walls of water 30+ metres tall.',tag:'Hazard',facts:{Open_ocean:'Only 30cm — undetectable from ships',Shore:'Compress to 30+ metres',Speed:'800 km/h in open ocean — like a jet aircraft'}},
],

// ── INVENTIONS ────────────────────────────────────────────────────
inventions: [
  {icon:'💡',name:'The Light Bulb',sci:'Edison/Swan, 1879',desc:'Thomas Edison AND Joseph Swan independently invented working incandescent bulbs in 1879. Edison won the commercial race and PR battle. The bulb was actually a team effort.',tag:'Electronics',facts:{Swan:'Joseph Swan demonstrated in Jan 1879',Edison:'October 1879',Team:'Edison had a team of 14 working on it'}},
  {icon:'📱',name:'The Smartphone',sci:'2007',desc:'The iPhone (January 9, 2007) was not the first smartphone but created the modern smartphone era. Steve Jobs called it "an iPod, a phone, and an internet communicator."',tag:'Computing',facts:{Jobs:'Announced Jan 9, 2007',First:'IBM Simon 1994 was technically first',Market:'Changed entire industries overnight'}},
  {icon:'🌐',name:'The World Wide Web',sci:'Tim Berners-Lee, 1989',desc:'Not the internet — the hypertext system on top of it. Berners-Lee invented HTML, HTTP, and URLs at CERN. He gave it away for free. It is now worth trillions.',tag:'Internet',facts:{CERN:'Berners-Lee worked at CERN',Free:'He did not patent it',vs_Internet:'Internet existed before; WWW runs on top of it'}},
  {icon:'🧊',name:'Refrigeration',sci:'19th century',desc:'Before refrigeration, vast industries — ice harvesting, salt curing, smoking — preserved food. Mechanical refrigeration by Jacob Perkins (1834) transformed food, medicine, and cities.',tag:'Domestic',facts:{Ice_trade:'Huge 19th century industry — ice shipped from New England worldwide',Perkins:'Jacob Perkins, 1834',Impact:'Changed diet, urbanisation, and life expectancy'}},
  {icon:'💊',name:'Penicillin',sci:'Fleming, 1928',desc:'Alexander Fleming noticed mould killing bacteria on an accidentally contaminated plate in 1928. Florey and Chain developed it into medicine. Saved ~200 million lives.',tag:'Medicine',facts:{Discovery:'Accidental — contaminated plate, 1928',Development:'Florey and Chain made it a drug, 1940',Lives:'Estimated 200 million lives saved'}},
  {icon:'🚂',name:'The Steam Engine',sci:'Watt, 1769',desc:'James Watt did not invent the steam engine but massively improved it with the separate condenser in 1769. Powered the Industrial Revolution and changed civilisation.',tag:'Mechanical',facts:{Watt:'Improved Newcomen\'s engine dramatically',Newcomen:'Thomas Newcomen — original 1712',Impact:'Powered Industrial Revolution'}},
  {icon:'✈️',name:'Controlled Powered Flight',sci:'Wright Brothers, 1903',desc:'Orville Wright flew 12 seconds at Kitty Hawk on December 17, 1903. First flight was 37 metres. Within 66 years, humans landed on the Moon.',tag:'Aviation',facts:{Duration:'12 seconds, 37 metres',Date:'December 17, 1903',Moon:'66 years from first flight to Moon landing'}},
  {icon:'🔬',name:'The Microscope',sci:'Van Leeuwenhoek, 1670s',desc:'Antonie van Leeuwenhoek ground his own lenses and achieved 270x magnification — revealing bacteria and protozoa for the first time. A cloth merchant who transformed science.',tag:'Optics',facts:{Magnification:'270x — unprecedented',Van_Leeuwenhoek:'Cloth merchant, self-taught',Discovery:'First to see bacteria (he called them animalcules)'}},
  {icon:'🧲',name:'Electricity Grid',sci:'Tesla vs Edison',desc:'The War of Currents: Edison pushed DC, Tesla and Westinghouse pushed AC. AC won because it can be transmitted over long distances. The modern grid uses AC.',tag:'Energy',facts:{AC_wins:'Can step up voltage for long-distance transmission',DC:'Used in electronics and some modern high-voltage lines',Tesla:'Nikola Tesla designed the AC system'}},
  {icon:'💉',name:'mRNA Vaccines',sci:'2020',desc:'Developed for decades before COVID-19. Deliver genetic instructions for cells to make a protein, triggering immunity without using live virus. Fastest vaccine development in history.',tag:'Medicine',facts:{Research:'Decades of prior research by Kariko and Weissman',COVID:'Developed in under a year',Nobel:'Kariko and Weissman won Nobel Prize 2023'}},
],

// ── MORE WORDS (extra) ────────────────────────────────────────────
words: [
  {icon:'🌊',name:'Bellicose',sci:'adj.',desc:'Demonstrating aggression and willingness to fight. A bellicose foreign policy.',tag:'English',facts:{Origin:'Latin bellicosus (warlike)',Related:'Belligerent, bellicosity',Antonym:'Pacifist, peaceful'}},
  {icon:'⚡',name:'Bombastic',sci:'adj.',desc:'High-sounding language with little meaning. Inflated or extravagant in style.',tag:'English',facts:{Origin:'Bombast — cotton padding',Meaning_shift:'Padding became metaphor for empty words',Synonym:'Pompous, grandiose, turgid'}},
  {icon:'💡',name:'Candour',sci:'n.',desc:'The quality of being open and honest, even painfully so.',tag:'English',facts:{Origin:'Latin candor (whiteness, purity)',Related:'Candid',Phrase:'I will speak with complete candour'}},
  {icon:'🔮',name:'Capricious',sci:'adj.',desc:'Given to sudden and unaccountable changes of mood or behaviour.',tag:'English',facts:{Origin:'Italian capriccioso (whim)',Related:'Caprice, capriccio (music)',Synonym:'Unpredictable, mercurial, fickle'}},
  {icon:'🌙',name:'Clandestine',sci:'adj.',desc:'Kept secret or done secretively, especially because illicit.',tag:'English',facts:{Origin:'Latin clandestinus (secret)',Synonym:'Covert, undercover, surreptitious'}},
  {icon:'🎭',name:'Cogent',sci:'adj.',desc:'Clear, logical, and convincing. A cogent argument.',tag:'English',facts:{Origin:'Latin cogere (to compel)',Synonym:'Compelling, persuasive, incisive'}},
  {icon:'🌿',name:'Conundrum',sci:'n.',desc:'A confusing and difficult problem or question. Often one with no satisfying answer.',tag:'English',facts:{Origin:'Unknown — possibly 16th century university slang',Synonym:'Puzzle, enigma, paradox'}},
  {icon:'🔥',name:'Corpulent',sci:'adj.',desc:'Fat; excessively overweight. A more clinical and historically neutral term.',tag:'English',facts:{Origin:'Latin corpulentus (fleshy)',Related:'Corpus (body)'}},
  {icon:'✨',name:'Cursory',sci:'adj.',desc:'Hasty and therefore not thorough or detailed. A cursory glance.',tag:'English',facts:{Origin:'Latin cursorius (of a runner)',Synonym:'Perfunctory, superficial, hasty'}},
  {icon:'💎',name:'Dauntless',sci:'adj.',desc:'Showing fearlessness and determination. Undaunted by danger.',tag:'English',facts:{Origin:'Daunt (to frighten) + less',Synonym:'Intrepid, fearless, undaunted'}},
  {icon:'🌊',name:'Debacle',sci:'n.',desc:'A sudden, complete disaster or failure. A chaotic collapse.',tag:'English',facts:{Origin:'French debacler (to unbar, rush out)',Event:'The Debacle of a campaign, business, performance'}},
  {icon:'🎵',name:'Decadent',sci:'adj.',desc:'Characterized by or reflecting a state of moral or cultural decline. Also: luxuriously self-indulgent.',tag:'English',facts:{Art:'Decadent movement in late 19th century',Both_meanings:'Can mean declining OR luxuriously indulgent',Baudelaire:'Central figure of decadent poetry'}},
  {icon:'⚡',name:'Defunct',sci:'adj.',desc:'No longer existing or functioning. A defunct company.',tag:'English',facts:{Origin:'Latin defunctus (dead)',Use:'Defunct organisation, defunct technology'}},
  {icon:'🌙',name:'Deleterious',sci:'adj.',desc:'Causing harm or damage. The deleterious effects of smoking.',tag:'English',facts:{Origin:'Greek deleterios (harmful)',Synonym:'Detrimental, injurious, harmful'}},
  {icon:'🔮',name:'Demagogue',sci:'n.',desc:'A political leader who seeks support by appealing to fears and prejudices rather than rational argument.',tag:'Politics',facts:{Greek:'Demos (people) + agogos (leader)',History:'Ancient Athenians identified the danger',Use:'Pejorative — implies manipulation of the masses'}},
  {icon:'💡',name:'Denigrate',sci:'v.',desc:'To criticize unfairly; to disparage. To blacken the reputation of.',tag:'English',facts:{Origin:'Latin denigrare (to blacken)',Synonym:'Disparage, belittle, malign'}},
  {icon:'🌿',name:'Desultory',sci:'adj.',desc:'Lacking a plan, purpose, or enthusiasm. Carried on without enthusiasm. Desultory conversation.',tag:'English',facts:{Origin:'Latin desultorius (of a circus rider jumping between horses)',Synonym:'Unmethodical, aimless, casual'}},
  {icon:'🎭',name:'Diaphanous',sci:'adj.',desc:'Light, delicate, and translucent. Diaphanous silk curtains.',tag:'English',facts:{Origin:'Greek diaphanes (transparent)',Synonym:'Translucent, gossamer, filmy'}},
  {icon:'🌊',name:'Didactic',sci:'adj.',desc:'Intended to teach or moralize, often excessively so.',tag:'English',facts:{Origin:'Greek didaktikos (apt at teaching)',Pejorative:'Often implies heavy-handed moralising'}},
  {icon:'✨',name:'Diffident',sci:'adj.',desc:'Modest or shy because of a lack of self-confidence. Retiring and unassertive.',tag:'English',facts:{Origin:'Latin diffidere (to distrust)',Antonym:'Confident, assertive',Synonym:'Tentative, modest, reticent'}},
],

}; // end DICT_PACK5

window.DICT_INJECT_CATS = [{"id": "science", "label": "🔬 Science"}, {"id": "psychology", "label": "🧠 Psychology"}, {"id": "philosophy", "label": "💭 Philosophy"}, {"id": "art", "label": "🎨 Art & Design"}, {"id": "architecture", "label": "🏛️ Architecture"}, {"id": "languages", "label": "🗣️ Languages"}, {"id": "sports", "label": "⚽ Sports"}, {"id": "internet", "label": "🌐 Internet"}, {"id": "mythology", "label": "⚡ Mythology"}, {"id": "coding", "label": "💻 Coding"}, {"id": "economics", "label": "💰 Economics"}, {"id": "medicine", "label": "🩺 Medicine"}, {"id": "physics", "label": "⚛️ Physics"}, {"id": "biology", "label": "🧬 Biology"}, {"id": "literature", "label": "📚 Literature"}, {"id": "cinema", "label": "🎬 Cinema"}, {"id": "math", "label": "📐 Mathematics"}, {"id": "fashion", "label": "👗 Fashion"}, {"id": "law", "label": "⚖️ Law"}, {"id": "ocean", "label": "🌊 Oceanography"}, {"id": "inventions", "label": "💡 Inventions"}];

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Dictionary Expansion Pack 6
//  More entries in existing categories + new entries
// ═══════════════════════════════════════════════════════════════════

(function(){
  if(typeof DICT_DATA==='undefined') return;
  Object.keys(DICT_PACK6).forEach(function(cat){
    if(!DICT_DATA[cat]) DICT_DATA[cat]=[];
    DICT_DATA[cat] = DICT_DATA[cat].concat(DICT_PACK6[cat]);
  });
})();

const DICT_PACK6 = {

// ── MORE SCIENCE ──────────────────────────────────────────────────
science: [
  {icon:'🧫',name:'Prions',sci:'Misfolded proteins',desc:'Infectious agents made entirely of misfolded proteins — no DNA or RNA. Cause Creutzfeldt-Jakob disease, mad cow disease, and kuru. Completely resistant to heat sterilisation.',tag:'Biology',facts:{Prusiner:'Stanley Prusiner, Nobel 1997',Heat:'Cannot be sterilised by normal autoclaving',Kuru:'Caused by ritual cannibalism in Papua New Guinea'}},
  {icon:'⚛️',name:'Nuclear Fusion',sci:'Physics',desc:'The process powering the Sun — hydrogen nuclei fuse into helium, releasing enormous energy. If harnessed, would provide virtually unlimited clean energy. 70 years of research, always "30 years away."',tag:'Energy',facts:{Sun:'Powers all stars',ITER:'International fusion reactor under construction in France',Challenge:'Achieving net energy gain — reached by NIF in 2022'}},
  {icon:'🌡️',name:'Absolute Zero',sci:'Thermodynamics',desc:'The lowest theoretical temperature: -273.15°C (0 Kelvin). At this temperature, atoms stop moving. Unreachable in practice — the third law of thermodynamics forbids it.',tag:'Physics',facts:{Value:'-273.15°C or 0 Kelvin',Third_law:'Cannot be reached in finite steps',BEC:'Bose-Einstein condensate forms near absolute zero'}},
  {icon:'🔬',name:'Stem Cells',sci:'Biology',desc:'Undifferentiated cells that can become any specialised cell type. Embryonic stem cells can become any cell. Adult stem cells are more limited. Enormous medical potential.',tag:'Biology',facts:{Types:'Embryonic, adult, induced pluripotent (iPSC)',Yamanaka:'Shinya Yamanaka created iPSCs — Nobel 2012',Use:'Regenerative medicine, disease modelling'}},
  {icon:'💊',name:'Pharmacokinetics',sci:'Pharmacology',desc:'How the body processes drugs: Absorption, Distribution, Metabolism, Excretion (ADME). The half-life determines dosing frequency. Liver metabolism often produces active metabolites.',tag:'Medicine',facts:{ADME:'Absorption Distribution Metabolism Excretion',Half_life:'Time for blood concentration to halve',CYP450:'Liver enzyme system metabolises most drugs'}},
],

// ── MORE PSYCHOLOGY ───────────────────────────────────────────────
psychology: [
  {icon:'🔄',name:'Fundamental Attribution Error',sci:'Social psychology',desc:'We attribute others\' behaviour to their character, not their situation. We do the opposite for ourselves. The most replicated finding in social psychology.',tag:'Cognitive Bias',facts:{Example:'Someone cuts in traffic: they\'re a jerk (not: they\'re rushing to hospital)',Self:'We blame our own bad behaviour on circumstances',Universal:'Found across cultures, though stronger in individualistic ones'}},
  {icon:'🌊',name:'Learned Helplessness',sci:'Seligman, 1967',desc:'When organisms repeatedly experience inescapable pain, they stop trying to escape even when escape becomes possible. Explains depression and passivity in abusive situations.',tag:'Behavioural',facts:{Seligman:'Martin Seligman, 1967 — electric shocks in dogs',Depression:'Model for clinical depression',Hope:'Can be reversed with successful experiences'}},
  {icon:'👁️',name:'Change Blindness',sci:'Visual perception',desc:'People fail to notice large changes to visual scenes when there\'s a brief interruption. A person in a scene can be replaced by a different person and observers often don\'t notice.',tag:'Perception',facts:{Experiment:'Person asking directions replaced mid-conversation',Inattentional_blindness:'Related — invisible gorilla experiment',Driving:'Why we miss obvious hazards while driving'}},
  {icon:'🎭',name:'The Bystander Effect',sci:'Darley & Latane, 1968',desc:'Individuals are less likely to help a victim when other bystanders are present. Diffusion of responsibility. Kitty Genovese murder (1964) inspired the research.',tag:'Social',facts:{Kitty_Genovese:'1964 murder reportedly ignored by 38 witnesses',Diffusion:'Responsibility spread across more people',Counter:'If you need help, address one specific person'}},
  {icon:'💭',name:'Priming',sci:'Cognitive psychology',desc:'Exposure to one stimulus influences response to a later stimulus. Walking slowly after reading words associated with old age. Warm coffee makes people rate others as warmer.',tag:'Cognitive',facts:{Warm_coffee:'Holding warm drinks makes people seem warmer',Age_priming:'Primed with aging words walk more slowly',Advertising:'Ubiquitous — shapes how we perceive products'}},
],

// ── MORE HISTORY ──────────────────────────────────────────────────
history: [
  {icon:'🌍',name:'The Black Death',sci:'1347-1351',desc:'The bubonic plague killed 30-60% of Europe\'s population — 75-200 million people. Caused by Yersinia pestis spread by flea bites. Fundamentally reshaped medieval society.',tag:'Medieval',facts:{Deaths:'30-60% of European population',Cause:'Yersinia pestis — spread by rat fleas',Legacy:'Led to end of feudalism, Renaissance conditions, labour reform'}},
  {icon:'⚓',name:'The Age of Exploration',sci:'1400s-1600s',desc:'Portuguese and Spanish navigators mapped the globe. Columbus (1492), Vasco da Gama (1498), Magellan (1519). Opened trade routes but devastated indigenous populations.',tag:'Age of Sail',facts:{Columbus:'1492 — opened Americas to Europe',Magellan:'First circumnavigation 1519-1522',Consequence:'Columbian Exchange and population collapse of Americas'}},
  {icon:'📜',name:'The Magna Carta',sci:'1215',desc:'English barons forced King John to sign limits on royal power. First document establishing that even the king was subject to law. Foundation of constitutional government.',tag:'British',facts:{Year:'1215',John:'King John reluctantly signed it',Legacy:'Habeas corpus, rule of law, constitutional government'}},
  {icon:'🔬',name:'The Manhattan Project',sci:'1942-1945',desc:'Secret US program to develop nuclear weapons. 130,000 people working at peak across multiple sites. J. Robert Oppenheimer led Los Alamos. Changed warfare and geopolitics forever.',tag:'WWII',facts:{People:'130,000 at peak',Cost:'$2 billion (1940s) = $30 billion today',Oppenheimer:'I am become death, destroyer of worlds'}},
  {icon:'🌊',name:'The French Revolution',sci:'1789-1799',desc:'Overthrew the monarchy, executed the king, and established a republic. The Terror killed 16,594 officially. Napoleon emerged from its chaos. Changed the concept of government.',tag:'Modern',facts:{Terror:'16,594 executed by guillotine',Slogan:'Liberté, Égalité, Fraternité',Napoleon:'Rose from its chaos to conquer Europe'}},
],

// ── MORE CODING ───────────────────────────────────────────────────
coding: [
  {icon:'⚡',name:'The Event Loop',sci:'JavaScript',desc:'JavaScript is single-threaded but handles async operations via the event loop. The call stack, task queue, and microtask queue work together to handle async code.',tag:'JavaScript',facts:{Single_threaded:'Only one operation at a time',Microtasks:'Promises resolved before next task',Node:'Same model on server-side'}},
  {icon:'🔧',name:'Dependency Injection',sci:'Design Pattern',desc:'Rather than creating dependencies internally, objects receive them from outside. Makes code testable, modular, and flexible. Central to frameworks like Angular and Spring.',tag:'OOP',facts:{Inversion_of_control:'Don\'t call us, we\'ll call you',Testing:'Inject mock dependencies for unit tests',Frameworks:'Angular, Spring Boot built around it'}},
  {icon:'🌊',name:'CAP Theorem',sci:'Distributed Systems',desc:'A distributed system can only guarantee two of three: Consistency, Availability, Partition tolerance. You must choose which to sacrifice when network partitions occur.',tag:'Distributed Systems',facts:{Brewer:'Eric Brewer, 2000',CP:'MongoDB, HBase — consistent and partition tolerant',AP:'Cassandra, DynamoDB — available and partition tolerant'}},
  {icon:'💻',name:'The Linux Kernel',sci:'1991',desc:'Linus Torvalds wrote the first kernel in 1991 as a hobby. Now the most widely deployed OS kernel — powering Android, most servers, supercomputers, and IoT devices.',tag:'Systems',facts:{Torvalds:'Linus Torvalds, 21 years old, 1991',Lines:'30 million lines of code',Runs:'97% of top 1 million web servers'}},
  {icon:'🔐',name:'OAuth 2.0',sci:'Authentication',desc:'"Sign in with Google" uses OAuth 2.0. The resource owner grants limited access to their account without sharing credentials. Four flows for different use cases.',tag:'Security',facts:{Flow_types:'Authorization code, implicit, client credentials, device',Tokens:'Access token (short-lived) + refresh token (long-lived)',OpenID:'OpenID Connect adds identity layer on top of OAuth 2.0'}},
],

// ── MORE ANIMALS ──────────────────────────────────────────────────
animals: [
  {icon:'🦒',name:'Giraffe',sci:'Giraffa camelopardalis',desc:'The tallest living terrestrial animal. A giraffe\'s neck can be 1.8m long but has the same 7 vertebrae as a human. Their heart weighs 11kg and pumps against 2.5x normal pressure.',tag:'Mammal',facts:{Heart:'11kg heart, double normal blood pressure',Neck:'Same 7 vertebrae as humans',Sleep:'Only 30 minutes per day, in short bursts'}},
  {icon:'🦅',name:'Peregrine Falcon',sci:'Falco peregrinus',desc:'The fastest animal on Earth in a dive — reaching 389 km/h. Special nasal bones deflect high-speed air so it can breathe during a stoop. Recovered from near-extinction via DDT ban.',tag:'Bird',facts:{Speed:'389 km/h in a stoop',Nasal_baffles:'Deflect air for breathing at speed',DDT:'Nearly extinct by 1970s — recovered after DDT ban'}},
  {icon:'🐬',name:'Dolphins',sci:'Delphinidae',desc:'Have individual names — signature whistles unique to each dolphin. They greet each other by name. Sleep with one brain hemisphere at a time, keeping one eye open.',tag:'Mammal',facts:{Names:'Individual signature whistles',Sleep:'Unihemispheric sleep — half brain at a time',Culture:'Pass tools and knowledge through generations'}},
  {icon:'🦋',name:'Monarch Butterfly',sci:'Danaus plexippus',desc:'Migrates 4,800 km from Canada to specific trees in Mexico. No individual completes the round trip — it takes 3-4 generations. Navigation uses sun position and circadian clock.',tag:'Insect',facts:{Migration:'4,800 km, multiple generations',Navigation:'Sun compass and circadian clock',Oyamel:'Overwinters in same Oyamel fir trees every year'}},
  {icon:'🐊',name:'Crocodile',sci:'Crocodylidae',desc:'Unchanged for 200 million years. Can hold their breath for over an hour. Their bite is the strongest of any living animal — 3,700 psi. They cannot chew; they death-roll instead.',tag:'Reptile',facts:{Ancient:'Survived the asteroid that killed dinosaurs',Bite:'3,700 psi — strongest bite force measured',Unchanged:'Essentially same design for 200 million years'}},
],

// ── MORE SPACE ────────────────────────────────────────────────────
space: [
  {icon:'🌑',name:'Io',sci:'Jupiter\'s moon',desc:'The most volcanically active body in the solar system. 400 active volcanoes, some ejecting plumes 500 km high. Heated by tidal squeezing from Jupiter\'s gravity.',tag:'Moon',facts:{Volcanoes:'400+ active volcanoes',Heat_source:'Tidal flexing from Jupiter\'s gravity',Colours:'Reds and yellows from sulfur compounds'}},
  {icon:'⭐',name:'Brown Dwarfs',sci:'Astrophysics',desc:'Objects too massive to be planets but too small to sustain hydrogen fusion like stars. The "failed stars" of the universe. Glow dimly in infrared.',tag:'Stellar',facts:{Mass:'13-80 Jupiter masses',Fusion:'Too small for sustained hydrogen fusion',Count:'May outnumber stars in the Milky Way'}},
  {icon:'🌌',name:'The Fermi Paradox',sci:'Astrophysics',desc:'If intelligent life is common in the universe, where is everyone? The absence of any detected alien signal or visit is deeply puzzling given the age and size of the universe.',tag:'SETI',facts:{Fermi:'Enrico Fermi asked "where is everybody?" in 1950',Drake_equation:'Estimates probability of detectable civilisations',Solutions:'Great Filter, Zoo hypothesis, Rare Earth hypothesis'}},
  {icon:'🚀',name:'Voyager 1',sci:'NASA, 1977',desc:'The most distant human-made object — 23 billion km from Earth. In interstellar space. Still communicating with NASA. Its signal takes 22 hours to reach Earth.',tag:'Spacecraft',facts:{Distance:'23 billion km from Earth',Interstellar:'Crossed heliopause in 2012',Signal:'22 hours travel time at speed of light'}},
  {icon:'💫',name:'Neutron Stars',sci:'Astrophysics',desc:'Stellar remnants with mass of 1.4 suns compressed into a sphere 20 km across. A teaspoon of neutron star material weighs 4 billion tonnes. Spin up to 716 times per second.',tag:'Stellar',facts:{Density:'4 billion tonnes per teaspoon',Size:'20 km diameter',Spin:'Up to 716 rotations per second (millisecond pulsars)'}},
],

// ── MORE MATHEMATICS ──────────────────────────────────────────────
math: [
  {icon:'🔢',name:'The Number Zero',sci:'Mathematics',desc:'Invented independently in India (~458 CE) and Maya civilisation. Not obvious — the Greeks had no zero. Without zero, positional notation, algebra, and computing are impossible.',tag:'Number Theory',facts:{India:'Brahmagupta formalised it ~628 CE',Maya:'Independent invention in Mesoamerica',Importance:'Positional notation, algebra, computing all depend on it'}},
  {icon:'♾️',name:'Cantor\'s Diagonal Argument',sci:'Set Theory',desc:'Georg Cantor proved there are more real numbers than integers — a larger infinity. His method: assume a complete list of real numbers, then construct a number not on the list.',tag:'Set Theory',facts:{Cantor:'Georg Cantor, 1891',Method:'Diagonal argument — elegant and simple',Aleph:'ℵ₀ (aleph-null) = countable; ℵ₁ = uncountable'}},
  {icon:'🎲',name:'The Law of Large Numbers',sci:'Probability',desc:'As a sample grows larger, its average converges to the true population mean. Why casinos always win and why medical studies need large sample sizes.',tag:'Statistics',facts:{Bernoulli:'Jacob Bernoulli proved it',Casino:'Built into every casino game',Samples:'Why n=30 is often used as minimum sample size'}},
  {icon:'📐',name:'Trigonometry',sci:'Mathematics',desc:'The mathematics of triangles. Sin, cos, tan are ratios of sides. Originally developed by Greek and Indian astronomers to measure celestial distances. Now used in all of engineering.',tag:'Geometry',facts:{Origin:'Greek and Indian astronomy',Applications:'Architecture, engineering, navigation, physics, music',Fourier:'All waves can be decomposed into sine waves'}},
  {icon:'🔮',name:'Complex Numbers',sci:'Mathematics',desc:'Numbers with a real and imaginary part (a + bi, where i = √-1). Called "imaginary" pejoratively but essential for quantum mechanics, electrical engineering, and signal processing.',tag:'Number Theory',facts:{i:'√-1 — imaginary unit',Euler:'e^(iπ) = -1',Applications:'Quantum mechanics, signal processing, electrical engineering'}},
],

// ── MORE MUSIC ────────────────────────────────────────────────────
music: [
  {icon:'🎸',name:'Punk Rock',sci:'1970s',desc:'A reaction against progressive rock\'s complexity and corporate music. 3 chords, 3 minutes, raw energy. The Ramones, Sex Pistols, The Clash. DIY ethic changed music culture.',tag:'Genre',facts:{Ramones:'First punk band — 1974',Year:'1977 — peak of UK punk',Legacy:'DIY ethic influenced indie, alternative, and electronic music'}},
  {icon:'🎹',name:'Minimalism',sci:'1960s-present',desc:'Music based on repetitive patterns that evolve slowly. Philip Glass, Steve Reich, Terry Riley. A reaction against the complexity of 12-tone music. Deeply influenced ambient and electronic music.',tag:'Genre',facts:{Reich:'It\'s Gonna Rain (1965) — phase music',Glass:'Einstein on the Beach (1976)',Influence:'Ambient, electronic, post-rock all draw from minimalism'}},
  {icon:'🎵',name:'The Rite of Spring',sci:'Stravinsky, 1913',desc:'Premiered in Paris on May 29, 1913. The audience rioted — fighting in the aisles. The dissonance and irregular rhythms were unlike anything heard before. Now considered a masterpiece.',tag:'Classical',facts:{Premier:'Paris, May 29, 1913 — audience rioted',Diaghilev:'Commissioned by Sergei Diaghilev',Rhythm:'Irregular accents in groups of 2, 3, 5, 7, 11'}},
  {icon:'🎸',name:'Sampling',sci:'Music production',desc:'Taking a portion of one recording and using it in a new recording. Foundation of hip-hop production. Legal battles over sampling created an entire area of music copyright law.',tag:'Production',facts:{First:'Grandmaster Flash used turntables as instruments',Amen_break:'Most sampled drum loop in history — 1969 track',Legal:'Grand Upright v. Warner (1991) changed sampling law'}},
  {icon:'🎺',name:'The Blues Scale',sci:'Music theory',desc:'A pentatonic scale with an added "blue note" — a flattened fifth. The foundation of jazz, blues, rock, and R&B. One of the most expressive scales in all of music.',tag:'Theory',facts:{Notes:'1, ♭3, 4, ♭5, 5, ♭7',Blue_note:'The flattened fifth — the emotional heart of blues',Everywhere:'Used in rock, jazz, blues, country, R&B, pop'}},
],

// ── MORE FOOD ─────────────────────────────────────────────────────
food: [
  {icon:'🍣',name:'Umami',sci:'Fifth taste',desc:'The fifth basic taste (alongside sweet, sour, salty, bitter). Discovered by Kikunae Ikeda in 1908. Found in tomatoes, Parmesan, soy sauce, mushrooms, and aged meats.',tag:'Taste Science',facts:{Ikeda:'Kikunae Ikeda, 1908',Source:'Glutamate — found in aged, fermented, or cooked foods',MSG:'Monosodium glutamate is pure umami'}},
  {icon:'🥩',name:'Maillard Reaction',sci:'Chemistry',desc:'The browning reaction between amino acids and sugars when heated. Responsible for the flavour of seared meat, toast, coffee, chocolate, and beer. Not caramelisation.',tag:'Food Chemistry',facts:{Temperature:'Starts at 140-165°C',Maillard:'Louis-Camille Maillard described it 1912',Thousands:'Creates thousands of flavour compounds'}},
  {icon:'🍷',name:'Terroir',sci:'Wine/Food',desc:'The taste imparted by the specific environment where food is grown — soil, climate, topography, microbes. Why Burgundy wine is unique. A French concept central to gastronomy.',tag:'Gastronomy',facts:{French:'Refers to the taste of place',Wine:'Central to fine wine appreciation',Cheese:'Also applies to cheese, coffee, tea, chocolate'}},
  {icon:'🌶️',name:'Fermented Hot Sauce',sci:'Fermentation',desc:'Lacto-fermented hot sauces develop complexity through bacterial activity. The bacteria convert sugars to lactic acid, creating depth and preserving the sauce without vinegar.',tag:'Fermentation',facts:{Process:'Lacto-fermentation — lactic acid bacteria',Result:'More complex flavour than vinegar-based sauces',Tabasco:'Aged in oak barrels — a form of fermentation'}},
  {icon:'🧀',name:'Cheese Diversity',sci:'Food Science',desc:'Over 1,800 named cheese varieties exist. The same milk transforms differently based on bacterial cultures, moulds, aging time, and environment. Parmesan takes 2+ years to age.',tag:'Gastronomy',facts:{Varieties:'1,800+ named types worldwide',Parmesan:'Minimum 12 months, best at 36 months',Roquefort:'Mould injected with needles during aging'}},
],

}; // end DICT_PACK6
