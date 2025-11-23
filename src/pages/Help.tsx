import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';
import type { FAQ } from '../types';

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: 'How long does a typical installation take?',
      answer: 'Most residential installations are completed within 4-8 hours, depending on the size and complexity of your roofline. Our professional contractors work efficiently while maintaining the highest quality standards. We schedule installations at your convenience and complete the full setup, including app configuration and tutorial, in a single visit.'
    },
    {
      question: 'What is the lifespan of EmberBright LED lights?',
      answer: 'Our premium LED bulbs are rated for approximately 50,000 hours of operation. At an average usage of 6 hours per day, this translates to over 20 years of reliable performance. The entire system, including the track and controller, is engineered for long-term durability in Canadian climate conditions.'
    },
    {
      question: 'Are the lights truly weatherproof?',
      answer: 'Yes. Our LED bulbs carry an IP68 waterproof rating, the highest standard for outdoor lighting. They include surge protection and UV protection, and are designed to operate flawlessly in extreme temperatures from -40°C to 60°C. The anodized and powder-coated aluminum track provides additional protection for all wiring and connections.'
    },
    {
      question: 'How do I control the lights?',
      answer: 'You control your EmberBright system through our intuitive mobile app, available for iOS and Android. The app gives you access to over 16 million colours, 1000+ pre-made patterns, custom pattern creation, scheduling, and automation. You can also integrate the system with Amazon Alexa or Google Home for voice control.'
    },
    {
      question: 'Can I use the lights year-round?',
      answer: 'Absolutely. EmberBright systems are designed for year-round use. While many customers use them for holidays and special events, the lights are equally perfect as elegant architectural accent lighting for everyday use. The low-profile, colour-matched track ensures a discreet appearance by day, while delivering stunning illumination at night.'
    },
    {
      question: 'What happens if a bulb fails?',
      answer: 'While our bulbs are exceptionally durable, individual bulbs can be replaced if needed. The system is designed for easy maintenance, and replacement bulbs are readily available. We provide ongoing support throughout the life of your system, and our warranty covers manufacturing defects. Simply contact us if you experience any issues.'
    },
    {
      question: 'What warranty coverage is included?',
      answer: 'EmberBright systems come with comprehensive warranty coverage for both materials and workmanship. Specific warranty terms are provided with your installation and vary based on components. Our commitment extends beyond warranty periods with responsive customer support and service throughout the lifespan of your system.'
    },
    {
      question: 'How much power do the lights consume?',
      answer: 'Each LED bulb consumes approximately 0.96 watts. For a typical residential installation of 200 bulbs running 6 hours per day, the monthly electricity cost is roughly $5-8, depending on your local rates. This makes EmberBright systems extremely energy-efficient compared to traditional incandescent holiday lights.'
    },
    {
      question: 'Will the track damage my soffit or fascia?',
      answer: 'No. Our trained contractors use proper installation techniques designed to protect your home. The low-profile track is securely mounted without causing damage to your soffit, fascia, or roofline. We take great care during installation to ensure both structural integrity and aesthetic quality.'
    },
    {
      question: 'Can patterns be customized for my home?',
      answer: 'Yes. During installation, our technicians perform a complete LED count specific to your system. This count is programmed into your controller, ensuring all patterns and animations are perfectly calibrated to your home\'s unique configuration. You can also create completely custom patterns in the app with individual LED control.'
    },
    {
      question: 'Do you service my area?',
      answer: 'EmberBright currently serves Calgary and surrounding areas, Edmonton and surrounding areas, Lethbridge and surrounding areas, and the Okanagan region. If you\'re unsure whether we service your specific location, please contact us directly to confirm availability.'
    },
    {
      question: 'How do I schedule an estimate?',
      answer: 'Scheduling a free estimate is easy. You can fill out our online contact form, call us at (403) 671-5625, or email info@emberbright.ca. We\'ll arrange a convenient time to assess your roofline, discuss your goals, and provide a detailed, transparent quote with no pressure.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Help & FAQ
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Find answers to common questions about EmberBright permanent LED lighting systems
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our team is here to help. Contact us for personalized answers and expert guidance on your permanent LED lighting project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(routes.contact)}
              className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="tel:4036715625"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
            >
              Call (403) 671-5625
            </a>
          </div>
          <p className="mt-8 text-gray-600">
            Email us at{' '}
            <a href="mailto:info@emberbright.ca" className="text-orange-600 hover:text-orange-700 font-semibold">
              info@emberbright.ca
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Help;
