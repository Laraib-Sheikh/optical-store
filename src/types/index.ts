export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  userEmail: string;
  customerName: string;
  address: string;
  phone: string;
  deliveryOption: string;
  paymentMethod: string;
  paymentProof?: string | null;
  cartItems: OrderItem[];
  status: string;
  createdAt: string;
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
  image?: string;
}

export interface LensType {
  id: string;
  label: string;
  image?: string;
}

export interface CategoryItem {
  id: string;
  label: string;
  image: string;
}
