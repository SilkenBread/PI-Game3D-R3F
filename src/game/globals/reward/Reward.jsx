import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function Reward(props) {
  const { nodes, materials } = useGLTF("assets/models/Reward.glb");
  const rewardsChasisERef = useRef(null);
  const rewardsChasisIRef = useRef(null);
  const rewardsNucleoRef = useRef(null);
  const [crono, setCrono] = useState(0);

  const amplitude = 0.2;
  const yRotationAxies = new THREE.Vector3(0, 0, 0);
  const quaternionRotation = useMemo(() => new THREE.Quaternion(), []);

  useFrame(({ clock }) => {
    setCrono(crono + 0.1);
    rewardsNucleoRef.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setX(1), crono * 0.1)
    );

    rewardsChasisERef.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(1), crono * 0.3)
    );

    rewardsChasisIRef.current?.setNextKinematicRotation(
      quaternionRotation.setFromAxisAngle(yRotationAxies.setY(-1), crono * 0.3)
    );
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody
        ref={rewardsNucleoRef}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nucleo.geometry}
          material={nodes.Nucleo.material}
        />
      </RigidBody>

      <RigidBody
        ref={rewardsChasisIRef}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChasisI.geometry}
          material={nodes.ChasisI.material}
        />
      </RigidBody>

      <RigidBody
        ref={rewardsChasisERef}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChasisE.geometry}
          material={nodes.ChasisE.material}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("assets/models/Reward.glb");
