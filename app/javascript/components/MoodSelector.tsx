import React from 'react';
import { MoodCard } from './MoodCard';
import { Mood } from '../types';

interface MoodSelectorProps {
  moods: Mood[];
  selectedMood: string | null;
  onMoodSelect: (moodId: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({ 
  moods, 
  selectedMood, 
  onMoodSelect 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Comment vous sentez-vous 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              aujourd'hui
            </span> ?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choisissez votre humeur et découvrez l'éclairage parfait pour créer l'ambiance idéale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moods.map((mood) => (
            <MoodCard
              key={mood.id}
              mood={mood}
              isSelected={selectedMood === mood.id}
              onClick={() => onMoodSelect(mood.id)}
            />
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center mt-12">
            <button
              onClick={() => onMoodSelect('')}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Découvrir les luminaires
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};