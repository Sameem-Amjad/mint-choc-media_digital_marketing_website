import { motion } from 'motion/react';
import { ArrowUpRight, Camera, Film, Megaphone, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    Icon: Megaphone,
    title: 'Social Media Marketing',
    description:
      'Full-service social: strategy, content calendars, community management, and organic growth that turns scrollers into fans.',
    features: ['Content strategy', 'Community management', 'Growth + analytics'],
    image:
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1200',
    tag: 'Organic',
  },
  {
    Icon: Camera,
    title: 'Content Creation',
    description:
      'Photo, reels, graphics, and copy crafted to stop thumbs and spark conversation. Made for every format, every feed.',
    features: ['Short-form video', 'Photography', 'Design + copy'],
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
    tag: 'Creative',
    highlight: true,
  },
  {
    Icon: Film,
    title: 'Video Production',
    description:
      'From concept to edit bay: scripts, shoots, post, and motion. Broadcast-quality work built for a vertical world.',
    features: ['Brand films', 'Ad spots', 'Reels + Shorts'],
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
    tag: 'Film',
  },
  {
    Icon: Target,
    title: 'Digital Advertising Strategy',
    description:
      'Paid social that actually pays off. Audience targeting, creative testing, and ROAS-driven optimisation across platforms.',
    features: ['Meta + TikTok Ads', 'Audience targeting', 'Creative testing'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    tag: 'Paid',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EDFAF1] via-[#183019] to-[#183019]" />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: '#04FF00', opacity: 0.12 }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: '#872441', opacity: 0.25 }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border backdrop-blur-sm"
            style={{
              borderColor: 'rgba(4,255,0,0.45)',
              backgroundColor: 'rgba(4,255,0,0.06)',
              color: '#04FF00',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 600,
              fontSize: '0.7rem',
            }}
          >
            Services
          </span>
          <h2
            className="uppercase mb-6"
            style={{
              fontFamily: 'Dunbar, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#04FF00',
              letterSpacing: '-0.01em',
            }}
          >
            Our Flavours
          </h2>
          <p
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 500,
              fontSize: '1.2rem',
              color: '#EDFAF1',
              maxWidth: '44rem',
              margin: '0 auto',
              opacity: 0.9,
            }}
          >
            Four scoops of marketing goodness — mixed to taste, tailored to your brand, always
            a perfect lick.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                className="group relative rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: service.highlight ? '#872441' : '#FFFFFF',
                  border: service.highlight
                    ? '1px solid rgba(4,255,0,0.4)'
                    : '1px solid rgba(24,48,25,0.12)',
                  boxShadow: service.highlight
                    ? '0 30px 60px -20px rgba(135,36,65,0.5), 0 0 40px -10px rgba(4,255,0,0.15)'
                    : '0 20px 50px -20px rgba(0,0,0,0.35), 0 4px 10px -2px rgba(0,0,0,0.1)',
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(24,48,25,0.2) 0%, rgba(24,48,25,0) 40%, rgba(24,48,25,0.6) 100%)',
                    }}
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]"
                    style={{
                      backgroundColor: '#04FF00',
                      color: '#183019',
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {service.tag}
                  </span>
                  <motion.div
                    className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md"
                    style={{ backgroundColor: 'rgba(237,250,241,0.2)' }}
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={20} color="#EDFAF1" strokeWidth={2.4} />
                  </motion.div>
                </div>

                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                      style={{ backgroundColor: service.highlight ? '#04FF00' : '#183019' }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={2.2}
                        color={service.highlight ? '#183019' : '#04FF00'}
                      />
                    </div>
                    <h3
                      className="uppercase"
                      style={{
                        fontFamily: 'Dunbar, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.4rem',
                        color: service.highlight ? '#04FF00' : '#183019',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className="mb-6"
                    style={{
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: 400,
                      fontSize: '1rem',
                      color: service.highlight ? '#FFEFBD' : '#183019',
                      lineHeight: '1.6',
                      opacity: service.highlight ? 1 : 0.85,
                    }}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: service.highlight
                            ? 'rgba(4,255,0,0.15)'
                            : 'rgba(24,48,25,0.06)',
                          color: service.highlight ? '#EDFAF1' : '#183019',
                          fontFamily: 'Aileron, sans-serif',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full uppercase tracking-[0.3em] text-[10px]"
              style={{
                backgroundColor: 'rgba(4,255,0,0.15)',
                color: '#04FF00',
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 600,
              }}
            >
              The Founder
            </span>
            <h3
              className="uppercase mb-6"
              style={{
                fontFamily: 'Dunbar, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                color: '#04FF00',
                letterSpacing: '0.02em',
                lineHeight: '1.05',
              }}
            >
              Led by Robert Steveson.
            </h3>
            <p
              className="mb-6"
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 400,
                fontSize: '1.1rem',
                color: '#EDFAF1',
                lineHeight: '1.75',
              }}
            >
              Robert founded Mint Choc Media to build the agency he&apos;d always wanted to hire —
              one that takes creative as seriously as strategy, and treats every client like the
              star of the show.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 400,
                fontSize: '1.1rem',
                color: '#EDFAF1',
                lineHeight: '1.75',
                opacity: 0.85,
              }}
            >
              Alongside Robert sits a tight-knit crew of strategists, editors, directors, and
              social-native creatives. From first brief to final edit, we work
              shoulder-to-shoulder with your team — fast, collaborative, and a little bit
              obsessed with the details.
            </p>

            <blockquote
              className="pl-5"
              style={{
                borderLeft: '3px solid #04FF00',
                fontFamily: 'Aileron, sans-serif',
                fontStyle: 'italic',
                color: '#FFEFBD',
                fontSize: '1rem',
                lineHeight: '1.6',
              }}
            >
              &ldquo;Great work is the mint and the choc together — creativity without strategy
              is a wasted ad spend; strategy without creativity is a wasted feed.&rdquo;
              <div
                className="mt-3 not-italic uppercase tracking-widest text-[10px]"
                style={{ color: '#04FF00', fontWeight: 700 }}
              >
                — Robert Steveson, Founder &amp; CEO
              </div>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl mx-auto w-full max-w-md"
            style={{
              border: '1px solid rgba(4,255,0,0.3)',
              boxShadow:
                '0 30px 70px -20px rgba(0,0,0,0.55), 0 0 50px -15px rgba(4,255,0,0.25)',
              backgroundColor: '#183019',
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ImageWithFallback
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGDq9txFSRCbQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722041112477?e=2147483647&v=beta&t=16YS5dRzmAUvIlFj_ZSMMInH9L9pdJQqdAG5siHPXIY"
                  alt="Robert Steveson, Founder & CEO of Mint Choc Media"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(24,48,25,0.15) 0%, rgba(24,48,25,0) 35%, rgba(24,48,25,0.92) 100%)',
                }}
              />

              <span
                className="absolute top-4 left-4 px-3 py-1 rounded-full uppercase tracking-widest text-[10px]"
                style={{
                  backgroundColor: '#04FF00',
                  color: '#183019',
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 700,
                }}
              >
                Founder &amp; CEO
              </span>

              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="uppercase tracking-widest text-[10px] mb-1"
                  style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
                >
                  Leading the studio
                </div>
                <div
                  style={{
                    fontFamily: 'Dunbar, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.65rem',
                    color: '#FFEFBD',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    lineHeight: '1.1',
                  }}
                >
                  Robert Steveson
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: '#EDFAF1',
                    opacity: 0.8,
                  }}
                >
                  Mint Choc Media · London, UK
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
