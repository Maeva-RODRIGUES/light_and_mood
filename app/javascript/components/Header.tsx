import React from 'react';
import { Lightbulb, Heart, User } from 'lucide-react';

interface HeaderProps {
  moodboardCount: number;
  onShowMoodboard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ moodboardCount, onShowMoodboard }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Lightbulb size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Light & Mood</h1>
              <p className="text-sm text-gray-500">Éclairage selon votre humeur</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <button
              onClick={onShowMoodboard}
              className="relative flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Heart size={20} />
              <span className="font-medium">Moodboard</span>
              {moodboardCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {moodboardCount}
                </span>
              )}
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <User size={20} />
              <span className="font-medium">Profil</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};