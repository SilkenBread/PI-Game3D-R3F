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

export const Level4 = (props) => {
  const map = useMovements();

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
              <Ecctrl
                name="player"
                camInitDis={-4}
                camMaxDis={-2}
                position={[
                  // -4, 45, -485
                  0, 1, 0
                ]}
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
              </Ecctrl>
              <Ghost />
              <Villain3Skull position={[-4, 22, -503]} />
              <CheckPointsLlv4 />
              <RewardLevel4 />
            </Physics>
            <Contronls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
};
