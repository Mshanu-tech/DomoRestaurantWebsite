export const featuredDishes = [
  {
    id: "f1",
    name: "Seared Scallops",
    description: "Hand-dived scallops, brown butter emulsion, blood orange & finger lime",
    price: "28",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "f2",
    name: "Wagyu Tenderloin",
    description: "A5 Wagyu, black truffle jus, roasted bone marrow, seasonal roots",
    price: "64",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "f3",
    name: "Lobster Risotto",
    description: "Nova Scotia lobster, saffron arborio, mascarpone, lobster bisque foam",
    price: "42",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "f4",
    name: "Duck Confit",
    description: "48-hour confit duck leg, cherry gastrique, celeriac purée",
    price: "38",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1200&auto=format&fit=crop",
  },
];

export const menuCategories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"];

export const menuItems = {
  Breakfast: [
    { id: "b1", name: "Truffle Egg Brioche", description: "Soft scrambled eggs, black truffle, toasted brioche", price: "18", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop" },
    { id: "b2", name: "Belgian Waffle Royale", description: "Caramelised banana, mascarpone, gold leaf honey", price: "16", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800&auto=format&fit=crop" },
    { id: "b3", name: "Smoked Salmon Tartine", description: "Rye sourdough, dill crème fraîche, capers", price: "19", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop" },
  ],
  Lunch: [
    { id: "l1", name: "Heirloom Tomato Salad", description: "Burrata, basil oil, aged balsamic pearls", price: "22", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
    { id: "l2", name: "Grilled Branzino", description: "Citrus fennel salad, olive tapenade, lemon butter", price: "34", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
    { id: "l3", name: "Wild Mushroom Tagliatelle", description: "Porcini cream, parmesan, black truffle shavings", price: "27", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop" },
  ],
  Dinner: [
    { id: "d1", name: "Wagyu Tenderloin", description: "A5 Wagyu, black truffle jus, roasted bone marrow", price: "64", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop" },
    { id: "d2", name: "Lobster Risotto", description: "Saffron arborio, mascarpone, lobster bisque foam", price: "42", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop" },
    { id: "d3", name: "Herb-Crusted Rack of Lamb", description: "Rosemary jus, ratatouille, dauphinoise potato", price: "48", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
  ],
  Desserts: [
    { id: "de1", name: "Valrhona Chocolate Fondant", description: "Molten centre, salted caramel, vanilla bean ice cream", price: "16", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop" },
    { id: "de2", name: "Crème Brûlée", description: "Madagascar vanilla, torched sugar crust, tuile", price: "14", image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?q=80&w=800&auto=format&fit=crop" },
    { id: "de3", name: "Deconstructed Tiramisu", description: "Espresso soaked sponge, mascarpone cream, cocoa nib", price: "15", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop" },
  ],
  Drinks: [
    { id: "dr1", name: "Signature Old Fashioned", description: "Bourbon, muscovado, orange bitters, smoked oak", price: "19", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop" },
    { id: "dr2", name: "Grand Cru Reserve", description: "House sommelier selection, by the glass", price: "24", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop" },
    { id: "dr3", name: "Golden Hour Spritz", description: "Elderflower, prosecco, citrus, edible gold dust", price: "17", image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?q=80&w=800&auto=format&fit=crop" },
  ],
};

export const galleryImages = [
  { id: "g1", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop", alt: "Elegant plated dish", tall: true },
  { id: "g2", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop", alt: "Restaurant interior ambience" },
  { id: "g3", src: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=900&auto=format&fit=crop", alt: "Chef plating a dish" },
  { id: "g4", src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=900&auto=format&fit=crop", alt: "Fine dining table setting", tall: true },
  { id: "g5", src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=900&auto=format&fit=crop", alt: "Wine pairing" },
  { id: "g6", src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=900&auto=format&fit=crop", alt: "Signature dessert" },
  { id: "g7", src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop", alt: "Dining room" },
  { id: "g8", src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop", alt: "Bar and drinks", tall: true },
];

export const testimonials = [
  { id: "t1", name: "Isabelle Moreau", role: "Food Critic, Le Monde Gourmand", quote: "An evening at Lumière is theatre for the senses — every course felt considered, every detail intentional. The Wagyu alone is worth the reservation.", rating: 5 },
  { id: "t2", name: "James Whitfield", role: "Regular Guest", quote: "Best anniversary dinner we've ever had. The service was warm without being stiff, and the tasting menu told a real story from start to finish.", rating: 5 },
  { id: "t3", name: "Aiko Tanaka", role: "Travel & Lifestyle Writer", quote: "Lumière belongs on any serious list of destination restaurants. The ambience alone justifies the visit — the food simply seals it.", rating: 5 },
  { id: "t4", name: "Marcus Reyes", role: "Guest", quote: "From the moment we walked in, it felt like an occasion. Impeccably paced, quietly luxurious, and genuinely memorable.", rating: 5 },
];

export const whyChooseUs = [
  { id: "w1", title: "Fresh Ingredients", description: "Sourced daily from trusted local farms and seasonal markets, never frozen." },
  { id: "w2", title: "Award-Winning Chef", description: "Two decades of Michelin-recognised craftsmanship behind every plate." },
  { id: "w3", title: "Attentive Service", description: "Warm, unhurried hospitality that anticipates before you have to ask." },
  { id: "w4", title: "Luxury Ambience", description: "Candlelit interiors and curated sound designed for a truly refined evening." },
];
