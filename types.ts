export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Tempo Integral' | 'Meio Período' | 'Estágio' | 'Freelance';
  datePosted: string;
  description: string;
  requirements: string[];
  salary?: string;
}

export interface CarouselItem {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
}
