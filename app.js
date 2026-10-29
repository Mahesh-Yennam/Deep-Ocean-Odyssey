/**
 * Deep Ocean Trench Odyssey — Client-Side Core Engine
 * Gamility Interactive Explorer Hub
 * 
 * Features:
 * 1. 11,000m Bathymetric Descent Elevator & Real-Time Hydrostatic Telemetry
 * 2. 24 Marine Fauna Dossiers Across 5 Planetary Oceanic Zones
 * 3. Bioluminescence Night-Vision Shader Toggle
 * 4. Inverted Mount Everest vs. Mariana Trench Scale Canvas
 * 5. Hydrothermal Black Smoker Geothermal Canvas Simulator
 * 6. Procedural Web Audio Hydro-Acoustic Synthesizer (Sonar & Hull Creaks)
 * 7. 3-Tier Ocean Trench Mastery Quiz
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. MARINE FAUNA & BATHYMETRIC DATASET (24 Curated Species)
  // ==========================================================================
  const FAUNA_DATASET = [
    // --- ZONE 1: SUNLIGHT (0 - 200m) ---
    {
      id: 'dolphin',
      name: 'Common Bottlenose Dolphin',
      latin: 'Tursiops truncatus',
      zone: 'sunlight',
      zoneName: 'Sunlight Zone (Epipelagic)',
      depthMin: 0,
      depthMax: 150,
      icon: '🐬',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Tursiops_truncatus_01-cropped.jpg/330px-Tursiops_truncatus_01-cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#7dd3fc', '#0284c7', '#0369a1'],
      bioluminescent: false,
      biolumType: 'None (Sunlit Day Hunter)',
      size: '2.5 – 3.8 meters (200 – 400 kg)',
      diet: 'Fish, squid, and crustaceans',
      adaptations: ['Acoustic melon for sonar echolocation', 'Blubber insulation', 'Voluntary conscious breathing'],
      summary: 'Highly intelligent marine mammal thriving in sunlit coastal waters. Uses high-frequency echolocation clicks to hunt schools of fish.'
    },
    {
      id: 'sea-turtle',
      name: 'Green Sea Turtle',
      latin: 'Chelonia mydas',
      zone: 'sunlight',
      zoneName: 'Sunlight Zone (Epipelagic)',
      depthMin: 0,
      depthMax: 110,
      icon: '🐢',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/330px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#86efac', '#10b981', '#065f46'],
      bioluminescent: false,
      biolumType: 'None',
      size: '1.2 meters (150 – 200 kg)',
      diet: 'Seagrass and marine algae (herbivorous)',
      adaptations: ['Hydrodynamic carapace shell', 'Lachrymal salt glands', 'Earth magnetic field navigation'],
      summary: 'Ancient marine reptile migrating thousands of miles between foraging grounds and natal nesting beaches, navigating with Earth\'s magnetic grid.'
    },
    {
      id: 'great-white',
      name: 'Great White Shark',
      latin: 'Carcharodon carcharias',
      zone: 'sunlight',
      zoneName: 'Sunlight Zone (Epipelagic)',
      depthMin: 0,
      depthMax: 250,
      icon: '🦈',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/330px-White_shark.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#cbd5e1', '#64748b', '#1e293b'],
      bioluminescent: false,
      biolumType: 'None (Countershaded Camouflage)',
      size: '4.5 – 6.0 meters (1,100 – 2,000 kg)',
      diet: 'Seals, sea lions, dolphins, and large fish',
      adaptations: ['Ampullae of Lorenzini (electroreception)', 'Serrated triangular teeth', 'Regional endothermy (warm blood)'],
      summary: 'Apex predator of the open ocean. Uses electro-sensory pores around its snout to detect minute electrical pulses from heartbeats of buried prey.'
    },
    {
      id: 'blue-whale',
      name: 'Blue Whale',
      latin: 'Balaenoptera musculus',
      zone: 'sunlight',
      zoneName: 'Sunlight Zone (Epipelagic)',
      depthMin: 0,
      depthMax: 200,
      icon: '🐋',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/330px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#38bdf8', '#0284c7', '#172554'],
      bioluminescent: false,
      biolumType: 'None',
      size: '26 – 30 meters (130 – 190 tons)',
      diet: 'Euphausiids (krill — up to 4 tons/day)',
      adaptations: ['Pleated throat grooves for lunge feeding', 'Massive baleen filtering plates', 'Low-frequency infrasonic songs (188 dB)'],
      summary: 'The largest animal ever known to have lived on planet Earth. Its tongue alone weighs as much as an adult elephant, and its heart is the size of a car.'
    },
    {
      id: 'manta-ray',
      name: 'Giant Oceanic Manta Ray',
      latin: 'Mobula birostris',
      zone: 'sunlight',
      zoneName: 'Sunlight Zone (Epipelagic)',
      depthMin: 0,
      depthMax: 120,
      icon: '🌊',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Manta_birostris-Thailand4.jpg/330px-Manta_birostris-Thailand4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#94a3b8', '#334155', '#0f172a'],
      bioluminescent: false,
      biolumType: 'None',
      size: '7.0 meters wingspan (up to 2,000 kg)',
      diet: 'Zooplankton and krill',
      adaptations: ['Cephalic forward fins funneling plankton', 'Largest brain-to-body ratio of any fish', 'Unique ventral spot spot-maps'],
      summary: 'Gentle oceanic glider possessing a huge brain capable of self-awareness and complex social curiosity while barrel-rolling through plankton blooms.'
    },

    // --- ZONE 2: TWILIGHT (200 - 1000m) ---
    {
      id: 'barreleye',
      name: 'Barreleye Fish',
      latin: 'Macropinna microstoma',
      zone: 'twilight',
      zoneName: 'Twilight Zone (Mesopelagic)',
      depthMin: 600,
      depthMax: 800,
      icon: '👁️',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Barreleye-fish_GoK.jpg/330px-Barreleye-fish_GoK.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#34d399', '#059669', '#064e3b'],
      bioluminescent: true,
      biolumType: 'Green glowing tubular lens organs',
      size: '15 cm',
      diet: 'Siphonophores and small crustaceans',
      adaptations: ['Transparent fluid-filled head dome', 'Tubular rotatable green-filtered eyes', 'Wide flat fins for precision hovering'],
      summary: 'Possesses an entirely transparent, fluid-filled dome head through which its bright green tubular eyes can rotate upward to spot silhouettes of prey above.'
    },
    {
      id: 'lanternfish',
      name: 'Lanternfish',
      latin: 'Myctophidae',
      zone: 'twilight',
      zoneName: 'Twilight Zone (Mesopelagic)',
      depthMin: 300,
      depthMax: 1000,
      icon: '✨',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Myctophum_punctatum1.jpg/330px-Myctophum_punctatum1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#fde047', '#eab308', '#713f12'],
      bioluminescent: true,
      biolumType: 'Ventral photophore counterillumination',
      size: '10 – 15 cm',
      diet: 'Copepods and planktonic larvae',
      adaptations: ['Photophore belly lights matching downwelling sunlight', 'Diel vertical migration', 'Large sensitive retina'],
      summary: 'One of the most abundant vertebrates on Earth (65% of all deep-sea biomass). Emits pale blue ventral light to hide its silhouette from predators below.'
    },
    {
      id: 'oarfish',
      name: 'Giant Oarfish',
      latin: 'Regalecus glesne',
      zone: 'twilight',
      zoneName: 'Twilight Zone (Mesopelagic)',
      depthMin: 200,
      depthMax: 1000,
      icon: '🐉',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Regalecus_glesne%2C_Naturhistorisches_Museum_Wien.jpg/330px-Regalecus_glesne%2C_Naturhistorisches_Museum_Wien.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#f472b6', '#db2777', '#831843'],
      bioluminescent: false,
      biolumType: 'Iridescent guanine silver skin',
      size: '8.0 – 11.0 meters (up to 270 kg)',
      diet: 'Krill and jellyfish',
      adaptations: ['Elongated ribbon-like scaleless body', 'Crimson crest dorsal rays', 'Propels vertically in water column'],
      summary: 'The longest bony fish alive, historically responsible for ancient mariners\' legends of giant sea serpents. Swims vertically while hunting krill.'
    },
    {
      id: 'sperm-whale',
      name: 'Sperm Whale',
      latin: 'Physeter macrocephalus',
      zone: 'twilight',
      zoneName: 'Twilight & Midnight Zones',
      depthMin: 0,
      depthMax: 2250,
      icon: '🐋',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Mother_and_baby_sperm_whale.jpg/330px-Mother_and_baby_sperm_whale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#94a3b8', '#475569', '#0f172a'],
      bioluminescent: false,
      biolumType: 'None (Mammalian Deep Diver)',
      size: '16 – 20 meters (45 – 55 tons)',
      diet: 'Giant and colossal squids',
      adaptations: ['Spermaceti oil organ for buoyancy/echolocation', 'Can hold breath for 90+ minutes', 'Flexible ribcage collapsing under pressure'],
      summary: 'Champion mammalian deep-diver that plunges 2 kilometers into the pitch-black abyss to duel giant squids in underwater battles verified by suction sucker scars.'
    },
    {
      id: 'colossal-squid',
      name: 'Colossal Squid',
      latin: 'Mesonychoteuthis hamiltoni',
      zone: 'twilight',
      zoneName: 'Twilight & Midnight Zones',
      depthMin: 300,
      depthMax: 1000,
      icon: '🦑',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Colossalsquid.png',
      gradient: ['#f87171', '#dc2626', '#7f1d1d'],
      bioluminescent: true,
      biolumType: 'Photophores around large eyes',
      size: '10 – 14 meters (up to 500 kg)',
      diet: 'Toothfish and lanternfish',
      adaptations: ['Swiveling sharp claws on tentacle clubs', 'Largest eyes in animal kingdom (30 cm)', 'Ammonium chloride buoyant tissue'],
      summary: 'Heaviest invertebrate on Earth. Armed with swiveling 3-pronged limb hooks and dinner-plate sized eyes capable of spotting sperm whale bioluminescent wakes.'
    },

    // --- ZONE 3: MIDNIGHT (1000 - 4000m) ---
    {
      id: 'anglerfish',
      name: 'Humpback Anglerfish',
      latin: 'Melanocetus johnsonii',
      zone: 'midnight',
      zoneName: 'Midnight Zone (Bathypelagic)',
      depthMin: 1000,
      depthMax: 2500,
      icon: '💡',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Humpback_anglerfish.png/330px-Humpback_anglerfish.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#38bdf8', '#0284c7', '#020617'],
      bioluminescent: true,
      biolumType: 'Symbiotic bioluminescent bacteria in esca lure',
      size: '18 cm (Females) / 3 cm (Males)',
      diet: 'Fish and squids',
      adaptations: ['Illucium fishing rod with glowing esca', 'Elastic stomach expanding 2x', 'Extreme sexual parasitism'],
      summary: 'The iconic deep-sea phantom. Females dangle a luminous bacteria-filled lure over terrifying needle-like translucent fangs, waiting in pitch blackness.'
    },
    {
      id: 'gulper-eel',
      name: 'Gulper Eel (Pelican Eel)',
      latin: 'Eurypharynx pelecanoides',
      zone: 'midnight',
      zoneName: 'Midnight Zone (Bathypelagic)',
      depthMin: 1000,
      depthMax: 3000,
      icon: '🐍',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Eurypharynx_pelecanoides.jpg/330px-Eurypharynx_pelecanoides.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#64748b', '#1e293b', '#020617'],
      bioluminescent: true,
      biolumType: 'Red glowing bioluminescent organ at tail tip',
      size: '0.8 – 1.0 meter',
      diet: 'Crustaceans, fish, and cephalopods',
      adaptations: ['Gigantic loosely-hinged pelican jaw', 'Bioluminescent tail decoy organ', 'Tiny degenerated eyes'],
      summary: 'Has an enormous elastic mouth larger than its entire body, allowing it to inflate its jaw like a scoop net to engulf prey in food-scarce waters.'
    },
    {
      id: 'vampire-squid',
      name: 'Vampire Squid',
      latin: 'Vampyroteuthis infernalis',
      zone: 'midnight',
      zoneName: 'Midnight Zone (Bathypelagic)',
      depthMin: 600,
      depthMax: 3000,
      icon: '🦇',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Vampyroteuthis_illustration.jpg/330px-Vampyroteuthis_illustration.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#a855f7', '#7e22ce', '#3b0764'],
      bioluminescent: true,
      biolumType: 'Glowing arm tip organs & glowing mucus cloud',
      size: '30 cm',
      diet: 'Marine snow (detritus, dead plankton, fecal pellets)',
      adaptations: ['Webbed black cloak of tentacles', 'Ejects glowing blue bioluminescent mucus', 'Adapted to oxygen minimum zones (OMZ)'],
      summary: '"The vampire squid from hell" is actually a gentle scavenger. Instead of ink, it shoots blinding clouds of glowing bioluminescent sparks to escape.'
    },
    {
      id: 'giant-isopod',
      name: 'Giant Isopod',
      latin: 'Bathynomus giganteus',
      zone: 'midnight',
      zoneName: 'Midnight & Abyssal Zones',
      depthMin: 500,
      depthMax: 2500,
      icon: '🛡️',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Bathynomus_giganteus_as_seen_by_remotely_operated_vehicle_%28ROV%29_Deep_Discoverer_at_a_depth_of_816_meters_at_South_Reed%2C_Gulf_of_Mexico%2C_2017-11-30.webm/330px--Bathynomus_giganteus_as_seen_by_remotely_operated_vehicle_%28ROV%29_Deep_Discoverer_at_a_depth_of_816_meters_at_South_Reed%2C_Gulf_of_Mexico%2C_2017-11-30.webm.jpg',
      gradient: ['#e2e8f0', '#94a3b8', '#334155'],
      bioluminescent: false,
      biolumType: 'None',
      size: '35 – 50 cm (1.5 kg)',
      diet: 'Dead whale falls and benthic carrion',
      adaptations: ['Abyssal gigantism', '14 walking legs and armored chitin plates', 'Can fast for up to 5 years without food'],
      summary: 'A colossal relative of common garden pillbugs (woodlice). Scours the muddy seabed for whale falls, capable of surviving years between meals.'
    },
    {
      id: 'black-swallower',
      name: 'Black Swallower',
      latin: 'Chiasmodon niger',
      zone: 'midnight',
      zoneName: 'Midnight Zone (Bathypelagic)',
      depthMin: 700,
      depthMax: 2700,
      icon: '🐡',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Chiasmodon_niger.jpg/330px-Chiasmodon_niger.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#475569', '#1e293b', '#020617'],
      bioluminescent: false,
      biolumType: 'None',
      size: '25 cm',
      diet: 'Bony fish up to 10x its own mass',
      adaptations: ['Distensible stomach hanging beneath body', 'Hinged palate teeth preventing escape', 'Highly stretchable skin'],
      summary: 'Can swallow prey twice its length and ten times its mass! Its stomach stretches like an enormous balloon, allowing it to capitalize on rare meals.'
    },

    // --- ZONE 4: ABYSSAL (4000 - 6000m) ---
    {
      id: 'dumbo-octopus',
      name: 'Dumbo Octopus',
      latin: 'Grimpoteuthis',
      zone: 'abyssal',
      zoneName: 'Abyssal Zone (Abyssopelagic)',
      depthMin: 3000,
      depthMax: 7000,
      icon: '🐙',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Dumbo-hires_%28cropped%29.jpg/330px-Dumbo-hires_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#f472b6', '#ec4899', '#831843'],
      bioluminescent: false,
      biolumType: 'None',
      size: '20 – 30 cm',
      diet: 'Polychaete worms and bivalves',
      adaptations: ['Ear-like fins on mantle for flapping flight', 'Webbed umbrella tentacles', 'Degenerated radula and ink sac'],
      summary: 'Named after Disney\'s Dumbo because it flaps ear-like fins to glide gracefully just inches above the abyssal sediment in extreme 400 ATM pressure.'
    },
    {
      id: 'tripod-fish',
      name: 'Tripod Fish',
      latin: 'Bathypterois grallator',
      zone: 'abyssal',
      zoneName: 'Abyssal Zone (Abyssopelagic)',
      depthMin: 4000,
      depthMax: 6000,
      icon: '🪑',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Campagne_BIOZAIRE_2_-_Poisson_tr%C3%A9pied_ou_poisson_tripode_%28Ifremer_00574-68561%29_1.jpg/330px-Campagne_BIOZAIRE_2_-_Poisson_tr%C3%A9pied_ou_poisson_tripode_%28Ifremer_00574-68561%29_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#67e8f9', '#0891b2', '#164e63'],
      bioluminescent: false,
      biolumType: 'None',
      size: '35 cm (Fins extend over 1 meter)',
      diet: 'Plankton and benthic amphipods',
      adaptations: ['Stilt-like elongated pelvic and caudal fin rays', 'Nearly blind (detects water currents)', 'Hermaphroditic reproduction'],
      summary: 'Stands motionless on the ocean floor like a camera tripod on 1-meter fin stilts, facing into bottom currents to intercept drifting prey with tactile fins.'
    },
    {
      id: 'faceless-cusk',
      name: 'Faceless Cusk',
      latin: 'Typhlonus nasus',
      zone: 'abyssal',
      zoneName: 'Abyssal Zone (Abyssopelagic)',
      depthMin: 4000,
      depthMax: 5100,
      icon: '👻',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Typhlonus_nasus.jpg',
      gradient: ['#cbd5e1', '#64748b', '#1e293b'],
      bioluminescent: false,
      biolumType: 'None',
      size: '40 cm',
      diet: 'Crustaceans and worms',
      adaptations: ['Eyes completely buried under skin', 'Gelatinous buoyant flesh', 'Sensory lateral pore system'],
      summary: 'An extraordinary deep-sea cusk eel with no visible eyes or distinct face. First dredged in 1873 by HMS Challenger and rediscovered in 2017 off Australia.'
    },
    {
      id: 'tube-worm',
      name: 'Giant Tube Worm',
      latin: 'Riftia pachyptila',
      zone: 'abyssal',
      zoneName: 'Abyssal Hydrothermal Vents',
      depthMin: 4000,
      depthMax: 5000,
      icon: '🪱',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Campagne_HOT_-_Vers_g%C3%A9ants_%28Riftia_pachyptila%29_%28Ifremer_00530-64223_-_52381%29.jpg/330px-Campagne_HOT_-_Vers_g%C3%A9ants_%28Riftia_pachyptila%29_%28Ifremer_00530-64223_-_52381%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#f87171', '#dc2626', '#991b1b'],
      bioluminescent: false,
      biolumType: 'None (Chemosynthetic Ecosystem)',
      size: 'Up to 2.4 meters long',
      diet: 'Symbiotic sulfur-oxidizing bacteria',
      adaptations: ['Zero mouth, gut, or digestive tract', 'Red hemoglobin plume absorbing hydrogen sulfide', 'Tough chitin tube protection'],
      summary: 'Thrives in boiling hydrothermal vents. Has no mouth or stomach; billions of symbiotic bacteria in its body convert toxic sulfur into organic nutrients.'
    },
    {
      id: 'yeti-crab',
      name: 'Yeti Crab',
      latin: 'Kiwa hirsuta',
      zone: 'abyssal',
      zoneName: 'Abyssal Hydrothermal Vents',
      depthMin: 2200,
      depthMax: 4500,
      icon: '🦀',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Yeti_crab.jpg/330px-Yeti_crab.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#fef08a', '#eab308', '#78350f'],
      bioluminescent: false,
      biolumType: 'None',
      size: '15 cm',
      diet: 'Farms bacteria on its bristled claws',
      adaptations: ['Dense silky setae (hair) on claws', 'Totally blind; vestigial eyes', 'Crowds hydrothermal vent edges'],
      summary: 'Possesses hairy claws resembling the mythological Yeti. Waves its claws over hydrothermal vent mineral plumes to farm bacteria for food.'
    },

    // --- ZONE 5: HADAL TRENCHES (6000 - 11000m) ---
    {
      id: 'snailfish',
      name: 'Mariana Snailfish',
      latin: 'Pseudoliparis swirei',
      zone: 'hadal',
      zoneName: 'Hadal Trenches (Mariana Trench)',
      depthMin: 6000,
      depthMax: 8200,
      icon: '🐟',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Pseudoliparis_swirei.png/330px-Pseudoliparis_swirei.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#fed7aa', '#f97316', '#7c2d12'],
      bioluminescent: false,
      biolumType: 'None (Deepest Living Vertebrate)',
      size: '28 cm',
      diet: 'Hadal amphipods and crustaceans',
      adaptations: ['High levels of TMAO stabilizing cellular proteins', 'Flexible uncalcified cartilage skull', 'Translucent scaleless skin'],
      summary: 'The deepest known vertebrate fish in the world! Endures pressure exceeding 800 ATM (equivalent to an elephant standing on your thumb) using chemical protein stabilizers.'
    },
    {
      id: 'super-amphipod',
      name: 'Supergiant Amphipod',
      latin: 'Alicella gigantea',
      zone: 'hadal',
      zoneName: 'Hadal Trenches (Mariana Trench)',
      depthMin: 6000,
      depthMax: 10000,
      icon: '🦐',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Alicella_gigantea_Japan_Trench_2022.jpg/330px-Alicella_gigantea_Japan_Trench_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#e9d5ff', '#a855f7', '#581c87'],
      bioluminescent: false,
      biolumType: 'None',
      size: '34 cm (17x larger than surface relatives)',
      diet: 'Sinking organic carrion and marine snow',
      adaptations: ['Extreme hadal gigantism', 'Piezo-tolerant enzymes', 'High lipid energy storage'],
      summary: 'While garden amphipods are just 1 cm long, hadal supergiant amphipods reach over 34 cm long! Feeds on carcasses that sink into the deepest ocean trenches.'
    },
    {
      id: 'xenophyophore',
      name: 'Hadal Xenophyophore',
      latin: 'Syringammina fragilissima',
      zone: 'hadal',
      zoneName: 'Hadal Trenches (Challenger Deep)',
      depthMin: 6000,
      depthMax: 10600,
      icon: '🦠',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Syringammina_Fragilissima.jpg/330px-Syringammina_Fragilissima.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#c084fc', '#9333ea', '#3b0764'],
      bioluminescent: false,
      biolumType: 'None',
      size: 'Up to 20 cm across (Single Cell)',
      diet: 'Bacteria and sediment organic matter',
      adaptations: ['Multinucleate gigantic single-cell structure', 'Test shell constructed from mineral grains', 'Accumulates heavy metals'],
      summary: 'Among the largest single-celled organisms on Earth. A solitary gigantic amoeba-like cell growing up to 20 cm wide under the crushing hadal sediment.'
    },
    {
      id: 'sea-pig',
      name: 'Sea Pig (Scotoplanes)',
      latin: 'Scotoplanes globosa',
      zone: 'hadal',
      zoneName: 'Abyssal & Hadal Plains',
      depthMin: 5000,
      depthMax: 9000,
      icon: '🐖',
      imageUrl: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Scotoplanes_globosa1.jpg/330px-Scotoplanes_globosa1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      gradient: ['#fbcfe8', '#f43f5e', '#881337'],
      bioluminescent: false,
      biolumType: 'None',
      size: '10 – 15 cm',
      diet: 'Organic sediment and detritus',
      adaptations: ['Tube-feet hydraulic walking legs', 'Dorsal sensory papillae tentacles', 'Gelatinous water-based body'],
      summary: 'Chubby pink deep-sea sea cucumbers that walk across the trench floor on fluid-filled hydraulic tube feet, vacuuming nutritious organic sediment.'
    }
  ];

  const FAUNA_MAP = new Map(FAUNA_DATASET.map(f => [f.id, f]));

  // ==========================================================================
  // 2. PROCEDURAL HYDRO-ACOUSTIC SOUND SYNTHESIZER
  // ==========================================================================
  class HydroAcousticEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = true;
      this.hydroGain = null;
      this.hydroFilter = null;
      this.sonarTimer = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    startAmbience() {
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;

      // Master Ambience Gain
      this.hydroGain = this.ctx.createGain();
      this.hydroGain.gain.setValueAtTime(0, now);
      this.hydroGain.gain.linearRampToValueAtTime(0.04, now + 2);

      // Low Pass Hydrophone Resonant Filter
      this.hydroFilter = this.ctx.createBiquadFilter();
      this.hydroFilter.type = 'lowpass';
      this.hydroFilter.frequency.setValueAtTime(220, now);

      // White noise buffer for ocean current resonance
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      whiteNoise.connect(this.hydroFilter);
      this.hydroFilter.connect(this.hydroGain);
      this.hydroGain.connect(this.ctx.destination);
      whiteNoise.start(now);

      // Trigger automatic subtle sonar ping every 9 seconds
      this.scheduleSonar();
    }

    scheduleSonar() {
      if (this.isMuted) return;
      this.playSonarPing();
      this.sonarTimer = setTimeout(() => this.scheduleSonar(), 9000);
    }

    stopAmbience() {
      if (this.sonarTimer) {
        clearTimeout(this.sonarTimer);
        this.sonarTimer = null;
      }
      if (this.hydroGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.hydroGain.gain.linearRampToValueAtTime(0, now + 1);
      }
    }

    toggleMute() {
      this.init();
      this.isMuted = !this.isMuted;
      if (this.isMuted) {
        this.stopAmbience();
      } else {
        this.startAmbience();
        this.playSonarPing();
      }
      return !this.isMuted;
    }

    playSonarPing() {
      if (this.isMuted || !this.ctx) return;
      this.init();
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1240, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.25);
    }

    playPressureGroan() {
      if (this.isMuted || !this.ctx) return;
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(45, now);
      osc.frequency.linearRampToValueAtTime(65, now + 0.5);
      osc.frequency.linearRampToValueAtTime(38, now + 1.2);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.25);
    }

    playChime(freq = 587.33, type = 'sine', duration = 0.3) {
      if (this.isMuted || !this.ctx) return;
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.01);
    }

    playQuizFanfare(correct = true) {
      if (this.isMuted) return;
      this.init();
      if (correct) {
        [440, 554.37, 659.25].forEach((freq, idx) => {
          setTimeout(() => this.playChime(freq, 'triangle', 0.25), idx * 100);
        });
      } else {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(70, now + 0.3);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.31);
      }
    }
  }

  const audio = new HydroAcousticEngine();

  // ==========================================================================
  // 3. UI CONTROLLER & TELEMETRY CALCULATOR
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // Top Nav & Mode Switcher
    const audioToggleBtn = document.getElementById('audioToggleBtn');
    const audioIcon = document.getElementById('audioIcon');
    const audioLabel = document.getElementById('audioLabel');
    const hubTabs = document.querySelectorAll('.hub-tab');
    const moduleViews = document.querySelectorAll('.module-view');

    // Telemetry HUD Elements
    const hudDepthMeters = document.getElementById('hudDepthMeters');
    const hudDepthFeet = document.getElementById('hudDepthFeet');
    const hudPressureAtm = document.getElementById('hudPressureAtm');
    const hudPressurePsi = document.getElementById('hudPressurePsi');
    const hudTemperature = document.getElementById('hudTemperature');
    const hudTempF = document.getElementById('hudTempF');
    const hudSunlightPct = document.getElementById('hudSunlightPct');
    const hudSunlightBar = document.getElementById('hudSunlightBar');
    const btnToggleBiolum = document.getElementById('btnToggleBiolum');
    const biolumIcon = document.getElementById('biolumIcon');
    const biolumText = document.getElementById('biolumText');
    const zonePills = document.querySelectorAll('.zone-pill');

    // Species Modal Elements
    const dossierModalBackdrop = document.getElementById('dossierModalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const dossierModalContent = document.getElementById('dossierModalContent');

    // Catalog Elements
    const catalogCardsGrid = document.getElementById('catalogCardsGrid');
    const catalogFilterPills = document.querySelectorAll('.catalog-pill');
    const catalogSearchInput = document.getElementById('catalogSearchInput');

    // Scale Comparator Canvas
    const everestCanvas = document.getElementById('everestCanvas');

    // Hydrothermal Vent Elements
    const ventCanvas = document.getElementById('ventCanvas');
    const ventTempSlider = document.getElementById('ventTempSlider');
    const ventTempDisplay = document.getElementById('ventTempDisplay');
    const ventTempLabel = document.getElementById('ventTempLabel');
    const btnBurstVent = document.getElementById('btnBurstVent');

    // Quiz Elements
    const quizTierButtons = document.querySelectorAll('.quiz-tier-btn');
    const quizScoreElem = document.getElementById('quizScore');
    const quizStreakElem = document.getElementById('quizStreak');
    const quizQuestionIndex = document.getElementById('quizQuestionIndex');
    const quizTierBadge = document.getElementById('quizTierBadge');
    const quizQuestionText = document.getElementById('quizQuestionText');
    const quizOptionsGrid = document.getElementById('quizOptionsGrid');
    const quizFeedbackBox = document.getElementById('quizFeedbackBox');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    const btnNextQuestion = document.getElementById('btnNextQuestion');

    // Global State
    const state = {
      activeTab: 'dive',
      currentDepth: 0,
      biolumActive: false,
      catalogFilter: 'all',
      catalogSearch: '',
      ventTemp: 360,
      ventSurge: false,
      quiz: {
        tier: 'snorkeler',
        questions: [],
        currentIndex: 0,
        score: 0,
        streak: 0,
        answered: false
      }
    };

    // ========================================================================
    // TAB SWITCHER
    // ========================================================================
    function switchTab(tabId) {
      state.activeTab = tabId;
      hubTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
      moduleViews.forEach(v => {
        v.classList.toggle('active', v.id === `view${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
      });

      if (tabId === 'scale') {
        drawEverestScale();
      } else if (tabId === 'vents') {
        initVentSimulation();
      } else if (tabId === 'catalog') {
        renderCatalog();
      } else if (tabId === 'quiz') {
        initQuiz();
      }

      window.scrollTo({ top: document.querySelector('.hub-nav-bar').offsetTop - 60, behavior: 'smooth' });
    }

    hubTabs.forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // ========================================================================
    // AUDIO CONTROLS
    // ========================================================================
    audioToggleBtn.addEventListener('click', () => {
      const isUnmuted = audio.toggleMute();
      audioIcon.textContent = isUnmuted ? '🔊' : '🔇';
      audioLabel.textContent = isUnmuted ? 'Sonar Active' : 'Sonar Off';
      audioToggleBtn.classList.toggle('active', isUnmuted);
    });

    // ========================================================================
    // TELEMETRY CALCULATOR & SCROLL TRACKER
    // ========================================================================
    function updateTelemetry(depth) {
      state.currentDepth = depth;

      // Pressure: P = 1 + (depth / 10) ATM
      const pressureAtm = (1 + depth / 10).toFixed(1);
      const pressurePsi = (pressureAtm * 14.696).toLocaleString(undefined, { maximumFractionDigits: 1 });

      // Temperature decay: starts 28°C -> falls to 1.5°C in hadal
      const tempC = (28 * Math.exp(-0.0016 * depth) + 1.5).toFixed(1);
      const tempF = (tempC * 9 / 5 + 32).toFixed(1);

      // Sunlight: 100% at 0m, 0% at 200m
      const sunlightPct = Math.max(0, Math.round(100 - (depth / 200) * 100));

      // Update HUD DOM
      hudDepthMeters.textContent = depth.toLocaleString();
      hudDepthFeet.textContent = `${Math.round(depth * 3.28084).toLocaleString()} ft`;
      hudPressureAtm.textContent = parseFloat(pressureAtm).toLocaleString();
      hudPressurePsi.textContent = `${pressurePsi} PSI`;
      hudTemperature.textContent = tempC;
      hudTempF.textContent = `${tempF} °F`;
      hudSunlightPct.textContent = `${sunlightPct}%`;
      hudSunlightBar.style.width = `${sunlightPct}%`;

      // Update active zone pill
      zonePills.forEach(pill => {
        const pillDepth = parseInt(pill.dataset.depth, 10);
        pill.classList.toggle('active', Math.abs(depth - pillDepth) < 300);
      });
    }

    // Scroll Observer on the vertical column
    window.addEventListener('scroll', () => {
      if (state.activeTab !== 'dive') return;

      const stage = document.getElementById('oceanColumnStage');
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const stageTop = rect.top + window.scrollY;
      const stageHeight = rect.height;
      const scrollPos = window.scrollY - stageTop + 350;

      const scrollFraction = Math.max(0, Math.min(1, scrollPos / stageHeight));
      const calculatedDepth = Math.round(scrollFraction * 10928);

      updateTelemetry(calculatedDepth);
    }, { passive: true });

    // Zone Jump Pills
    zonePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const targetDepth = parseInt(pill.dataset.depth, 10);
        let targetElem;

        if (targetDepth < 200) targetElem = document.getElementById('zoneSunlight');
        else if (targetDepth < 1000) targetElem = document.getElementById('zoneTwilight');
        else if (targetDepth < 3800) targetElem = document.getElementById('zoneMidnight');
        else if (targetDepth === 3800) targetElem = document.getElementById('titanicCallout');
        else if (targetDepth < 6000) targetElem = document.getElementById('zoneAbyssal');
        else targetElem = document.getElementById('zoneHadal');

        if (targetElem) {
          audio.playSonarPing();
          const targetY = targetElem.getBoundingClientRect().top + window.scrollY - 200;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
          updateTelemetry(targetDepth);
        }
      });
    });

    // Bioluminescence Mode Toggle
    btnToggleBiolum.addEventListener('click', () => {
      state.biolumActive = !state.biolumActive;
      document.body.classList.toggle('biolum-mode', state.biolumActive);
      btnToggleBiolum.classList.toggle('active', state.biolumActive);

      if (state.biolumActive) {
        biolumIcon.textContent = '🟢';
        biolumText.textContent = 'Bioluminescence Active';
        audio.playChime(659.25, 'sine', 0.4);
      } else {
        biolumIcon.textContent = '💡';
        biolumText.textContent = 'Sub Floodlights Active';
        audio.playChime(440, 'triangle', 0.2);
      }
    });

    // ========================================================================
    // SPECIES CARD TEMPLATE (REAL PHOTOGRAPHY + FALLBACK)
    // ========================================================================
    function createSpeciesCardHtml(species) {
      return `
        <article class="species-card" data-species-id="${species.id}">
          <div class="card-media-banner">
            <img 
              src="${species.imageUrl}" 
              alt="${species.name} (${species.latin})" 
              class="card-photo-img" 
              loading="lazy" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="card-fallback-avatar" style="display: none; background: radial-gradient(circle at 35% 35%, ${species.gradient[0]}, ${species.gradient[1]}, ${species.gradient[2]});">
              ${species.icon}
            </div>
            <div class="card-photo-scrim"></div>
            <span class="depth-tag-pill">${species.depthMin}m – ${species.depthMax}m</span>
            ${species.bioluminescent ? `<span class="card-biolum-tag" title="Bioluminescent organism">✨ Glow</span>` : ''}
          </div>
          <div class="card-body-content">
            <h4 class="species-title">${species.name}</h4>
            <span class="species-latin">${species.latin}</span>
            <p class="species-desc">${species.summary}</p>
            ${species.bioluminescent ? `<div class="biolum-feature-badge biolum-glow-tag">✨ Bioluminescent Glow Organ</div>` : ''}
            <button type="button" class="btn btn-secondary btn-sm btn-inspect-species" data-species-id="${species.id}">
              Inspect Dossier ↗
            </button>
          </div>
        </article>
      `;
    }

    // ========================================================================
    // POPULATE VERTICAL DIVE SPECIES GRIDS
    // ========================================================================
    function populateVerticalGrids() {
      const grids = {
        sunlight: document.getElementById('gridSunlight'),
        twilight: document.getElementById('gridTwilight'),
        midnight: document.getElementById('gridMidnight'),
        abyssal: document.getElementById('gridAbyssal'),
        hadal: document.getElementById('gridHadal')
      };

      FAUNA_DATASET.forEach(species => {
        const grid = grids[species.zone];
        if (!grid) return;
        grid.insertAdjacentHTML('beforeend', createSpeciesCardHtml(species));
      });
    }
    populateVerticalGrids();

    // Global event delegation: Clicking ANY species card or inspect button opens the species dossier modal
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.species-card');
      if (card && card.dataset.speciesId) {
        openSpeciesModal(card.dataset.speciesId);
      }
    });

    // ========================================================================
    // DEEP-DIVE SPECIES MODAL
    // ========================================================================
    function openSpeciesModal(speciesId) {
      const sp = FAUNA_MAP.get(speciesId);
      if (!sp) return;

      try {
        audio.playChime(523.25, 'sine', 0.25);
      } catch (err) {}

      dossierModalContent.innerHTML = `
        <div class="modal-dossier-photo-hero">
          <img 
            src="${sp.imageUrl}" 
            alt="${sp.name} (${sp.latin})" 
            class="modal-dossier-hero-img" 
            onerror="this.style.display='none';"
          >
          <div class="modal-photo-scrim"></div>
          <span class="modal-photo-depth-badge">Habitat: ${sp.depthMin}m – ${sp.depthMax}m</span>
        </div>

        <div class="modal-hero-section">
          <div class="modal-species-avatar" style="background: radial-gradient(circle at 35% 35%, ${sp.gradient[0]}, ${sp.gradient[1]}, ${sp.gradient[2]});">
            ${sp.icon}
          </div>
          <div>
            <span class="zone-badge">${sp.zoneName}</span>
            <h2 class="modal-species-title" id="modalSpeciesTitle">${sp.name}</h2>
            <div class="modal-latin-sub">${sp.latin}</div>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${sp.summary}</p>
          </div>
        </div>

        <div class="modal-body-section">
          <!-- Physical Metrics -->
          <div class="modal-stat-grid">
            <div class="modal-stat-card">
              <span class="mstat-lbl">Depth Habitat</span>
              <span class="mstat-val">${sp.depthMin}m – ${sp.depthMax}m</span>
            </div>
            <div class="modal-stat-card">
              <span class="mstat-lbl">Hydrostatic Pressure</span>
              <span class="mstat-val">${Math.round(1 + sp.depthMin / 10)} – ${Math.round(1 + sp.depthMax / 10)} ATM</span>
            </div>
            <div class="modal-stat-card">
              <span class="mstat-lbl">Typical Size</span>
              <span class="mstat-val">${sp.size}</span>
            </div>
            <div class="modal-stat-card">
              <span class="mstat-lbl">Primary Diet</span>
              <span class="mstat-val">${sp.diet}</span>
            </div>
          </div>

          <!-- Bioluminescence System -->
          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem;">Bioluminescent System</h4>
            <div style="background: rgba(3, 7, 18, 0.6); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: ${sp.bioluminescent ? 'var(--emerald-biolum)' : 'var(--text-muted)'};">
                ${sp.bioluminescent ? '⚡ Active Bioluminescent Organism' : '⚪ Non-Bioluminescent'}
              </span>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">${sp.biolumType}</p>
            </div>
          </div>

          <!-- Extreme Adaptations -->
          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem;">Abyssal Evolutionary Adaptations</h4>
            <div class="adaptation-tags-row">
              ${sp.adaptations.map(a => `<span class="adapt-chip">🛡️ ${a}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      dossierModalBackdrop.classList.remove('hidden');
      dossierModalBackdrop.setAttribute('aria-hidden', 'false');
    }

    modalCloseBtn.addEventListener('click', () => {
      dossierModalBackdrop.classList.add('hidden');
      dossierModalBackdrop.setAttribute('aria-hidden', 'true');
    });

    dossierModalBackdrop.addEventListener('click', (e) => {
      if (e.target === dossierModalBackdrop) {
        dossierModalBackdrop.classList.add('hidden');
        dossierModalBackdrop.setAttribute('aria-hidden', 'true');
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !dossierModalBackdrop.classList.contains('hidden')) {
        dossierModalBackdrop.classList.add('hidden');
        dossierModalBackdrop.setAttribute('aria-hidden', 'true');
      }
    });

    // ========================================================================
    // DEEP-SEA FAUNA CATALOG (SEARCH & FILTER)
    // ========================================================================
    function renderCatalog() {
      const filter = state.catalogFilter;
      const query = state.catalogSearch.toLowerCase().trim();

      const filtered = FAUNA_DATASET.filter(sp => {
        if (filter !== 'all' && sp.zone !== filter) return false;
        if (query) {
          const matchName = sp.name.toLowerCase().includes(query);
          const matchLatin = sp.latin.toLowerCase().includes(query);
          const matchDesc = sp.summary.toLowerCase().includes(query);
          const matchAdapt = sp.adaptations.some(a => a.toLowerCase().includes(query));
          return matchName || matchLatin || matchDesc || matchAdapt;
        }
        return true;
      });

      if (filtered.length === 0) {
        catalogCardsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-dim);">
            <p style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No marine fauna found</p>
            <p>Try searching for another creature, zone, or biological adaptation.</p>
          </div>
        `;
        return;
      }

      catalogCardsGrid.innerHTML = filtered.map(sp => createSpeciesCardHtml(sp)).join('');
    }

    catalogFilterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        catalogFilterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.catalogFilter = pill.dataset.filter;
        renderCatalog();
      });
    });

    catalogSearchInput.addEventListener('input', (e) => {
      state.catalogSearch = e.target.value;
      renderCatalog();
    });

    // ========================================================================
    // EVEREST SCALE CANVAS COMPARATOR
    // ========================================================================
    function drawEverestScale() {
      if (!everestCanvas) return;
      const ctx = everestCanvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = everestCanvas.getBoundingClientRect();

      everestCanvas.width = rect.width * dpr;
      everestCanvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Water background gradient (0m to 10,928m)
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#06b6d4');
      grad.addColorStop(0.1, '#0284c7');
      grad.addColorStop(0.3, '#1e3a8a');
      grad.addColorStop(0.6, '#0f172a');
      grad.addColorStop(1, '#010204');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Sea Surface Wave line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 30);
      for (let x = 0; x < w; x += 20) {
        ctx.quadraticCurveTo(x + 10, 26, x + 20, 30);
      }
      ctx.stroke();

      ctx.font = '700 11px Outfit, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Sea Surface (0m)', 15, 22);

      // Scale factors: 0m = y=30, 11000m = y=h-30
      const usableHeight = h - 60;
      const getY = (depth) => 30 + (depth / 11000) * usableHeight;

      // Draw V-Shaped Mariana Trench Silhouette
      ctx.fillStyle = '#0a0f1d';
      ctx.beginPath();
      ctx.moveTo(0, getY(6000));
      ctx.lineTo(w * 0.42, h - 30);
      ctx.lineTo(w * 0.58, h - 30);
      ctx.lineTo(w, getY(6000));
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fill();

      // Challenger Deep Floor Line
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.42, h - 30);
      ctx.lineTo(w * 0.58, h - 30);
      ctx.stroke();

      ctx.fillStyle = '#c084fc';
      ctx.textAlign = 'center';
      ctx.fillText('Challenger Deep Floor (10,928m)', w * 0.5, h - 14);

      // Draw INVERTED Mount Everest (sitting on the trench floor)
      // Base at 10,928m (h-30), peak points upward to 10928 - 8848 = 2080m
      const everestPeakY = getY(10928 - 8848);
      const everestBaseY = getY(10928);

      ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, everestPeakY); // Summit
      ctx.lineTo(w * 0.36, everestBaseY); // Left base
      ctx.lineTo(w * 0.64, everestBaseY); // Right base
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Everest Summit Snow Cap & Label
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(w * 0.5, everestPeakY);
      ctx.lineTo(w * 0.48, everestPeakY + 30);
      ctx.lineTo(w * 0.52, everestPeakY + 30);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#fef08a';
      ctx.textAlign = 'center';
      ctx.fillText('▲ Submerged Mount Everest Peak (8,848m)', w * 0.5, everestPeakY - 12);
      ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('2,080m (1.3 miles) of water still above summit!', w * 0.5, everestPeakY + 14);

      // Landmarks: Scuba, Burj Khalifa, Titanic
      const drawLandmark = (depth, label, color, align = 'left', xOffset = 25) => {
        const y = getY(depth);
        ctx.strokeStyle = color;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        ctx.moveTo(15, y);
        ctx.lineTo(w - 15, y);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = '700 10px Outfit, sans-serif';
        ctx.fillStyle = color;
        ctx.textAlign = align;
        ctx.fillText(label, align === 'left' ? xOffset : w - xOffset, y - 4);
      };

      drawLandmark(332, 'Scuba Record (Ahmed Gabr, 332m)', '#38bdf8', 'left', 20);
      drawLandmark(828, 'Burj Khalifa Height (828m)', '#34d399', 'right', 20);
      drawLandmark(2250, 'Sperm Whale Max Dive (2,250m)', '#fbbf24', 'left', 20);
      drawLandmark(3800, 'RMS Titanic Wreck Site (3,800m)', '#f43f5e', 'right', 20);
    }

    // ========================================================================
    // HYDROTHERMAL VENT BLACK SMOKER SIMULATOR
    // ========================================================================
    let ventAnimFrame = null;
    let ventParticles = [];

    function initVentSimulation() {
      if (!ventCanvas) return;
      const ctx = ventCanvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const rect = ventCanvas.getBoundingClientRect();

      ventCanvas.width = rect.width * dpr;
      ventCanvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;

      // Initialize mineral particles
      ventParticles = [];
      for (let i = 0; i < 90; i++) {
        ventParticles.push({
          x: w / 2 + (Math.random() - 0.5) * 16,
          y: h - 60 - Math.random() * (h - 80),
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(Math.random() * 2 + 1.5),
          radius: Math.random() * 8 + 3,
          alpha: Math.random() * 0.6 + 0.2
        });
      }

      function renderVent() {
        ctx.clearRect(0, 0, w, h);

        const temp = state.ventTemp;
        const speedScale = (temp / 300) * (state.ventSurge ? 2.5 : 1.0);

        // Draw Rising Black Mineral Smoke Particles
        for (let i = 0; i < ventParticles.length; i++) {
          const p = ventParticles[i];
          p.y += p.vy * speedScale;
          p.x += p.vx + Math.sin(p.y * 0.05) * 0.5;
          p.radius += 0.06;
          p.alpha -= 0.003;

          if (p.y < 10 || p.alpha <= 0) {
            p.x = w / 2 + (Math.random() - 0.5) * 16;
            p.y = h - 60;
            p.vx = (Math.random() - 0.5) * 1.6;
            p.vy = -(Math.random() * 2.2 + 1.2);
            p.radius = Math.random() * 6 + 2;
            p.alpha = Math.random() * 0.7 + 0.3;
          }

          ctx.fillStyle = `rgba(28, 25, 23, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Mineral Chimney Spire (Solid Rock)
        ctx.fillStyle = '#1c1917';
        ctx.beginPath();
        ctx.moveTo(w / 2 - 25, h);
        ctx.lineTo(w / 2 - 14, h - 60);
        ctx.lineTo(w / 2 + 14, h - 60);
        ctx.lineTo(w / 2 + 25, h);
        ctx.closePath();
        ctx.fill();

        // Glowing Magmatic Orifice
        const orificeGrad = ctx.createRadialGradient(w / 2, h - 60, 2, w / 2, h - 60, 24);
        orificeGrad.addColorStop(0, '#f97316');
        orificeGrad.addColorStop(0.5, '#ea580c');
        orificeGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = orificeGrad;
        ctx.beginPath();
        ctx.arc(w / 2, h - 60, 24, 0, Math.PI * 2);
        ctx.fill();

        // Vent Tube Worm colonies on side
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 3;
        for (let j = -20; j <= 20; j += 10) {
          if (j !== 0) {
            ctx.beginPath();
            ctx.moveTo(w / 2 + j, h - 15);
            ctx.quadraticCurveTo(w / 2 + j * 1.4, h - 40, w / 2 + j * 1.6, h - 50);
            ctx.stroke();
          }
        }

        ventAnimFrame = requestAnimationFrame(renderVent);
      }

      if (ventAnimFrame) cancelAnimationFrame(ventAnimFrame);
      ventAnimFrame = requestAnimationFrame(renderVent);
    }

    ventTempSlider.addEventListener('input', (e) => {
      state.ventTemp = parseInt(e.target.value, 10);
      ventTempDisplay.textContent = `${state.ventTemp}°C`;
      ventTempLabel.textContent = `${state.ventTemp}°C`;
    });

    btnBurstVent.addEventListener('click', () => {
      audio.playChime(320, 'sawtooth', 0.5);
      state.ventSurge = true;
      btnBurstVent.textContent = '🔥 Geothermal Eruption!';
      setTimeout(() => {
        state.ventSurge = false;
        btnBurstVent.textContent = 'Geothermal Plume Surge 💨';
      }, 2500);
    });

    // ========================================================================
    // OCEAN TRENCH MASTERY QUIZ
    // ========================================================================
    const QUIZ_QUESTIONS = {
      snorkeler: [
        {
          q: 'In which ocean zone does photosynthesis take place, supporting 90% of all marine life?',
          options: ['Epipelagic (Sunlight Zone)', 'Bathypelagic (Midnight Zone)', 'Hadal Zone (Trenches)', 'Abyssal Plain'],
          correct: 0,
          explanation: 'The sunlight zone extends down to 200 meters. Sunlight penetrates here, powering phytoplankton photosynthesis!'
        },
        {
          q: 'What is the largest living animal species on Earth?',
          options: ['Colossal Squid', 'Blue Whale', 'Great White Shark', 'Giant Oarfish'],
          correct: 1,
          explanation: 'The Blue Whale reaches up to 30 meters long and 190 tons, feeding on tiny krill filtered through baleen plates.'
        },
        {
          q: 'Which special adaptation allows dolphins to navigate and hunt in murky water?',
          options: ['Bioluminescent gills', 'Acoustic echolocation', 'Infrared vision', 'Electric shock organs'],
          correct: 1,
          explanation: 'Dolphins emit high-frequency sound clicks from their melon organ, interpreting returning echoes to "see" underwater.'
        },
        {
          q: 'What depth marks the boundary where sunlight completely disappears into the Midnight Zone?',
          options: ['50 meters', '200 meters', '1,000 meters', '4,000 meters'],
          correct: 2,
          explanation: 'Below 1,000 meters (the Midnight Zone / Bathypelagic), complete and perpetual darkness reigns.'
        }
      ],
      diver: [
        {
          q: 'How does an anglerfish attract its prey in the pitch-black midnight zone?',
          options: ['A glowing lure filled with symbiotic bacteria', 'Electric sonic pulses', 'A bright camouflage tail', 'High pitched vocal calls'],
          correct: 0,
          explanation: 'The female anglerfish dangles an esca lure filled with glowing bioluminescent bacteria over its needle-like fangs.'
        },
        {
          q: 'Approximately what is the water depth where the wreck of the RMS Titanic lies?',
          options: ['1,200 meters', '2,400 meters', '3,800 meters', '8,500 meters'],
          correct: 2,
          explanation: 'The Titanic wreck rests 3,800 meters deep in the North Atlantic under 380 atmospheres of pressure.'
        },
        {
          q: 'What unique physical trait allows the Barreleye Fish to spot prey silhouetted overhead?',
          options: ['A glowing red tongue', 'A transparent dome head with rotatable green tubular eyes', 'Radar antennas', 'X-ray lateral skin'],
          correct: 1,
          explanation: 'The Barreleye has a fluid-filled transparent head, allowing its emerald tubular eyes to rotate upward and forward.'
        },
        {
          q: 'What happens to water pressure for every 10 meters you dive deeper into the ocean?',
          options: ['Decreases by 1 ATM', 'Increases by approximately 1 Atmosphere (ATM)', 'Remains unchanged', 'Doubles exponentially'],
          correct: 1,
          explanation: 'Due to water density, pressure increases by roughly 1 ATM (~14.7 PSI) for every 10 meters of descent.'
        }
      ],
      oceanographer: [
        {
          q: 'What is the deepest known location on planet Earth, located in the southern Mariana Trench?',
          options: ['Puerto Rico Trench', 'Challenger Deep', 'Java Deep', 'Milwaukee Depth'],
          correct: 1,
          explanation: 'The Challenger Deep plunges to approximately 10,928 meters (nearly 36,000 feet) below sea level.'
        },
        {
          q: 'How do giant tube worms (Riftia) survive around boiling hydrothermal vents without sunlight?',
          options: ['Photosynthesis from volcanic glow', 'Chemosynthesis via symbiotic sulfur-oxidizing bacteria', 'Filter feeding surface algae', 'Eating volcanic basalt ash'],
          correct: 1,
          explanation: 'Tube worms harbor billions of chemosynthetic bacteria that convert toxic hydrogen sulfide ($H_2S$) into energy!'
        },
        {
          q: 'Which chemical compound allows the Mariana Snailfish to survive under 1,000 atmospheres of crushing pressure?',
          options: ['Trimethylamine N-oxide (TMAO)', 'Sodium chloride', 'Sulfuric acid', 'Hemoglobin'],
          correct: 0,
          explanation: 'TMAO acts as a chemical chaperone that stabilizes cellular proteins against denaturation under immense pressure.'
        },
        {
          q: 'If Mount Everest were inverted into the Challenger Deep, approximately how much water would remain above its peak?',
          options: ['None (it would stick out)', 'About 50 meters', 'Over 2,000 meters (1.3 miles)', 'Exactly 500 meters'],
          correct: 2,
          explanation: 'Everest is 8,848m tall; in the 10,928m Challenger Deep, over 2,000m (6,800+ ft) of water would still cover its summit!'
        }
      ]
    };

    function initQuiz() {
      const pool = QUIZ_QUESTIONS[state.quiz.tier] || QUIZ_QUESTIONS.snorkeler;
      state.quiz.questions = [...pool].sort(() => Math.random() - 0.5);
      state.quiz.currentIndex = 0;
      state.quiz.score = 0;
      state.quiz.streak = 0;
      updateQuizScoreDisplay();
      renderCurrentQuizQuestion();
    }

    function updateQuizScoreDisplay() {
      quizScoreElem.textContent = state.quiz.score;
      quizStreakElem.textContent = state.quiz.streak;
    }

    function renderCurrentQuizQuestion() {
      const q = state.quiz.questions[state.quiz.currentIndex];
      if (!q) {
        quizQuestionText.textContent = `🎉 Hadal Expedition Complete! Final Score: ${state.quiz.score} pts`;
        quizOptionsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
            <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1.5rem;">You navigated the extreme physical and biological depths of the ocean!</p>
            <button type="button" class="btn btn-primary" id="btnRestartQuiz">Restart Expedition ↺</button>
          </div>
        `;
        document.getElementById('btnRestartQuiz').addEventListener('click', () => initQuiz());
        quizFeedbackBox.classList.add('hidden');
        return;
      }

      state.quiz.answered = false;
      quizQuestionIndex.textContent = `Question ${state.quiz.currentIndex + 1} of ${state.quiz.questions.length}`;
      quizTierBadge.textContent = state.quiz.tier.toUpperCase();
      quizQuestionText.textContent = q.q;
      quizFeedbackBox.classList.add('hidden');

      quizOptionsGrid.innerHTML = q.options.map((opt, idx) => `
        <button type="button" class="quiz-opt-btn" data-index="${idx}">
          <span style="width: 26px; height: 26px; border-radius: 50%; background: rgba(255, 255, 255, 0.08); display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700;">${String.fromCharCode(65 + idx)}</span>
          <span>${opt}</span>
        </button>
      `).join('');

      quizOptionsGrid.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.quiz.answered) return;
          handleQuizAnswer(parseInt(btn.dataset.index, 10));
        });
      });
    }

    function handleQuizAnswer(selectedIndex) {
      state.quiz.answered = true;
      const q = state.quiz.questions[state.quiz.currentIndex];
      const isCorrect = selectedIndex === q.correct;

      audio.playQuizFanfare(isCorrect);

      const buttons = quizOptionsGrid.querySelectorAll('.quiz-opt-btn');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correct) {
          btn.classList.add('correct');
        } else if (idx === selectedIndex) {
          btn.classList.add('wrong');
        }
      });

      if (isCorrect) {
        state.quiz.streak++;
        const points = 100 + (state.quiz.streak - 1) * 25;
        state.quiz.score += points;
        feedbackIcon.textContent = '✅';
        feedbackTitle.textContent = `Correct! (+${points} pts)`;
        feedbackTitle.style.color = '#34d399';
      } else {
        state.quiz.streak = 0;
        feedbackIcon.textContent = '❌';
        feedbackTitle.textContent = 'Incorrect';
        feedbackTitle.style.color = '#fda4af';
      }

      updateQuizScoreDisplay();
      feedbackText.textContent = q.explanation;
      quizFeedbackBox.classList.remove('hidden');
    }

    btnNextQuestion.addEventListener('click', () => {
      state.quiz.currentIndex++;
      renderCurrentQuizQuestion();
    });

    quizTierButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        quizTierButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.quiz.tier = btn.dataset.tier;
        initQuiz();
      });
    });

    // Initial Telemetry Call
    updateTelemetry(0);
  });

})();
