"use client";

import Scene3D from "@/components/3D/scenes/Scene3D";
import { Suspense, useState } from "react";
import { LoadingScreen } from "../../LoadingScreen";
import { HelpFor3DInteraction } from "./components/HelpFor3DInteraction";
import { Overlay } from "./components/Overlay";
import { useHeroScroll } from "./hooks/useHeroScroll";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasExplored, setHasExplored] = useState<boolean>(false);

  useHeroScroll({
    showOverlay,
    offset: 96, // 6rem in px
  });

  const handleExplore = (value: boolean) => {
    setShowOverlay(value);
    if (!value) {
      setHasExplored(true);
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen bg-darkBlue">
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <Suspense fallback={<LoadingScreen />}>
            {/* Disabled for development */}
            <Scene3D onLoaded={() => setIsLoading(false)} />
          </Suspense>
        </div>
      </div>
      {/* Disabled for development */}
      {isLoading && <LoadingScreen />}

      <Overlay
        isOpen={showOverlay}
        onToggle={handleExplore}
        hasExplored={hasExplored}
      />

      <HelpFor3DInteraction isOpen={showOverlay} />
    </section>
  );
};

export default Hero;
