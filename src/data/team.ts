export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: 'Kofi KODJO',
    role: 'Président',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  },
  {
    name: 'Abla ABALO',
    role: 'Directrice des Projets',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: 'Jean YAO',
    role: 'Responsable Financier',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
  }
];