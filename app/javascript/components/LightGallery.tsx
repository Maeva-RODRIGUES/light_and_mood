import React from 'react';
import { ArrowLeft, Grid, LayoutGrid } from 'lucide-react';
import { LightCard } from './LightCard';
import { Light, Mood } from '../types';

interface LightGalleryProps {
  lights: Light[];
  selectedMood: Mood;
  onBack: () => void;
  onAddToMoodboard: (lightId: string) => void;
  moodboardItems: string[];
}

export const LightGallery: React.FC<LightGalleryProps> = ({ 
  lights, 
  selectedMood, 
  onBack,
  onAddToMoodboard,
  moodboardItems
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Retour aux humeurs</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div 
                  className="w-3 h-3 rounded-full mx-auto mb-1"
                  style={{ backgroundColor: selectedMood.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700">
                  {selectedMood.name}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Grid size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <LayoutGrid size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Luminaires pour votre humeur 
            <span style={{ color: selectedMood.color }}>
              {selectedMood.name.toLowerCase()}
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            {lights.length} luminaire{lights.length > 1 ? 's' : ''} sélectionné{lights.length > 1 ? 's' : ''} pour créer une ambiance {selectedMood.ambiance.toLowerCase()}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lights.map((light) => (
            <LightCard
              key={light.id}
              light={light}
              onAddToMoodboard={onAddToMoodboard}
              isInMoodboard={moodboardItems.includes(light.id)}
            />
          ))}
        </div>
        
        {lights.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <LayoutGrid size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              Aucun luminaire trouvé
            </h3>
            <p className="text-gray-400">
              Essayez une autre humeur pour découvrir d'autres luminaires
            </p>
          </div>
        )}
      </div>
    </div>
  );
};