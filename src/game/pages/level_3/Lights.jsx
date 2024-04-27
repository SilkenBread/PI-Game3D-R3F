import { Color } from "three";

const Lights = () => {
    return <>
        <ambientLight />
        <directionalLight
            castShadow={true}
            position={[-1, 0.5, -1]}
            color={new Color(0xE77502)}
            intensity={5}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
        />
    </>
}

export default Lights;