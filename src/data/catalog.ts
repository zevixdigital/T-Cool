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

// Frontend-only catalog with updated pricing
import catWindowAc from "@/assets/cat-window-ac.jpg";
import catSplitAc from "@/assets/cat-split-ac.jpg";
import catOilHeater from "@/assets/cat-oil-heater.jpg";
import catRepair from "@/assets/washing-m.jpg";
import geyser from "@/assets/geyser.jpg";
import refrigerator from "@/assets/refrigerator.jpg";
import machinerep from "@/assets/washing-repair.jpg";

export const categories: Category[] = [
  {
    slug: "window-ac",
    title: "Window AC On Rent",
    navTitle: "Window AC",
    image: catWindowAc,
    shortDescription: "Affordable cooling for compact spaces with quick installation.",
    description:
      "Choose from reliable Window AC options ideal for bedrooms and small living rooms. Includes free installation and maintenance in Gurgaon.",
  },
  {
    slug: "split-ac",
    title: "Split AC On Rent",
    navTitle: "Split AC",
    image: catSplitAc,
    shortDescription: "Efficient, silent cooling for modern homes.",
    description:
      "Browse premium Split AC models with high efficiency and quiet operation. Free installation + maintenance included.",
  },
  {
    slug: "oil-heater",
    title: "Room Heater / Oil Heater On Rent",
    navTitle: "Oil Heater",
    image: catOilHeater,
    shortDescription: "Safe, steady warmth for winters.",
    description:
      "Comfortable heating options for Gurgaon winters. Easy delivery, setup guidance, and support included.",
  },
  {
    slug: "washing-machine",
    title: "Washing Machine On Rent",
    navTitle: "Washing Machine",
    image: catRepair,
    shortDescription: "Convenient laundry solutions for every home.",
    description:
      "Semi-automatic and fully automatic washing machines available on rent with delivery and support.",
  },
  {
    slug: "geyser-repair",
    title: "Geyser Repair",
    image: geyser,
    shortDescription: "Fast diagnosis and reliable repairs.",
    description: "Professional geyser service with transparent guidance and quick turnaround.",
  },
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    image: refrigerator,
    shortDescription: "Cooling issues, noise, leakage—fixed.",
    description: "Door-to-door refrigerator repair with experienced technicians.",
  },
  {
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    image: machinerep,
    shortDescription: "No-spin, drainage, vibration—handled.",
    description: "Reliable washing machine servicing with quality checks and support.",
  },
];

export const products: Product[] = [
  // Window AC Products
  {
    slug: "window-ac-1t",
    categorySlug: "window-ac",
    name: "Window AC 1 Ton",
    image: catWindowAc,
    monthlyPrice: 6999,
    securityDeposit: 3000,
    capacityLabel: "1 Ton",
    brand: "Voltas",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description:
      "A dependable 1 Ton Window AC for quick cooling in smaller rooms. Best for budget-friendly rentals with hassle-free service.",
    benefits: ["Quick cooling", "Low maintenance", "Great value", "Energy efficient"],
    idealFor: ["Bedroom", "Small living room", "Study room"],
  },
  {
    slug: "window-ac-1-5t",
    categorySlug: "window-ac",
    name: "Window AC 1.5 Ton",
    image: catWindowAc,
    monthlyPrice: 7999,
    securityDeposit: 4000,
    capacityLabel: "1.5 Ton",
    brand: "LG",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "Stronger cooling for bigger rooms with consistent performance and reliability.",
    benefits: ["Better room coverage", "Stable cooling", "Service included", "Durable build"],
    idealFor: ["Master bedroom", "Medium living room", "Office space"],
  },
  {
    slug: "window-ac-2t",
    categorySlug: "window-ac",
    name: "Window AC 2 Ton",
    image: catWindowAc,
    monthlyPrice: 8999,
    securityDeposit: 5000,
    capacityLabel: "2 Ton",
    brand: "Blue Star",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "High-capacity window AC for large spaces requiring powerful cooling performance.",
    benefits: ["Maximum cooling power", "Large area coverage", "Heavy-duty performance", "Low noise"],
    idealFor: ["Large living room", "Hall", "Commercial space"],
  },

  // Split AC Products
  {
    slug: "split-ac-1t",
    categorySlug: "split-ac",
    name: "Split AC 1 Ton",
    image: catSplitAc,
    monthlyPrice: 10999,
    securityDeposit: 6000,
    capacityLabel: "1 Ton",
    brand: "Daikin",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "Compact split AC with inverter technology for efficient and quiet cooling.",
    benefits: ["Energy efficient", "Silent operation", "Modern design", "Smart cooling"],
    idealFor: ["Small bedroom", "Study room", "Work-from-home setup"],
  },
  {
    slug: "split-ac-1-5t",
    categorySlug: "split-ac",
    name: "Split AC 1.5 Ton",
    image: catSplitAc,
    monthlyPrice: 11999,
    securityDeposit: 7000,
    capacityLabel: "1.5 Ton",
    brand: "Daikin",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "Energy-efficient inverter cooling with quieter operation for comfortable living.",
    benefits: ["Energy efficient", "Silent operation", "Premium comfort", "Fast cooling"],
    idealFor: ["Modern flats", "Master bedroom", "Work-from-home rooms"],
  },
  {
    slug: "split-ac-2t",
    categorySlug: "split-ac",
    name: "Split AC 2 Ton",
    image: catSplitAc,
    monthlyPrice: 12999,
    securityDeposit: 8000,
    capacityLabel: "2 Ton",
    brand: "Hitachi",
    badges: { freeInstallation: true, freeMaintenance: true },
    deliveryTimeline: "24–72 hours in Gurgaon",
    description: "High-capacity premium split AC ideal for larger spaces requiring powerful cooling.",
    benefits: ["High coverage", "Fast cooling", "Includes maintenance", "Premium build"],
    idealFor: ["Large living rooms", "Office rooms", "Conference rooms"],
  },

  // Oil Heater Products
  {
    slug: "oil-heater-9-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 9 Fin",
    image: catOilHeater,
    monthlyPrice: 3499,
    securityDeposit: 2000,
    capacityLabel: "9 Fin",
    brand: "Bajaj",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Compact 9 fin oil heater for small to medium rooms with safe and steady warmth.",
    benefits: ["Steady warmth", "Safer heating", "Quiet operation", "Portable design"],
    idealFor: ["Small bedroom", "Study room", "Kids room"],
  },
  {
    slug: "oil-heater-11-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 11 Fin",
    image: catOilHeater,
    monthlyPrice: 3999,
    securityDeposit: 2500,
    capacityLabel: "11 Fin",
    brand: "Bajaj",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Medium capacity 11 fin oil heater for better room coverage and consistent heating.",
    benefits: ["Better coverage", "Energy efficient", "Safe for families", "Low maintenance"],
    idealFor: ["Medium bedroom", "Living room", "Office space"],
  },
  {
    slug: "oil-heater-13-fin",
    categorySlug: "oil-heater",
    name: "Oil Room Heater 13 Fin",
    image: catOilHeater,
    monthlyPrice: 4499,
    securityDeposit: 3000,
    capacityLabel: "13 Fin",
    brand: "Havells",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "Same/Next day in Gurgaon",
    description: "Large 13 fin oil heater for maximum warmth in larger rooms during harsh winters.",
    benefits: ["Maximum warmth", "Large area coverage", "Premium quality", "Child safe"],
    idealFor: ["Large bedroom", "Hall", "Large living room"],
  },

  // Washing Machine
  {
    slug: "semi-auto-washing-machine",
    categorySlug: "washing-machine",
    name: "Semi Automatic Washing Machine",
    image: catRepair,
    monthlyPrice: 599,
    securityDeposit: 1500,
    capacityLabel: "7 kg",
    brand: "Samsung",
    badges: { freeInstallation: false, freeMaintenance: true },
    deliveryTimeline: "24–48 hours in Gurgaon",
    description: "Affordable semi-automatic washing machine for daily laundry needs with easy operation.",
    benefits: ["Budget friendly", "Easy to use", "Water efficient", "Compact design"],
    idealFor: ["PG accommodation", "Bachelor pad", "Small family"],
  },
];

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
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, limit);
}

export function getAllProducts() {
  return products;
}

// Group products by category for pricing page
export function getProductsByCategory() {
  const grouped: Record<string, { category: Category; products: Product[] }> = {};
  
  categories.forEach((category) => {
    const categoryProducts = products.filter((p) => p.categorySlug === category.slug);
    if (categoryProducts.length > 0) {
      grouped[category.slug] = {
        category,
        products: categoryProducts,
      };
    }
  });
  
  return grouped;
}
