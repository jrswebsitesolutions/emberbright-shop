import { useState } from 'react';
import { CheckCircle, Lock, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { setCurrentPage } = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.province.trim()) newErrors.province = 'Province is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    if (!formData.nameOnCard.trim()) newErrors.nameOnCard = 'Name on card is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (cart.items.length === 0) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  if (cart.items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate(routes.products)}
            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Complete!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You will receive a confirmation email shortly.
          </p>
          <button
            onClick={() => navigate(routes.home)}
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(routes.cart)}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Cart
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-5 h-5 text-primary-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Shipping Information */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.address ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.address && <p className="text-sm text-red-600 mt-1">{errors.address}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.city && <p className="text-sm text-red-600 mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Province *
                      </label>
                      <input
                        type="text"
                        value={formData.province}
                        onChange={(e) => handleInputChange('province', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.province ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.province && <p className="text-sm text-red-600 mt-1">{errors.province}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.postalCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.postalCode && <p className="text-sm text-red-600 mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        value={formData.nameOnCard}
                        onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.nameOnCard ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.nameOnCard && <p className="text-sm text-red-600 mt-1">{errors.nameOnCard}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.cardNumber && <p className="text-sm text-red-600 mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          placeholder="MM/YY"
                          className={`w-full px-4 py-2 border rounded-lg ${
                            errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.expiryDate && <p className="text-sm text-red-600 mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          placeholder="123"
                          className={`w-full px-4 py-2 border rounded-lg ${
                            errors.cvv ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.cvv && <p className="text-sm text-red-600 mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : `Complete Order - $${cart.total.toFixed(2)}`}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${((item.variant?.price || item.product.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary-600">${cart.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

