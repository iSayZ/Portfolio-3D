import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { Avatar } from "../models/Avatar";
import { GalaxyBackground } from "../backgrounds/GalaxyBackground";
import { Room } from "../models/Room";

useGLTF.preload("/assets/3D/models/room.glb");
useGLTF.preload("/assets/3D/models/avatar.glb");

interface Scene3DProps {
  onLoaded?: () => void;
}

const Scene3D: React.FC<Scene3DProps> = ({ onLoaded }) => {
  const { progress, loaded } = useProgress();

  useEffect(() => {
    if (loaded && progress === 100 && onLoaded) {
      onLoaded();
    }
  }, [loaded, progress, onLoaded]);

  return (
    <div className="w-full h-screen">
      <Canvas shadows dpr={[1, 2]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[4, 1, 5]} fov={42} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={10}
          target={[0, 0, 0]}
        />

        <ambientLight intensity={0.1} />
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          intensity={0.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <GalaxyBackground />

        <group position={[0, -0.5, 0]}>
          <Suspense fallback={null}>
            <Avatar
              position={[0, 0.094, -0.78]}
              rotation={[-Math.PI, 0.316, -Math.PI]}
              animation="Typing"
            />
            <Room />
            <Environment preset="apartment" />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
};

export default Scene3D;
