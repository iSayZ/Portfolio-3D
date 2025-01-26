import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';
import { useOverlay } from '@/contexts/OverlayContext';

interface ZoomControlsProps {
  onScaleChange: (scale: number) => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onScaleChange }) => {
      const { isOpen } = useOverlay();
    
  const [scale, setScale] = useState<number>(1);
  const MIN_SCALE = 0.4;
  const MAX_SCALE = 2;
  const STEP = 0.2;

  const handleZoom = (increment: boolean) => {
    const newScale = increment ? scale + STEP : scale - STEP;
    if (newScale >= MIN_SCALE && newScale <= MAX_SCALE) {
      setScale(newScale);
      onScaleChange(newScale);
    }
  };

  return (
    <div className={`fixed bottom-24 left-4 flex flex-col gap-2 ${isOpen ? "opacity-0" : "opacity-100"}`}>
      <Button 
        onClick={() => handleZoom(true)}
        disabled={scale >= MAX_SCALE}
        className="bg-secondary/70 backdrop-blur-sm hover:bg-secondary/80 p-2"
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button 
        onClick={() => handleZoom(false)}
        disabled={scale <= MIN_SCALE}
        className="bg-secondary/70 backdrop-blur-sm hover:bg-secondary/80 p-2"
      >
        <Minus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ZoomControls;