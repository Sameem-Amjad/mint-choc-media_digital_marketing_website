import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Heart, MessageCircle, Play, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import verticalLogo from '../../assets/logo/vertical-primary.svg';

const heroCards = [
  {
    src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=900',
    alt: 'Phone showing social content',
    tag: 'Reel',
    stat: '2.4M',
    statIcon: Play,
    rotate: -6,
    y: 0,
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900',
    alt: 'Content creators collaborating',
    tag: 'Campaign',
    stat: '184K',
    statIcon: Heart,
    rotate: 4,
    y: -24,
  },
  {
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=900',
    alt: 'Video production on set',
    tag: 'Shoot',
    stat: '9.1K',
    statIcon: MessageCircle,
    rotate: -3,
    y: 32,
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#183019]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(4,255,0,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(135,36,65,0.38), transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              'linear-gradient(rgba(4,255,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(4,255,0,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          aria-hidden
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ backgroundColor: '#04FF00', opacity: 0.18 }}
          animate={reduceMotion ? undefined : { x: [0, 50, -20, 0], y: [0, 40, -20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: '#872441', opacity: 0.35 }}
          animate={reduceMotion ? undefined : { x: [0, -60, 30, 0], y: [0, -30, 40, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full"
      >
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={item}
              className="flex items-center gap-4 mb-8"
            >
              <motion.div
                className="relative"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{ backgroundColor: '#04FF00', opacity: 0.35 }}
                />
                <img
                  src={verticalLogo}
                  alt="Mint Choc Media"
                  className="relative w-20 h-20"
                />
              </motion.div>
              <div
                className="uppercase tracking-[0.3em] text-xs"
                style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
              >
                Mint Choc Media
                <div
                  className="mt-1 normal-case tracking-wide"
                  style={{ color: '#EDFAF1', opacity: 0.7, fontWeight: 500 }}
                >
                  A social-first creative studio
                </div>
              </div>
            </motion.div>

            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border backdrop-blur-sm"
              style={{
                borderColor: 'rgba(4,255,0,0.4)',
                backgroundColor: 'rgba(4,255,0,0.06)',
                color: '#04FF00',
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={14} strokeWidth={2.5} />
              Mint · Creativity + Choc · Strategy
            </motion.span>

            <motion.h1
              variants={item}
              className="uppercase tracking-tight mb-6"
              style={{
                fontFamily: 'Dunbar, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.75rem, 8vw, 5.75rem)',
                lineHeight: '0.95',
                color: '#EDFAF1',
                letterSpacing: '-0.02em',
              }}
            >
              Marketing{' '}
              <span style={{ color: '#04FF00' }}>that sticks.</span>
              <br />
              <motion.span
                animate={reduceMotion ? undefined : { backgroundPosition: ['0% center', '200% center'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #FFEFBD 0%, #EDFAF1 50%, #FFEFBD 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                Irresistibly done.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mb-10 max-w-xl"
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
                color: '#EDFAF1',
                lineHeight: '1.65',
                opacity: 0.9,
              }}
            >
              We blend creativity (that&apos;s the mint 🍃) with effective strategy (the choc 🍫) to
              deliver bespoke social campaigns, scroll-stopping content, and video that people
              actually want to watch.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: '0 20px 50px -10px rgba(4,255,0,0.55)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: '#04FF00',
                  color: '#183019',
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Start a Campaign
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(4,255,0,0.08)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2"
                style={{
                  borderColor: 'rgba(4,255,0,0.7)',
                  color: '#04FF00',
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                See Our Work
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
              style={{
                fontFamily: 'Aileron, sans-serif',
                color: '#EDFAF1',
                opacity: 0.75,
                fontSize: '0.85rem',
              }}
            >
              <span className="uppercase tracking-[0.2em]" style={{ color: '#04FF00', fontWeight: 600 }}>
                Trusted by brands on
              </span>
              {['Instagram', 'TikTok', 'YouTube', 'Meta Ads'].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[520px]">
              {heroCards.map((card, i) => {
                const Icon = card.statIcon;
                const positions = ['left-0 top-6', 'left-1/2 -translate-x-1/2 top-0', 'right-0 top-16'];
                return (
                  <motion.div
                    key={card.tag}
                    initial={{ opacity: 0, y: 60, rotate: 0 }}
                    animate={{ opacity: 1, y: card.y, rotate: card.rotate }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ rotate: 0, y: card.y - 12, scale: 1.04, zIndex: 10 }}
                    className={`absolute w-56 ${positions[i]}`}
                  >
                    <motion.div
                      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                      transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                      className="rounded-[28px] overflow-hidden border-2 shadow-2xl"
                      style={{
                        borderColor: '#04FF00',
                        backgroundColor: '#EDFAF1',
                        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), 0 0 40px -10px rgba(4,255,0,0.2)',
                      }}
                    >
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <ImageWithFallback
                          src={card.src}
                          alt={card.alt}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(180deg, transparent 40%, rgba(24,48,25,0.85) 100%)',
                          }}
                        />
                        <span
                          className="absolute top-3 left-3 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]"
                          style={{
                            backgroundColor: '#04FF00',
                            color: '#183019',
                            fontFamily: 'Aileron, sans-serif',
                            fontWeight: 700,
                          }}
                        >
                          {card.tag}
                        </span>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <div
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md"
                            style={{
                              backgroundColor: 'rgba(237,250,241,0.15)',
                              color: '#EDFAF1',
                              fontFamily: 'Aileron, sans-serif',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                            }}
                          >
                            <Icon size={12} fill="#04FF00" color="#04FF00" />
                            {card.stat}
                          </div>
                          <span
                            className="uppercase tracking-widest text-[10px]"
                            style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
                          >
                            MCM
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
            style={{ borderColor: '#04FF00' }}
          >
            <motion.div
              className="w-1 h-3 rounded-full"
              style={{ backgroundColor: '#04FF00' }}
              animate={reduceMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
