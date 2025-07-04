import React, { useState, useMemo } from 'react';
import { Header } from './Header';
import { MoodSelector } from './MoodSelector';
import { LightGallery } from './LightGallery';
import { MoodboardView } from './MoodboardView';
import { moods } from '../data/moods';
import { lights } from '../data/lights';
import { useLocalStorage } from '../hooks/useLocalStorage';

type View = 'mood-selection' | 'light-gallery' | 'moodboard';

export const LightMoodApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('mood-selection');
  const [selectedMoodId, setSelectedMoodId] = useState<string | null>(null);
  const [moodboardItems, setMoodboardItems] = useLocalStorage<string[]>('moodboard-items', []);

  const selectedMood = useMemo(() => 
    selectedMoodId ? moods.find(m => m.id === selectedMoodId) || null : null,
    [selectedMoodId]
  );

  const filteredLights = useMemo(() => 
    selectedMoodId ? lights.filter(light => light.moodIds.includes(selectedMoodId)) : [],
    [selectedMoodId]
  );

  const moodboardLights = useMemo(() => 
    lights.filter(light => moodboardItems.includes(light.id)),
    [moodboardItems]
  );

  const handleMoodSelect = (moodId: string) => {
    if (moodId === '') {
      // Si on passe une chaîne vide, on va à la galerie
      setCurrentView('light-gallery');
    } else {
      setSelectedMoodId(moodId);
    }
  };

  const handleBackToMoodSelection = () => {
    setCurrentView('mood-selection');
    setSelectedMoodId(null);
  };

  const handleAddToMoodboard = (lightId: string) => {
    setMoodboardItems(prev => {
      if (prev.includes(lightId)) {
        return prev.filter(id => id !== lightId);
      } else {
        return [...prev, lightId];
      }
    });
  };

  const handleRemoveFromMoodboard = (lightId: string) => {
    setMoodboardItems(prev => prev.filter(id => id !== lightId));
  };

  const handleShowMoodboard = () => {
    setCurrentView('moodboard');
  };

  const handleBackFromMoodboard = () => {
    if (selectedMoodId) {
      setCurrentView('light-gallery');
    } else {
      setCurrentView('mood-selection');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView !== 'mood-selection' && (
        <Header 
          moodboardCount={moodboardItems.length}
          onShowMoodboard={handleShowMoodboard}
        />
      )}
      
      {currentView === 'mood-selection' && (
        <MoodSelector
          moods={moods}
          selectedMood={selectedMoodId}
          onMoodSelect={handleMoodSelect}
        />
      )}
      
      {currentView === 'light-gallery' && selectedMood && (
        <LightGallery
          lights={filteredLights}
          selectedMood={selectedMood}
          onBack={handleBackToMoodSelection}
          onAddToMoodboard={handleAddToMoodboard}
          moodboardItems={moodboardItems}
        />
      )}
      
      {currentView === 'moodboard' && (
        <MoodboardView
          lights={moodboardLights}
          selectedMood={selectedMood}
          onBack={handleBackFromMoodboard}
          onRemoveFromMoodboard={handleRemoveFromMoodboard}
        />
      )}
    </div>
  );
};