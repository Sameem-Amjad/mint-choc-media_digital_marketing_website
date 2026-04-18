import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Our reels were stuck at a few thousand views. Six weeks with Mint Choc Media and we were averaging 400K+, with a 5.6x ROAS on the paid side. They genuinely get social.',
    name: 'Amara Okafor',
    role: 'VP of Growth, Northwind Retail',
    initials: 'AO',
  },
  {
    quote:
      'They walked in with creative that felt native to TikTok on day one. Our follower count nearly tripled in a quarter — and, more importantly, so did revenue.',
    name: 'Daniel Reyes',
    role: 'Head of Marketing, Harbor Coffee',
    initials: 'DR',
  },
  {
    quote:
      'Mint + choc is the right metaphor. Fun, warm creative backed by strategy that moves the numbers. A genuine extension of our brand team.',
    name: 'Priya Shah',
    role: 'Head of Brand, Lumen Health',
    initials: 'PS',
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-28 bg-[#183019] overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{ backgroundColor: '#04FF00', opacity: 0.08 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 uppercase tracking-[0.3em] border"
            style={{
              borderColor: '#04FF00',
              color: '#04FF00',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          >
            Client Love
          </span>
          <h2
            className="uppercase"
            style={{
              fontFamily: 'Dunbar, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FFEFBD',
              letterSpacing: '-0.01em',
            }}
          >
            What Our <span style={{ color: '#04FF00' }}>Clients</span> Say
          </h2>
        </motion.div>

        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full p-10 md:p-14 text-center rounded-3xl"
              style={{
                backgroundColor: 'rgba(237,250,241,0.04)',
                border: '1px solid rgba(4,255,0,0.25)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 30px 70px -30px rgba(0,0,0,0.6)',
              }}
            >
              <Quote
                size={48}
                color="#04FF00"
                className="mx-auto mb-6"
                strokeWidth={2.2}
              />
              <p
                className="mb-8"
                style={{
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(1.125rem, 2.2vw, 1.5rem)',
                  color: '#EDFAF1',
                  lineHeight: '1.6',
                }}
              >
                {current.quote}
              </p>

              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#04FF00',
                    color: '#183019',
                    fontFamily: 'Dunbar, sans-serif',
                    fontWeight: 800,
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {current.initials}
                </div>
                <div className="text-left">
                  <div
                    className="uppercase"
                    style={{
                      fontFamily: 'Dunbar, sans-serif',
                      fontWeight: 800,
                      color: '#FFEFBD',
                      fontSize: '1rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {current.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Aileron, sans-serif',
                      color: '#EDFAF1',
                      fontSize: '0.875rem',
                      opacity: 0.75,
                    }}
                  >
                    {current.role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-1 mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <Star size={18} fill="#04FF00" color="#04FF00" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
              style={{
                width: i === index ? 40 : 14,
                backgroundColor: i === index ? '#04FF00' : 'rgba(237,250,241,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
