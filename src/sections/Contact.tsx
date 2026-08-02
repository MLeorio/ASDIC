import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { fadeInUp } from '../lib/motion';
import { CONTACT } from '../data/contact';
import { ANCHORS } from '../data/anchors';
import type { TranslationKey } from '../i18n';

interface ContactProps {
  t: (key: TranslationKey) => string;
}

const contactRows = [
  {
    icon: MapPin,
    content: (
      <>
        {CONTACT.address.district} <br /> {CONTACT.address.postal}
      </>
    )
  },
  { icon: Phone, content: CONTACT.phones.join(' / ') },
  { icon: Mail, content: CONTACT.email }
];

export default function Contact({ t }: ContactProps) {
  return (
    <motion.section id={ANCHORS.contact} className="section-padding bg-cream dark:bg-noir" {...fadeInUp}>
      <div className="max-w-5xl mx-auto">
        <span className="eyebrow">{t('contactEyebrow')}</span>
        <h2 className="text-3xl md:text-5xl font-display font-semibold mt-3 mb-12 text-forest dark:text-cream">
          {t('contactTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactRows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-noir-surface border border-ink/5 dark:border-white/10"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-emerald/10 flex items-center justify-center">
                  <row.icon className="w-5 h-5 text-emerald" />
                </div>
                <span className="text-ink/70 dark:text-cream/60">{row.content}</span>
              </motion.div>
            ))}
          </div>
          <ContactForm t={t} />
        </div>
      </div>
    </motion.section>
  );
}