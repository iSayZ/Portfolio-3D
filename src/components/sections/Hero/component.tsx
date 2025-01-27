"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { useOverlay } from "@/contexts/OverlayContext";
import { useScene3DControls } from "@/contexts/Scene3DControlsContext";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Suspense } from "react";
import { LoadingScreen } from "../../template/LoadingScreen";
import { Overlay } from "./components/Overlay";
import Scene3D from "./components/Scene3D/Scene3D";
import { Scene3DControls } from "./components/Scene3DControls";
import { backgrounds } from "./components/Scene3DControls/components/BackgroundControls/constants";
import { useHeroScroll } from "./hooks/useHeroScroll";

const Hero = () => {
  const { setIsLoading } = useLoading();
  const { isOpen } = useOverlay();
  const { background, hasExplored, setHasExplored } = useScene3DControls();

  useScrollLock(!isOpen);

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
          <Scene3D onLoaded={() => setIsLoading(false)} />
          </Suspense>
        </div>
      </div>

      <Overlay hasExplored={hasExplored} setHasExplored={setHasExplored} />

      <Scene3DControls />
    </section>
  );
};

export default Hero;
