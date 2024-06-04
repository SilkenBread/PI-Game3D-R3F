import { Helper, useHelper } from "@react-three/drei";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useControls } from "leva";
import { AmbientLight, PointLightHelper, SpotLightHelper } from "three";

const Ligths = () => {
    const pointLigthRef = useRef(null);
    const spotLightRef = useRef(null);
    const targetRef = useRef();
    const targetRef2 = useRef();

    // useHelper(spotLightRef, SpotLightHelper);

    // const optionPointLigth = useMemo(() => {
    //     return {
    //         positionEP: { value: [0, 0, 0] },
    //         colorED: { value: "white" },
    //         intensityED: { value: {} }
    //     };
    // });

    // const { positionEP, colorED, intensityED } = useControls("SheperLigtsControls", optionPointLigth);

    return (
        <>
            <directionalLight
                // ref={directionalRef}
                castShadow={true}
                position={[-32, 70, -19]}
                color={"#ffffff"}
                intensity={3.5}
                distance={2000}
                shadow-mapSize={[2048, 2048]}
            />
            {/* <mesh ref={targetRef} position={[0, 0, 0]} />
            <mesh ref={targetRef2} position={[0, 0, 86]} />

            <spotLight
                power={16000}
                castShadow={true}
                position={[0, 20, 0]}
                color={'#91816c'}
                distance={25}
                angle={0.523599}
                decay={1.1}
                target={targetRef.current}
            />

            <spotLight
                power={17000}
                castShadow={true}
                position={[0, 40, 86]}
                color={'#979494'}
                distance={50}
                angle={0.610865}
                decay={1.3}
                target={targetRef2.current}
            /> */}
        </>
    );
};

export default Ligths;
