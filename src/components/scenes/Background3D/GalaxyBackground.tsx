import { Stars } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Points } from "three";

export const GalaxyBackground = () => {
  const starsRef = useRef<Points>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0001;
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stars
      ref={starsRef}
      radius={50} // Size of stars
      depth={50} // Distance between stars
      count={5000} // Number of stars
      factor={4} // Intensity light
      saturation={0}
      fade // Fade effect
    />
  );
};
