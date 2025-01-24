"use client";

import Scene3D from "@/components/3D/scenes/Scene3D";
import { Suspense, useState } from "react";
import { LoadingScreen } from "../../LoadingScreen";
import { HelpFor3DInteraction } from "./components/HelpFor3DInteraction";
import { Overlay } from "./components/Overlay";
import { useOverlay } from "@/contexts/OverlayContext";
import { useHeroScroll } from "./hooks/useHeroScroll";

const Hero = () => {
  const { isOpen } = useOverlay();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasExplored, setHasExplored] = useState<boolean>(false);

  useHeroScroll({
    showOverlay: isOpen,
    offset: 96, // 6rem in px
  });

  return (
    <section id="hero" className="relative w-full h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900/60 to-violet-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-indigo-950/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />

      {/* Content */}
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

      <Overlay hasExplored={hasExplored} setHasExplored={setHasExplored} />

      <HelpFor3DInteraction />
    </section>
  );
};

export default Hero;
