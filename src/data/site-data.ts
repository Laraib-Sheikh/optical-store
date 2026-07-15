import type { Product, NavLink, Feature, FrameShape, LensType, CategoryItem } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Eyeglasses", href: "#eyeglasses" },
  { label: "Sunglasses", href: "#sunglasses" },
  { label: "Lens", href: "#lens" },
  { label: "Featured", href: "#featured" },
];

export const genderFilters = ["Men", "Women"] as const;

export const categoryItems: CategoryItem[] = [
  {
    id: "kids",
    label: "Kids",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
  },
  {
    id: "lens",
    label: "Lens",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
  },
  {
    id: "sunglasses",
    label: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
  },
  {
    id: "all-glasses",
    label: "All Glasses",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba74c3679?w=400&h=400&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Simple glasses for man",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    name: "Simple glasses for women",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Simple glasses for man",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop",
  },
];

export const frameShapes: FrameShape[] = [
  {
    id: "round",
    label: "Round",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=300&fit=crop",
  },
  {
    id: "square",
    label: "Square",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba74c3679?w=300&h=300&fit=crop",
  },
  {
    id: "aviator",
    label: "Aviator",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
  },
  {
    id: "cat-eye",
    label: "Cat Eye",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=300&h=300&fit=crop",
  },
];

export const lensTypes: LensType[] = [
  {
    id: "single-vision",
    label: "Single Vision",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=300&h=300&fit=crop",
  },
  {
    id: "bifocal",
    label: "Bifocal",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=300&h=300&fit=crop",
  },
  {
    id: "progressive",
    label: "Progressive",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
  },
  {
    id: "blue-light",
    label: "Blue Light",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba74c3679?w=300&h=300&fit=crop",
  },
];

export const features: Feature[] = [
  {
    icon: "👓",
    title: "Premium Quality Frames",
    description:
      "Crafted from durable, high-quality materials to provide lasting comfort, excellent fit, and timeless style for everyday wear.",
  },
  {
    icon: "🛡️",
    title: "UV Protection",
    description:
      "Our sunglasses feature UV-protective lenses that help shield your eyes from harmful sun rays while maintaining clear vision.",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    description:
      "Shop with confidence knowing you can return or exchange your eyewear through our simple and hassle-free return policy.",
  },
];

export const footerLinks = {
  siteMap: [
    { label: "Homepage", href: "#" },
    { label: "About us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact us", href: "#contact" },
  ],
  community: [{ label: "Blog", href: "#blog" }],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Services", href: "#terms" },
  ],
};
