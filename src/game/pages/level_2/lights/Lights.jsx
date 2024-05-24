import { Sparkles, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, SpotLightHelper, PointLightHelper } from "three";

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
  
//   const pointLigthRef = useRef(null);
//   useHelper(pointLigthRef, PointLightHelper);
//   const optionPointLigh = useMemo(() => {
//     return {
//       positionED: { value: [1, 1, 1] },
//       colorED: { value: "#9AFFD7" },
//       intensityED: { value: 1200 },
//       distanceED: { value: 150 },
//       decayED: { value: 1.9 },
//     };
//   });
//   const { positionED, colorED, intensityED, distanceED, decayED } = useControls(
//     "LigthsControls",
//     optionPointLigh
//   );

  return (
    <>
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
        skyColor={new Color(0xe77502)}
        groundColor={new Color(0xe77502)}
        intensity={1}
      />

      <pointLight
        position={[-64.3,8.5,-1.9]}
        color={"#3149db"}
        intensity={1000}
        distance={30}
        decay={1.90}
      />

<pointLight
        position={[-11.9,7.9,71.6]}
        color={"#ffac00"}
        intensity={1000}
        distance={15}
        decay={1.90}
      />
    </>
  );
};

export default Lights;
