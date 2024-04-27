
import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import World from "./World";
import { Canvas } from "@react-three/fiber";
import Lights from "../level_3/lights/Lights";
import Golemmonk from "./Golemmonk";
import WelcomeText from "../../globals/WelcomeText";

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
                    <OrbitControls MakeDefault />
                    <Physics debug={false} gravity={[0, -1.4, 0]}>
                        <World />
                    </Physics>
                    <WelcomeText text = {props.text} position= {props.position} size={props.size} rotation={props.rotation} />
                    <Golemmonk position = {[0, 0, 0]}/>
                </Suspense>
            </Canvas>
        </>
    )
}
