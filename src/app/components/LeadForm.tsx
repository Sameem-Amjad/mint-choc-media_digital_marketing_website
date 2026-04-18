import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Clock3, Mail, MapPin, Send } from 'lucide-react';

const fields: Array<{
  name: 'name' | 'email' | 'company' | 'message';
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
  placeholder?: string;
}> = [
  { name: 'name', label: 'Full Name *', type: 'text', required: true, placeholder: 'Jane Doe' },
  { name: 'email', label: 'Email Address *', type: 'email', required: true, placeholder: 'jane@brand.com' },
  { name: 'company', label: 'Company Name', type: 'text', required: false, placeholder: 'Your brand' },
  {
    name: 'message',
    label: 'Tell us about your brand *',
    type: 'textarea',
    required: true,
    placeholder: "What are you launching, what's stuck, what flavour are you craving?",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function LeadForm() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#EDFAF1] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #183019 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
        style={{ backgroundColor: '#04FF00', opacity: 0.1 }}
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
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
            Get In Touch
          </span>
          <h2
            className="uppercase mb-4"
            style={{
              fontFamily: 'Dunbar, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#183019',
              letterSpacing: '-0.01em',
            }}
          >
            Let&apos;s make something <span style={{ color: '#04FF00' }}>delicious.</span>
          </h2>
          <p
            style={{
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 500,
              fontSize: '1.15rem',
              color: '#183019',
              opacity: 0.85,
            }}
          >
            Tell us about your brand and we&apos;ll be in touch within one working day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            {
              Icon: MapPin,
              label: 'Studio',
              lines: ['85 Great Portland Street', 'West End, London W1W 7LT, GB'],
            },
            {
              Icon: Mail,
              label: 'Email',
              lines: ['hello@mintchocmedia.com'],
            },
            {
              Icon: Clock3,
              label: 'Hours',
              lines: ['Mon–Fri · 9am–6pm GMT'],
            },
          ].map(({ Icon, label, lines }) => (
            <div
              key={label}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white"
              style={{
                border: '1px solid rgba(24,48,25,0.08)',
                boxShadow:
                  '0 10px 30px -15px rgba(24,48,25,0.2), 0 2px 6px -2px rgba(24,48,25,0.05)',
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                style={{ backgroundColor: '#183019' }}
              >
                <Icon size={18} strokeWidth={2.2} color="#04FF00" />
              </div>
              <div>
                <div
                  className="uppercase tracking-widest text-[10px] mb-1"
                  style={{ color: '#04FF00', fontFamily: 'Aileron, sans-serif', fontWeight: 700 }}
                >
                  {label}
                </div>
                {lines.map((line) => (
                  <div
                    key={line}
                    style={{
                      fontFamily: 'Aileron, sans-serif',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: '#183019',
                      lineHeight: '1.4',
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.form
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="relative bg-white p-8 md:p-10 rounded-3xl"
          style={{
            border: '1px solid rgba(24,48,25,0.1)',
            boxShadow: '0 30px 80px -30px rgba(24,48,25,0.35), 0 8px 20px -6px rgba(24,48,25,0.08)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {fields.slice(0, 2).map((field) => (
              <motion.div key={field.name} variants={item}>
                <FormField field={field} value={formData[field.name]} onChange={handleChange} />
              </motion.div>
            ))}
          </div>

          {fields.slice(2).map((field) => (
            <motion.div key={field.name} variants={item} className="mb-5 last:mb-8">
              <FormField field={field} value={formData[field.name]} onChange={handleChange} />
            </motion.div>
          ))}

          <motion.button
            variants={item}
            type="submit"
            disabled={submitted}
            whileHover={submitted ? {} : { scale: 1.02, boxShadow: '0 20px 45px -10px rgba(4,255,0,0.55)' }}
            whileTap={submitted ? {} : { scale: 0.98 }}
            className="relative w-full py-4 rounded-full overflow-hidden disabled:cursor-not-allowed"
            style={{
              backgroundColor: '#04FF00',
              color: '#183019',
              fontFamily: 'Aileron, sans-serif',
              fontWeight: 700,
              fontSize: '1.05rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              border: 'none',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={20} />
                  Message Sent!
                </motion.span>
              ) : (
                <motion.span
                  key="send"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2"
                >
                  Send the Brief
                  <Send size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({
  field,
  value,
  onChange,
}: {
  field: {
    name: 'name' | 'email' | 'company' | 'message';
    label: string;
    type: 'text' | 'email' | 'textarea';
    required: boolean;
    placeholder?: string;
  };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const labelStyle: React.CSSProperties = {
    fontFamily: 'Aileron, sans-serif',
    fontWeight: 500,
    fontSize: '0.8rem',
    color: '#183019',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  const inputBase =
    'w-full px-4 py-3.5 rounded-2xl border focus:outline-none focus:border-[#04FF00] focus:ring-4 focus:ring-[#04FF00]/10 transition-all';
  const inputStyle: React.CSSProperties = {
    borderColor: 'rgba(24,48,25,0.15)',
    backgroundColor: '#FAFFFB',
    fontFamily: 'Aileron, sans-serif',
    fontSize: '1rem',
  };

  return (
    <>
      <label htmlFor={field.name} className="block mb-2" style={labelStyle}>
        {field.label}
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          required={field.required}
          rows={5}
          placeholder={field.placeholder}
          className={`${inputBase} resize-none`}
          style={inputStyle}
        />
      ) : (
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          required={field.required}
          placeholder={field.placeholder}
          className={inputBase}
          style={inputStyle}
        />
      )}
    </>
  );
}
