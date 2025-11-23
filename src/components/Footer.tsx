import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { routes } from '../utils/navigation';

const Footer = () => {
  const { setCurrentPage } = useNavigation();

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLocations = [
    'Calgary + Surrounding',
    'Edmonton + Surrounding',
    'Lethbridge + Surrounding',
    'Okanagan Area'
  ];

  const footerLinks = [
    { label: 'About', path: routes.about },
    { label: 'Residential Lighting', path: routes.residential },
    { label: 'Gallery', path: routes.gallery },
    { label: 'Help', path: routes.help },
    { label: 'Service Areas', path: routes.serviceAreas },
    { label: 'Privacy Policy', path: routes.privacy }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">EmberBright Solutions</h3>
            <p className="text-sm leading-relaxed">
              Premium permanent outdoor LED lighting systems designed to transform your home with stunning illumination, year-round automation, and exceptional durability.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Service Locations</h4>
            <ul className="space-y-2">
              {serviceLocations.map((location) => (
                <li key={location} className="flex items-start">
                  <MapPin className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-orange-500" />
                  <span className="text-sm">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@emberbright.ca"
                  className="flex items-center text-sm hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>info@emberbright.ca</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:4036715625"
                  className="flex items-center text-sm hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>(403) 671-5625</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © 2025 EmberBright Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
