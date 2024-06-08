import { Helper, SpotLight, useHelper } from "@react-three/drei";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useControls } from "leva";
import { AmbientLight, PointLightHelper, SpotLightHelper } from "three";

const Ligths = () => {
  const pointLigthRef = useRef(null);
  // const spotLightRef = useRef(null);
  // const targetRef = useRef();
  // const targetRef2 = useRef();

  // useHelper(pointLigthRef, PointLightHelper);

  // const optionPointLigh = useMemo(() => {
  //   return {
  //     positionED: { value: [0, 0, 0] },
  //     colorED: { value: "#9AFFD7" },
  //     intensityED: { value: 1200 },
  //     distanceED: { value: 150 },
  //     decayED: { value: 1.9 },
  //   };
  // });

  // const { positionED, colorED, intensityED, distanceED, decayED } = useControls(
  //   "LigthsControls",
  //   optionPointLigh
  // );

  return (
    <>
      <directionalLight
        // ref={directionalRef}
        castShadow={true}
        position={[-32, 70, -19]}
        color={"#ffffff"}
        intensity={2.5}
        distance={2000}
        shadow-mapSize={[2048, 2048]}
      />

      <directionalLight
        position={[32, 70, 19]}
        color={"#ffffff"}
        intensity={2.5}
        distance={2000}
      />

      {/* <pointLight
        ref={pointLigthRef}
        position={positionED}
        color={colorED}
        intensity={intensityED}
        distance={distanceED}
        decay={decayED}
      /> */}

      {/*LUCES RECOMPENSAS*/}
      <pointLight
        position={[-32.21, 0, -45.87]}
        color={"#fc0000"}
        intensity={1000}
        distance={15}
        decay={1.9}
      />

      <pointLight
        position={[43.63, 0, 68.0]}
        color={"#fc0000"}
        intensity={1000}
        distance={15}
        decay={1.9}
      />

      <pointLight
        position={[39.24, 0, 24.0]}
        color={"#fc0000"}
        intensity={1000}
        distance={15}
        decay={1.9}
      />
    </>
  );
};

export default Ligths;
