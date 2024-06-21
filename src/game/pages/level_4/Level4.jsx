import {
  BakeShadows,
  FlyControls,
  KeyboardControls,
  OrbitControls,
} from "@react-three/drei";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Ghost from "./Ghost";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import Avatar2 from "../../globals/player/Avatar2";
import useMovements from "../../../utils/key-movements";
import Ecctrl from "ecctrl";
import WelcomeText from "../../globals/WelcomeText";
import World4FOp from "./World4FOp";
import Villain3Skull from "../../globals/villains/Villain3Skull";
import CheckPointsLlv4 from "./checkpoints/CheckPointsLvl4";
import RewardLevel4 from "./rewards/RewardLevel4";
import * as THREE from 'three';
import GhostsManager from "./GhostsManager";

export const Level4 = (props) => {
  const map = useMovements();

  const positions = [
    // Fantasma 1
    [new THREE.Vector3(-18, -2, -5),
    new THREE.Vector3(-15, 0, -10),
    new THREE.Vector3(-22, 1, -12),
    new THREE.Vector3(-18, 4, -18)],

    // Fantasma 2
    [new THREE.Vector3(-26, 6, -24),
    new THREE.Vector3(-24, 8, -29),
    new THREE.Vector3(-31, 8.5, -34),
    new THREE.Vector3(-29, 10, -42)],

    // Fantasma 3
    [new THREE.Vector3(-27, 12, -46),
    new THREE.Vector3(-30, 13, -50),
    new THREE.Vector3(-26, 14, -55),
    new THREE.Vector3(-19, 14, -55)],

    // Fantasma 4
    [new THREE.Vector3(0, 15, -67),
    new THREE.Vector3(-4, 15, -54)],

    // Fantasma 5
    [new THREE.Vector3(13, 16, -58),
    new THREE.Vector3(4, 16, -49)],

    // Fantasma 6
    [new THREE.Vector3(18, 17, -47),
    new THREE.Vector3(12, 17, -36)],

    // Fantasma 7
    [new THREE.Vector3(15, 42, -42.5),
    new THREE.Vector3(20, 18, 37.5),
    new THREE.Vector3(27, 20, -36)],

    // Fantasma 8
    [new THREE.Vector3(33, 17, -38),
    new THREE.Vector3(33, 19, -42),
    new THREE.Vector3(40, 19, -41),
    new THREE.Vector3(46, 21, -48)],

    // Fantasma 9
    [new THREE.Vector3(44, 22, -53),
    new THREE.Vector3(46, 22.5, -60),
    new THREE.Vector3(50, 22.5, -65),
    new THREE.Vector3(50, 22.5, -70)],

    // Fantasma 10
    [new THREE.Vector3(45, 22.5, -68),
    new THREE.Vector3(44, 22.5, -73),
    new THREE.Vector3(48, 22.5, -75),
    new THREE.Vector3(45, 22.5, -79)],

    // Fantasma 11
    [new THREE.Vector3(-3, 36.5, -170),
    new THREE.Vector3(-3, 40.5, -199),
    new THREE.Vector3(-1, 40.5, -215)],

    // Roca 1
    [new THREE.Vector3(-17, 26.5, -86),
    new THREE.Vector3(16, 18.5, -70)],

    // Roca 2
    [new THREE.Vector3(1, 44, -182),
      new THREE.Vector3(1, 32, -135)],
  ];

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas
          camera={{
            position: [0, 4, 8],
          }}
          shadows={true}
        >
          <Perf position="top-left" />
          <OrbitControls />
          {/* <FlyControls rollSpeed={0.2} movementSpeed={5}/> */}
          <Suspense fallback={null}>
            <Lights />
            <BakeShadows />
            {/* <Environments/> */}
            <Physics debug={false} gravity={[0, -8, 0]}>
              <World4FOp />
              {/* <Ecctrl
                name="player"
                camInitDis={-4}
                camMaxDis={-2}
                position={[0, 0, 0]}
                jumpVel={4.5}
                slopJumpMult={0.1}
                moveImpulsePointY={1.5}
                maxVelLimit={3}
                springK={0}
                floatHeight={0}
                sprintJumpMult={1.4}
                // autoBalance={true}
                // enabledRotations={[false,true,false]}
              >
                <Avatar2 scale={0.002} />
              </Ecctrl> */}
              <Ghost />
              {/* <GhostsManager positions={positions}/> */}
              <CheckPointsLlv4 />
              <RewardLevel4 />
            </Physics>
            
            <Villain3Skull position={[-4, 45, -503]} scale={7.4} />
            <Contronls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
};
