import AvatarControls from "@/components/sections/Hero/components/Scene3DControls/components/AvatarControls/component";
import BackgroundControls from "@/components/sections/Hero/components/Scene3DControls/components/BackgroundControls/component";
import { DirectionControls } from "@/components/sections/Hero/components/Scene3DControls/components/DirectionControls";
import { HelpFor3DInteraction } from "@/components/sections/Hero/components/Scene3DControls/components/HelpFor3DInteraction";
import { ZoomControls } from "@/components/sections/Hero/components/Scene3DControls/components/ZoomControls";
import { useScene3DControls } from "@/contexts/Scene3DControlsContext";
import React from "react";

const Scene3DControls: React.FC = () => {
  const {
    background,
    setBackground,
    setGroupScale,
    setAvatarAnimation,
    handleRotationChange,
  } = useScene3DControls();

  return (
    <>
      <HelpFor3DInteraction />
      <BackgroundControls
        currentBackground={background}
        onBackgroundChange={setBackground}
      />
      <ZoomControls onScaleChange={setGroupScale} />
      <AvatarControls onAnimationChange={setAvatarAnimation} />
      <DirectionControls onRotationChange={handleRotationChange} />
    </>
  );
};

export default Scene3DControls;
