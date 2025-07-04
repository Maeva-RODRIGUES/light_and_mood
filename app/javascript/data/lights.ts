import { Light } from '../types';

export const lights: Light[] = [
  // Calm lights
  {
    id: 'pendant-minimalist-1',
    name: 'Luna Pendant',
    description: 'Suspension minimaliste en verre soufflé, diffuse une lumière douce et apaisante',
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg',
    type: 'suspension',
    intensity: 'douce',
    price: 189,
    moodIds: ['calm', 'cozy'],
    style: ['minimaliste', 'scandinave'],
    dimensions: 'Ø 25cm × H 20cm',
    material: 'Verre soufflé, câble textile'
  },
  {
    id: 'table-ceramic-1',
    name: 'Zen Table Light',
    description: 'Lampe de table en céramique mate, parfaite pour la lecture et la méditation',
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg',
    type: 'lampe-table',
    intensity: 'douce',
    price: 129,
    moodIds: ['calm', 'focus'],
    style: ['minimaliste', 'zen'],
    dimensions: 'L 15cm × l 15cm × H 35cm',
    material: 'Céramique mate, abat-jour lin'
  },
  {
    id: 'floor-arc-1',
    name: 'Nordic Arc',
    description: 'Lampadaire arc en chêne massif, éclairage indirect très doux',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    type: 'lampadaire',
    intensity: 'douce',
    price: 349,
    moodIds: ['calm', 'cozy'],
    style: ['scandinave', 'naturel'],
    dimensions: 'L 120cm × H 160cm',
    material: 'Chêne massif, abat-jour lin naturel'
  },

  // Focus lights
  {
    id: 'desk-adjustable-1',
    name: 'Focus Pro',
    description: 'Lampe de bureau articulée LED, température de couleur ajustable',
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg',
    type: 'lampe-table',
    intensity: 'forte',
    price: 159,
    moodIds: ['focus', 'energetic'],
    style: ['moderne', 'technique'],
    dimensions: 'Base Ø 18cm × H 45cm (réglable)',
    material: 'Aluminium anodisé, LED intégrée'
  },
  {
    id: 'ceiling-linear-1',
    name: 'Linear Focus',
    description: 'Éclairage linéaire LED encastrable, parfait pour les espaces de travail',
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg',
    type: 'plafonnier',
    intensity: 'forte',
    price: 279,
    moodIds: ['focus'],
    style: ['moderne', 'minimaliste'],
    dimensions: 'L 120cm × l 8cm × H 3cm',
    material: 'Profilé aluminium, LED 4000K'
  },

  // Creative lights
  {
    id: 'pendant-copper-1',
    name: 'Copper Drop',
    description: 'Suspension en cuivre martelé, crée des jeux de lumière créatifs',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg',
    type: 'suspension',
    intensity: 'moyenne',
    price: 219,
    moodIds: ['creative', 'energetic'],
    style: ['industriel', 'vintage'],
    dimensions: 'Ø 20cm × H 25cm',
    material: 'Cuivre martelé, câble noir tressé'
  },
  {
    id: 'wall-geometric-1',
    name: 'Geo Wall',
    description: 'Applique géométrique modulaire, combinaisons infinies',
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
    type: 'applique',
    intensity: 'moyenne',
    price: 169,
    moodIds: ['creative', 'focus'],
    style: ['géométrique', 'moderne'],
    dimensions: 'L 30cm × l 30cm × P 8cm',
    material: 'Métal laqué blanc, LED intégrée'
  },

  // Cozy lights
  {
    id: 'table-wood-1',
    name: 'Hygge Light',
    description: 'Lampe de table en bois flotté avec abat-jour en jute naturel',
    image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg',
    type: 'lampe-table',
    intensity: 'douce',
    price: 149,
    moodIds: ['cozy', 'calm'],
    style: ['naturel', 'bohème'],
    dimensions: 'Base Ø 12cm × H 38cm',
    material: 'Bois flotté, jute naturel'
  },
  {
    id: 'string-warm-1',
    name: 'Warm String',
    description: 'Guirlande LED blanc chaud, parfaite pour créer une ambiance cocooning',
    image: 'https://images.pexels.com/photos/1079769/pexels-photo-1079769.jpeg',
    type: 'suspension',
    intensity: 'douce',
    price: 79,
    moodIds: ['cozy', 'romantic'],
    style: ['bohème', 'festif'],
    dimensions: '5m - 20 LED',
    material: 'LED blanc chaud, câble transparent'
  },

  // Energetic lights
  {
    id: 'ceiling-modern-1',
    name: 'Energy Burst',
    description: 'Plafonnier LED moderne avec variateur, éclairage dynamique',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    type: 'plafonnier',
    intensity: 'forte',
    price: 299,
    moodIds: ['energetic', 'focus'],
    style: ['moderne', 'high-tech'],
    dimensions: 'Ø 40cm × H 8cm',
    material: 'Aluminium brossé, LED RGB'
  },

  // Romantic lights
  {
    id: 'candle-led-1',
    name: 'Romance Candle',
    description: 'Bougie LED rechargeable avec flamme oscillante réaliste',
    image: 'https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg',
    type: 'lampe-table',
    intensity: 'douce',
    price: 59,
    moodIds: ['romantic', 'cozy'],
    style: ['classique', 'romantique'],
    dimensions: 'Ø 8cm × H 15cm',
    material: 'Cire synthétique, LED flamme'
  },
  {
    id: 'chandelier-crystal-1',
    name: 'Crystal Dreams',
    description: 'Suspension cristal moderne, jeux de lumière enchanteurs',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    type: 'suspension',
    intensity: 'moyenne',
    price: 459,
    moodIds: ['romantic', 'creative'],
    style: ['élégant', 'glamour'],
    dimensions: 'Ø 35cm × H 30cm',
    material: 'Cristal K9, structure chromée'
  }
];