import React from 'react';
import { Button } from '@/components/ui/button';
import { animations } from './constants';
import { AvatarControlsProps } from './types';
import { useOverlay } from '@/contexts/OverlayContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from 'lucide-react';

const AvatarControls: React.FC<AvatarControlsProps> = ({ onAnimationChange }) => {
  const { isOpen } = useOverlay();
  const [currentAnimation, setCurrentAnimation] = React.useState('Typing');

  const handleAnimationClick = (animName: string) => {
    setCurrentAnimation(animName);
    onAnimationChange(animName);
  };

  const currentAnim = animations.find(anim => anim.name === currentAnimation);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div className={`transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-48 gap-2 text-black bg-secondary/70 backdrop-blur-sm hover:bg-secondary/80">
              <span>{currentAnim?.icon}</span>
              <span>{currentAnim?.label}</span>
              <ChevronUp className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 mb-2">
            {animations.map((anim) => (
              <DropdownMenuItem
                key={anim.name}
                onClick={() => handleAnimationClick(anim.name)}
                disabled={currentAnimation === anim.name}
                className="gap-2"
              >
                <span>{anim.icon}</span>
                <span>{anim.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AvatarControls;