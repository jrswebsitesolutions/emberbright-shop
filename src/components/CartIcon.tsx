import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const CartIcon = () => {
  const { cart, setIsOpen } = useCart();
  const { setCurrentPage } = useNavigation();

  const handleClick = () => {
    setCurrentPage(routes.cart);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex items-center justify-center p-2 text-gray-700 hover:text-primary-500 transition-colors"
      aria-label={`Shopping cart with ${cart.itemCount} items`}
    >
      <ShoppingCart className="w-6 h-6" />
      {cart.itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-primary-600 text-white text-xs font-bold rounded-full">
          {cart.itemCount > 99 ? '99+' : cart.itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;

