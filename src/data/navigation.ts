import { Facebook, Twitter, Linkedin, Instagram, type LucideIcon } from 'lucide-react';
import { ANCHORS } from './anchors';
import type { TranslationKey } from '../i18n';

export interface QuickLink {
  label: string;
  href: string;
}

/**
 * Returns the footer quick links with labels translated
 * for the current language.
 */
export const getQuickLinks = (t: (key: TranslationKey) => string): QuickLink[] => [
  { label: t('navAbout'), href: `#${ANCHORS.about}` },
  { label: t('navProjects'), href: `#${ANCHORS.projects}` },
  { label: t('navContact'), href: `#${ANCHORS.contact}` }
];

export interface SocialLink {
  label: string;
  href: string; // ← replace '#' with real URLs when available
  icon: LucideIcon;
}

export const SOCIALS: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram }
];