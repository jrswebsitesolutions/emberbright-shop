import { CheckCircle, Users, Shield, Heart, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const About = () => {
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Heart,
      title: 'Honesty',
      description: 'We believe in transparent communication and straightforward pricing with no hidden costs or surprises.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear expectations, realistic timelines, and open dialogue throughout your entire project journey.'
    },
    {
      icon: Users,
      title: 'Hard Work',
      description: 'Dedication to exceptional craftsmanship and meticulous attention to detail in every installation.'
    }
  ];

  const promises = [
    'Clear, responsive communication at every step of your project',
    'Reliable timelines with realistic scheduling and prompt installations',
    'Professional crews with rigorous training and safety standards',
    'Long-term support and service well beyond your installation date',
    'Quality assurance with thorough inspections and testing',
    'Respect for your property with careful, clean workmanship'
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              About EmberBright Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Founded in Calgary by two driven entrepreneurs committed to transforming outdoor lighting across Western Canada
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              EmberBright Solutions was founded in Calgary, Alberta, by two entrepreneurs with a shared vision: to make high-quality permanent outdoor lighting accessible, affordable, and stress-free for homeowners and businesses throughout Western Canada.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We recognized a significant gap in the market for premium permanent LED lighting solutions that could withstand the demanding Canadian climate while delivering exceptional aesthetic results. Our mission is to provide lighting systems that enhance property value, improve curb appeal, and create memorable experiences for years to come.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every decision we make is guided by three core principles: honesty, transparency, and hard work. These values shape how we serve our customers, partner with contractors, and source our materials.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Local Sourcing & Local Contractors
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We take pride in supporting Alberta's economy by sourcing materials locally from trusted Albertan businesses whenever possible. This commitment ensures we can maintain strict quality control while supporting our community.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our products are specifically chosen to excel in Canadian weather conditions. From extreme cold to intense summer heat, every component is tested and proven to perform reliably in the challenging Western Canadian climate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We partner exclusively with vetted local contractors who share our commitment to excellence. Each contractor undergoes rigorous training in our installation standards, safety protocols, and customer service expectations. This ensures every EmberBright installation meets our exacting quality standards.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Local Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Faster response times for service and support</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Contractors familiar with regional building codes</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Supporting the Western Canadian economy</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Products proven in Canadian climate conditions</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Accountability and long-term relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Promise to You
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              What you can expect when you choose EmberBright Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-start bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 leading-relaxed">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg text-primary-100 mb-8 leading-relaxed">
            Let's discuss how EmberBright can enhance your home with beautiful, long-lasting permanent LED lighting
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(routes.contact)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Start Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a
              href="tel:4036715625"
              className="w-full sm:w-auto px-8 py-4 bg-primary-800 text-white text-lg font-semibold rounded-lg hover:bg-primary-900 transition-all shadow-xl hover:shadow-2xl"
            >
              Call (403) 671-5625
            </a>
          </div>
          <p className="mt-8 text-sm text-primary-100">
            <strong>Email:</strong>{' '}
            <a href="mailto:info@emberbright.ca" className="underline hover:text-white transition-colors">
              info@emberbright.ca
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
