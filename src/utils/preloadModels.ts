"use client";

import { useGLTF } from "@react-three/drei";

export const MODELS = {
  ROOM: "/assets/3D/models/room.glb",
  AVATAR: "/assets/3D/models/avatar.glb",
} as const;

useGLTF.preload(MODELS.ROOM);
useGLTF.preload(MODELS.AVATAR);
