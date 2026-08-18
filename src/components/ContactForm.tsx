import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import type { TranslationKey } from '../i18n';

interface ContactFormProps {
  t: (key: TranslationKey) => string;
}

export default function ContactForm({ t }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3500);
  };

  const fieldClass =
    'w-full px-4 py-3 rounded-xl bg-surface-card ' +
    'text-body transition-all duration-200 focus:ring-2 focus:ring-emerald outline-none';

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-body/70">
          {t('formName')}
        </label>
        <input id="contact-name" type="text" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-body/70">
          {t('formEmail')}
        </label>
        <input id="contact-email" type="email" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-body/70">
          {t('formMessage')}
        </label>
        <textarea id="contact-message" rows={4} required className={fieldClass} />
      </div>
      <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn-primary w-full" disabled={status === 'sent'}>
        {status === 'sent' ? (
          t('formSent')
        ) : (
          <>
            {t('formSend')}
            <Send className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}