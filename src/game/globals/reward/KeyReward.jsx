import React, { useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function KeyReward(props) {
  const { nodes, materials } = useGLTF("assets/models/key.glb");
  const keyAnimation = useRef(null);
  const yRotationAxies = new THREE.Vector3(0, 0, 0);
  const quaternionRotation = useMemo(() => new THREE.Quaternion(), []);
  const [crono, setCrono] = useState(0);

  useFrame(({ clock }) => {
    setCrono(crono + 1);
    keyAnimation.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.1)
    );
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody  ref= {keyAnimation} type="kinematicPosition" colliders="cuboid">
        <mesh
          geometry={nodes.KeyDeco.geometry}
          material={materials.primatyColor}
        />
        <mesh geometry={nodes.KeyBody.geometry} material={materials.terColor} />
        <mesh geometry={nodes.key.geometry} material={materials.primatyColor} />
        <mesh
          geometry={nodes.KeyDiamon.geometry}
          material={materials.secondColor}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("assets/models//key.glb");