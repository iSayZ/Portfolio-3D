"use client";

import { useGLTF } from "@react-three/drei";

export const MODELS = {
  ROOM: "/assets/3D/models/room.glb",
  AVATAR: "/assets/3D/models/avatar.glb",
} as const;

// Preload with Draco Loader
useGLTF.preload(MODELS.ROOM, "/draco/gltf/");
useGLTF.preload(MODELS.AVATAR, "/draco/gltf/");
