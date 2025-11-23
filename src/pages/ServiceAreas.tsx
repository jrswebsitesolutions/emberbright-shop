import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const ServiceAreas = () => {
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceAreas = [
    {
      id: 'calgary',
      name: 'Calgary + Surrounding',
      description: 'Serving Calgary and all surrounding communities including Airdrie, Cochrane, Okotoks, Chestermere, and the broader Calgary region.',
      highlights: [
        'Fast response times for local service',
        'Familiar with Calgary building codes and regulations',
        'Extensive portfolio of Calgary-area installations',
        'Same-day estimates available in most areas'
      ]
    },
    {
      id: 'edmonton',
      name: 'Edmonton + Surrounding',
      description: 'Providing premium LED lighting throughout Edmonton and surrounding areas including Sherwood Park, St. Albert, Spruce Grove, Leduc, and the greater Edmonton region.',
      highlights: [
        'Experienced with Edmonton\'s climate conditions',
        'Local contractor network for prompt service',
        'Knowledge of regional architectural styles',
        'Efficient scheduling across the metro area'
      ]
    },
    {
      id: 'lethbridge',
      name: 'Lethbridge + Surrounding',
      description: 'Delivering exceptional permanent lighting solutions to Lethbridge and nearby communities throughout Southern Alberta.',
      highlights: [
        'Specialized experience in Southern Alberta climate',
        'Responsive service for Lethbridge homeowners',
        'Understanding of local weather patterns',
        'Dedicated support for the region'
      ]
    },
    {
      id: 'okanagan',
      name: 'Okanagan Area',
      description: 'Bringing EmberBright\'s premium permanent LED lighting to the beautiful Okanagan region, including Kelowna, Penticton, Vernon, and surrounding communities.',
      highlights: [
        'Experience with Okanagan architectural diversity',
        'Knowledge of BC building requirements',
        'Proven performance in Okanagan climate',
        'Growing presence across the region'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-primary-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where We Install
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Professional permanent LED lighting installation across Western Canadian communities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Regions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EmberBright Solutions proudly serves homeowners throughout Alberta and British Columbia with premium permanent outdoor lighting systems
            </p>
          </div>

          <div className="space-y-12">
            {serviceAreas.map((area, index) => (
              <div
                key={area.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <MapPin className="w-8 h-8 text-primary-600 mr-3" />
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <button
                    onClick={() => navigate(routes.contact)}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Request Estimate in This Area
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
                <div className={`bg-gray-50 rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Regional Advantages</h4>
                  <div className="space-y-3">
                    {area.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Local Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Climate Expertise</h3>
                  <p className="text-gray-600 text-sm">
                    Our contractors understand Western Canadian weather and select materials proven to perform in extreme conditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Rapid Response</h3>
                  <p className="text-gray-600 text-sm">
                    Local presence means faster estimates, quicker installations, and prompt service if you ever need support.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Regional Knowledge</h3>
                  <p className="text-gray-600 text-sm">
                    Familiarity with local building codes, architectural styles, and community standards ensures compliant, attractive installations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Community Investment</h3>
                  <p className="text-gray-600 text-sm">
                    Supporting local contractors and businesses strengthens the Western Canadian economy and builds lasting relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 lg:p-12 border border-primary-200 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Area?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We're continually expanding our service coverage throughout Western Canada. If your location isn't listed, contact us to inquire about availability or future service expansion to your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate(routes.contact)}
                className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a
                href="tel:4036715625"
                className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg"
              >
                Call (403) 671-5625
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-100 mb-8 leading-relaxed">
            Request your free estimate today and discover how EmberBright can transform your home with stunning permanent LED lighting
          </p>
          <button
            onClick={() => navigate(routes.contact)}
            className="px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center"
          >
            Get Your Free Estimate
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreas;
