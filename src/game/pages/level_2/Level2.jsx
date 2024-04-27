import { BakeShadows, KeyboardControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights";
import Shape from "./world/Shape";
import World2 from "./world/World";
import Contronls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../../utils/key-movements";
import WelcomeText from "./abstractions/WelcomeText";

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
                    {/* <BakeShadows /> */}
                    <Environments />
                    <Physics debug={false} gravity={[0, -1.4, 0]}>
                        <World2 />
                        <Avatar />
                        <Shape position={[0, 0, 0]} />
                    </Physics>
                    {/* <WelcomeText text = {props.text}/> */}
                </Suspense>
                <Contronls />
            </Canvas>
        </KeyboardControls>
    )
}