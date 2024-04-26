import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import Lights from "./Lights";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import World2 from "./World";
import WelcomeText from "./WelcomeText";
import { Canvas } from "@react-three/fiber";

export const Level2 = (props) => {
    return (
        <>
         <Canvas
        shadows={true}
    >
            <Perf position="top-left" />
            <Suspense fallback={null} >
                <Lights />
                <BakeShadows />
                <Environments />
                <OrbitControls makeDefault />
                <Physics debug={true}>
                    <World2 />
                </Physics>
            </Suspense>
            <WelcomeText text={props.text}/>
            </Canvas>
        </>
    )
}
