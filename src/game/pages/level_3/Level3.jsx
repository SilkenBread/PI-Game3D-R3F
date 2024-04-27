
import { BakeShadows, KeyboardControls, OrbitControls } from "@react-three/drei";
import Environments from "../../globals/Environments";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import World from "./World";
import Contronls from "../../globals/controls/Controls";
import Avatar from "../../globals/player/Avatar";
import useMovements from "../../../utils/key-movements";
import { Canvas } from "@react-three/fiber";
import Lights from "../level_3/lights/Lights";
import Golemmonk from "./Golemmonk";
import WelcomeText from "../../globals/WelcomeText";
import Ecctrl from "ecctrl";

export const Level3 = (props) => {
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
                        <Physics debug={false} gravity={[0, -1.4, 0]}>
                            <World />
                            <Ecctrl
                                camInitDis={-2}
                                camMaxDis={-2}
                                position={[5.3, -0.7, -4.35]}
                                jumpVel={1}
                                moveImpulsePointY={1}
                                maxVelLimit={2}
                                springK={0}
                                floatHeight={0}
                            >
                                <Avatar scale={0.002} />
                            </Ecctrl>
                        </Physics>
                        <WelcomeText text={props.text} position={props.position} size={props.size} rotation={props.rotation} />
                        {/* <Golemmonk position = {[ww]}/> */}
                    </Suspense>
                    <Contronls />
                </Canvas>
            </KeyboardControls>

        </>
    )
}
