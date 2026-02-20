import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import HeroSequence from './components/HeroSequence';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const marqueeItems = [
  'UI/UX Design', 'Graphic Design', 'Figma', 'Blender 3D',
  'Web Development', 'Prototyping', 'User Research', 'AI Engineering',
  'Branding', 'Visual Design',
];

function App() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <Navbar />
      <main>
        <HeroSequence />
        <Marquee items={marqueeItems} speed={35} />
        <About />
        <Skills />
        <Marquee
          items={['Oilku', 'Nusaquest', 'SI TA', 'More Coming Soon']}
          speed={25}
          separator="—"
        />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
