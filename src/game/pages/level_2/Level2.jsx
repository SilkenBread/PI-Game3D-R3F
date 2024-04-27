import { BakeShadows, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights";
import Shape from "./world/Shape";
import World2 from "./world/World";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import useMovements from "../../../utils/key-movements";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";
import Avatar2 from "../../globals/player/Avatar2";

export const Level2 = (props) => {
    const map = useMovements();

    return (
        <KeyboardControls map={map}>
            <Canvas
                camera={{
                    position: [0, 3, 8],
                }}
                shadows={true}
            >
                <Perf position="top-left" />
                <Suspense fallback={null} >
                    <Lights />
                    <Environments />
                    <Physics debug={false} gravity={[0, -1.4, 0]}>
                        <World2 />
                        <Ecctrl
                            camInitDis={-2}
                            camMaxDis={-2}
                            camInitDir= {{x: 0, y: 97}}
                            position={[31, 0.5, -22]}
                            jumpVel={1}
                            moveImpulsePointY={1}
                            maxVelLimit= {2}
                            springK={0}
                            floatHeight= {0}
                        >
                            <Avatar2 scale={0.002} />
                        </Ecctrl>
                        <Shape position={[0, 0, 0]} />
                    </Physics>
                    <WelcomeText text={props.text} position={props.position} size={props.size} rotation={props.rotation} />
                </Suspense>
                <Contronls />
            </Canvas>
        </KeyboardControls>
    )
}