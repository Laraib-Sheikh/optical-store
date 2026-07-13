import type {
  Product,
  NavLink,
  Feature,
  FrameShape,
  LensType,
  CategoryItem,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Eyeglasses", href: "#eyeglasses" },
  { label: "Sunglasses", href: "#sunglasses" },
  { label: "Lens", href: "#lens" },
  { label: "Featured", href: "#featured" },
];

export const categoryItems: CategoryItem[] = [
  { id: "men", label: "Men", image: "/design/product-1.jpg" },
  { id: "women", label: "Women", image: "/design/product-2.jpg" },
  { id: "kids", label: "Kids", image: "/design/product-1.jpg" },
  { id: "lens", label: "Lens", image: "/design/product-2.jpg" },
  { id: "sunglasses", label: "Sunglasses", image: "/design/hero.jpg" },
  { id: "all-glasses", label: "All Glasses", image: "/design/product-3.jpg" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Simple glasses for man",
    price: 1500,
    image: "/design/product-1.jpg",
  },
  {
    id: "2",
    name: "Simple glasses for women",
    price: 1500,
    image: "/design/product-2.jpg",
  },
  {
    id: "3",
    name: "Simple glasses for man",
    price: 1500,
    image: "/design/product-3.jpg",
  },
];

export const frameShapes: FrameShape[] = [
  { id: "aviator", label: "Aviator" },
  { id: "cat-eye", label: "Cat-Eye" },
  { id: "round", label: "Round" },
  { id: "oval", label: "Oval" },
  { id: "browline", label: "Browline" },
  { id: "geometric", label: "Geometric" },
  { id: "rectangle", label: "Rectangle" },
  { id: "butterfly", label: "Butterfly" },
  { id: "square", label: "Square" },
];

export const lensTypes: LensType[] = [
  { id: "single-vision", label: "Single vision" },
  { id: "bifocal", label: "Bifocal" },
  { id: "multifocal", label: "Multifocal" },
  { id: "trifocal", label: "Trifocal" },
  { id: "progressive", label: "Progressive" },
];

export const features: Feature[] = [
  {
    icon: "/design/icon-frames.png",
    title: "Premium Quality Frames",
    description:
      "Crafted from durable, high-quality materials to provide lasting comfort, excellent fit, and timeless style for everyday wear.",
  },
  {
    icon: "/design/icon-uv.png",
    title: "UV Protection",
    description:
      "Our sunglasses feature UV-protective lenses that help shield your eyes from harmful sun rays while maintaining clear vision.",
  },
  {
    icon: "/design/icon-returns.png",
    title: "Easy Returns",
    description:
      "Shop with confidence knowing you can return or exchange your eyewear through our simple and hassle-free return policy.",
  },
];

export const footerLinks = {
  siteMap: [
    { label: "Homepage", href: "/" },
    { label: "About us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact us", href: "#contact" },
    { label: "Community", href: "#community" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Services", href: "#terms" },
  ],
};
