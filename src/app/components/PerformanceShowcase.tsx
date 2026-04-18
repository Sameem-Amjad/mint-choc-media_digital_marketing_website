import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';
import { Eye, Film, Heart, TrendingUp } from 'lucide-react';

type Metric = {
  Icon: typeof Eye;
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  description: string;
};

const metrics: Metric[] = [
  { Icon: Eye, value: 250, suffix: 'M+', label: 'Views Generated', description: 'Across social & video campaigns' },
  { Icon: Heart, value: 3.4, suffix: 'x', decimals: 1, label: 'Avg Engagement Lift', description: 'Vs client baseline pre-MCM' },
  { Icon: Film, value: 150, suffix: '+', label: 'Brands Served', description: 'From startups to household names' },
  { Icon: TrendingUp, value: 4.8, suffix: 'x', decimals: 1, label: 'Avg ROAS', description: 'On paid social campaigns' },
];

const platforms = [
  'Instagram',
  'TikTok',
  'YouTube',
  'Meta Ads',
  'LinkedIn',
  'X',
  'Snapchat',
  'Pinterest',
  'Reels',
  'Shorts',
  'Threads',
  'YouTube Ads',
];

function AnimatedNumber({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  inView,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const rounded = useTransform(spring, (latest) => `${prefix}${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (inView) motionValue.set(to);
    else motionValue.set(0);
  }, [inView, to, motionValue]);

  return <motion.span>{rounded}</motion.span>;
}

export function PerformanceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} id="results" className="relative py-28 bg-[#EDFAF1] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #183019 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full uppercase tracking-[0.3em]"
            style={{
              backgroundColor: '#183019',
              color: '#04FF00',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 600,
              fontSize: '0.7rem',
            }}
          >
            Results
          </span>
          <h2
            className="uppercase mb-6"
            style={{
              fontFamily: 'Dunbar, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#183019',
              letterSpacing: '-0.01em',
            }}
          >
            Content that <span style={{ color: '#04FF00' }}>performs.</span>
          </h2>
          <p
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 500,
              fontSize: '1.2rem',
              color: '#183019',
              maxWidth: '42rem',
              margin: '0 auto',
              opacity: 0.85,
            }}
          >
            We don&apos;t just make pretty posts. We build creative that moves metrics —
            engagement, reach, leads, revenue.
          </p>
        </motion.div>

        <div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.Icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 rounded-3xl overflow-hidden border border-[#183019]/10"
                style={{
                  boxShadow:
                    '0 10px 30px -15px rgba(24,48,25,0.25), 0 2px 6px -2px rgba(24,48,25,0.08)',
                }}
              >
                <motion.div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 0%, rgba(4,255,0,0.12), transparent 70%)',
                  }}
                />
                <div
                  className="relative inline-flex items-center justify-center w-12 h-12 mb-5 rounded-2xl"
                  style={{ backgroundColor: '#183019' }}
                >
                  <Icon size={22} strokeWidth={2.2} color="#04FF00" />
                </div>

                <div
                  className="relative mb-2"
                  style={{
                    fontFamily: 'Dunbar, sans-serif',
                    fontWeight: 800,
                    fontSize: '2.75rem',
                    color: '#183019',
                    lineHeight: '1',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedNumber
                    to={metric.value}
                    decimals={metric.decimals ?? 0}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    inView={metricsInView}
                  />
                </div>
                <div
                  className="relative mb-2"
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#183019',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {metric.label}
                </div>
                <p
                  className="relative"
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    color: '#183019',
                    opacity: 0.65,
                  }}
                >
                  {metric.description}
                </p>
                <motion.span
                  aria-hidden
                  className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: '#04FF00' }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#183019] p-12 rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 30px 60px -30px rgba(0,0,0,0.5)' }}
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: '#04FF00', opacity: 0.15 }}
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: '#872441', opacity: 0.3 }}
          />

          <h3
            className="relative text-center mb-10 uppercase"
            style={{
              fontFamily: 'Dunbar, sans-serif',
              fontWeight: 800,
              fontSize: '1.75rem',
              color: '#04FF00',
              letterSpacing: '0.05em',
            }}
          >
            Where Your Audience Lives
          </h3>

          <div
            className="relative overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
            }}
          >
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              {[...platforms, ...platforms].map((p, index) => (
                <div
                  key={`${p}-${index}`}
                  className="px-6 py-3 rounded-full border whitespace-nowrap"
                  style={{
                    borderColor: 'rgba(4,255,0,0.4)',
                    backgroundColor: 'rgba(4,255,0,0.05)',
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: '#EDFAF1',
                  }}
                >
                  {p}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 text-center"
        >
          <div
            className="max-w-4xl mx-auto p-12 relative rounded-3xl"
            style={{
              backgroundColor: '#872441',
              borderLeft: '6px solid #04FF00',
              boxShadow: '0 30px 60px -30px rgba(135,36,65,0.6)',
            }}
          >
            <blockquote
              className="relative"
              style={{
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                color: '#FFEFBD',
                lineHeight: '1.5',
                fontStyle: 'italic',
              }}
            >
              <span className="block mb-4" style={{ fontSize: '4rem', lineHeight: '1', color: '#04FF00' }}>
                &ldquo;
              </span>
              Fun, memorable, refreshingly delicious. Your brand is always the star of the show.
              <span className="block mt-4" style={{ fontSize: '4rem', lineHeight: '1', color: '#04FF00' }}>
                &rdquo;
              </span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
