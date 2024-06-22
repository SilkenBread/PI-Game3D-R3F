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
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Contronls from "../../globals/controls/Controls";
// import Avatar from "../../globals/player/Avatar";
// import Avatar2 from "../../globals/player/Avatar2";
import useMovements from "../../../utils/key-movements";
import Ecctrl from "ecctrl";
import WelcomeText from "../../globals/WelcomeText";
import World4FOp from "./World4FOp";
import Villain3Skull from "../../globals/villains/Villain3Skull";
import CheckPointsLlv4 from "./checkpoints/CheckPointsLvl4";
import RewardLevel4 from "./rewards/RewardLevel4";
import GhostT from "./GhostT";
import Ghost from "./GhostT";
import Menu from "../../globals/menu/Menu";
import AlertasUI from "../../globals/menu/AlertasUI";
import MainLayaout from "../../layouts/MainLayaout";
import { useAuth } from "../../../context/AuthContext";
import { createUser, readUser } from "../../../db/users-collections";
import { socket } from "../../../socket/socket-manager";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../../components/Players";
import Avatar2 from "./player/Avatar2";
import Avatar1 from "./player/Avatar1";
import Player1 from "./player/Player1";
import Player2 from "./player/Player2";

export const Level4 = (props) => {
  const map = useMovements();
  const auth = useAuth();
  const [players] = useAtom(playersAtom)

  useEffect(() => {
    socket.emit("players-connected")
  }, [])

  const saveDataUser = async (valuesUser) => {
    const { success } = await readUser(valuesUser.email)

    if (!success)
      await createUser(valuesUser)
  }

  const [dataUser, setDataUser] = useState('');

  useEffect(() => {
    if (auth.userLogged) {
      console.log(auth.userLogged);
      const { displayName, email, photoURL } = auth.userLogged

      setDataUser({ displayName, email, photoURL });

      saveDataUser({
        name: displayName,
        email: email,
      })
    }
  }, [auth.userLogged])

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
          <Perf position="top-left" />
          <OrbitControls />
          {/* <FlyControls rollSpeed={0.2} movementSpeed={5}/> */}
          <Suspense fallback={null}>
            <Lights />
            <BakeShadows />
            {/* <Environments/> */}
            <Physics debug={true} timeStep={'vary'} gravity={[0, -8, 0]}>
              <World4FOp />
              
              <Ghost />
              {/* <Villain3Skull position={[-4, 22, -503]} /> */}
              <CheckPointsLlv4 />
              <RewardLevel4 />
              <Player1 />
              <Player2 />
              {/* <Avatar1 scale={0.002} position={[0, 10, 0]}/> */}
              {/* <Avatar2 scale={0.0025} position={[0, 10, 0]}/> */}
            </Physics>
            <Contronls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </>
  );
};
