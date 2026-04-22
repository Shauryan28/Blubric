import { Routes, Route } from 'react-router-dom';
import { SilkBackground } from './components/SilkBackground';
import PillNav from './components/PillNav';
import ScrollToTop from './components/ScrollToTop';
import MetallicText from './components/MetallicText';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

function App() {
  return (
    <>
      <ScrollToTop />
      <SilkBackground />
      <PillNav items={navItems} customLogo={<MetallicText text="BLUBRIC." fontSize={20} fontWeight="800" />} />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.7 }}>
        <p>BLUBRIC ensures all interactions and insights are strictly confidential. We value your privacy above all else.</p>
        <p style={{ marginTop: '0.5rem' }}>© {new Date().getFullYear()} BLUBRIC. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
