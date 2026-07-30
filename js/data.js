// ============================================================
// Shared data — menu dishes, reviews, gallery images
// Used by menu.js, gallery.js, and the home-page previews.
// ============================================================

export const dishes = [
  { id: 1, name: 'Oscietra Caviar Blini', desc: 'Hand-harvested caviar atop warm buckwheat blini, crème fraîche and chive.', cat: 'starters', tags: ['nonveg'], chef: true, img: 'https://images.pexels.com/photos/26586541/pexels-photo-26586541.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Gamberi al Vapore', desc: 'Steamed tiger prawn, saffron bisque, citrus pearls and micro-herbs.', cat: 'starters', tags: ['nonveg'], chef: false, img: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Heirloom Tomato Carpaccio', desc: 'Sun-ripened tomatoes, basil oil, aged balsamic and shaved pecorino.', cat: 'starters', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/29138860/pexels-photo-29138860.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Wagyu Tenderloin', desc: 'A5 Wagyu, truffle jus, pommes purée and glazed baby carrots.', cat: 'main', tags: ['nonveg'], chef: true, img: 'https://images.pexels.com/photos/25205263/pexels-photo-25205263.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Herb-Crusted Lamb Rack', desc: 'New-season lamb, rosemary crust, smoked aubergine and red wine reduction.', cat: 'main', tags: ['nonveg'], chef: false, img: 'https://images.pexels.com/photos/8840896/pexels-photo-8840896.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Roasted Heritage Beet', desc: 'Slow-roasted beets, whipped goat cheese, hazelnut crumble and honey.', cat: 'main', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Valrhona Soufflé', desc: 'Warm dark chocolate soufflé, salted caramel and gold-leaf vanilla bean.', cat: 'desserts', tags: ['veg'], chef: true, img: 'https://images.pexels.com/photos/16544183/pexels-photo-16544183.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Berry & Mascarpone', desc: 'Seasonal berries, whipped mascarpone, almond tuile and lavender honey.', cat: 'desserts', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/15671425/pexels-photo-15671425.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 9, name: 'Citrus Pavlova', desc: 'Crisp meringue, orange supremes, walnuts and pomegranate molasses.', cat: 'desserts', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/14996603/pexels-photo-14996603.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Royal Old Fashioned', desc: 'Aged bourbon, smoked maple, orange bitters and a hand-carved ice sphere.', cat: 'drinks', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/14663634/pexels-photo-14663634.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 11, name: 'Château Cellar Pour', desc: 'A sommelier-selected Bordeaux, decanted tableside and served with guidance.', cat: 'drinks', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/3937673/pexels-photo-3937673.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 12, name: 'Garden Falafel Bowl', desc: 'Crisp falafel, shaved vegetables, tahini drizzle and herb oil.', cat: 'main', tags: ['veg'], chef: false, img: 'https://images.pexels.com/photos/4958946/pexels-photo-4958946.jpeg?auto=compress&cs=tinysrgb&w=800' },
]

export const reviews = [
  { name: 'Isabelle Moreau', role: 'Food Critic, Le Monde', rating: 5, text: 'An evening at Le Château Royale is less a meal and more a symphony — every course arrived as a revelation.', img: 'https://images.pexels.com/photos/18890524/pexels-photo-18890524.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'James Whitfield', role: 'Regular Guest', rating: 5, text: 'We have celebrated every anniversary here for a decade. The service anticipates you before you speak.', img: 'https://images.pexels.com/photos/3228887/pexels-photo-3228887.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Sophia Laurent', role: 'Travel Writer', rating: 5, text: 'The most memorable dining experience of my life. The chef\'s tasting menu is pure poetry on a plate.', img: 'https://images.pexels.com/photos/28756957/pexels-photo-28756957.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Marcus Chen', role: 'Sommelier', rating: 5, text: 'A cellar that rivals any in Europe, paired with a kitchen that honours every bottle. Flawless.', img: 'https://images.pexels.com/photos/13010849/pexels-photo-13010849.jpeg?auto=compress&cs=tinysrgb&w=200' },
]

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/20184685/pexels-photo-20184685.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'interior', alt: 'Luxurious dining room with elegant seating' },
  { src: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'food', alt: 'Gourmet plated dish with vegetables and sauce' },
  { src: 'https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'kitchen', alt: 'Chef grilling with dramatic flames' },
  { src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'interior', alt: 'Candlelit table setting' },
  { src: 'https://images.pexels.com/photos/8856555/pexels-photo-8856555.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'decor', alt: 'Luxurious table setup with candle holders' },
  { src: 'https://images.pexels.com/photos/17237180/pexels-photo-17237180.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'food', alt: 'Chef serving gourmet plates' },
  { src: 'https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'kitchen', alt: 'Chefs working in busy kitchen' },
  { src: 'https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'interior', alt: 'Romantically set dinner table' },
  { src: 'https://images.pexels.com/photos/16544183/pexels-photo-16544183.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'food', alt: 'Assortment of gourmet desserts' },
  { src: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'decor', alt: 'Wine setting with warm lighting' },
  { src: 'https://images.pexels.com/photos/15113069/pexels-photo-15113069.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'interior', alt: 'Elegant restaurant setting with armchairs' },
  { src: 'https://images.pexels.com/photos/36539296/pexels-photo-36539296.jpeg?auto=compress&cs=tinysrgb&w=900', cat: 'kitchen', alt: 'Chef flambéing a dish' },
]
