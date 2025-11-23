import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { routes } from './utils/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ResidentialLighting from './pages/ResidentialLighting';
import Gallery from './pages/Gallery';
import Help from './pages/Help';
import ServiceAreas from './pages/ServiceAreas';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
import PrivacyPolicy from './pages/PrivacyPolicy';

const AppContent = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case routes.home:
        return <Home />;
      case routes.about:
        return <About />;
      case routes.residential:
        return <ResidentialLighting />;
      case routes.gallery:
        return <Gallery />;
      case routes.help:
        return <Help />;
      case routes.serviceAreas:
        return <ServiceAreas />;
      case routes.contact:
        return <Contact />;
      case routes.estimate:
        return <Estimate />;
      case routes.privacy:
        return <PrivacyPolicy />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
