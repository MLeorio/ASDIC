import { useEffect, useState } from 'react';
import { translations, type Lang, type TranslationKey } from '../i18n';

export function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem('asdic-lang');
    return saved === 'en' ? 'en' : 'fr';
  });

  useEffect(() => {
    window.localStorage.setItem('asdic-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return { lang, setLang, t };
}