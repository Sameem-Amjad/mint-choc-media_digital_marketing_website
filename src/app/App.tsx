import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PerformanceShowcase } from './components/PerformanceShowcase';
import { LeadForm } from './components/LeadForm';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });

  return (
    <div className="min-h-screen bg-[#183019] scroll-smooth">
      <motion.div
        aria-hidden
        style={{ scaleX: progress, transformOrigin: '0% 50%' }}
        className="fixed top-0 left-0 right-0 h-1 z-[60]"
      >
        <div className="h-full w-full" style={{ backgroundColor: '#04FF00' }} />
      </motion.div>

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <PerformanceShowcase />
      <Testimonials />
      <LeadForm />
      <Footer />
    </div>
  );
}
