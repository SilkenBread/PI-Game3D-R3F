import { Sparkles, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, SpotLightHelper } from "three";

const Lights = () => {
    // const directionalRef = useRef(null);
    // useHelper(directionalRef, SpotLightHelper)
    // const optionsSpotlight = useMemo(() => {
    //     return {
    //         positionED: { value: [-32, 9, -19] },
    //         intensitySL: { value: 9, min: 0, max: 100, step: 1 },
    //         colorSL: { value: "#8d6b49" },
    //     }
    // }, [])

    // const { positionED, intensitySL, colorSL } = useControls("LigthsControls", optionsSpotlight)

    return <>
        <directionalLight
            // ref={directionalRef}
            castShadow={true}
            position={[-32, 9, -19]}
            color={"#8d6b49"}
            intensity={9}
            distance={1000}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={500}
            shadow-camera-left={-100}
            shadow-camera-right={10}
            shadow-camera-top={100}
            shadow-camera-bottom={-100}
        />
        <hemisphereLight
            position={[2, 30, -2]}
            skyColor={new Color(0xE77502)}
            groundColor={new Color(0xE77502)}
            intensity={1}
        />
        <Sparkles
            color={"#FF7D33"}
            count={1000}
            size={6}
            scale={3}
            speed={0.5}
            position={[-22, 0, -23]}
        />
    </>
}

export default Lights;