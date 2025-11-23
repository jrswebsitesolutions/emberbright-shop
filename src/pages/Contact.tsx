import { useState } from 'react';
import { Mail, Phone, CheckCircle, MessageSquare } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { setCurrentPage } = useNavigation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Contact form submitted:', formData);
    setFormSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setFormSubmitted(false), 8000);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Have a question? Need support? We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {formSubmitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 lg:p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Thank You for Contacting Us!
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We've received your message and will respond within 24 hours.
                  </p>
                  <p className="text-gray-600">
                    Need immediate assistance? Call us at{' '}
                    <a href="tel:4036715625" className="text-primary-600 font-semibold hover:text-primary-700">
                      (403) 671-5625
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Name <span className="text-primary-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-primary-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(403) 555-1234"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="What is this regarding?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Message <span className="text-primary-600">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>

                  <p className="mt-4 text-sm text-gray-600 text-center">
                    By submitting, you agree to be contacted. We respect your privacy.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 border border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:4036715625"
                    className="flex items-center text-gray-900 hover:text-primary-600 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mr-4 group-hover:bg-primary-700 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call us at</div>
                      <div className="font-bold text-lg">(403) 671-5625</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@emberbright.ca"
                    className="flex items-center text-gray-900 hover:text-primary-600 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mr-4 group-hover:bg-primary-700 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Email us at</div>
                      <div className="font-bold text-lg break-all">info@emberbright.ca</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="w-6 h-6 text-primary-600 mr-2" />
                  Looking for a Quote?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're interested in getting a free estimate for your permanent LED lighting project, we have a dedicated form with all the details we need.
                </p>
                <button
                  onClick={() => navigate(routes.estimate)}
                  className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Get Free Estimate
                </button>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-sm text-gray-300 mb-4">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    <span>Monday - Friday: 9 AM - 6 PM</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    <span>Saturday: 10 AM - 4 PM</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
