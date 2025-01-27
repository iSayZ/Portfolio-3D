"use client";

import Scene3D from "@/components/3D/scenes/Scene3D";
import { Suspense, useState } from "react";
import { LoadingScreen } from "../../LoadingScreen";
import { HelpFor3DInteraction } from "./components/HelpFor3DInteraction";
import { Overlay } from "./components/Overlay";
import { useOverlay } from "@/contexts/OverlayContext";
import { useHeroScroll } from "./hooks/useHeroScroll";
import { useLoading } from "@/contexts/LoadingContext";
import AvatarControls from "./components/AvatarControls/component";
import { ZoomControls } from "./components/ZoomControls";
import { DirectionControls } from "./components/DirectionControls";
import { GroupRotation } from "./components/DirectionControls/types";
import BackgroundControls from "./components/BackgroundControls/component";
import { BackgroundType } from "./components/BackgroundControls";
import { backgrounds } from "./components/BackgroundControls/constants";

const Hero = () => {
  const { setIsLoading } = useLoading();
  const { isOpen } = useOverlay();
  const [hasExplored, setHasExplored] = useState<boolean>(false);
  const [avatarAnimation, setAvatarAnimation] = useState<string>("Typing");
  const [groupScale, setGroupScale] = useState<number>(1);
  const [groupRotation, setGroupRotation] = useState<GroupRotation>({
    x: 0,
    y: 0,
  });
  const [background, setBackground] = useState<BackgroundType>("galaxy");

  const handleRotationChange = (deltaX: number, deltaY: number) => {
    setGroupRotation((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
  };

  useHeroScroll({
    showOverlay: isOpen,
    offset: 96, // 6rem in px
  });

  return (
    <section id="hero" className="relative w-full h-screen">
      {/* Background gradient */}
      {backgrounds[background].gradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-colors duration-1000 ${gradient}`}
        />
      ))}

      {/* Content */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          {/* Disabled for development */}
          <Suspense fallback={<LoadingScreen />}>
            <Scene3D
              onLoaded={() => setIsLoading(false)}
              avatarAnimation={avatarAnimation}
              groupScale={groupScale}
              groupRotation={groupRotation}
            />
          </Suspense>
        </div>
      </div>

      <Overlay hasExplored={hasExplored} setHasExplored={setHasExplored} />

      <HelpFor3DInteraction />
      <BackgroundControls
        currentBackground={background}
        onBackgroundChange={setBackground}
      />
      <ZoomControls onScaleChange={setGroupScale} />
      <AvatarControls onAnimationChange={setAvatarAnimation} />
      <DirectionControls onRotationChange={handleRotationChange} />
    </section>
  );
};

export default Hero;
