import { LANGS, type Lang } from '../i18n';

interface LangToggleProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function LangToggle({ lang, setLang }: LangToggleProps) {
  return (
    <div
      className="fixed bottom-24 right-6 z-50 flex rounded-full border border-white/20 bg-forest dark:bg-noir-surface
                 shadow-[0_2px_8px_-2px_rgba(var(--shadow-dark),0.4)] overflow-hidden"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={`Switch to ${label}`}
          className={`px-3 py-1.5 text-xs font-mono font-semibold transition-colors duration-300 ${
            lang === code
              ? 'bg-gold text-ink'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}