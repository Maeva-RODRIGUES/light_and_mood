import { Mood } from '../types';

export const moods: Mood[] = [
  {
    id: 'calm',
    name: 'Calme',
    nameEn: 'calm',
    description: 'Pour se détendre et apaiser l\'esprit',
    color: '#0ea5e9',
    bgColor: 'bg-calm-50',
    textColor: 'text-calm-600',
    icon: 'Waves',
    ambiance: 'Douce et sereine'
  },
  {
    id: 'focus',
    name: 'Focus',
    nameEn: 'focus',
    description: 'Pour se concentrer et être productif',
    color: '#22c55e',
    bgColor: 'bg-focus-50',
    textColor: 'text-focus-600',
    icon: 'Target',
    ambiance: 'Claire et précise'
  },
  {
    id: 'creative',
    name: 'Créatif',
    nameEn: 'creative',
    description: 'Pour stimuler l\'imagination et l\'inspiration',
    color: '#f97316',
    bgColor: 'bg-creative-50',
    textColor: 'text-creative-600',
    icon: 'Lightbulb',
    ambiance: 'Dynamique et inspirante'
  },
  {
    id: 'cozy',
    name: 'Cocooning',
    nameEn: 'cozy',
    description: 'Pour créer une atmosphère chaleureuse',
    color: '#d97706',
    bgColor: 'bg-cozy-50',
    textColor: 'text-cozy-600',
    icon: 'Home',
    ambiance: 'Chaleureuse et enveloppante'
  },
  {
    id: 'energetic',
    name: 'Énergique',
    nameEn: 'energetic',
    description: 'Pour dynamiser et motiver',
    color: '#ef4444',
    bgColor: 'bg-energetic-50',
    textColor: 'text-energetic-600',
    icon: 'Zap',
    ambiance: 'Vibrante et stimulante'
  },
  {
    id: 'romantic',
    name: 'Romantique',
    nameEn: 'romantic',
    description: 'Pour une ambiance tendre et intime',
    color: '#ec4899',
    bgColor: 'bg-romantic-50',
    textColor: 'text-romantic-600',
    icon: 'Heart',
    ambiance: 'Tendre et intimiste'
  }
];