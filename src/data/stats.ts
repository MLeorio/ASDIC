export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 5, suffix: '', label: 'Villages équipés en eau potable' },
  { value: 1000, suffix: '+', label: 'Élèves soutenus en 2023' },
  { value: 200, suffix: '', label: 'Agriculteurs formés' },
  { value: 425000, suffix: '€', label: 'Mobilisés pour nos projets' }
];