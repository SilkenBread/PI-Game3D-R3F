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

export default function Shooter() {

  // Game settings.
  const LASER_RANGE = 200;
  const LASER_Z_VELOCITY = 1;
  const ENEMY_SPEED = 0.1;
  const GROUND_HEIGHT = -50;

  function Lasers() {
    const lasers = useRecoilValue(laserPositionState);
    return (
      <group>
        {lasers.map((laser) => (
          <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" emissive="white" wireframe />
          </mesh>
        ))}
      </group>
    );
  }

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
      // Calculate hits and remove lasers and enemies, increase score.

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
      // Move the Lasers and remove lasers at end of range or that have hit the ground.
      setLaserPositions(
        lasers
          .map((laser) => ({
            id: laser.id,
            x: laser.x + laser.velocity[0],
            y: laser.y + laser.velocity[1],
            z: laser.z - LASER_Z_VELOCITY,
            velocity: laser.velocity,
          }))
          .filter((laser) => laser.z > -LASER_RANGE && laser.y > GROUND_HEIGHT)
      );
    });
    return null;
  }

  return (
    <>
    <RecoilRoot>
      <Enemies />
      <Lasers />
      <GameTimer />
    </RecoilRoot>
    </>
  )
}