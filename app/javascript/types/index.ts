export interface Mood {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  color: string;
  bgColor: string;
  textColor: string;
  icon: string;
  ambiance: string;
}

export interface Light {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'suspension' | 'lampe-table' | 'applique' | 'lampadaire' | 'plafonnier';
  intensity: 'douce' | 'moyenne' | 'forte';
  price: number;
  moodIds: string[];
  style: string[];
  dimensions: string;
  material: string;
}

export interface MoodboardItem {
  lightId: string;
  addedAt: Date;
}

export interface Moodboard {
  id: string;
  name: string;
  moodId: string;
  items: MoodboardItem[];
  createdAt: Date;
  updatedAt: Date;
}

