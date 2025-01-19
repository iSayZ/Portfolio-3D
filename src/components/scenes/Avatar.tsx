/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useEffect, useRef, useMemo } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Avatar(props) {
  const { animation } = props;
  const group = useRef();
  const previousAnimation = useRef(animation);

  const following = animation === "Standing" ? true : false;

  //   const { headFollow, cursorFollow, wireframe } = useControls({
//     headFollow: false,
//     cursorFollow: false,
//     wireframe: false
//   });

  const { nodes, materials } = useGLTF('3D/models/avatar.glb');
  
  // Utiliser useMemo pour mémoriser les animations
  const animations = useMemo(() => {
    const falling = useFBX("3D/animations/falling.fbx").animations[0];
    const salute = useFBX("3D/animations/salute.fbx").animations[0];
    const standing = useFBX("3D/animations/standing.fbx").animations[0];
    const typing = useFBX("3D/animations/typing.fbx").animations[0];
    const fight = useFBX("3D/animations/fight.fbx").animations[0];
    const jump = useFBX("3D/animations/jump.fbx").animations[0];
    const breakdance = useFBX("3D/animations/breakdance.fbx").animations[0];
    
    // Configurer les noms une seule fois
    if (falling) falling.name = "Falling";
    if (salute) salute.name = "Salute";
    if (standing) standing.name = "Standing";
    if (typing) typing.name = "Typing";
    if (fight) fight.name = "Fight";
    if (jump) jump.name = "Jump";
    if (breakdance) breakdance.name = "BreakDance";
    
    return [falling, salute, standing, typing, fight, jump, breakdance];
  }, []); // Dépendances vides = exécuté une seule fois
  
  // Gérer les animations avec useAnimations
  const { actions } = useAnimations(animations, group);

  // Gérer la transition entre les animations
  useEffect(() => {
    if (!actions || !actions[animation]) return;

    // Fonctions pour gérer les transitions
    const fadeToAction = (actionName, duration) => {
      const currentAction = actions[previousAnimation.current];
      const newAction = actions[actionName];

      if (currentAction && currentAction !== newAction) {
        currentAction.fadeOut(duration);
      }

      if (newAction) {
        newAction
          .reset()
          .setEffectiveTimeScale(1)
          .setEffectiveWeight(1)
          .fadeIn(duration)
          .play();
      }

      previousAnimation.current = actionName;
    };

    fadeToAction(animation, 0.5);
  }, [animation, actions]);

  useFrame((state) => {
    if (following && group.current) {
      const head = group.current.getObjectByName("Head");
      if (head) head.lookAt(state.camera.position);
    }

    if (following && group.current) {
      const neck = group.current.getObjectByName("Neck");
      if (neck) {
        const target = new THREE.Vector3(state.mouse.x * 5, state.mouse.y * 5, -1);
        neck.lookAt(target);
      }
    }
  });

//   // Gérer le wireframe
//   useEffect(() => {
//     Object.values(materials).forEach((material) => {
//       material.wireframe = wireframe;
//     });
//   }, [wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <primitive object={nodes.Hips} />
      </group>
    </group>
  );
}

useGLTF.preload('3D/models/avatar.glb');