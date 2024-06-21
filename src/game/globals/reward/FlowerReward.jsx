import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function FlowerReward(props) {
  const { nodes, materials } = useGLTF("assets/models/rewardFlower.glb");
  const flowerAnimation = useRef(null);
  const yRotationAxies = new THREE.Vector3(0, 0, 0);
  const quaternionRotation = useMemo(() => new THREE.Quaternion(), []);
  const [crono, setCrono] = useState(0);

  useFrame(({ clock }) => {
    setCrono(crono + 0.5);
    flowerAnimation.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.05)
    );

    flowerAnimation.current?.setNextKinematicTranslation({
      x: flowerAnimation.current.translation().x,
      y: flowerAnimation.current.translation().y,
      z: flowerAnimation.current.translation().z,
    });
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody
        ref={flowerAnimation}
        type="kinematicPosition"
        colliders="cuboid"
      >
        <mesh
          geometry={nodes.Flower_1.geometry}
          material={materials["3trColorFlow"]}
        />
        <mesh
          geometry={nodes.Flower_2.geometry}
          material={materials.PrimaryColorFlow}
        />
        <mesh
          geometry={nodes.Flower_3.geometry}
          material={materials.SecundayColorFlow}
        />
        <mesh
          geometry={nodes.Flower_4.geometry}
          material={materials["4trColorFlow"]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("assets/models/rewardFlower.glb");
