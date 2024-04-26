
import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";

import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import World from "./World";
import { Canvas } from "@react-three/fiber";
import Lights from "../level_2/Lights";
import WelcomeText from "../level_2/WelcomeText";

export const Level3 = (props) => {
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
                    <World />
                </Physics>
            </Suspense>
            <WelcomeText text={props.text}/>
            </Canvas>
        </>
    )
}
