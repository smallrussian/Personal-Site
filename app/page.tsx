import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import { Navbar } from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default Home;
