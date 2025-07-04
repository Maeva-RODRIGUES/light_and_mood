import React from 'react';
import { Heart, Plus, ShoppingCart } from 'lucide-react';
import { Light } from '../types';

interface LightCardProps {
  light: Light;
  onAddToMoodboard: (lightId: string) => void;
  isInMoodboard: boolean;
}

export const LightCard: React.FC<LightCardProps> = ({ 
  light, 
  onAddToMoodboard, 
  isInMoodboard 
}) => {
  const typeLabels = {
    'suspension': 'Suspension',
    'lampe-table': 'Lampe de table',
    'applique': 'Applique',
    'lampadaire': 'Lampadaire',
    'plafonnier': 'Plafonnier'
  };

  const intensityLabels = {
    'douce': 'Douce',
    'moyenne': 'Moyenne',
    'forte': 'Forte'
  };

  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="relative">
        <img 
          src={light.image} 
          alt={light.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200">
            <Heart size={18} className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {typeLabels[light.type]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-xl text-gray-900 mb-2">
            {light.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {light.description}
          </p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Intensité</span>
            <span className="font-medium text-gray-700">
              {intensityLabels[light.intensity]}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Matériau</span>
            <span className="font-medium text-gray-700">
              {light.material}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Dimensions</span>
            <span className="font-medium text-gray-700 text-right">
              {light.dimensions}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {light.style.map((style, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {style}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {light.price}€
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onAddToMoodboard(light.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200
                ${isInMoodboard 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }
              `}
            >
              <Plus size={16} />
              <span>{isInMoodboard ? 'Ajouté' : 'Moodboard'}</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors duration-200">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};