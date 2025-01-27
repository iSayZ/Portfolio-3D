import { Button } from "@/components/ui/button";
import { useOverlay } from "@/contexts/OverlayContext";
import { ZoomIn, ZoomOut } from "lucide-react";
import React, { useState } from "react";

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
    <div
      className={`fixed bottom-24 left-4 flex flex-col gap-2 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
    >
      <Button
        onClick={() => handleZoom(true)}
        disabled={scale >= MAX_SCALE}
        className="bg-secondary/70 size-min text-black backdrop-blur-sm hover:bg-secondary/90 p-2"
      >
        <ZoomIn className="size-6 md:size-8" />
      </Button>
      <Button
        onClick={() => handleZoom(false)}
        disabled={scale <= MIN_SCALE}
        className="bg-secondary/70 size-min text-black backdrop-blur-sm hover:bg-secondary/90 p-2"
      >
        <ZoomOut className="size-6 md:size-8" />
      </Button>
    </div>
  );
};

export default ZoomControls;
