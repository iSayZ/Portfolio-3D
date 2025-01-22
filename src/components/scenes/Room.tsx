"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import React, { useRef } from "react";
import * as THREE from "three";

interface RoomGLTF extends THREE.Object3D {
  nodes: {
    [key: string]: THREE.Mesh & {
      geometry: THREE.BufferGeometry;
      material: THREE.Material;
    };
  };
  materials: {
    [key: string]: THREE.Material;
  };
}

export const Room: React.FC<GroupProps> = (props) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3D/models/room.glb",
  ) as unknown as RoomGLTF;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <motion.group
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        name="Scene"
      >
        <group
          name="Sketchfab_model"
          position={[-2.342, 2.003, 1.226]}
          rotation={[-Math.PI / 2, 0, 0.026]}
          scale={0.126}
        >
          <group
            name="react-logo-circlefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="Backdrop"
                position={[-17.091, 7.935, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[247.854, 247.854, 52.734]}
              >
                <mesh
                  name="Backdrop_Material001_0"
                  geometry={nodes.Backdrop_Material001_0.geometry}
                  material={materials["Material.003"]}
                />
              </group>
              <group
                name="React-Logo"
                position={[0, 7.935, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[39.166, 39.166, 52.734]}
              >
                <mesh
                  name="React-Logo_Material002_0"
                  geometry={nodes["React-Logo_Material002_0"].geometry}
                  material={materials["Material.001"]}
                />
              </group>
            </group>
          </group>
        </group>
        <motion.group
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          name="chair"
        >
          <mesh
            name="ExecutiveChair1"
            geometry={nodes.ExecutiveChair1.geometry}
            material={materials.LeatherExecutiveChair1}
          />
        </motion.group>
        <group
          name="Dofus"
          position={[-1.134, 1.92, -1.794]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.184}
        >
          <group name="dofus_emeraudeobjcleanermaterialmergergles">
            <mesh
              name="Object_2001"
              geometry={nodes.Object_2001.geometry}
              material={materials.coquille}
            />
            <mesh
              name="Object_3"
              geometry={nodes.Object_3.geometry}
              material={materials.s_moche}
            />
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.shadow}
            />
          </group>
        </group>
        <motion.group
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 0.007 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          name="tapis"
          position={[0.709, 0, 1.05]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="c704ea96213a495789e179a361c13b32fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode002">
              <group
                name="Henrik_Hand_Tufted_Wool_Rug_Grey_and_RedMulti_120x180cm"
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Henrik_Hand_Tufted_Wool_Rug_Grey_and_RedMulti_120x180cm_HENRIK_"
                  geometry={
                    nodes
                      .Henrik_Hand_Tufted_Wool_Rug_Grey_and_RedMulti_120x180cm_HENRIK_
                      .geometry
                  }
                  material={materials.HENRIK_LARGE_WOOL_RUG}
                  position={[-108.57, 89.518, 0]}
                  scale={1.182}
                />
              </group>
              <group name="Plane001" rotation={[-Math.PI / 2, 0, 0]} />
            </group>
          </group>
        </motion.group>
        <motion.group
          name="épée"
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 0.024 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          position={[-1.777, 0.435, -1.749]}
          rotation={[-0.856, 0.798, -0.237]}
        >
          <group name="DiamondSwordobjcleanermaterialmergergles001">
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials["material.001"]}
              position={[-11.957, -2.312, -6.518]}
              scale={1.187}
            />
          </group>
        </motion.group>
        <group name="structure" scale={[2.364, 1.99, 1.99]}>
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Plane_1"
            geometry={nodes.Plane_1.geometry}
            material={materials["Default.001"]}
          />
          <mesh
            name="Plane_2"
            geometry={nodes.Plane_2.geometry}
            material={materials.Wall}
          />
        </group>
        <mesh
          name="ComputerMouse_mesh"
          geometry={nodes.ComputerMouse_mesh.geometry}
          material={materials.ComputerMouse_mat1}
          position={[0.477, 0.789, -1.352]}
          rotation={[-Math.PI, 0.315, -Math.PI]}
          scale={0.035}
        />
        <group
          name="desk"
          position={[-0.003, 0.007, -1.599]}
          rotation={[Math.PI, -1.561, Math.PI]}
          scale={0.825}
        >
          <mesh
            name="Plane001_Plane002_BlackWood"
            geometry={nodes.Plane001_Plane002_BlackWood.geometry}
            material={materials.BlackWood}
          />
          <mesh
            name="Plane001_Plane002_BlackWood_1"
            geometry={nodes.Plane001_Plane002_BlackWood_1.geometry}
            material={materials.GrayPlastic}
          />
          <mesh
            name="Plane001_Plane002_BlackWood_2"
            geometry={nodes.Plane001_Plane002_BlackWood_2.geometry}
            material={materials.BlackCoatSteel}
          />
          <mesh
            name="Plane001_Plane002_BlackWood_3"
            geometry={nodes.Plane001_Plane002_BlackWood_3.geometry}
            material={materials.WhiteSteelScrew}
          />
          <mesh
            name="Plane001_Plane002_BlackWood_4"
            geometry={nodes.Plane001_Plane002_BlackWood_4.geometry}
            material={materials.BlackPlastic}
          />
        </group>
        <group
          name="Etagere"
          position={[-0.947, 1.799, -1.767]}
          rotation={[Math.PI, -1.564, Math.PI]}
          scale={0.428}
        >
          <mesh
            name="Cube-Mesh"
            geometry={nodes["Cube-Mesh"].geometry}
            material={materials.Top}
          />
          <mesh
            name="Cube-Mesh_1"
            geometry={nodes["Cube-Mesh_1"].geometry}
            material={materials.Supports}
          />
        </group>
        <mesh
          name="GameBoy_mesh"
          geometry={nodes.GameBoy_mesh.geometry}
          material={materials["lambert2SG.001"]}
          position={[-0.664, 1.926, -1.855]}
          rotation={[-0.37, -0.048, -0.033]}
          scale={0.032}
        />
        <motion.group
          name="iMac"
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 0.011 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          position={[0.402, 0.786, -1.795]}
          rotation={[Math.PI, -1.221, Math.PI]}
        >
          <mesh
            name="iMac_1"
            geometry={nodes.iMac_1.geometry}
            material={materials.Mat}
          />
          <mesh
            name="iMac_1_1"
            geometry={nodes.iMac_1_1.geometry}
            material={materials.Screen}
          />
        </motion.group>
        <group
          name="keyboard"
          position={[0.122, 0.815, -1.448]}
          rotation={[0, -0.363, 0]}
          scale={0.198}
        >
          <mesh
            name="mesh1581414308"
            geometry={nodes.mesh1581414308.geometry}
            material={materials.mat21}
          />
          <mesh
            name="mesh1581414308_1"
            geometry={nodes.mesh1581414308_1.geometry}
            material={materials.mat22}
          />
          <mesh
            name="mesh1581414308_2"
            geometry={nodes.mesh1581414308_2.geometry}
            material={materials.mat16}
          />
          <mesh
            name="mesh1581414308_3"
            geometry={nodes.mesh1581414308_3.geometry}
            material={materials.mat9}
          />
        </group>
        <group name="lava_lamp" position={[-0.465, 0.893, -1.724]} scale={0.08}>
          <mesh
            name="Node-Mesh001"
            geometry={nodes["Node-Mesh001"].geometry}
            material={materials.lambert4SG}
          />
          <mesh
            name="Node-Mesh001_1"
            geometry={nodes["Node-Mesh001_1"].geometry}
            material={materials.lambert2SG}
          />
          <mesh
            name="Node-Mesh001_2"
            geometry={nodes["Node-Mesh001_2"].geometry}
            material={materials.Light}
          />
        </group>
        <motion.group
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 0.015 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          name="palm_tree_01"
          position={[1.731, -0.016, -1.065]}
          rotation={[0, 1.263, 0]}
        >
          <mesh
            name="palm_tree_01-Mesh"
            geometry={nodes["palm_tree_01-Mesh"].geometry}
            material={materials["795548"]}
          />
          <mesh
            name="palm_tree_01-Mesh_1"
            geometry={nodes["palm_tree_01-Mesh_1"].geometry}
            material={materials["8BC34A"]}
          />
          <mesh
            name="palm_tree_01-Mesh_2"
            geometry={nodes["palm_tree_01-Mesh_2"].geometry}
            material={materials.DD9944}
          />
        </motion.group>
        <motion.group
          name="ronflex"
          scale={[0, 0, 0]}
          initial={{ scale: 0 }}
          animate={{ scale: 1.667 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          position={[-1.853, 0.428, 1.262]}
          rotation={[Math.PI, -1.27, Math.PI]}
        >
          <mesh
            name="mesh104282217"
            geometry={nodes.mesh104282217.geometry}
            material={materials.mat5}
          />
          <mesh
            name="mesh104282217_1"
            geometry={nodes.mesh104282217_1.geometry}
            material={materials["mat21.001"]}
          />
          <mesh
            name="mesh104282217_2"
            geometry={nodes.mesh104282217_2.geometry}
            material={materials.mat23}
          />
          <mesh
            name="mesh104282217_3"
            geometry={nodes.mesh104282217_3.geometry}
            material={materials.mat18}
          />
        </motion.group>
      </motion.group>
    </group>
  );
};

useGLTF.preload("/assets/3D/models/room.glb");
