export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FrameShape {
  id: string;
  label: string;
  image: string;
}

export interface LensType {
  id: string;
  label: string;
  image: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  image: string;
}
