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

export const Level1 = (props) => {
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
                        <Physics debug={true} gravity={[0, -1.4, 0]}>
                            <World />
                            <Avatar position={[5.3, -0.7, -4.35]} scale={0.002} />
                        </Physics>
                        <WelcomeText text={props.text} position={props.position} size={props.size} rotation={props.rotation} />
                    </Suspense>
                    <Contronls />
                </Canvas>
            </KeyboardControls>

        </>
    )
}
