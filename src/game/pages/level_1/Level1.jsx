import {
  BakeShadows,
  KeyboardControls,
  OrbitControls,
} from "@react-three/drei";
import Environments from "../../globals/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import useMovements from "../../../utils/key-movements";
import Lights from "./ligths/Lights";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";
import Avatar2 from "../../globals/player/Avatar2";
import Logout from "../../../components/logout/Logout";
import WorldOp from "./World";
import Villain1 from "../../globals/villains/Villain1";
import MainLayaout from "../../layouts/MainLayaout";
import Reward from "../../globals/reward/Reward";
import RewardLevel1 from "./rewards/RewardLevel1";


export const Level1 = (props) => {
  const map = useMovements();

  return (
    <>
      <KeyboardControls map={map}>
      <MainLayaout />
        {/* <Logout prev={"/"} next={"/Level2"} /> */}
        <Canvas
          camera={{
            position: [0, 4, 8],
          }}
          shadows={true}
        >
          <Perf position="top-left" />
          <OrbitControls />
          <Suspense fallback={null}>
            <Lights />
            {/* <BakeShadows /> */}
            <Environments
              radius={100}
              count={3500}
            />
            <Physics debug={false} gravity={[0, -9, 0]}>
              <WorldOp />
              <Ecctrl
              debug={false}
                capsuleHalfHeight={0.5} 
                capsuleRadius={0.38}
                autoBalanceSpringK={8}
                autoBalanceDampingC={0.1}
                autoBalanceSpringOnY={0.1}
                autoBalanceDampingOnY={0.025}
                camInitDis={-5}
                camMaxDis={-2}
                position={[-7.9, 55.5, -45]}
                jumpVel={4.5}
                slopJumpMult={0.25}
                moveImpulsePointY={1.5}
                maxVelLimit={4.5}
                springK={0}
                floatHeight={0}
                sprintJumpMult={1.3}
              >
                <Avatar2 scale={0.003} />

              </Ecctrl>
              <Villain1 position={[-7.9, 52.5, -55]} />
              <RewardLevel1/>
            </Physics>
            <WelcomeText
              text={props.text}
              position={props.position}
              size={props.size}
              rotation={props.rotation}
            />
          </Suspense>
          <Contronls />
        </Canvas>
      </KeyboardControls>
    </>
  );
};
