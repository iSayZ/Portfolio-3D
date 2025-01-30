"use client";

import { BackgroundType } from "@/components/sections/Hero/components/Scene3DControls/components/BackgroundControls";
import { GroupRotation } from "@/components/sections/Hero/components/Scene3DControls/components/DirectionControls/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface Scene3DControlsContextType {
  // States
  avatarAnimation: string;
  groupScale: number;
  groupRotation: GroupRotation;
  background: BackgroundType;
  hasExplored: boolean;

  // Setters
  setAvatarAnimation: (animation: string) => void;
  setGroupScale: (scale: number) => void;
  setGroupRotation: (rotation: GroupRotation) => void;
  setBackground: (background: BackgroundType) => void;
  setHasExplored: (explored: boolean) => void;
  handleRotationChange: (deltaX: number, deltaY: number) => void;
}

const Scene3DControlsContext = createContext<
  Scene3DControlsContextType | undefined
>(undefined);

export function Scene3DControlsProvider({ children }: { children: ReactNode }) {
  const [avatarAnimation, setAvatarAnimation] = useState<string>("Typing");
  const [groupScale, setGroupScale] = useState<number>(1);
  const [groupRotation, setGroupRotation] = useState<GroupRotation>({
    x: 0,
    y: 0,
  });
  const [background, setBackground] = useState<BackgroundType>("galaxy");
  const [hasExplored, setHasExplored] = useState<boolean>(false);

  const handleRotationChange = (deltaX: number, deltaY: number) => {
    setGroupRotation((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
  };

  return (
    <Scene3DControlsContext.Provider
      value={{
        avatarAnimation,
        groupScale,
        groupRotation,
        background,
        hasExplored,
        setAvatarAnimation,
        setGroupScale,
        setGroupRotation,
        setBackground,
        setHasExplored,
        handleRotationChange,
      }}
    >
      {children}
    </Scene3DControlsContext.Provider>
  );
}

export function useScene3DControls() {
  const context = useContext(Scene3DControlsContext);
  if (!context) {
    throw new Error(
      "useScene3DControls must be used within Scene3DControlsProvider",
    );
  }
  return context;
}
