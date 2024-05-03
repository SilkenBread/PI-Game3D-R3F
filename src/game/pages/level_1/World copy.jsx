import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function World(props) {
  const { nodes, materials } = useGLTF("assets/models/level_1/FirstLevel.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.TempleM1.geometry}
          material={materials.Material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.TempleM2.geometry}
          material={materials.Material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.TempleM4.geometry}
          material={materials.Material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          receiveShadow
          geometry={nodes.TempleM3.geometry}
          material={materials.Material}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.CheckPoints.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.PlatForm.geometry}
          material={materials["Material.001"]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/FirstLevel.glb");
