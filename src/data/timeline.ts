import { GraduationCap, Droplets, Sprout, type LucideIcon } from 'lucide-react';

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2023',
    title: 'Distribution de fournitures scolaires',
    description: 'Plus de 1000 élèves équipés pour la rentrée',
    icon: GraduationCap
  },
  {
    year: '2022',
    title: 'Construction de puits',
    description: "Accès à l'eau potable pour 5 villages",
    icon: Droplets
  },
  {
    year: '2021',
    title: 'Formation agricole',
    description: 'Programme de formation pour 200 agriculteurs',
    icon: Sprout
  }
];