import { BakeShadows, OrbitControls } from "@react-three/drei";
import Environments from "./game/globals/Environments";
import World from './game/pages/level_3/World';
import World2 from './game/pages/level_2/World';
import Lights from "./game/pages/level_2/Lights";
import { Perf } from "r3f-perf";
import WelcomeText from "./game/pages/level_2/WelcomeText";

const App = () => {
    return (
        <>
            <Perf position="top-left" />
            <Lights />
            <BakeShadows />
            <Environments />
            <OrbitControls makeDefault />
            <World2>
                <WelcomeText />
            </World2>
            {/* <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <World /> */}
        </>

    );
}

export default App;