
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { usePersonalization } from '@/hooks/usePersonalization';
import { Settings, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NicheFocusProps {
  showSettings?: boolean;
  className?: string;
}

export const NicheFocus: React.FC<NicheFocusProps> = ({ 
  showSettings = true, 
  className = "" 
}) => {
  const { 
    selectedNiches, 
    currentNiche, 
    setCurrentNiche 
  } = usePersonalization();
  const navigate = useNavigate();

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <div className="flex items-center space-x-2">
        <Target className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">Focus Niche:</span>
        <Select value={currentNiche} onValueChange={setCurrentNiche}>
          <SelectTrigger className="w-40 h-8 text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {selectedNiches.map(niche => (
              <SelectItem key={niche} value={niche}>{niche}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {showSettings && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/settings?tab=personalization')}
          className="h-8"
        >
          <Settings className="h-3 w-3 mr-1" />
          Manage Niches
        </Button>
      )}
    </div>
  );
};
