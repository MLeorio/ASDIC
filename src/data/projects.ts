export interface Project {
  title: string;
  description: string;
  cost: string;
  progress: number; // 0–100
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Construction d'une école",
    description: "Construction d'une école primaire dans la région rurale",
    cost: '150,000€',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=75'
  },
  {
    title: "Programme d'agriculture durable",
    description:
      "Mise en place d'un système d'irrigation moderne pour accompagner les producteurs locaux tout au long de l'année",
    cost: '75,000€',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=75'
  },
  {
    title: 'Centre de formation',
    description: "Création d'un centre de formation professionnelle",
    cost: '200,000€',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=75'
  }
];