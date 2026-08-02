export type Lang = 'fr' | 'en';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' }
];

export const translations = {
  fr: {
    heroTagline: 'Actions Solidaires pour le Développement des Initiatives Communautaires.',
    heroCtaProjects: 'Nos projets',
    heroCtaAbout: 'À propos',
    aboutEyebrow: '01 — Notre mission',
    aboutTitleA: 'Ensemble pour un développement intégral',
    aboutTitleB: 'et durable.',
    aboutText:
      "L'ASDIC s'engage à promouvoir une éducation à la paix, la bonne gouvernance et à assurer au sein des communautés une cohésion sociale et un développement intégral et durable.",
    timelineEyebrow: '02 — Chronologie',
    timelineTitle: 'Nos actions',
    projectsEyebrow: '03 — Nos initiatives',
    projectsTitle: 'Projets futurs',
    teamEyebrow: "04 — L'équipe",
    teamTitle: 'Notre équipe',
    contactEyebrow: '05 — Contact',
    contactTitle: 'Contactez-nous',
    funded: 'financé',
    supportProject: 'Soutenir ce projet',
    formName: 'Nom',
    formEmail: 'Email',
    formMessage: 'Message',
    formSend: 'Envoyer',
    formSent: 'Message envoyé ✓',
    footerDesc: 'Ensemble pour un développement durable et solidaire.',
    footerLinks: 'Liens rapides',
    footerFollow: 'Suivez-nous',
    footerRights: 'Tous droits réservés.',
    navAbout: 'À propos',
    navProjects: 'Projets',
    navContact: 'Contact'
  },
  en: {
    heroTagline: 'Solidary Actions for the Development of Community Initiatives.',
    heroCtaProjects: 'Our projects',
    heroCtaAbout: 'About us',
    aboutEyebrow: '01 — Our mission',
    aboutTitleA: 'Together for integral',
    aboutTitleB: 'and sustainable development.',
    aboutText:
      'ASDIC is committed to promoting peace education, good governance, and ensuring social cohesion and integral, sustainable development within communities.',
    timelineEyebrow: '02 — Timeline',
    timelineTitle: 'Our actions',
    projectsEyebrow: '03 — Our initiatives',
    projectsTitle: 'Upcoming projects',
    teamEyebrow: '04 — The team',
    teamTitle: 'Our team',
    contactEyebrow: '05 — Contact',
    contactTitle: 'Get in touch',
    funded: 'funded',
    supportProject: 'Support this project',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSend: 'Send',
    formSent: 'Message sent ✓',
    footerDesc: 'Together for sustainable and solidary development.',
    footerLinks: 'Quick links',
    footerFollow: 'Follow us',
    footerRights: 'All rights reserved.',
    navAbout: 'About',
    navProjects: 'Projects',
    navContact: 'Contact'
  }
} as const;

export type TranslationKey = keyof (typeof translations)['fr'];