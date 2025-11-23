import { useState } from 'react';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

const Products = () => {
  const { setCurrentPage } = useNavigation();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample products - in production, these would come from an API/database
  const products: Product[] = [
    {
      id: '1',
      name: 'Complete EmberBright System',
      description: 'Full permanent LED lighting system including bulbs, track, controller, and professional installation.',
      price: 2499.99,
      category: 'systems',
      inStock: true,
      sku: 'EB-SYS-001'
    },
    {
      id: '2',
      name: 'Residential Starter Kit',
      description: 'Perfect for smaller homes. Includes 100 LED bulbs, track, and controller.',
      price: 1499.99,
      category: 'systems',
      inStock: true,
      sku: 'EB-START-001'
    },
    {
      id: '3',
      name: 'Premium LED Bulbs (Pack of 50)',
      description: 'IP68 rated LED bulbs with 50,000 hour lifespan. Weatherproof and energy efficient.',
      price: 299.99,
      category: 'components',
      inStock: true,
      sku: 'EB-BULB-50'
    },
    {
      id: '4',
      name: 'Aluminum Track (50ft)',
      description: 'Colour-matched aluminum track. Powder-coated for durability and weather resistance.',
      price: 199.99,
      category: 'components',
      inStock: true,
      sku: 'EB-TRACK-50'
    },
    {
      id: '5',
      name: 'Smart Controller',
      description: 'WiFi-enabled controller with app integration. Compatible with Alexa and Google Home.',
      price: 149.99,
      category: 'components',
      inStock: true,
      sku: 'EB-CTRL-001'
    },
    {
      id: '6',
      name: 'Professional Installation Service',
      description: 'Full installation service by certified EmberBright contractors. Includes LED count and app setup.',
      price: 499.99,
      category: 'services',
      inStock: true,
      sku: 'EB-INSTALL'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'systems', label: 'Complete Systems' },
    { id: 'components', label: 'Components' },
    { id: 'services', label: 'Services' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    // Optional: Show a toast notification
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2">
              Products
            </h1>
            <p className="text-base sm:text-lg sm:text-xl text-gray-200 leading-relaxed px-2">
              Browse our complete selection of permanent LED lighting systems, components, and services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-gray-100 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💡</div>
                    <p className="text-sm text-gray-600">{product.name}</p>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    {product.inStock ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-1" />
                        <span className="text-sm font-medium">In Stock</span>
                      </div>
                    ) : (
                      <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                      product.inStock
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team can help you select the perfect system for your home. Get a free estimate today.
          </p>
          <button
            onClick={() => navigate(routes.estimate)}
            className="px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get Free Estimate
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;

