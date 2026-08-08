import './Home.css';
import NavBar from '../components/NavBar/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import LandingName from '../components/LandingName/LandingName';
import ContactSection from '../components/ContactSection/ContactSection';

function Home() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <LandingName />
        <AboutMe />
      </main>
      <ContactSection />
    </div>
  );
}

export default Home;
