import React from 'react';
import { ArrowLeft, Trash2, Share, Download } from 'lucide-react';
import { Light, Mood } from '../types';

interface MoodboardViewProps {
  lights: Light[];
  selectedMood: Mood | null;
  onBack: () => void;
  onRemoveFromMoodboard: (lightId: string) => void;
}

export const MoodboardView: React.FC<MoodboardViewProps> = ({
  lights,
  selectedMood,
  onBack,
  onRemoveFromMoodboard
}) => {
  const totalPrice = lights.reduce((sum, light) => sum + light.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Retour</span>
              </button>
              
              <div className="h-6 w-px bg-gray-300"></div>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Mon Moodboard</h1>
                {selectedMood && (
                  <p className="text-sm text-gray-500">
                    Ambiance {selectedMood.name.toLowerCase()} • {lights.length} luminaire{lights.length > 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg transition-colors">
                <Share size={16} />
                <span>Partager</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Download size={16} />
                <span>Exporter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {lights.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
              Votre moodboard est vide
            </h3>
            <p className="text-gray-400 mb-6">
              Commencez par choisir votre humeur et ajoutez des luminaires à votre collection
            </p>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Découvrir les luminaires
            </button>
          </div>
        ) : (
          <>
            {/* Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    Résumé de votre sélection
                  </h2>
                  <p className="text-gray-600">
                    {lights.length} luminaire{lights.length > 1 ? 's' : ''} sélectionné{lights.length > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {totalPrice.toLocaleString()}€
                  </div>
                  <p className="text-sm text-gray-500">Prix total</p>
                </div>
              </div>
            </div>
            
            {/* Lights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lights.map((light) => (
                <div key={light.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={light.image} 
                      alt={light.name}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => onRemoveFromMoodboard(light.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {light.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {light.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {light.price}€
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {light.style.slice(0, 2).map((style, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};