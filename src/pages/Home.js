import './Home.css';
import NavBar from '../components/NavBar/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import LandingName from '../components/LandingName/LandingName';
import CertificationsCarousel from '../components/CertificationsCarousel/CertificationsCarousel';
import ContactSection from '../components/ContactSection/ContactSection';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <LandingName />
      <CertificationsCarousel />
      <AboutMe />
      <ContactSection />
    </div>
  );
}

export default Home;

