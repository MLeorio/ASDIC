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
    'w-full px-4 py-3 border border-ink/10 dark:border-white/10 rounded-xl bg-white dark:bg-noir-surface ' +
    'text-ink dark:text-cream transition-all duration-200 focus:ring-2 focus:ring-emerald focus:border-transparent outline-none';

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-2 text-ink/70 dark:text-cream/60">{t('formName')}</label>
        <input type="text" required className={fieldClass} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-ink/70 dark:text-cream/60">{t('formEmail')}</label>
        <input type="email" required className={fieldClass} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-ink/70 dark:text-cream/60">{t('formMessage')}</label>
        <textarea rows={4} required className={fieldClass} />
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