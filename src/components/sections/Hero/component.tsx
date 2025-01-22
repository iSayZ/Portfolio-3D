"use client";

import Scene3D from "@/components/scenes/Scene3D";
import { Suspense, useState } from "react";
import { LoadingScreen } from "../../LoadingScreen";
import { HelpFor3DInteraction } from "./components/HelpFor3DInteraction";
import { Overlay } from "./components/Overlay";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasExplored, setHasExplored] = useState<boolean>(false);

  const handleExplore = (value: boolean) => {
    setShowOverlay(value);
    if (!value) {
      setHasExplored(true);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <Suspense fallback={<LoadingScreen />}>
            <Scene3D onLoaded={() => setIsLoading(false)} />
          </Suspense>
        </div>
      </div>
      {/* Disabled for development */}
      {/* {isLoading && <LoadingScreen />} */}

      <Overlay
        isOpen={showOverlay}
        onToggle={handleExplore}
        hasExplored={hasExplored}
      />

      <HelpFor3DInteraction isOpen={showOverlay} />
    </div>
  );
};

export default Hero;
