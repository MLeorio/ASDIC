import { ANCHORS } from './anchors';

export interface NavDot {
  id: string;
  label: string;
}

export const NAV_DOTS: NavDot[] = [
  { id: 'hero', label: 'Accueil' },
  { id: ANCHORS.about, label: 'Mission' },
  { id: 'actions', label: 'Actions' },
  { id: ANCHORS.projects, label: 'Projets' },
  { id: 'equipe', label: 'Équipe' },
  { id: ANCHORS.contact, label: 'Contact' }
];