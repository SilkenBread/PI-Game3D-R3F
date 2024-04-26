import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "./game/globals/Environments";
import World from './game/pages/level_3/World';
import World2 from './game/pages/level_2/World';
import Lights from "./game/pages/level_2/Lights";
import { Perf } from "r3f-perf";
import WelcomeText from "./game/pages/level_2/WelcomeText";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import Shape from "./game/pages/level_2/Shape";

const App = () => {
    return (
        <>
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
                    <Shape position={[0, 0, 0]} />
                    <RigidBody position={[0, 4, 7.2]} type="fixed">
                        <CuboidCollider args={[7, 4, 0.5]} />
                    </RigidBody>
                    <RigidBody position={[0, 4, -7.2]} type="fixed">
                        <CuboidCollider args={[7, 4, 0.5]} />
                    </RigidBody>
                    <RigidBody position={[7.2, 4, 0]} type="fixed">
                        <CuboidCollider args={[0.5, 4, 7]} />
                    </RigidBody>
                    <RigidBody position={[-7.2, 4, 0]} type="fixed">
                        <CuboidCollider args={[0.5, 4, 7]} />
                    </RigidBody>
                </Physics>
            </Suspense>
            <WelcomeText />
            {/* <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <World /> */}
        </>

    );
}

export default App;