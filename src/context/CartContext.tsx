import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { CartItem, Product, ProductVariant, Cart } from '../types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const calculateCart = (items: CartItem[]): Cart => {
  const total = items.reduce((sum, item) => {
    const price = item.variant?.price || item.product.price;
    return sum + price * item.quantity;
  }, 0);
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return { items, total, itemCount };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem('emberbright-cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const cart = calculateCart(items);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('emberbright-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1, variant?: ProductVariant) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && 
        (!variant || item.variant?.id === variant.id)
      );

      if (existingIndex >= 0) {
        // Update quantity if item exists
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        // Add new item
        return [...prevItems, { product, quantity, variant }];
      }
    });
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && (!variantId || item.variant?.id === variantId))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && (!variantId || item.variant?.id === variantId)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

