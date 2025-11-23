import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    // In production, this would redirect to payment processing
    navigate(routes.checkout);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Shopping Cart
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cart.items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Start shopping to add items to your cart.</p>
              <button
                onClick={() => navigate(routes.products)}
                className="px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center"
              >
                Browse Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Items ({cart.itemCount})
                  </h2>
                  {cart.items.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {cart.items.map((item, index) => {
                    const price = item.variant?.price || item.product.price;
                    const itemTotal = price * item.quantity;

                    return (
                      <div
                        key={`${item.product.id}-${item.variant?.id || 'default'}-${index}`}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                      >
                        <div className="flex flex-col sm:flex-row gap-4">
                          {/* Product Image/Icon */}
                          <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-primary-100 to-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="text-4xl">💡</div>
                          </div>

                          {/* Product Details */}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                  {item.product.name}
                                </h3>
                                {item.variant && (
                                  <p className="text-sm text-gray-600">Variant: {item.variant.name}</p>
                                )}
                                {item.product.sku && (
                                  <p className="text-xs text-gray-500">SKU: {item.product.sku}</p>
                                )}
                              </div>
                              <button
                                onClick={() => removeFromCart(item.product.id, item.variant?.id)}
                                className="text-red-600 hover:text-red-700 p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-3">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.variant?.id)}
                                  className="p-1 rounded border border-gray-300 hover:bg-gray-200 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.variant?.id)}
                                  className="p-1 rounded border border-gray-300 hover:bg-gray-200 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <p className="text-lg font-bold text-primary-600">
                                  ${itemTotal.toFixed(2)}
                                </p>
                                <p className="text-sm text-gray-500">
                                  ${price.toFixed(2)} each
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>${cart.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="text-gray-500">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span className="text-gray-500">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4 flex justify-between">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-primary-600">
                        ${cart.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full px-6 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg mb-4"
                  >
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={() => navigate(routes.products)}
                    className="w-full px-6 py-3 text-primary-600 border-2 border-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Continue Shopping
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;

