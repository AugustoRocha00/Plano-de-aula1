export type Sport = 'natacao_adulto' | 'futsal' | 'natacao_infantil' | 'hidroginastica';

export interface Activity {
    name: string;
    description: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  materials: string[];
  duration: number;
  activities: Activity[];
}
