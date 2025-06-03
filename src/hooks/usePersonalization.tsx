
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PersonalizationContextType {
  selectedNiches: string[];
  currentNiche: string;
  setSelectedNiches: (niches: string[]) => void;
  setCurrentNiche: (niche: string) => void;
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export const PersonalizationProvider = ({ children }: { children: ReactNode }) => {
  const [selectedNiches, setSelectedNiches] = useState<string[]>(['Tech', 'Fashion', 'Home & Garden', 'Beauty', 'Sports', 'Pet Supplies']);
  const [currentNiche, setCurrentNiche] = useState('Tech');

  useEffect(() => {
    // Load from localStorage
    const savedNiches = localStorage.getItem('dropship_niches');
    const savedCurrentNiche = localStorage.getItem('dropship_current_niche');
    
    if (savedNiches) {
      const niches = JSON.parse(savedNiches);
      setSelectedNiches(niches);
    }
    
    if (savedCurrentNiche) {
      setCurrentNiche(savedCurrentNiche);
    } else if (selectedNiches.length > 0) {
      setCurrentNiche(selectedNiches[0]);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('dropship_niches', JSON.stringify(selectedNiches));
    localStorage.setItem('dropship_current_niche', currentNiche);
  }, [selectedNiches, currentNiche]);

  const value = {
    selectedNiches,
    currentNiche,
    setSelectedNiches,
    setCurrentNiche,
  };

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
};

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error('usePersonalization must be used within a PersonalizationProvider');
  }
  return context;
};
