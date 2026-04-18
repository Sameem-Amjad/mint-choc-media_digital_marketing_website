import { motion } from 'motion/react';
import { Github, Instagram, Linkedin, MapPin, Twitter } from 'lucide-react';
import logoWhite from '../../assets/logo/horizontal-white.svg';

const footerLinks = {
  services: ['Social Media Marketing', 'Content Creation', 'Video Production', 'Digital Ads Strategy'],
  company: ['About Us', 'Case Studies', 'Careers', 'Contact'],
  resources: ['Blog', 'Showreel', 'Press', 'Privacy Policy'],
};

const socials = [
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Github, label: 'GitHub' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#183019] pt-20 pb-8 overflow-hidden"
      style={{ borderTop: '4px solid #872441' }}
    >
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl"
        style={{ backgroundColor: '#04FF00', opacity: 0.08 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div variants={item}>
            <img src={logoWhite} alt="Mint Choc Media" className="h-12 mb-6" />
            <p
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 400,
                fontSize: '0.875rem',
                color: '#EDFAF1',
                opacity: 0.8,
                lineHeight: '1.6',
              }}
            >
              Your go-to digital marketing agency for irresistible social, content, video, and
              ads. Mint for the creativity, choc for the strategy. 🍃🍫
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=85+Great+Portland+Street+London+W1W+7LT"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex items-start gap-3 p-4 rounded-2xl transition-colors duration-300"
              style={{
                backgroundColor: 'rgba(4,255,0,0.05)',
                border: '1px solid rgba(4,255,0,0.2)',
              }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-300 group-hover:bg-[#04FF00]"
                style={{ backgroundColor: 'rgba(4,255,0,0.15)' }}
              >
                <MapPin
                  size={16}
                  strokeWidth={2.2}
                  className="text-[#04FF00] group-hover:text-[#183019] transition-colors"
                />
              </div>
              <div>
                <div
                  className="uppercase tracking-widest text-[10px] mb-1"
                  style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
                >
                  Studio
                </div>
                <div
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    color: '#EDFAF1',
                    lineHeight: '1.45',
                  }}
                >
                  85 Great Portland Street
                  <br />
                  West End, London W1W 7LT, GB
                </div>
              </div>
            </a>

            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -4, backgroundColor: '#04FF00' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="group w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{ borderColor: '#04FF00' }}
                >
                  <Icon
                    size={18}
                    className="text-[#04FF00] group-hover:text-[#183019] transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {(['services', 'company', 'resources'] as const).map((group) => (
            <motion.div key={group} variants={item}>
              <h4
                className="mb-4 uppercase"
                style={{
                  fontFamily: 'Dunbar, sans-serif',
                  fontWeight: 800,
                  fontSize: '1rem',
                  color: '#04FF00',
                  letterSpacing: '0.05em',
                }}
              >
                {group}
              </h4>
              <ul className="space-y-2">
                {footerLinks[group].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-block relative group"
                      style={{
                        fontFamily: 'Aileron, sans-serif',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        color: '#EDFAF1',
                        opacity: 0.8,
                      }}
                    >
                      <span className="transition-colors duration-200 group-hover:text-[#04FF00]">
                        {link}
                      </span>
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#04FF00] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={item}
          className="pt-8 border-t-2"
          style={{ borderColor: '#04FF00' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 400,
                fontSize: '0.875rem',
                color: '#EDFAF1',
                opacity: 0.6,
              }}
            >
              © {currentYear} Mint Choc Media. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 500,
                fontSize: '0.875rem',
                color: '#EDFAF1',
                opacity: 0.8,
              }}
            >
              Crafted with <span style={{ color: '#872441' }}>♥</span> for brands that want to stand out.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
