import { useState } from 'react';
import {
  Smartphone, Calendar, Palette, Shield, Award, Users,
  ArrowRight, CheckCircle, Zap, Clock, Globe, ChevronRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';
import type { LeadFormData } from '../types';

const Home = () => {
  const { setCurrentPage } = useNavigation();
  const [formData, setFormData] = useState<Partial<LeadFormData>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceArea: '',
    propertyType: '',
    linearFootage: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const features = [
    {
      icon: Palette,
      title: 'Low-Profile Design',
      description: 'Colour-matched aluminum track that seamlessly blends with your roofline by day, creates stunning displays by night.'
    },
    {
      icon: Calendar,
      title: 'Year-Round Illumination',
      description: 'The perfect permanent replacement for seasonal decorations. One installation, endless possibilities throughout every season.'
    },
    {
      icon: Shield,
      title: 'Virtually Maintenance-Free',
      description: 'Built to last 20+ years with premium components engineered to withstand the harshest Canadian weather conditions.'
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: 'Intuitive Control',
      description: 'Simple app interface with over 16 million colour options and precise RGB code input for perfect customization.'
    },
    {
      icon: Palette,
      title: 'Save Your Favourites',
      description: 'Create and save unlimited colour combinations and patterns for instant access to your preferred displays.'
    },
    {
      icon: Globe,
      title: 'Smart Home Integration',
      description: 'Seamless compatibility with Amazon Alexa and Google Home for voice-controlled lighting.'
    }
  ];

  const automationFeatures = [
    {
      icon: Calendar,
      title: '1000+ Pre-Made Patterns',
      description: 'Extensive library covering holidays, sports teams, special occasions, and themed displays ready to activate instantly.'
    },
    {
      icon: Clock,
      title: 'Complete Automation',
      description: 'Set daily, weekly, and yearly schedules. Program holidays, birthdays, game days, and special events to trigger automatically.'
    },
    {
      icon: Zap,
      title: 'Dynamic Effects',
      description: 'Mesmerizing animations including twinkles, gradients, marquee styles, and firework displays that bring your home to life.'
    }
  ];

  const technicalSpecs = [
    { label: 'Lifespan', value: '~50,000 hours (20+ years)' },
    { label: 'Waterproof Rating', value: 'IP68 with surge protection' },
    { label: 'Temperature Range', value: '-40°C to 60°C' },
    { label: 'Power Consumption', value: '~0.96W per bulb' },
    { label: 'Brightness', value: '100-120 lumens per bulb' },
    { label: 'Certifications', value: 'UL and CE certified' }
  ];

  const trackFeatures = [
    'Anodized and powder-coated for maximum durability',
    'Colour-matched to your soffit and trim for discreet daytime appearance',
    'Professional installation custom-fit to your unique roofline',
    'Conceals all wiring and LEDs for a clean, uniform look'
  ];

  const experienceCards = [
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Fast, responsive customer service from our knowledgeable team. We\'re here to ensure your complete satisfaction.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Top-tier bulbs, controllers, and track materials specifically chosen to excel in Canadian climate conditions.'
    },
    {
      icon: CheckCircle,
      title: 'Remarkable Installation',
      description: 'Vetted local contractors with rigorous training standards deliver highly professional, meticulous installations.'
    }
  ];

  const galleryImages = [
    'Modern home with roofline lighting',
    'Holiday display with red and green',
    'Blue and white sports team colours',
    'Warm white architectural accent',
    'Multi-colour gradient effect',
    'Purple and gold special event'
  ];

  const faqs = [
    {
      question: 'How long does installation typically take?',
      answer: 'Most residential installations are completed within 4-8 hours, depending on the size and complexity of your roofline.'
    },
    {
      question: 'Are the lights really weatherproof?',
      answer: 'Yes, our LED bulbs are IP68 rated with surge and UV protection, designed to perform flawlessly in temperatures from -40°C to 60°C.'
    },
    {
      question: 'Can I control the lights remotely?',
      answer: 'Absolutely. Use our intuitive mobile app from anywhere, or integrate with Amazon Alexa and Google Home for voice control.'
    },
    {
      question: 'What happens if a bulb fails?',
      answer: 'Our system is designed for easy maintenance. Individual bulbs can be replaced quickly, and we provide ongoing support throughout the life of your system.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xMDUuODk1LTIgMi0yaDRjMS4xMDUgMCAyIC44OTUgMiAydjRjMCAxLjEwNS0uODk1IDItMiAyaC00Yy0xLjEwNSAwLTItLjg5NS0yLTJ2LTR6bS0yMCAwYzAtMS4xMDUuODk1LTIgMi0yaDRjMS4xMDUgMCAyIC44OTUgMiAydjRjMCAxLjEwNS0uODk1IDItMiAyaC00Yy0xLjEwNSAwLTItLjg5NS0yLTJ2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-nowrap">
              The future of home lighting
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
              High-quality permanent LED lighting with professional installation, complete automation, and a stunning 20+ year lifespan. Elevate your curb appeal effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate(routes.estimate)}
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get a Free Estimate
              </button>
              <button
                onClick={() => navigate(routes.residential)}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
              >
                View Residential Lighting
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The EmberBright System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the key features that make EmberBright the premium choice for permanent outdoor lighting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The EmberBright App
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Control your lighting from anywhere with our powerful yet intuitive mobile application
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Patterns, Automation & Effects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Endless creative possibilities with automated scheduling and dynamic visual effects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Bulb & Track Quality
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Premium components engineered for exceptional performance and longevity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">LED Bulb Specifications</h3>
              <div className="space-y-4">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{spec.label}:</span>
                      <span className="ml-2 text-gray-300">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Track System Benefits</h3>
              <div className="space-y-4">
                {trackFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-300">
                  Our technicians perform a complete LED count during installation, ensuring your patterns are perfectly tailored to your home's unique configuration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The EmberBright Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What sets us apart in permanent outdoor lighting
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {experienceCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all">
                <card.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See EmberBright in Action
            </h2>
            <p className="text-lg text-gray-600">
              Real installations showcasing the transformative power of permanent LED lighting
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center text-gray-600 font-medium">
                {image}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate(routes.gallery)}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving Western Canada
            </h2>
            <p className="text-lg text-gray-600">
              Professional permanent LED lighting installation in Calgary, Edmonton, Lethbridge, and the Okanagan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Calgary + Surrounding', 'Edmonton + Surrounding', 'Lethbridge + Surrounding', 'Okanagan Area'].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{area}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate(routes.serviceAreas)}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
            >
              See All Service Areas
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about EmberBright systems
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate(routes.faq)}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All FAQs
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-gray-600">
              Share a few details and we'll provide a tailored quote for your home
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-700">
                We've received your request and will be in touch soon to discuss your permanent lighting project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Area *
                  </label>
                  <select
                    required
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select an area</option>
                    <option value="Calgary">Calgary + Surrounding</option>
                    <option value="Edmonton">Edmonton + Surrounding</option>
                    <option value="Lethbridge">Lethbridge + Surrounding</option>
                    <option value="Okanagan">Okanagan Area</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="Single-family">Single-family</option>
                    <option value="Townhome">Townhome</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Approximate Linear Footage
                  </label>
                  <input
                    type="text"
                    value={formData.linearFootage}
                    onChange={(e) => setFormData({ ...formData, linearFootage: e.target.value })}
                    placeholder="e.g., 200 feet or 'Not sure'"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message / Additional Details
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3.5 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
