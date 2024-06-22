import React, { useEffect, useRef, useState } from 'react';
import { Box, useGLTF } from '@react-three/drei';
import { BallCollider, CylinderCollider, RigidBody } from '@react-three/rapier';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { set } from 'firebase/database';

export default function Villain3Skull(props) {
  const { nodes, materials } = useGLTF('assets/models/characters/villains/Skeleton.glb');
  const SkeletonRB = useRef();
  const ref = useRef();
  const idRef = useRef(0);

  const sensorMeshRef = useRef();
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3(-4, 22, -503));
  const [boxes, setBoxes] = useState([]);
  const [boxCount, setBoxCount] = useState(0);
  const [InBoss, setInBoss] = useState(false);

  useFrame((state, delta) => {
    const currentPosition = ref.current.position;
    const direction = new THREE.Vector3().subVectors(targetPosition, currentPosition);
    const velocity = direction.normalize().multiplyScalar(1.5 * delta);

    ref.current.position.add(velocity);

    if (SkeletonRB.current && sensorMeshRef.current) {
      SkeletonRB.current.setTranslation(ref.current.position, true);
      sensorMeshRef.current.setTranslation(ref.current.position, true);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (InBoss) {
        if (boxCount < 20) {
          const newBox = {
            key: idRef.current,
            position: targetPosition.clone().add(new THREE.Vector3(0, 10, 0)),
          };
          idRef.current++;
          setBoxes((prevBoxes) => [...prevBoxes, newBox]);
          setBoxCount((prevCount) => prevCount + 1);
        } else {
          // Si se han creado 20 cajas, eliminar todas las cajas
          setBoxes([]);
          setBoxCount(0);
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [targetPosition]);

  return (
    <>
      <group {...props} dispose={null} ref={ref}>
        <mesh castShadow receiveShadow geometry={nodes.muñecas.geometry} material={materials.PrimaryColor} />
        <mesh castShadow receiveShadow geometry={nodes.columna.geometry} material={materials.PrimaryColor} />
        <mesh castShadow receiveShadow geometry={nodes.pelvis.geometry} material={materials.secondColor} />
        <mesh castShadow receiveShadow geometry={nodes.costillas.geometry} material={materials.secondColor} />
        <mesh castShadow receiveShadow geometry={nodes.manos.geometry} material={materials.secondColor} />
        <mesh castShadow receiveShadow geometry={nodes.alas.geometry} material={materials.secondColor} />
        <mesh castShadow receiveShadow geometry={nodes.head.geometry} material={materials.PrimaryColor} />
        <mesh castShadow receiveShadow geometry={nodes.Brazos.geometry} material={materials.PrimaryColor} />
        <mesh castShadow receiveShadow geometry={nodes.Piernas.geometry} material={materials.PrimaryColor} />
        <mesh castShadow receiveShadow geometry={nodes.pies.geometry} material={materials.secondColor} />
        <mesh castShadow receiveShadow geometry={nodes.head001.geometry} material={materials.secondColor} />
      </group>

      <RigidBody
        colliders={false}
        type="kinematicPosition"
        name="Enemy"
        lockRotations
        ref={sensorMeshRef}
        position={SkeletonRB.current?.position}
      >
        <BallCollider
          onIntersectionEnter={(object) => {
            if (object.rigidBodyObject.name === 'player') {
              setTargetPosition(object.other.rigidBodyObject.position);
              setInBoss(true);
            } else {
              setInBoss(false);
            }
          }}
          args={[50]}
          position={SkeletonRB.current?.position}
          sensor
        />
      </RigidBody>

      <RigidBody
        colliders={false}
        type="kinematicPosition"
        ref={SkeletonRB}
        position={[-4, 22, -503]}
      >
        <CylinderCollider
          args={[2.8, 0.7]} // Height, Radius
          position={[0, 3, 0.2]} // Relative position of the collider within the RigidBody
        />
      </RigidBody>

      {boxes.map((box) => (
        <RigidBody key={box.key} type="dynamic" position={box.position.toArray()}>
          <Box args={[2, 2, 2]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}

useGLTF.preload('assets/models/characters/villains/Skeleton.glb');
