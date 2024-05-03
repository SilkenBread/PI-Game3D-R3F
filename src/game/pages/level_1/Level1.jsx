import { BakeShadows, KeyboardControls, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import useMovements from "../../../utils/key-movements";
import World from "./World";
import Lights from "./ligths/Lights";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";
import Avatar2 from "../../globals/player/Avatar2";
import Logout from "../../../components/logout/Logout";

export const Level1 = (props) => {
    const map = useMovements();

    return (
        <>
            <KeyboardControls map={map}>
                <Logout prev={'/'} next={'/Level2'} />
                <Canvas
                    camera={{
                        position: [0, 4, 8],
                    }}
                    shadows={true}
                >
                    <Perf position="top-left" />
                    <Suspense fallback={null} >
                        <Lights />
                        <BakeShadows />
                        <Environments />
                        <Physics debug={false} gravity={[0, -9, 0]}>
                            <World />
                            <Ecctrl
                                camInitDis={-5}
                                camMaxDis={-2}
                                position={[0, 2, 0]}
                                jumpVel={4.5}
                                slopJumpMult={0.1}
                                moveImpulsePointY={1.5}
                                maxVelLimit={5}
                                springK={0}
                                floatHeight={0}
                                sprintJumpMult = {1.0}
                            >
                                <Avatar2 scale={0.002} />
                            </Ecctrl>
                        </Physics>
                        <WelcomeText text={props.text} position={props.position} size={props.size} rotation={props.rotation} />
                    </Suspense>
                    <Contronls />
                </Canvas>
            </KeyboardControls >

        </>
    )
}
