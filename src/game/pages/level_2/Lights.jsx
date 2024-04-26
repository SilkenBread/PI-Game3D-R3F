import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, SpotLightHelper } from "three";
import { interleaveAttributes } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const Lights = () => {
    const spotLightRef = useRef(null);
    useHelper(spotLightRef, SpotLightHelper)
    const optionsSpotlight = useMemo(() => {
        return {
            intensitySL: {value: 10, min: 0, max: 100, step: 1},
            colorSL: {value: "#FF0000"},
        }
    }, [])
    
    const {intensitySL, colorSL} = useControls("Spotlight", optionsSpotlight)

    return <>
        <ambientLight
                //color={new Color("FF7D33")}
                //intensity={1}
            />
        <directionalLight
                castShadow={true}
                position={[-1, 0.3, -1]}
                color={new Color(0xE77502)}
                intensity={5}
                shadow-mapSize={[2048,2048]}
                shadow-camera-far = {50}
                shadow-camera-left = {-10}
                shadow-camera-right = {10}
                shadow-camera-top = {10}
                shadow-camera-bottom = {-10}
            />
        {/* <pointLight
                position={[4, 2, 0]}
                color={new Color("FF0000")}
                intensity={8}
            /> */}
        <spotLight
            ref={spotLightRef}
            position={[0, 2, 0]}
            color={colorSL}
            angle={Math.PI / 3}
            intensity={intensitySL}
            distance={2}
            />
        <hemisphereLight
            position={[2, 30, -2]}
            skyColor={new Color(0xE77502)}
            groundColor={new Color(0xE77502)}
            intensity={1}
            />
    </>
}

export default Lights;