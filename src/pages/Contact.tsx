import { useState } from 'react';
import { Mail, Phone, CheckCircle, MapPin } from 'lucide-react';
import type { LeadFormData } from '../types';

const Contact = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceArea: '',
    propertyType: '',
    linearFootage: '',
    timeline: '',
    hearAboutUs: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.serviceArea) newErrors.serviceArea = 'Service area is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Contact form submitted:', formData);
    setFormSubmitted(true);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceArea: '',
      propertyType: '',
      linearFootage: '',
      timeline: '',
      hearAboutUs: '',
      message: ''
    });

    setTimeout(() => setFormSubmitted(false), 8000);
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Share a few details about your property and we'll provide a tailored quote for your permanent LED lighting project
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
                    Thank You for Your Request!
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We've received your free estimate request and will be in touch within 24 hours to discuss your permanent LED lighting project.
                  </p>
                  <p className="text-gray-600">
                    Need immediate assistance? Call us at{' '}
                    <a href="tel:4036715625" className="text-orange-600 font-semibold hover:text-orange-700">
                      (403) 671-5625
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Request Your Estimate
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        First Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Last Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone <span className="text-orange-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(403) 555-1234"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Area <span className="text-orange-600">*</span>
                      </label>
                      <select
                        value={formData.serviceArea}
                        onChange={(e) => handleInputChange('serviceArea', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                          errors.serviceArea ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select your area</option>
                        <option value="Calgary">Calgary + Surrounding</option>
                        <option value="Edmonton">Edmonton + Surrounding</option>
                        <option value="Lethbridge">Lethbridge + Surrounding</option>
                        <option value="Okanagan">Okanagan Area</option>
                      </select>
                      {errors.serviceArea && (
                        <p className="mt-1 text-sm text-red-600">{errors.serviceArea}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => handleInputChange('propertyType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select property type</option>
                        <option value="Single-family">Single-family Home</option>
                        <option value="Townhome">Townhome</option>
                        <option value="Duplex">Duplex</option>
                        <option value="Commercial">Commercial Property</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Approximate Linear Footage
                      </label>
                      <input
                        type="text"
                        value={formData.linearFootage}
                        onChange={(e) => handleInputChange('linearFootage', e.target.value)}
                        placeholder="e.g., 200 feet or 'Not sure'"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Preferred Installation Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="Next 30 days">Next 30 days</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="Exploring options">Just exploring options</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        How did you hear about us?
                      </label>
                      <select
                        value={formData.hearAboutUs}
                        onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="Google">Google Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral from Friend/Family</option>
                        <option value="Saw Installation">Saw an Installation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Message / Additional Details
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        placeholder="Tell us about your project goals, specific areas you'd like lit, or any questions you have..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Submit Request
                  </button>

                  <p className="mt-4 text-sm text-gray-600 text-center">
                    By submitting, you agree to be contacted about your lighting project. We respect your privacy.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-xl p-8 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Prefer to Talk Now?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:4036715625"
                    className="flex items-center text-gray-900 hover:text-orange-600 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white mr-4 group-hover:bg-orange-700 transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Call us at</div>
                      <div className="font-bold text-lg">(403) 671-5625</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@emberbright.ca"
                    className="flex items-center text-gray-900 hover:text-orange-600 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white mr-4 group-hover:bg-orange-700 transition-colors">
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
                  <MapPin className="w-6 h-6 text-orange-600 mr-2" />
                  Service Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    Calgary + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    Edmonton + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    Lethbridge + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    Okanagan Area
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      1
                    </span>
                    We'll review your request within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      2
                    </span>
                    Schedule a convenient time for an on-site assessment
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      3
                    </span>
                    Provide a detailed quote with no pressure
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      4
                    </span>
                    Begin your professional installation
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
