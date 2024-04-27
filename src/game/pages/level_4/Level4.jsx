
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
import useMovements from "../../../utils/key-movements";

// import WelcomeText from "../level_2/abstractions/WelcomeText";

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
                        {/* <OrbitControls target={[0, 1.5, 0]} enableZoom={true} enablePan={true} /> */}

                        <Physics debug={true} gravity={[0, -1.4, 0]}>
                            <World />
                            <Avatar position={[0, 3.1, 4]} scale={0.002} />
                        </Physics>

                        {/* <Knight position={[0, 2.5, 4]} scale={[0.45, 0.45, 0.45]} /> */}
                        <Ghost position={[-4, 55, -503]} scale={[5.4, 5.4, 5.4]} />
                        <Contronls />
                    </Suspense>
                </Canvas>
            </KeyboardControls>
        </>
    )
}
