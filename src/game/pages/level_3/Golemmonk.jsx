import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Pathfinding } from "three-pathfinding";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { BallCollider, CylinderCollider, RigidBody } from "@react-three/rapier";

export default function Golemmonk({ positions, ...props }) {
  const { nodes, materials } = useGLTF(
    "assets/models/characters/rockVilllan.glb"
  );
  const ref = useRef();
  const sensorMeshRef = useRef();
  const cilinderMeshRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const pathfinding = useRef(new Pathfinding());
  const [zone, setZone] = useState(null);
  const [path, setPath] = useState([]);
  const [navMeshObj, setNavMesh] = useState(null);
  const [chasing, setChasing] = useState(false);
  const [movementVector, setMovementVector] = useState([0, 0, 0]);
  const sonidoGolem = useState(new Audio("/assets/sounds/GolemProx.mp3"));

  const { scene } = useGLTF("assets/models/level_3/navmesh.glb");

  let velocityVar = 8;
  let targetPosition = new THREE.Vector3();

  useEffect(() => {
    if (scene) {
      const navMesh = scene.children[0]; // Asegúrate de que esto apunta a tu malla de navegación
      if (navMesh && navMesh.geometry) {
        const zoneData = Pathfinding.createZone(navMesh.geometry);
        pathfinding.current.setZoneData("level1", zoneData);
        setZone(zoneData);
        setNavMesh(navMesh);
      }
    }
  }, [scene]);

  const calculatePath = (start, end) => {
    if (!zone) return;
    const groupID = pathfinding.current.getGroup("level1", start);
    const newPath = pathfinding.current.findPath(start, end, "level1", groupID);
    setPath(newPath);
  };

  useEffect(() => {
    if (positions.length > 0) {
      ref.current.position.copy(positions[0]); // Empezar desde la primera posición
      setCurrentIndex(1);
    }
  }, [positions]);

  useFrame((state, delta) => {
    if (
      positions.length > 0 &&
      currentIndex < positions.length &&
      chasing == false
    ) {
      targetPosition = positions[currentIndex];
      const currentPosition = ref.current.position;
      const direction = new THREE.Vector3().subVectors(
        targetPosition,
        currentPosition
      );
      const distance = direction.length();
      const velocity = direction
        .normalize()
        .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí

      if (distance < 0.1) {
        setCurrentIndex((currentIndex + 1) % positions.length); // Mover al siguiente índice en el ciclo
      } else {
        ref.current.position.add(velocity);
      }
    } else if (
      positions.length > 0 &&
      currentIndex < positions.length &&
      chasing == true
    ) {
      const currentPosition = ref.current.position;
      const direction = new THREE.Vector3().subVectors(
        targetPosition,
        currentPosition
      );
      const distance = direction.length();
      const velocity = direction
        .normalize()
        .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí

      if (distance < 0.1) {
        setChasing(false); // Mover al siguiente índice en el ciclo
      } else {
        ref.current.position.add(velocity);
      }
    }

    if (sensorMeshRef.current && ref.current && cilinderMeshRef.current) {
      sensorMeshRef.current.setTranslation(ref.current.position, true);
      cilinderMeshRef.current.setTranslation(ref.current.position, true);
    }
  });

  return (
    <>
      <group {...props} dispose={null} ref={ref}>
        <mesh
          geometry={nodes.EyesCont.geometry}
          material={materials.ThirdMaterial}
        />
        <mesh
          geometry={nodes.Head.geometry}
          material={materials.PrimaryMaterial}
        />
        <mesh
          geometry={nodes.Arms.geometry}
          material={materials.PrimaryMaterial}
        />
        <mesh
          geometry={nodes.Body.geometry}
          material={materials.PrimaryMaterial}
        />
        <mesh
          geometry={nodes.BodyDetails.geometry}
          material={materials.SecondMaterial}
        />
        <mesh
          geometry={nodes.Ring.geometry}
          material={materials.ThirdMaterial}
        />
        <mesh
          geometry={nodes.Eyes.geometry}
          material={materials.QuarterMaterial}
        />
      </group>

      <RigidBody
        colliders={false}
        type="kinematicPosition"
        name="Enemy"
        lockRotations
        ref={sensorMeshRef}
        position={[0, 0, 0]}
      >
        <BallCollider
          onIntersectionEnter={(object) => {
            if (object.rigidBodyObject.name == "player") {
              targetPosition = object.other.rigidBodyObject.position;
              velocityVar = 2.5;
              setChasing(true);
              sonidoGolem.currentTime = 0;
              sonidoGolem.volume = 0.5;
              sonidoGolem.play();
            }
          }}
          onIntersectionExit={(object) => {
            if (object.rigidBodyObject.name == "player") {
              velocityVar = 8;
              setChasing(false);
              sonidoGolem.currentTime = 0;
              sonidoGolem.volume = 0.5;
              sonidoGolem.stop();
            }
          }}
          args={[12]}
          position={[0, 0, 1.5]}
          sensor
        />
      </RigidBody>

      <RigidBody
        colliders={false}
        type="kinematicPosition"
        name="MyObject"
        ref={cilinderMeshRef}
        position={[0, 0, 0]}
      >
        <CylinderCollider
          args={[4, 5, 4]} // Radius, height, and depth of the cylinder collider
          position={[0, 0.5, 1.5]} // Relative position of the collider within the RigidBody
          onCollisionEnter={(e) => {
            if (e.other.rigidBodyObject.name === "player") {
              if (!villain.death) {
                if (avatar.vidas > 0) {
                  setAvatar({ ...avatar, vidas: avatar.vidas - 1 });
                } else {
                  setAvatar({ ...avatar, animation: "Death" });
                }
              }
            }
          }}
        />
      </RigidBody>
    </>
  );
}

useGLTF.preload("assets/models/level_3/navmesh.glb");
