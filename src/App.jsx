import { OrbitControls } from "@react-three/drei";
import World from './game/pages/level_one/World';

const App = () => {
    return (
        <>
            <ambientLight />
            <directionalLight position={[10, 10, 5]} />
            <OrbitControls makeDefault />
            <World />
        </>

    );
}

export default App;