import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { useGLTF } from '@react-three/drei'

export default function Checkpoint(props) {
  const { nodes, materials } = useGLTF("assets/models//checkPoint.glb");
  return (
    <group {...props} dispose={null}>
        <RigidBody type="fixed" colliders = "trimesh">
        <mesh
        geometry={nodes.CheckPoint1.geometry}
        material={nodes.CheckPoint1.material}
      />
        </RigidBody>
      
    </group>
  );
}

useGLTF.preload('assets/models//checkPoint.glb')
