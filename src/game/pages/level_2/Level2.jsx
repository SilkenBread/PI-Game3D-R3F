import {
  BakeShadows,
  KeyboardControls,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import useMovements from "../../../utils/key-movements";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";
import Avatar2 from "../../globals/player/Avatar2";
import WorldS2 from "./world/WorldS2";
import Villain2 from "../../globals/villains/Villain2";
import Menu from "../../globals/menu/Menu";
import MainLayaout from "../../layouts/MainLayaout";
import Shooter from "./world/Shooter";
import {
  RecoilRoot,
} from 'recoil';
import RewardLevel2 from "./rewards/RewardLevel2";
import { Html } from "@react-three/drei"
import CheckPointsLlv2 from "./checkpoints/CheckPointsLlv2";
import AlertasUI from "../../globals/menu/AlertasUI";

export const Level2 = (props) => {
  const map = useMovements();

  return (
    <KeyboardControls map={map}>
      <MainLayaout info={"hola"} text={props.text} />
      <Menu />
      <AlertasUI />
      <Canvas
        camera={{
          position: [0, 3, 8],
        }}
        shadows={true}
      >
        <OrbitControls />
        <RecoilRoot>
          <Shooter />
          <Perf position="top-left" />
          <Suspense fallback={null} >
            <Lights />
            <Environments />
            <Physics debug={false} gravity={[0, -1.4, 0]}>
              <WorldS2 />
              <Ecctrl
                camInitDis={-2}
                camMaxDis={-2}
                camInitDir={{ x: 0, y: 97 }}
                position={[
                  // 0, 0.5, 0
                  -65, 30, 55
                ]}
                jumpVel={1}
                moveImpulsePointY={1}
                maxVelLimit={2}
                springK={0}
                floatHeight={0}
                sprintJumpMult={1.4}
              >
                <Avatar scale={0.002} />
              </Ecctrl>
              <Villain2 position={[-65, 29, 70]} />
              <RewardLevel2 />
              <CheckPointsLlv2 />
            </Physics>
            <WelcomeText
              text={props.text}
              position={props.position}
              size={props.size}
              rotation={props.rotation}
            />
            <Contronls />
          </Suspense>
        </RecoilRoot>
      </Canvas>
    </KeyboardControls>
  )
}