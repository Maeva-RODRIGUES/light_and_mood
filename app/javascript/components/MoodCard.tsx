import React from 'react';
import * as Icons from 'lucide-react';
import { Mood } from '../types';

interface MoodCardProps {
  mood: Mood;
  isSelected: boolean;
  onClick: () => void;
}

export const MoodCard: React.FC<MoodCardProps> = ({ mood, isSelected, onClick }) => {
  const IconComponent = Icons[mood.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${mood.bgColor} ${isSelected ? 'ring-4 ring-opacity-50 scale-105 shadow-xl' : 'hover:shadow-lg'}
        ${isSelected ? `ring-${mood.nameEn}-400` : ''}
      `}
      style={{
        background: isSelected 
          ? `linear-gradient(135deg, ${mood.color}15, ${mood.color}25)`
          : undefined
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div 
          className={`
            w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
            ${isSelected ? 'scale-110' : ''}
          `}
          style={{ backgroundColor: `${mood.color}20` }}
        >
          <IconComponent 
            size={28} 
            style={{ color: mood.color }}
            className="transition-all duration-300"
          />
        </div>
        
        <div>
          <h3 className={`font-semibold text-lg ${mood.textColor} mb-1`}>
            {mood.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {mood.description}
          </p>
        </div>
        
        <div 
          className={`
            text-xs font-medium px-3 py-1 rounded-full transition-all duration-300
            ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-70'}
          `}
          style={{ 
            backgroundColor: `${mood.color}15`, 
            color: mood.color 
          }}
        >
          {mood.ambiance}
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
             style={{ backgroundColor: mood.color }}>
          <Icons.Check size={14} className="text-white" />
        </div>
      )}
    </div>
  );
};