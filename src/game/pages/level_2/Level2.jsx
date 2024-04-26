import { BakeShadows, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights";
import Environments from "../../globals/Environments";
import Shape from "./Shape";
import World2 from "./World";
import WelcomeText from "./WelcomeText";

export const Level2 = (props) => {
    return (
        <>
            <Canvas
                shadows={true}
            >
                <Perf position="top-left" />
                <OrbitControls
                    target={[0, 0.8, -5.5]}
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                />
                <Suspense fallback={null} >
                    <Lights />
                    <BakeShadows />
                    <Environments />
                    <Physics debug={true} gravity={[0, -1.4, 0]}>
                        <World2 />
                        <Shape position={[0,-0.2,0]}/>
                        <RigidBody position={[0, 3, 7.2]} type="fixed">
                            <CuboidCollider args={[7, 4, 0.5]} />
                        </RigidBody>
                        <RigidBody position={[0, 3, -7.2]} type="fixed">
                            <CuboidCollider args={[7, 4, 0.5]} />
                        </RigidBody>
                        <RigidBody position={[7.2, 3, 0]} type="fixed">
                            <CuboidCollider args={[0.5, 4, 7]} />
                        </RigidBody>
                        <RigidBody position={[-7.2, 3, 0]} type="fixed">
                            <CuboidCollider args={[0.5, 4, 7]} />
                        </RigidBody>
                    </Physics>
                </Suspense>
                <WelcomeText />
            </Canvas>
        </>
    )
}