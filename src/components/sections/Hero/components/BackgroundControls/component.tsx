import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useOverlay } from '@/contexts/OverlayContext';
import React from 'react';
import { backgrounds } from './constants';
import { BackgroundControlsProps, BackgroundType } from './types';

const BackgroundControls: React.FC<BackgroundControlsProps> = ({
  currentBackground,
  onBackgroundChange
}) => {
const { isOpen } = useOverlay();
    
  const current = backgrounds[currentBackground];

  return (
    <div className={`fixed left-4 bottom-1/2 ${isOpen ? "opacity-0" : "opacity-100"}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="size-min p-2 text-black bg-secondary/70 backdrop-blur-sm hover:bg-secondary/90">
            {current.icon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.entries(backgrounds).map(([type, { icon, label }]) => (
            <DropdownMenuItem
              key={type}
              onClick={() => onBackgroundChange(type as BackgroundType)}
              className="gap-2"
            >
              {icon}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default BackgroundControls;