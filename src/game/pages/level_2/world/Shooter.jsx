import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from "recoil";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export const avatarPositionState = atom({
  key: "avatarPosition", // unique ID (with respect to other atoms/selectors)
  default: { position: {}, rotation: {} }, // default value (aka initial value)
});

export const enemyPositionState = atom({
  key: "enemyPosition", // unique ID (with respect to other atoms/selectors)
  default: [{ x: -10, y: 10, z: 300 }, { x: 20, y: 20, z: 300 }, { x: -5, y: 20, z: 300 }, { x: -20, y: 5, z: 300 }, { x: 5, y: 15, z: 300 }, { x: 15, y: 25, z: 300 }] // default value (aka initial value)
});

export const laserPositionState = atom({
  key: "laserPositions", // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});

export const scoreState = atom({
  key: "score", // unique ID (with respect to other atoms/selectors)
  default: 0 // default value (aka initial value)
});

const ENEMY_SPEED = 0.1;

function Enemies() {
  const enemies = useRecoilValue(enemyPositionState);
  return (
    <group>
      {enemies.map((enemy) => (
        <mesh position={[enemy.x, enemy.y, enemy.z]} key={`${enemy.x}`}>
          <sphereGeometry attach="geometry" args={[2, 8, 8]} />
          <meshStandardMaterial attach="material" color="white" wireframe />
        </mesh>
      ))}
    </group>
  );
}

function distance(p1, p2) {
  const a = p2.x - p1.x;
  const b = p2.y - p1.y;
  const c = p2.z - p1.z;

  return Math.sqrt(a * a + b * b + c * c);
}

function GameTimer() {
  const [enemies, setEnemies] = useRecoilState(enemyPositionState);
  const [lasers, setLaserPositions] = useRecoilState(laserPositionState);
  const [score, setScore] = useRecoilState(scoreState);
  
  useFrame(({ mouse }) => {

    const hitEnemies = enemies
      ? enemies.map(
          (enemy) =>
            lasers.filter(
              () =>
                lasers.filter((laser) => distance(laser, enemy) < 3).length > 0
            ).length > 0
        )
      : [];

    if (hitEnemies.includes(true) && enemies.length > 0) {
      setScore(score + 1);
      console.log("hit detected");
    }

    // Move all of the enemies. Remove enemies that have been destroyed, or passed the player.
    setEnemies(
      enemies
        .map((enemy) => ({ x: enemy.x, y: enemy.y, z: enemy.z - ENEMY_SPEED }))
        .filter((enemy, idx) => !hitEnemies[idx] && enemy.z > 100)
    );
  });
  return null;
}


export default function Shooter() {

  return (
    <RecoilRoot>
      <Enemies />
      <GameTimer />
    </RecoilRoot>
  )
}