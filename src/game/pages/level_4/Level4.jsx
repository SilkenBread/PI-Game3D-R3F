
import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import Lights from "./lights/Lights"
import World from "./World"
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Knight from "./Knight"
import Ghost from "./Ghost";

// import WelcomeText from "../level_2/abstractions/WelcomeText";

export const Level4 = (props) => {
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
                    <OrbitControls target={[0, 1.5, 0]} enableZoom={true} enablePan={true} />

                    <Physics debug={false} gravity={[0, -1.4, 0]}>
                        <World />
                    </Physics>

                    <Knight position = {[0, 2.5, 4]} scale = {[0.45,0.45,0.45]}/>
                    <Ghost position = {[-4,55,-503]} scale = {[5.4,5.4,5.4]} />
                </Suspense>
            </Canvas>
        </>
    )
}
