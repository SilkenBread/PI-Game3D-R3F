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
                    <Physics debug={true} gravity={[0, -1.4, 0]}>
                        <World2 />
                        <Avatar position={[5.3, 0.7, -4.35]} scale={0.002} />
                        <Shape position={[0, 0, 0]} />
                    </Physics>
                    <WelcomeText text = {props.text} position= {props.position} size={props.size}/>
                </Suspense>
                <Contronls />
            </Canvas>
        </KeyboardControls>
    )
}