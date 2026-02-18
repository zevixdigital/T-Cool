export type Category = {
  slug: string;
  title: string;
  navTitle?: string;
  image: string;
  shortDescription: string;
  description: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  image: string;
  monthlyPrice: number;
  securityDeposit: number;
  capacityLabel: string;
  brand: string;
  badges: {
    freeInstallation: boolean;
    freeMaintenance: boolean;
  };
  deliveryTimeline: string;
  description: string;
  benefits: string[];
  idealFor: string[];
};

/* =========================
   CATEGORIES
========================= */

export const categories: Category[] = [
  {
    slug: "window-ac",
    title: "Window AC On Rent",
    navTitle: "Window AC",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-window-ac_h1boqx.png",
    shortDescription:
      "Affordable cooling for compact spaces with quick installation.",
    description:
      "Choose from reliable Window AC options ideal for bedrooms and small living rooms. Includes free installation and maintenance in Gurgaon.",
  },
  {
    slug: "split-ac",
    title: "Split AC On Rent",
    navTitle: "Split AC",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-split-ac_vegu1n.png",
    shortDescription: "Efficient, silent cooling for modern homes.",
    description:
      "Browse premium Split AC models with high efficiency and quiet operation. Free installation + maintenance included.",
  },
  {
    slug: "oil-heater",
    title: "Room Heater / Oil Heater On Rent",
    navTitle: "Oil Heater",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416968/cat-oil-heater_iapzhc.png",
    shortDescription: "Safe, steady warmth for winters.",
    description:
      "Comfortable heating options for Gurgaon winters. Easy delivery, setup guidance, and support included.",
  },
  {
    slug: "washing-machine",
    title: "Washing Machine On Rent",
    navTitle: "Washing Machine",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416966/washing-m_ayt3mp.png",
    shortDescription: "Convenient laundry solutions for every home.",
    description:
      "Semi-automatic and fully automatic washing machines available on rent with delivery and support.",
  },
  {
    slug: "geyser-repair",
    title: "Geyser Repair",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/geyser_ew1vc8.png",
    shortDescription: "Fast diagnosis and reliable repairs.",
    description:
      "Professional geyser service with transparent guidance and quick turnaround.",
  },
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416965/refrigerator_orkmew.png",
    shortDescription: "Cooling issues, noise, leakage—fixed.",
    description:
      "Door-to-door refrigerator repair with experienced technicians.",
  },
  {
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416967/washing-repair_mpjtxn.png",
    shortDescription: "No-spin, drainage, vibration—handled.",
    description:
      "Reliable washing machine servicing with quality checks and support.",
  },
];

/* =========================
   PRODUCTS
========================= */

export const products: Product[] = [
  // Window AC
  {
    slug: "window-ac-1t",
    categorySlug: "window-ac",
    name: "Window AC 1 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-window-ac_h1boqx.png",
    monthlyPrice: 6999,
    securityDeposit: 3000,
    capacityLabel: "1 Ton",
    brand: "Voltas",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description:
      "Dependable 1 Ton Window AC for quick cooling in smaller rooms.",
    benefits: ["Quick cooling", "Low maintenance", "Great value", "Energy efficient"],
    idealFor: ["Bedroom", "Small living room", "Study room"],
  },
  {
    slug: "window-ac-1-5t",
    categorySlug: "window-ac",
    name: "Window AC 1.5 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-window-ac_h1boqx.png",
    monthlyPrice: 7999,
    securityDeposit: 4000,
    capacityLabel: "1.5 Ton",
    brand: "LG",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "Stronger cooling for bigger rooms.",
    benefits: ["Better coverage", "Stable cooling", "Durable build"],
    idealFor: ["Master bedroom", "Medium living room", "Office space"],
  },
  {
    slug: "window-ac-2t",
    categorySlug: "window-ac",
    name: "Window AC 2 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-window-ac_h1boqx.png",
    monthlyPrice: 8999,
    securityDeposit: 5000,
    capacityLabel: "2 Ton",
    brand: "Blue Star",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "High-capacity AC for large rooms.",
    benefits: ["Maximum cooling", "Large coverage", "Low noise"],
    idealFor: ["Large living room", "Hall", "Commercial space"],
  },

  // Split AC
  {
    slug: "split-ac-1t",
    categorySlug: "split-ac",
    name: "Split AC 1 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-split-ac_vegu1n.png",
    monthlyPrice: 10999,
    securityDeposit: 6000,
    capacityLabel: "1 Ton",
    brand: "Daikin",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "Efficient inverter cooling with silent performance.",
    benefits: ["Energy efficient", "Silent", "Modern design"],
    idealFor: ["Small bedroom", "Study room"],
  },
  {
    slug: "split-ac-1-5t",
    categorySlug: "split-ac",
    name: "Split AC 1.5 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-split-ac_vegu1n.png",
    monthlyPrice: 11999,
    securityDeposit: 7000,
    capacityLabel: "1.5 Ton",
    brand: "Daikin",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "Premium cooling with better room coverage.",
    benefits: ["Fast cooling", "Premium comfort"],
    idealFor: ["Master bedroom", "Modern flats"],
  },
  {
    slug: "split-ac-2t",
    categorySlug: "split-ac",
    name: "Split AC 2 Ton",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416964/cat-split-ac_vegu1n.png",
    monthlyPrice: 12999,
    securityDeposit: 8000,
    capacityLabel: "2 Ton",
    brand: "Hitachi",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "Powerful cooling for larger spaces.",
    benefits: ["High coverage", "Premium build"],
    idealFor: ["Large rooms", "Office space"],
  },

  // Oil Heater
  {
    slug: "oil-heater-9-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 9 Fin",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416968/cat-oil-heater_iapzhc.png",
    monthlyPrice: 3499,
    securityDeposit: 2000,
    capacityLabel: "9 Fin",
    brand: "Bajaj",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Compact heater for small rooms.",
    benefits: ["Safe heating", "Portable", "Quiet"],
    idealFor: ["Bedroom", "Kids room"],
  },
  {
    slug: "oil-heater-11-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 11 Fin",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416968/cat-oil-heater_iapzhc.png",
    monthlyPrice: 3999,
    securityDeposit: 2500,
    capacityLabel: "11 Fin",
    brand: "Bajaj",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Medium room coverage heater.",
    benefits: ["Better coverage", "Energy efficient"],
    idealFor: ["Living room", "Office"],
  },
  {
    slug: "oil-heater-13-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 13 Fin",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416968/cat-oil-heater_iapzhc.png",
    monthlyPrice: 4499,
    securityDeposit: 3000,
    capacityLabel: "13 Fin",
    brand: "Havells",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Maximum warmth for large rooms.",
    benefits: ["High warmth", "Premium quality"],
    idealFor: ["Large bedroom", "Hall"],
  },

  // Washing Machine
  {
    slug: "semi-auto-washing-machine",
    categorySlug: "washing-machine",
    name: "Semi Automatic Washing Machine",
    image:
      "https://res.cloudinary.com/dadqwaqis/image/upload/v1771416966/washing-m_ayt3mp.png",
    monthlyPrice: 599,
    securityDeposit: 1500,
    capacityLabel: "7 kg",
    brand: "Samsung",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "Budget-friendly washing machine for daily needs.",
    benefits: ["Affordable", "Water efficient", "Compact"],
    idealFor: ["PG", "Bachelor", "Small family"],
  },
];

/* =========================
   HELPERS
========================= */

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategorySlug(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getSimilarProducts(productSlug: string, limit = 4) {
  const product = getProductBySlug(productSlug);
  if (!product) return [];
  return products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
    )
    .slice(0, limit);
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory() {
  const grouped: Record<
    string,
    { category: Category; products: Product[] }
  > = {};

  categories.forEach((category) => {
    const categoryProducts = products.filter(
      (p) => p.categorySlug === category.slug
    );
    if (categoryProducts.length > 0) {
      grouped[category.slug] = {
        category,
        products: categoryProducts,
      };
    }
  });

  return grouped;
}