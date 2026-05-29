// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Weather Data File
//  Provides weather phenomena facts, cloud atlas, storm records,
//  climate zones, historical weather events, and weather science
//  Load alongside mega-app.html
// ═══════════════════════════════════════════════════════════════════

window.WEATHER_DATA_LOADED = true;

// ── Inject into dictionary when ready ───────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  if (typeof DICT_DATA !== 'undefined') {
    if (!DICT_DATA.weather) DICT_DATA.weather = [];
    DICT_DATA.weather = DICT_DATA.weather.concat(WEATHER_EXTRA);
  }
});

// ── Weather panel extras ─────────────────────────────────────────
// Quick facts shown on the weather panel
window.WEATHER_FACTS = [
  "Lightning strikes Earth ~100 times per second — that's 8.6 million times a day.",
  "The highest recorded air temperature was 56.7°C in Furnace Creek, Death Valley (1913).",
  "The lowest naturally occurring temperature on Earth was −89.2°C in Vostok, Antarctica (1983).",
  "A single hurricane releases more energy in a day than all the world's nuclear weapons combined.",
  "The fastest wind speed ever recorded was 484 km/h during Tropical Cyclone Olivia (1996).",
  "Snow is not white — it's transparent. The complex structure reflects all light, making it appear white.",
  "The wettest place on Earth is Mawsynram, India — averaging 11,871 mm of rain per year.",
  "The driest place on Earth is the Atacama Desert — some areas have never recorded rainfall.",
  "Fog is simply a cloud at ground level. The difference between fog and mist is visibility.",
  "Thunderstorms generate ozone — that clean smell after a storm is actually ozone (O₃).",
  "The eye of a hurricane can be 30-65 km wide — completely calm while surrounded by devastating winds.",
  "Rainbow colours always appear in the same order: red, orange, yellow, green, blue, indigo, violet.",
  "A weather front is a boundary between two different air masses — where most weather happens.",
  "The jet stream was discovered by Japanese meteorologist Wasaburo Oishi in the 1920s.",
  "Hailstones can be as large as grapefruits — the largest on record weighed 879g (South Dakota, 2010).",
  "Ball lightning remains unexplained — science cannot fully account for it.",
  "The smell before rain is called petrichor — from geosmin produced by soil bacteria.",
  "Waterspouts are essentially tornadoes over water — they can be 100m wide and reach 1.5 km high.",
  "The polar vortex is a large area of low pressure around the poles, kept in place by the jet stream.",
  "Cumulonimbus clouds can extend from 300m to 12,000m altitude — the tallest weather clouds.",
];

// ── Cloud Atlas ──────────────────────────────────────────────────
window.CLOUD_ATLAS = [
  {name:'Cirrus',         alt:'6,000–12,000m', icon:'☁️', desc:'Thin, wispy ice-crystal clouds at high altitude. Often the first sign of an approaching warm front.', weather:'Fair weather, but front approaching within 24–48h'},
  {name:'Cirrocumulus',   alt:'6,000–12,000m', icon:'🌤️', desc:'Small, white puffs in rows. The "mackerel sky". Rare and short-lived.', weather:'Fair, but changing — tropical cyclone indicator'},
  {name:'Cirrostratus',   alt:'6,000–12,000m', icon:'🌥️', desc:'Thin, sheet-like cloud covering the sky. Creates halos around the sun and moon.', weather:'Rain or snow within 12–24 hours'},
  {name:'Altocumulus',    alt:'2,000–6,000m',  icon:'⛅', desc:'Mid-level grey/white patches or waves. Classic "mackerel sky" at mid level.', weather:'Thunderstorms possible later in the day'},
  {name:'Altostratus',    alt:'2,000–6,000m',  icon:'🌫️', desc:'Grey or blue-grey sheet covering sky. Sun appears as if through frosted glass.', weather:'Continuous rain or snow likely'},
  {name:'Nimbostratus',   alt:'0–3,000m',      icon:'🌧️', desc:'Dark, grey, rain-bearing layer cloud. Produces continuous moderate or heavy rain.', weather:'Prolonged rain or snow — front is here'},
  {name:'Stratocumulus',  alt:'0–2,000m',      icon:'🌦️', desc:'Low, lumpy grey/white cloud in patches or rolls. The most common cloud type globally.', weather:'Drizzle possible; generally overcast but dry'},
  {name:'Stratus',        alt:'0–600m',        icon:'🌁', desc:'Uniform grey layer close to the ground. Like fog that doesn\'t reach the surface.', weather:'Drizzle or light rain; grey, gloomy day'},
  {name:'Cumulus',        alt:'300–2,000m',    icon:'⛅', desc:'Fluffy, flat-based white clouds. The classic fair-weather cloud. Vertical development indicates instability.', weather:'Fair weather if small; storms if towering'},
  {name:'Cumulonimbus',   alt:'300–12,000m',   icon:'⛈️', desc:'The "king of clouds." Massive thunderstorm clouds reaching from low to high atmosphere.', weather:'Thunderstorms, hail, heavy rain, tornadoes'},
  {name:'Lenticularis',   alt:'2,000–12,000m', icon:'🛸', desc:'Lens-shaped clouds that form over mountains. Often mistaken for UFOs. Don\'t move despite high winds.', weather:'High winds at altitude; turbulence warning'},
  {name:'Mammatus',       alt:'Low (hanging)',  icon:'🫧', desc:'Pouch-like clouds hanging from a storm\'s underside. Rare and dramatic, often after severe weather.', weather:'Severe weather nearby — storm just passed or coming'},
  {name:'Noctilucent',    alt:'76–85 km',      icon:'🌌', desc:'The highest clouds — seen only at twilight in polar regions. Made of ice crystals on meteor dust.', weather:'No weather impact — phenomenon above atmosphere'},
  {name:'Nacreous',       alt:'15–25 km',      icon:'🌈', desc:'Iridescent "mother-of-pearl" clouds in polar stratosphere. Beautiful but contribute to ozone destruction.', weather:'No direct weather impact — polar regions only'},
  {name:'Fog',            alt:'Ground level',  icon:'🌫️', desc:'Essentially stratus cloud at ground level. Visibility under 1km = fog; 1-2km = mist.', weather:'Disrupts transport; clears by midday usually'},
];

// ── Storm Records ────────────────────────────────────────────────
window.STORM_RECORDS = [
  {type:'Fastest wind ever', record:'484 km/h', where:'Barrow Island, Australia', when:'1996', note:'Tropical Cyclone Olivia'},
  {type:'Hottest air temp', record:'56.7°C', where:'Death Valley, USA', when:'1913', note:'Furnace Creek Ranch'},
  {type:'Coldest air temp', record:'−89.2°C', where:'Vostok Station, Antarctica', when:'1983', note:'Soviet research station'},
  {type:'Wettest place', record:'11,871 mm/year', where:'Mawsynram, India', when:'Average', note:'More than 11 metres of rain per year'},
  {type:'Most rain in 1 minute', record:'31.2 mm', where:'Unionville, Maryland, USA', when:'1956', note:''},
  {type:'Most rain in 1 year', record:'26,461 mm', where:'Cherrapunji, India', when:'1860–1861', note:''},
  {type:'Largest hailstone', record:'20 cm / 879g', where:'Vivian, South Dakota, USA', when:'2010', note:'Size of a volleyball'},
  {type:'Longest lightning bolt', record:'768 km', where:'Southern USA', when:'2020', note:'New record — crossed 3 states'},
  {type:'Longest duration lightning', record:'17.1 seconds', where:'Uruguay/Argentina', when:'2019', note:'Single flash lasted 17 seconds'},
  {type:'Most tornadoes (country)', record:'~1,200/year', where:'USA (Tornado Alley)', when:'Average', note:'Kansas, Oklahoma, Texas'},
  {type:'Strongest tornado', record:'484 km/h winds', where:'Bridge Creek, Oklahoma', when:'1999', note:'EF5 — Moore tornado outbreak'},
  {type:'Deadliest hurricane', record:'8,000–12,000 deaths', where:'Galveston, Texas', when:'1900', note:'No warning systems then'},
  {type:'Most powerful typhoon', record:'315 km/h sustained', where:'Philippines', when:'2013', note:'Typhoon Haiyan (Yolanda)'},
  {type:'Biggest snowflakes', record:'38 cm wide', where:'Fort Keogh, Montana', when:'1887', note:'Possibly folklore — largest confirmed is 15 cm'},
  {type:'Most snow in 24 hours', record:'192 cm', where:'Silver Lake, Colorado', when:'1921', note:'Almost 2 metres in one day'},
  {type:'Deepest snowpack', record:'1,145 cm', where:'Tamarack, California', when:'1911', note:'Over 11 metres of snow'},
];

// ── Climate Zones (Köppen Classification) ────────────────────────
window.CLIMATE_ZONES = [
  {code:'Af', name:'Tropical Rainforest',    emoji:'🌴', desc:'Hot all year, rain every month. Temperature ~27°C. Amazon, Congo, Southeast Asia.', examples:'Manaus, Singapore, Lagos'},
  {code:'Am', name:'Tropical Monsoon',       emoji:'🌧️', desc:'Hot with a distinct rainy season. Short dry season.', examples:'Mumbai, Dhaka, Freetown'},
  {code:'Aw', name:'Tropical Savanna',       emoji:'🌾', desc:'Hot with distinct wet and dry seasons. Grasslands.', examples:'Nairobi, Darwin, Caracas'},
  {code:'BWh', name:'Hot Desert',            emoji:'🏜️', desc:'Very hot, extremely dry. Less than 250mm rain. Sahara, Arabian, Australian Outback.', examples:'Riyadh, Phoenix, Timbuktu'},
  {code:'BSh', name:'Hot Semi-Arid (Steppe)',emoji:'🌵', desc:'Hot and dry but wetter than desert. Grassland.', examples:'Casablanca, Karachi, Dallas'},
  {code:'Csa', name:'Mediterranean',         emoji:'🫒', desc:'Hot dry summers, mild wet winters. The "perfect climate".', examples:'Rome, Athens, Los Angeles'},
  {code:'Cfb', name:'Oceanic',               emoji:'🌦️', desc:'Mild year-round, no dry season. Cool summers, mild winters.', examples:'London, Paris, Vancouver'},
  {code:'Cfa', name:'Humid Subtropical',     emoji:'🌿', desc:'Hot humid summers, mild winters. Humid all year.', examples:'New York, Shanghai, Buenos Aires'},
  {code:'Dfb', name:'Humid Continental',     emoji:'🍂', desc:'Four distinct seasons. Cold winters, warm summers.', examples:'Warsaw, Chicago, Seoul'},
  {code:'Dfc', name:'Subarctic',             emoji:'🌲', desc:'Very cold long winters, short cool summers. Taiga forests.', examples:'Yakutsk, Anchorage, Reykjavik'},
  {code:'ET',  name:'Tundra',                emoji:'❄️', desc:'Very cold — warmest month below 10°C. Permafrost.', examples:'Barrow (Alaska), Nuuk'},
  {code:'EF',  name:'Ice Cap',               emoji:'🧊', desc:'Permanent ice and snow. Coldest climate type.', examples:'Antarctica interior, Greenland summit'},
];

// ── Historical Weather Events ────────────────────────────────────
window.WEATHER_EVENTS = [
  {year:'1815', event:'Year Without a Summer', desc:'Mount Tambora eruption cooled global temperatures by 0.4-0.7°C. Crop failures, famine. Mary Shelley wrote Frankenstein during the cold, dark summer.'},
  {year:'1930s', event:'The Dust Bowl', desc:'A decade of drought and poor farming practices turned the Great Plains into a desert. 3.5 million displaced. Called "black blizzards".'},
  {year:'1900', event:'Galveston Hurricane', desc:'Deadliest natural disaster in US history. 8,000-12,000 dead. No warning system existed. A 4.5m storm surge flooded the island.'},
  {year:'1970', event:'Bhola Cyclone', desc:'Deadliest tropical cyclone on record — 300,000-500,000 dead in East Pakistan (now Bangladesh).'},
  {year:'2004', event:'Indian Ocean Tsunami', desc:'Triggered by a magnitude 9.1 earthquake. 227,898 dead across 14 countries. The third-largest earthquake ever recorded.'},
  {year:'2005', event:'Hurricane Katrina', desc:'Caused $125 billion in damage. 1,836 dead. New Orleans flooded when levees failed. Category 5 at peak intensity.'},
  {year:'2010', event:'Haiti Earthquake + Hurricane Season', desc:'Haiti struck by 7.0 earthquake, then tropical storms. Worst humanitarian disaster in the Western Hemisphere.'},
  {year:'2013', event:'Typhoon Haiyan', desc:'Strongest landfalling tropical cyclone ever recorded. 315 km/h winds. 6,300 dead in the Philippines.'},
  {year:'2019-2020', event:'Australian Black Summer', desc:'Worst bushfire season in Australian history. 18.6 million hectares burned. 3 billion animals killed or displaced.'},
  {year:'2021', event:'Pacific Northwest Heat Dome', desc:'Temperature reached 49.6°C in Lytton, Canada — shattering records. 600+ heat deaths. The town burned down the next day.'},
  {year:'2022', event:'Pakistan Floods', desc:'One-third of Pakistan submerged. 1,700+ dead. $40 billion damage. Directly linked to climate change.'},
];

// ── Pressure Systems Reference ───────────────────────────────────
window.PRESSURE_GUIDE = {
  units: ['hPa (hectopascal)', 'mbar (millibar — same as hPa)', 'inHg (inches of mercury)', 'mmHg (millimetres of mercury)'],
  standard: '1013.25 hPa at sea level',
  high: {threshold: '> 1020 hPa', weather: 'Clear skies, settled weather, light winds'},
  low:  {threshold: '< 1000 hPa', weather: 'Clouds, wind, rain — often stormy'},
  deepLow: {threshold: '< 970 hPa', weather: 'Severe storm, hurricane, or major cyclone'},
  record_high: {value: '1083.8 hPa', where: 'Agata, Siberia (1968)'},
  record_low:  {value: '870 hPa', where: 'Typhoon Tip, Pacific Ocean (1979)'},
};

// ── Wind Scale (Beaufort) ────────────────────────────────────────
window.BEAUFORT = [
  {f:0, name:'Calm',             kmh:'< 1',    desc:'Smoke rises vertically'},
  {f:1, name:'Light Air',        kmh:'1–5',    desc:'Wind direction shown by smoke drift'},
  {f:2, name:'Light Breeze',     kmh:'6–11',   desc:'Wind felt on face; leaves rustle'},
  {f:3, name:'Gentle Breeze',    kmh:'12–19',  desc:'Leaves and small twigs in motion'},
  {f:4, name:'Moderate Breeze',  kmh:'20–28',  desc:'Dust and loose paper raised'},
  {f:5, name:'Fresh Breeze',     kmh:'29–38',  desc:'Small trees begin to sway'},
  {f:6, name:'Strong Breeze',    kmh:'39–49',  desc:'Large branches move; umbrellas fail'},
  {f:7, name:'Near Gale',        kmh:'50–61',  desc:'Whole trees in motion'},
  {f:8, name:'Gale',             kmh:'62–74',  desc:'Twigs break; walking difficult'},
  {f:9, name:'Strong Gale',      kmh:'75–88',  desc:'Slight structural damage'},
  {f:10, name:'Storm',           kmh:'89–102', desc:'Trees uprooted; structural damage'},
  {f:11, name:'Violent Storm',   kmh:'103–117',desc:'Widespread damage'},
  {f:12, name:'Hurricane Force', kmh:'≥ 118',  desc:'Devastating damage'},
];

// ── Dictionary weather entries (extra) ───────────────────────────
const WEATHER_EXTRA = [
  {icon:'🌬️',name:'Adiabatic Lapse Rate',sci:'Atmospheric science',desc:'The rate at which air cools as it rises — 9.8°C per 1,000m for dry air, ~6°C for saturated air.',tag:'Science',facts:{Dry:'9.8°C per 1,000m',Saturated:'~6°C per 1,000m',Why:'Rising air expands and cools'}},
  {icon:'☁️',name:'Albedo',sci:'Reflectivity',desc:'The fraction of solar energy reflected by a surface. Fresh snow reflects 80-90%; oceans reflect only 6%.',tag:'Climate',facts:{Snow:'80-90% reflectivity',Ocean:'6% reflectivity',Earth_average:'~30% overall albedo'}},
  {icon:'🌡️',name:'Dew Point',sci:'Temperature',desc:'The temperature at which air becomes saturated and dew forms. A dew point above 21°C feels oppressively humid.',tag:'Humidity',facts:{Comfortable:'Below 15°C',Humid:'Above 18°C',Oppressive:'Above 24°C'}},
  {icon:'🌀',name:'Coriolis Effect',sci:'Physics',desc:'Earth\'s rotation deflects moving air and water to the right in the Northern Hemisphere, left in the Southern.',tag:'Physics',facts:{Cause:'Earth\'s rotation',Result:'Cyclones spin counterclockwise in North',Myth:'"Toilet drains" — too small to be affected'}},
  {icon:'⛈️',name:'CAPE',sci:'Convective Available Potential Energy',desc:'A measure of atmospheric instability. High CAPE means conditions are right for thunderstorm development.',tag:'Meteorology',facts:{Low:'< 1,000 J/kg — stable',Moderate:'1,000–2,500 J/kg',Extreme:'> 5,000 J/kg — violent storms'}},
  {icon:'🌧️',name:'Orographic Lift',sci:'Mountain weather',desc:'When air is forced up over mountains, it cools, condenses, and produces rain on the windward side.',tag:'Geography',facts:{Windward:'Wet side',Leeward:'Dry side (rain shadow)',Example:'Andes create Atacama Desert'}},
  {icon:'❄️',name:'Sublimation',sci:'Phase change',desc:'When ice converts directly to water vapour without melting. How dry ice "disappears" and why snow evaporates in cold dry air.',tag:'Physics',facts:{Example:'Dry ice, high-altitude snow',Opposite:'Deposition (vapour to ice)'}},
  {icon:'🌊',name:'Fetch',sci:'Wave science',desc:'The distance over which wind blows over water. Longer fetch = larger waves. The Atlantic\'s fetch creates massive swells.',tag:'Ocean',facts:{Longer_fetch:'Bigger waves',Atlantic:'Creates famous surf swells',Record:'Wave height ~30 metres (rogue wave)'}},
  {icon:'🌩️',name:'St. Elmo\'s Fire',sci:'Electrical phenomenon',desc:'A glowing plasma seen on ship masts and aircraft during thunderstorms. Caused by ionization of air in strong electric fields.',tag:'Phenomenon',facts:{Colour:'Blue or violet glow',Sailors:'Considered an omen — good or bad',Physics:'Coronal discharge from pointed objects'}},
  {icon:'🌈',name:'Heiligenschein',sci:'Optical phenomenon',desc:'A glowing halo around your shadow when dew-covered grass is behind you. The dew drops act as retroreflectors.',tag:'Optics',facts:{Cause:'Dew drops retroreflect sunlight',Best_seen:'Morning dew on grass',Name:'German for "halo of a saint"'}},
  {icon:'⚡',name:'Triboelectric Effect',sci:'Lightning formation',desc:'Ice crystals and graupel collide in thunderstorm updrafts, separating charge — this creates lightning.',tag:'Science',facts:{Mechanism:'Charge separation by collision',Graupel:'Soft hail — key player',Voltage:'300 million volts in a lightning bolt'}},
  {icon:'🌫️',name:'Radiation Fog',sci:'Fog type',desc:'Forms on clear, calm nights when the ground radiates heat and cools the air above it. Classic morning fog.',tag:'Meteorology',facts:{Forms:'Clear nights, calm winds',Burns_off:'As sun heats the ground',Common:'River valleys and hollows'}},
  {icon:'🌤️',name:'Subsidence Inversion',sci:'Atmospheric layer',desc:'A layer where temperature increases with altitude — the opposite of normal. Traps pollution near the ground.',tag:'Air Quality',facts:{Smog:'Traps pollutants below',LA_smog:'Classic example',Cause:'High pressure systems compressing air'}},
  {icon:'🌬️',name:'Katabatic Wind',sci:'Downslope wind',desc:'Cold, dense air flowing downhill under gravity. Antarctica has the world\'s strongest — up to 200 km/h.',tag:'Wind',facts:{Examples:'Bora (Adriatic), Mistral (France), Foehn (Alps)',Antarctica:'World\'s strongest katabatic winds',Cause:'Dense cold air descending under gravity'}},
  {icon:'🌩️',name:'Mesocyclone',sci:'Storm rotation',desc:'A rotating updraft within a supercell thunderstorm. When it reaches the ground it becomes a tornado.',tag:'Storm',facts:{Rotation:'3-8 km wide',Leads_to:'Tornado if it touches ground',Supercell:'Only supercells produce mesocyclones'}},
  {icon:'❄️',name:'Polar Vortex',sci:'Atmospheric pattern',desc:'A large area of low pressure circling the poles. When it weakens, cold Arctic air spills south.',tag:'Climate',facts:{Weakening:'Causes cold outbreaks in mid-latitudes',Cause:'Jet stream wobbles',Winter_2019:'Sent -50°C air to Chicago'}},
  {icon:'☀️',name:'Solar Irradiance',sci:'1,361 W/m²',desc:'The power of sunlight hitting Earth\'s upper atmosphere. Seasonal variation drives climate.',tag:'Energy',facts:{Constant:'~1,361 watts per square metre',Seasons:'Earth\'s tilt varies irradiance',Solar_panels:'Convert ~20% to electricity'}},
  {icon:'🌊',name:'Storm Surge',sci:'Coastal flooding',desc:'A rise in sea level caused by a storm\'s wind and low pressure. More deadly than wind in most hurricanes.',tag:'Hazard',facts:{Katrina:'8.5m surge — flooded New Orleans',Deadlier:'Than wind in most hurricanes',Cause:'Low pressure + onshore wind'}},
];

console.log('🌤️ Weather data loaded — ' + (WEATHER_FACTS.length + CLOUD_ATLAS.length + STORM_RECORDS.length + WEATHER_EVENTS.length + BEAUFORT.length) + ' entries');

// ═══════════════════════════════════════════════════════════════════
//  MEGA APP — Weather Data Expansion Pack 2
//  More facts, Beaufort scale entries, famous storms, climate records
// ═══════════════════════════════════════════════════════════════════

(function(){
  if(typeof WEATHER_FACTS === 'undefined') return;

  // More weather facts
  var moreFacts = [
    "The speed of a raindrop is 8–10 km/h. A snowflake falls at just 1–2 km/h.",
    "Fog is simply a cloud at ground level. The difference is purely positional.",
    "Lightning strikes Earth about 100 times every second — 8 million times per day.",
    "The wettest place on Earth is Mawsynram, India — 11,872mm of rain per year.",
    "A single thunderstorm can contain energy equivalent to 10 Hiroshima atomic bombs.",
    "The fastest wind speed ever recorded was 408 km/h during Tropical Cyclone Olivia in 1996.",
    "Snow is not white — snowflakes are translucent. They appear white due to light scattering.",
    "Antarctica is technically a desert — it receives less than 200mm of precipitation per year.",
    "The Atacama Desert in Chile has areas that have never received measurable rainfall in recorded history.",
    "A weather system called the polar vortex circulates around both poles year-round.",
    "Thundersnow is a rare phenomenon — a blizzard producing lightning and thunder.",
    "The eye of a hurricane can be 30–65 km wide and have completely calm, clear skies.",
    "St Elmo's Fire is a plasma phenomenon that makes ship masts glow blue during thunderstorms.",
    "The Beaufort Scale was created by Admiral Francis Beaufort in 1805 for Royal Navy sailors.",
    "Mammatus clouds hang in pouch-like formations and often precede severe thunderstorms.",
    "The Coriolis effect makes hurricanes spin clockwise in the Southern Hemisphere.",
    "Morning glory clouds in Australia are rare rolling cylinders that can extend 1,000 km.",
    "A haboob is a type of intense sandstorm common in Sudan and the American Southwest.",
    "Ice storms can deposit centimetres of ice on power lines, causing catastrophic failures.",
    "The Saharan Air Layer carries Saharan dust across the Atlantic — fertilising the Amazon.",
    "Virga is rain that evaporates before reaching the ground — visible as streaks from clouds.",
    "Green skies before a tornado are caused by sunlight filtering through hail clouds.",
    "The chinook wind can raise temperatures by 20°C in just a few hours in Alberta, Canada.",
    "Noctilucent clouds form at 80 km altitude — the highest clouds in Earth's atmosphere.",
    "Ball lightning is a rare unexplained phenomenon — glowing spheres that float and vanish.",
    "Waterspouts are tornados over water. They can travel onto land and become land tornadoes.",
    "The coldest temperature ever recorded was -89.2°C at Vostok Station, Antarctica in 1983.",
    "An inch of rain on one acre of land weighs about 100 tonnes.",
    "The longest recorded lightning bolt was 768 km long, recorded over the US in 2020.",
    "Rainbows are actually complete circles — we only see arcs because the ground is in the way.",
  ];

  WEATHER_FACTS.push.apply(WEATHER_FACTS, moreFacts);

  // More famous storms
  if(typeof FAMOUS_STORMS !== 'undefined'){
    var moreStorms = [
      {name:"Typhoon Tip",year:1979,type:"Typhoon",desc:"The largest and most intense tropical cyclone ever recorded. Diameter of 2,220 km — nearly the width of the contiguous US.",wind:"305 km/h",deaths:"99"},
      {name:"The Great Galveston Hurricane",year:1900,type:"Hurricane",desc:"The deadliest natural disaster in US history. Galveston, Texas was completely obliterated. No forecast warning system existed.",deaths:"8,000-12,000"},
      {name:"Super Typhoon Haiyan",year:2013,type:"Typhoon",desc:"One of the strongest storms ever recorded at landfall. Destroyed Tacloban City in the Philippines with 7-metre storm surge.",wind:"315 km/h",deaths:"6,300"},
      {name:"The Tri-State Tornado",year:1925,type:"Tornado",desc:"The deadliest and longest-tracked tornado in US history. Travelled 352 km through Missouri, Illinois, and Indiana.",wind:"480+ km/h",deaths:"695"},
      {name:"The Great Blizzard of 1888",year:1888,type:"Blizzard",desc:"Paralysed the northeastern US for days. New York City buried in 130cm of snow. Triggered creation of the NYC subway system.",deaths:"400"},
      {name:"Cyclone Tracy",year:1974,type:"Cyclone",desc:"Destroyed 71% of Darwin, Australia's buildings on Christmas Eve. 35,000 of 47,000 residents were evacuated. Rebuilt the city's building codes.",wind:"217 km/h",deaths:"71"},
      {name:"The 1970 Bhola Cyclone",year:1970,type:"Cyclone",desc:"The deadliest tropical cyclone in recorded history. Struck East Pakistan (now Bangladesh) with virtually no warning system.",deaths:"300,000-500,000"},
      {name:"Hurricane Dorian",year:2019,type:"Hurricane",desc:"The strongest Atlantic hurricane on record to make landfall. Stalled over the Bahamas for 24 hours, creating catastrophic destruction.",wind:"295 km/h",deaths:"84"},
    ];
    FAMOUS_STORMS.push.apply(FAMOUS_STORMS, moreStorms);
  }

  // More cloud types
  if(typeof CLOUD_ATLAS !== 'undefined'){
    var moreClouds = [
      {name:"Asperitas",level:"Low",desc:"Chaotic, wave-like undulations on the underside of clouds. Added to the International Cloud Atlas in 2017 — the first new cloud type in 60 years.",look:"Like a churning, turbulent sea viewed from below"},
      {name:"Pileus",level:"Any",desc:"A smooth, cap-shaped cloud that forms above a rapidly growing cumulus or cumulonimbus. Like a hat on a mushroom.",look:"Thin smooth cap sitting above a larger cloud"},
      {name:"Arcus (Shelf Cloud)",level:"Low",desc:"A low, horizontal cloud formation associated with the leading edge of severe thunderstorms. Can stretch for hundreds of kilometres.",look:"A dark, ominous horizontal wedge rolling toward you"},
      {name:"Kelvin-Helmholtz",level:"Any",desc:"Rare and beautiful waves that look like breaking ocean waves in the sky. Form where layers of air move at different speeds.",look:"Curling wave crests — like a Japanese woodblock print"},
      {name:"Fallstreak Hole",level:"Mid",desc:"A large circular or elliptical gap in altocumulus or cirrocumulus clouds. Created when ice crystals cause surrounding water droplets to freeze and fall.",look:"A punched hole in a flat cloud layer with wispy cirrus inside"},
      {name:"Fog Bow",level:"Low",desc:"A rainbow formed in fog. Because fog droplets are tiny, the colours don't separate — it appears as a white or pale arc.",look:"A white, almost colourless arc in fog"},
      {name:"Noctilucent",level:"Very High",desc:"The highest clouds on Earth at 80km altitude, in the mesosphere. Only visible in summer twilight at high latitudes. Brilliant electric blue.",look:"Thin, electric blue or silver streaks at twilight"},
      {name:"Pyrocumulus",level:"High",desc:"A cloud formed by intense heat from wildfires or volcanic eruptions. Can produce lightning and erratic winds that worsen the fire.",look:"A dense cauliflower cloud with a dark, ash-filled base"},
    ];
    CLOUD_ATLAS.push.apply(CLOUD_ATLAS, moreClouds);
  }

})();
