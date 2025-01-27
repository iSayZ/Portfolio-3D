import { Button } from "@/components/ui/button";
import { useOverlay } from "@/contexts/OverlayContext";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import React, { useEffect } from "react";

interface DirectionControlsProps {
  onRotationChange: (x: number, y: number) => void;
}

const DirectionControls: React.FC<DirectionControlsProps> = ({
  onRotationChange,
}) => {
  const { isOpen } = useOverlay();

  const ROTATION_STEP = 0.3;

  const handleRotation = (x: number, y: number) => {
    onRotationChange(x, y);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          handleRotation(-ROTATION_STEP, 0);
          break;
        case "ArrowDown":
          handleRotation(ROTATION_STEP, 0);
          break;
        case "ArrowLeft":
          handleRotation(0, -ROTATION_STEP);
          break;
        case "ArrowRight":
          handleRotation(0, ROTATION_STEP);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className={`fixed right-4 bottom-24 size-32 md:size-40 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
    >
      <div className="relative w-full h-full ">
        <Button
          className="absolute top-0 left-1/2 -translate-x-1/2 size-min bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90 p-2 text-black"
          onClick={() => handleRotation(-ROTATION_STEP, 0)}
        >
          <ArrowUp className="size-6 md:size-8" />
        </Button>
        <Button
          className="absolute bottom-0 left-1/2 -translate-x-1/2 size-min bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90 p-2 text-black"
          onClick={() => handleRotation(ROTATION_STEP, 0)}
        >
          <ArrowDown className="size-6 md:size-8" />
        </Button>
        <Button
          className="absolute left-0 top-1/2 -translate-y-1/2 size-min bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90 p-2 text-black"
          onClick={() => handleRotation(0, -ROTATION_STEP)}
        >
          <ArrowLeft className="size-6 md:size-8" />
        </Button>
        <Button
          className="absolute right-0 top-1/2 -translate-y-1/2 size-min bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90 p-2 text-black"
          onClick={() => handleRotation(0, ROTATION_STEP)}
        >
          <ArrowRight className="size-6 md:size-8" />
        </Button>
      </div>
    </div>
  );
};

export default DirectionControls;
