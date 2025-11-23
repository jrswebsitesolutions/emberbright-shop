import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';
import CartIcon from './CartIcon';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useNavigation();
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Streamlined navigation for e-commerce - essential items only
  const navLinks = [
    { label: 'Home', path: routes.home },
    { label: 'Products', path: routes.products },
    { label: 'Gallery', path: routes.gallery },
    { label: 'About', path: routes.about }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => navigate(routes.home)}
            className="text-2xl font-bold text-gray-900 hover:text-primary-500 transition-colors"
          >
            EmberBright
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigate(routes.products)}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <CartIcon />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`block w-full text-left px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  currentPage === link.path
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <button
                onClick={() => navigate(routes.products)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              <button
                onClick={() => navigate(routes.cart)}
                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 text-base font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({cart.itemCount})</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
