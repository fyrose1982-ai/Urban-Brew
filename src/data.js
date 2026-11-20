// ------------------------------------------------------------------
// Central demo-business configuration.
// Replace these values to rebrand the site for a real client.
// ------------------------------------------------------------------

export const BUSINESS = {
  name: "The Urban Brew",
  tagline: "Premium Café",
  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // PLACEHOLDER – replace with the client's real number before going live.
  whatsapp: "919999999999",
  whatsappMessage:
    "Hello The Urban Brew! I'd like to know more about your menu and table bookings.",
  phoneDisplay: "+91 99999 99999",
  email: "hello@theurbanbrew.example",
  address: ["24 Brew Lane, Coffee Quarter", "Demo City, 600 000"],
  mapQuery: "Coffee Quarter, Demo City",
  agency: "AVYRONIX DIGITAL",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "why-us", label: "Why Us" },
  { id: "visit", label: "Visit" },
];

const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: u("photo-1495474472287-4d71bcdd2085", 1600),
  interior: u("photo-1554118811-1e0d58224f24", 1000),
  barista: u("photo-1509042239860-f550ce710b93", 800),
  beans: u("photo-1511920170033-f8396924c348", 800),
};

export const MENU = [
  {
    name: "Signature Flat White",
    desc: "Double ristretto, silky steamed milk and a hint of caramelised sugar.",
    price: "₹220",
    tag: "Coffee",
    img: u("photo-1541167760496-1628856ab772"),
  },
  {
    name: "Classic Cappuccino",
    desc: "Rich espresso topped with velvety foam and a dusting of cocoa.",
    price: "₹190",
    tag: "Coffee",
    img: u("photo-1570968915860-54d5c301fa9f"),
  },
  {
    name: "Butter Croissant",
    desc: "Flaky, golden and baked fresh every morning.",
    price: "₹160",
    tag: "Bakery",
    img: u("photo-1555507036-ab1f4038808a"),
  },
  {
    name: "Avocado Sourdough Toast",
    desc: "Smashed avocado, cherry tomato, seeds and chilli flakes on toasted sourdough.",
    price: "₹340",
    tag: "Brunch",
    img: u("photo-1525351484163-7529414344d8"),
  },
  {
    name: "Dark Chocolate Cake",
    desc: "Moist chocolate sponge layered with a smooth ganache.",
    price: "₹260",
    tag: "Dessert",
    img: u("photo-1578985545062-69928b1d9587"),
  },
  {
    name: "Single-Origin Pour Over",
    desc: "Hand-brewed to order to highlight the bean's natural character.",
    price: "₹280",
    tag: "Coffee",
    img: u("photo-1572442388796-11668a67e53d"),
  },
];

export const FEATURES = [
  {
    icon: "Coffee",
    title: "Specialty Beans",
    text: "Carefully sourced beans, roasted in small batches and ground fresh for every cup.",
  },
  {
    icon: "Croissant",
    title: "Baked Fresh Daily",
    text: "Pastries, breads and cakes prepared each morning in our own kitchen.",
  },
  {
    icon: "Armchair",
    title: "Cosy, Calm Space",
    text: "Warm lighting, comfortable seating and a relaxed atmosphere to work or unwind.",
  },
  {
    icon: "Wifi",
    title: "Work-Friendly",
    text: "Free Wi-Fi and plenty of power sockets for remote work and study sessions.",
  },
  {
    icon: "Leaf",
    title: "Thoughtful Ingredients",
    text: "Seasonal produce and plant-based options so there is something for everyone.",
  },
  {
    icon: "HeartHandshake",
    title: "Friendly Service",
    text: "A welcoming team that remembers your order and treats every guest like a regular.",
  },
];

export const HOURS = [
  { day: "Monday – Friday", time: "7:30 AM – 10:00 PM" },
  { day: "Saturday", time: "8:00 AM – 11:00 PM" },
  { day: "Sunday", time: "8:00 AM – 10:00 PM" },
];
