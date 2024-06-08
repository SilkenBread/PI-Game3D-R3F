import {
  BakeShadows,
  KeyboardControls,
  OrbitControls,
} from "@react-three/drei";
import Environments from "../../globals/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense, useContext, useEffect, useState } from "react";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import Avatar2 from "../../globals/player/Avatar2";
import useMovements from "../../../utils/key-movements";
import { Canvas } from "@react-three/fiber";
import Lights from "../level_3/lights/Lights";
import Golemmonk from "./Golemmonk";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";
import World3FOp from "./WorldFOp";
import * as THREE from 'three';
import RewardLevel3 from "./rewards/RewardLevel3";
import CheckPointsLlv3 from "./checkpoints/CheckPointsLlv3";
import Menu from "../../globals/menu/Menu";
import AlertasUI from "../../globals/menu/AlertasUI";
import MainLayaout from "../../layouts/MainLayaout";

import { authContext, useAuth } from "../../../context/AuthContext";
import { createUser, readUser } from "../../../db/users-collections";

export const Level3 = (props) => {
  const context = useContext(authContext);
  const map = useMovements();

  const auth = useAuth();

  const saveDataUser = async (valuesUser) => {
    const { success, data } = await readUser(valuesUser.email)

    if (!success)
      await createUser(valuesUser)

    context.setPosition(data[0]);
  }

  const [dataUser, setDataUser] = useState('');

  useEffect(() => {
    if (auth.userLogged) {
      const { displayName, email, photoURL } = auth.userLogged

      setDataUser({ displayName, email, photoURL });

      saveDataUser({
        name: displayName,
        email: email,
      })
    }
  }, [auth.userLogged])

  const positions = [
    new THREE.Vector3(45, 0.8, -57),
    new THREE.Vector3(-10, 0.8, 80),
    new THREE.Vector3(-50, 0.8, -45),
    new THREE.Vector3(76, 0.8, 20),
    new THREE.Vector3(-72, 0.8, 20)
  ];

  return (
    <>
      <KeyboardControls map={map}>
        <MainLayaout info={dataUser} text={props.text} />
        <Menu />
        <AlertasUI />
        <Canvas
          camera={{
            position: [0, 4, 8],
          }}
          shadows={true}
        >
          <OrbitControls />
          <Perf position="top-left" />
          <Suspense fallback={null}>
            <Lights />
            <BakeShadows />
            <Environments />
            <Physics debug={false} gravity={[0, -9, 0]}>
              <World3FOp />
              <Ecctrl
              <Golemmonk position={[38, 0.8, 26]} positions={positions} />
              <Ecctrl
                name="player"
                capsuleHalfHeight={0.5}
                capsuleRadius={0.38}
                autoBalanceSpringK={5.0}
                autoBalanceDampingC={0.1}
                autoBalanceSpringOnY={0.1}
                autoBalanceDampingOnY={0.025}
                camInitDis={-2}
                camMaxDis={-2}
                position={[
                  context.position?.position_level_3[0],
                  context.position?.position_level_3[1],
                  context.position?.position_level_3[2]
                //  0, 3, 0
                ]}
                position={[0,3,0]}
                jumpVel={3}
                moveImpulsePointY={1.5}
                maxVelLimit={5}
                springK={0}
                floatHeight={0}
              >
                <Avatar2 scale={0.003} />
              </Ecctrl>
              <RewardLevel3 />
              <CheckPointsLlv3 />
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
  )
}