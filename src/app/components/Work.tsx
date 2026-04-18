import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    alt: 'Lifestyle content for a beverage brand',
    brand: 'Sparkling Goods',
    category: 'Social Campaign',
    stat: '4.2M reach',
  },
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000',
    alt: 'Fashion reel production',
    brand: 'Aster Apparel',
    category: 'Reel Series',
    stat: '+180% follower growth',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    alt: 'Analytics and strategy',
    brand: 'Northwind Retail',
    category: 'Paid Strategy',
    stat: '5.6x ROAS',
  },
  {
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000',
    alt: 'Behind the scenes on a shoot',
    brand: 'Harbor Coffee',
    category: 'Brand Film',
    stat: '1.1M views',
    isVideo: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000',
    alt: 'Creator filming a tutorial',
    brand: 'Lumen Health',
    category: 'Creator Series',
    stat: '+62% engagement',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Ads performance dashboard',
    brand: 'Voltra Tech',
    category: 'Ad Strategy',
    stat: '-41% CAC',
  },
];

export function Work() {
  const loop = [...projects, ...projects];

  return (
    <section id="work" className="relative py-28 bg-[#183019] overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-20 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: '#872441', opacity: 0.25 }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-20 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: '#04FF00', opacity: 0.1 }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border"
              style={{
                borderColor: 'rgba(4,255,0,0.45)',
                backgroundColor: 'rgba(4,255,0,0.05)',
                color: '#04FF00',
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 600,
                fontSize: '0.7rem',
              }}
            >
              Recent Work
            </span>
            <h2
              className="uppercase"
              style={{
                fontFamily: 'Dunbar, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#EDFAF1',
                letterSpacing: '-0.01em',
              }}
            >
              Campaigns that <span style={{ color: '#04FF00' }}>scroll-stop.</span>
            </h2>
          </div>
          <p
            className="max-w-md"
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 500,
              fontSize: '1.05rem',
              color: '#EDFAF1',
              opacity: 0.8,
              lineHeight: '1.65',
            }}
          >
            A taste of the brands we&apos;ve worked with — every piece crafted to feel native to its
            platform and magnetic to its audience.
          </p>
        </motion.div>
      </div>

      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((p, i) => (
            <motion.div
              key={`${p.brand}-${i}`}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              className="group relative w-72 md:w-80 shrink-0 rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(4,255,0,0.2)',
                boxShadow: '0 30px 60px -30px rgba(0,0,0,0.7)',
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(24,48,25,0.15) 0%, rgba(24,48,25,0) 35%, rgba(24,48,25,0.9) 100%)',
                  }}
                />
                {p.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#04FF00' }}
                    >
                      <Play size={22} color="#183019" fill="#183019" />
                    </div>
                  </div>
                )}

                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]"
                  style={{
                    backgroundColor: 'rgba(237,250,241,0.15)',
                    backdropFilter: 'blur(8px)',
                    color: '#EDFAF1',
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  {p.category}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="uppercase tracking-widest text-[10px] mb-1"
                    style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
                  >
                    {p.stat}
                  </div>
                  <div
                    className="uppercase"
                    style={{
                      fontFamily: 'Dunbar, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: '#FFEFBD',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {p.brand}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
