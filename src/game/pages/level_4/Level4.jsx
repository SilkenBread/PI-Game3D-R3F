
import { BakeShadows, KeyboardControls, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights"
import World from "./World"
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Knight from "./Knight"
import Ghost from "./Ghost";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import Avatar2 from "../../globals/player/Avatar2";
import useMovements from "../../../utils/key-movements";
import Ecctrl from "ecctrl";
import WelcomeText from "../../globals/WelcomeText";

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

                    <Suspense fallback={null} >
                        <Lights />
                        <BakeShadows />
                        <Environments />
                        <Physics debug={false} gravity={[0, -8, 0]}>
                            <World />
                            <Ecctrl
                                camInitDis={-5}
                                camMaxDis={-2}
                                position={[0, 3.1, 4]}
                                jumpVel={4.5}
                                slopJumpMult={0.1}
                                moveImpulsePointY={1.5}
                                maxVelLimit={5}
                                springK={0}
                                floatHeight={0}
                                sprintJumpMult = {6.0}
                            >
                                <Avatar2 scale={0.002} />
                            </Ecctrl>
                        </Physics>
                        <WelcomeText text={props.text} position={props.position} size={props.size} rotation={props.rotation} />
                        <Ghost position={[-4, 55, -503]} scale={[5.4, 5.4, 5.4]} />
                        <Contronls />
                    </Suspense>
                </Canvas>
            </KeyboardControls>
        </>
    )
}
