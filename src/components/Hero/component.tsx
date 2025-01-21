"use client";

import React, { useState, Suspense } from "react";
import Scene3D from "@/components/scenes/Scene3D";
import { Overlay } from "./components/Overlay";
import { LoadingScreen } from "../LoadingScreen";
import { HelpFor3DInteraction } from "./components/HelpFor3DInteraction";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="relative w-full h-screen">
      {/* Container of the 3D Scene */}
      <div className="absolute inset-0">
        <div className="w-full h-full">
          <Suspense fallback={<LoadingScreen />}>
            <Scene3D onLoaded={() => setIsLoading(false)} />
          </Suspense>
        </div>
      </div>

      {isLoading && <LoadingScreen />}

      {/* Overlay with information - displayed on top of the 3D scene */}
      <Overlay isOpen={showOverlay} onToggle={setShowOverlay} />

      {/* Discrete instructions for 3D interaction */}
      <HelpFor3DInteraction isOpen={showOverlay} />
    </div>
  );
};

export default Hero;
