import { useEffect } from 'react';
import { Mail, Phone, CheckCircle, MapPin } from 'lucide-react';

const Estimate = () => {
  useEffect(() => {
    // Load Jobber form script
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'b6f7d3b2-32ea-430e-b6a2-093064933cc6-2030236');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/b6f7d3b2-32ea-430e-b6a2-093064933cc6/public/work_request/embedded_work_request_form?form_id=2030236');
    script.async = true;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                Get Your Free Estimate
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-md">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Share a few details about your property and we'll provide a tailored quote for your permanent LED lighting project
                </p>
                <div id="b6f7d3b2-32ea-430e-b6a2-093064933cc6-2030236"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-gray-50 rounded-xl p-8 border border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Prefer to Talk Now?
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
                  <MapPin className="w-6 h-6 text-primary-600 mr-2" />
                  Service Areas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Calgary + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Edmonton + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Lethbridge + Surrounding
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    Okanagan Area
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      1
                    </span>
                    We'll review your request within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      2
                    </span>
                    Schedule a convenient time for an on-site assessment
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
                      3
                    </span>
                    Provide a detailed quote with no pressure
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-600 text-white font-bold text-xs mr-3 flex-shrink-0 mt-0.5">
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

export default Estimate;

