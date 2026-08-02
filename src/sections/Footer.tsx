import { SITE } from '../data/site';
import { getQuickLinks, SOCIALS } from '../data/navigation';
import type { TranslationKey } from '../i18n';

interface FooterProps {
  t: (key: TranslationKey) => string;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-forest text-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">{SITE.acronym}</h3>
            <p className="text-white/50">{t('footerDesc')}</p>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">{t('footerLinks')}</h3>
            <ul className="space-y-2">
              {getQuickLinks(t).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">{t('footerFollow')}</h3>
            <div className="flex space-x-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-padding !py-5 text-center text-sm text-white/40">
          © {new Date().getFullYear()} {SITE.acronym}. {t('footerRights')} BY KLM WITH AI
        </div>
      </div>
    </footer>
  );
}