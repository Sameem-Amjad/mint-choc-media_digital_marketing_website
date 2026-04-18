import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoWhite from '../../assets/logo/horizontal-white.svg';
import markPrimary from '../../assets/logo/mark-primary.svg';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 backdrop-blur-md ${
          scrolled
            ? 'bg-[#183019]/85 border-b border-[#04FF00]/20 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          <motion.a
            href="#top"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3"
          >
            <img src={logoWhite} alt="Mint Choc Media" className="h-9 hidden sm:block" />
            <img src={markPrimary} alt="Mint Choc Media" className="h-10 w-10 sm:hidden" />
          </motion.a>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className="group relative uppercase tracking-wider text-sm"
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 600,
                    color: '#EDFAF1',
                  }}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#04FF00] transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(4,255,0,0.45)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-block px-6 py-2.5 rounded-full uppercase tracking-wider text-sm"
            style={{
              backgroundColor: '#04FF00',
              color: '#183019',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 700,
            }}
          >
            Start a Campaign
          </motion.a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <span className="sr-only">Toggle menu</span>
            <motion.span
              className="absolute block h-0.5 w-7 bg-[#04FF00]"
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute block h-0.5 w-7 bg-[#04FF00]"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute block h-0.5 w-7 bg-[#04FF00]"
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#183019]/95 border-t border-[#04FF00]/20"
            >
              <ul className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block uppercase tracking-wider text-base"
                      style={{
                        fontFamily: 'Aileron, sans-serif',
                        fontWeight: 600,
                        color: '#EDFAF1',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center mt-4 px-6 py-3 rounded-full uppercase tracking-wider text-sm"
                    style={{
                      backgroundColor: '#04FF00',
                      color: '#183019',
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Start a Campaign
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
