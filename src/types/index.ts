export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceArea: string;
  propertyType: string;
  linearFootage: string;
  timeline?: string;
  hearAboutUs?: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  inStock: boolean;
  sku?: string;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  variant?: ProductVariant;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
