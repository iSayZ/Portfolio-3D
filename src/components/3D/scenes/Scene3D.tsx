import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Avatar } from "../models/Avatar";
import { GalaxyBackground } from "../backgrounds/GalaxyBackground";
import { Room } from "../models/Room";
import * as THREE from "three";

interface AvatarWrapperProps {
  initialAnimation: string;
  targetPosition: THREE.Vector3;
  targetRotation: THREE.Euler;
}

const AvatarWrapper: React.FC<AvatarWrapperProps> = ({
  initialAnimation,
  targetPosition,
  targetRotation,
}) => {
  const [currentAnimation, setCurrentAnimation] = useState(initialAnimation);
  const [position, setPosition] = useState(new THREE.Vector3(0, 0.094, -0.78));
  const [rotation, setRotation] = useState(
    new THREE.Euler(-Math.PI, 0.316, -Math.PI),
  );
  const animationTimeout = useRef<NodeJS.Timeout>();
  const isMoving = useRef(false);

  useEffect(() => {
    if (
      initialAnimation !== currentAnimation &&
      initialAnimation !== "Falling"
    ) {
      isMoving.current = true;
      setCurrentAnimation("Falling");

      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }

      animationTimeout.current = setTimeout(() => {
        setCurrentAnimation(initialAnimation);
        isMoving.current = false;
      }, 1000);
    }

    return () => {
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, [initialAnimation]);

  useFrame(() => {
    // Create a new instance to force the update
    const newPosition = new THREE.Vector3();
    newPosition.copy(position);
    newPosition.lerp(targetPosition, 0.02);
    setPosition(newPosition);

    // Interpolation of rotation
    const newRotation = new THREE.Euler();
    const currentQuat = new THREE.Quaternion().setFromEuler(rotation);
    const targetQuat = new THREE.Quaternion().setFromEuler(targetRotation);
    currentQuat.slerp(targetQuat, 0.02);
    newRotation.setFromQuaternion(currentQuat);
    setRotation(newRotation);
  });

  return (
    <Avatar
      position={position}
      rotation={rotation}
      animation={currentAnimation}
    />
  );
};

interface Scene3DProps {
  onLoaded?: () => void;
  avatarAnimation: string;
  groupScale: number;
  groupRotation: any;
}

const Scene3D: React.FC<Scene3DProps> = ({
  onLoaded,
  avatarAnimation,
  groupScale,
  groupRotation,
}) => {
  const { progress, loaded } = useProgress();
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(0, 0.094, -0.78),
  );
  const [targetRotation, setTargetRotation] = useState(
    new THREE.Euler(-Math.PI, 0.316, -Math.PI),
  );

  useEffect(() => {
    switch (avatarAnimation) {
      case "Typing":
        setTargetPosition(new THREE.Vector3(0, 0.094, -0.78));
        setTargetRotation(new THREE.Euler(-Math.PI, 0.316, -Math.PI));
        break;
      case "Standing":
        setTargetPosition(new THREE.Vector3(0, 0, 0));
        setTargetRotation(new THREE.Euler(-Math.PI, 0, -Math.PI));
        break;
      case "Salute":
        setTargetPosition(new THREE.Vector3(0, 0, 1));
        setTargetRotation(new THREE.Euler(-Math.PI, 2.4, -Math.PI));
        break;
      case "Fight":
        setTargetPosition(new THREE.Vector3(-0.2, 0, 1.3));
        setTargetRotation(new THREE.Euler(-Math.PI, 4.5, -Math.PI));
        break;
      case "BreakDance":
        setTargetPosition(new THREE.Vector3(1.3, 0, 0.8));
        setTargetRotation(new THREE.Euler(-Math.PI, 2.6, -Math.PI));
        break;
      case "Jump":
        setTargetPosition(new THREE.Vector3(0, 0, 1));
        setTargetRotation(new THREE.Euler(-Math.PI, 1.6, -Math.PI));
        break;
      default:
        setTargetPosition(new THREE.Vector3(0, 0.094, -0.78));
        setTargetRotation(new THREE.Euler(-Math.PI, 0.316, -Math.PI));
    }
  }, [avatarAnimation]);

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

        <group
          position={[0, -0.5, 0]}
          scale={[groupScale, groupScale, groupScale]}
          rotation={[groupRotation.x, groupRotation.y, 0]}
        >
          <Suspense fallback={null}>
            <AvatarWrapper
              initialAnimation={avatarAnimation}
              targetPosition={targetPosition}
              targetRotation={targetRotation}
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
