import {
  Smartphone, CheckCircle, Calendar, Zap, Palette, Shield,
  Clock, Home, Sparkles, PartyPopper, Trophy, ArrowRight
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const ResidentialLighting = () => {
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const steps = [
    {
      number: 1,
      title: 'Free Estimate',
      description: 'We assess your roofline, discuss your goals, and provide a detailed, transparent quote with no pressure.'
    },
    {
      number: 2,
      title: 'Custom Selection',
      description: 'Choose track colours that match your soffit and trim for a seamless, discreet daytime appearance.'
    },
    {
      number: 3,
      title: 'Professional Installation',
      description: 'Our trained contractors install your system with precision, performing a complete LED count for perfect patterns.'
    },
    {
      number: 4,
      title: 'App Setup & Tutorial',
      description: 'We walk you through the intuitive mobile app, showing you how to create patterns and set automations.'
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'Enjoy responsive customer service and long-term support backed by comprehensive warranty coverage.'
    }
  ];

  const appFeatures = [
    'Access over 16 million colour options with precise RGB code input',
    'Save unlimited favourite colours and pattern combinations',
    'Browse 1000+ pre-made patterns for instant activation',
    'Create custom patterns with individual LED control',
    'Set daily, weekly, and yearly automation schedules',
    'Integrate with Amazon Alexa and Google Home',
    'Apply 24 unique dynamic effects including twinkles and gradients',
    'Remote control from anywhere with internet access'
  ];

  const technicalSpecs = [
    {
      category: 'LED Bulb Performance',
      specs: [
        { label: 'Rated Lifespan', value: '~50,000 hours (20+ years at 6 hrs/day)' },
        { label: 'Waterproof Rating', value: 'IP68 with surge and UV protection' },
        { label: 'Operating Temperature', value: '-40°C to 60°C' },
        { label: 'Power Consumption', value: '~0.96W per bulb' },
        { label: 'Brightness Output', value: '100-120 lumens per bulb' },
        { label: 'Safety Certifications', value: 'UL and CE certified' }
      ]
    },
    {
      category: 'Track System Quality',
      specs: [
        { label: 'Material', value: 'Anodized and powder-coated aluminum' },
        { label: 'Finish Options', value: 'Colour-matched to your soffit/trim' },
        { label: 'Installation', value: 'Custom-fit to unique rooflines' },
        { label: 'Wiring', value: 'Fully concealed within track' },
        { label: 'Profile', value: 'Low-profile, discreet design' },
        { label: 'Durability', value: 'Built for Canadian climate extremes' }
      ]
    }
  ];

  const useCases = [
    {
      icon: Sparkles,
      title: 'Holiday Celebrations',
      description: 'Christmas, Halloween, Thanksgiving, Canada Day, and all your favourite holidays with pre-programmed patterns.'
    },
    {
      icon: Trophy,
      title: 'Sports Events',
      description: 'Show team spirit with custom colour schemes for Flames, Oilers, Stampeders, and your favourite teams.'
    },
    {
      icon: Home,
      title: 'Architectural Accent',
      description: 'Elegant everyday lighting that enhances your home\'s architecture and improves safety with soft illumination.'
    },
    {
      icon: PartyPopper,
      title: 'Special Occasions',
      description: 'Birthdays, anniversaries, graduations, weddings, and celebrations with personalized colour combinations.'
    }
  ];

  const benefits = [
    'Eliminate the hassle and danger of climbing ladders to hang seasonal lights',
    'Save time with automated scheduling for all your favourite occasions',
    'Increase property value with premium permanent lighting infrastructure',
    'Reduce waste by replacing disposable seasonal decorations',
    'Enjoy peace of mind with professional installation and long-term warranty',
    'Experience unmatched versatility with millions of colour options'
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Residential LED Lighting
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              Transform your home with low-profile permanent LED lighting designed for year-round beauty, complete automation, and exceptional longevity
            </p>
            <button
              onClick={() => navigate(routes.contact)}
              className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center"
            >
              Request Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation to long-term support, we make the process seamless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                App & Automation Explained
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mobile application puts complete control at your fingertips. Whether you're at home or away, you can instantly change colours, activate patterns, or adjust schedules with just a few taps.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The app's intuitive interface makes it easy for anyone to create stunning displays. Browse thousands of pre-made patterns, or design your own with individual LED control and dynamic effects like twinkling, gradients, and marquee styles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Set it and forget it with powerful automation. Program your lights for holidays, birthdays, game days, and special events. Your home will automatically transform to match the occasion without any manual intervention.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Smartphone className="w-6 h-6 mr-3 text-orange-600" />
                Key App Capabilities
              </h3>
              <div className="space-y-3">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium components engineered for exceptional performance in Canadian conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {technicalSpecs.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-start border-b border-gray-200 pb-3 last:border-0">
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">{spec.label}</span>
                      </div>
                      <div className="flex-1 text-right">
                        <span className="text-gray-700">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Precision Installation Process</h3>
            <p className="text-gray-700 leading-relaxed">
              During installation, our technicians perform a complete LED count for your specific system. This count is programmed into your controller, ensuring that all patterns and animations are perfectly calibrated to your home's unique configuration. This attention to detail guarantees optimal visual impact and seamless pattern transitions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Endless Use Cases
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From holidays to everyday elegance, EmberBright adapts to every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Permanent LED Lighting?
            </h2>
            <p className="text-lg text-gray-600">
              The smart, safe, and sustainable choice for modern homeowners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-gray-50 rounded-lg p-6 hover:bg-orange-50 transition-colors">
                <CheckCircle className="w-6 h-6 text-orange-600 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Home Lighting?
          </h2>
          <p className="text-lg text-orange-100 mb-8 leading-relaxed">
            Request a free estimate today and discover how EmberBright can transform your property with stunning permanent LED lighting
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(routes.contact)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Request Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="tel:4036715625"
              className="w-full sm:w-auto px-8 py-4 bg-orange-800 text-white text-lg font-semibold rounded-lg hover:bg-orange-900 transition-all shadow-xl hover:shadow-2xl"
            >
              Call (403) 671-5625
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialLighting;
