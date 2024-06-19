import { Helper, Sparkles, useHelper } from "@react-three/drei";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useControls } from "leva";
import { PointLightHelper, SpotLightHelper } from "three";

const Ligths = () => {
  const pointLigthRef = useRef(null);
  const spotLightRef = useRef(null);
  const targetRef = useRef();
  const targetRef2 = useRef();

  const width = 90; //Ancho
  const height = 5; //Alto
  const depth = 290; //Prfundidad

  useHelper(pointLigthRef, PointLightHelper);

  const optionPointLigh = useMemo(() => {
    return {
      positionED: { value: [0, 0, 0] },
      colorED: { value: "#9AFFD7" },
      intensityED: { value: 1200 },
      distanceED: { value: 150 },
      decayED: { value: 1.9 },
    };
  });

  const { positionED, colorED, intensityED, distanceED, decayED } = useControls(
    "LigthsControls",
    optionPointLigh
  );

  return (
    <>
      <mesh ref={targetRef} position={[0, 0, -222]} />
      <mesh ref={targetRef2} position={[0, 0, -267]} />

      <pointLight
        ref={pointLigthRef}
        position={positionED}
        color={colorED}
        intensity={intensityED}
        distance={distanceED}
        decay={decayED}
      />

      <pointLight
        intensity={10000}
        castShadow={true}
        color={"#ffffff"}
        position={[2, 91, -80]}
        distance={400}
        decay={1.9}
        //shadow-mapSize={[3000, 3000]}
      />

      <pointLight
        intensity={9000}
        castShadow={true}
        color={"#efaab4"}
        position={[0, 91, -370]}
        distance={180}
        decay={1.9}
        //shadow-mapSize={[3000, 3000]}
      />

      <pointLight
        intensity={7000}
        castShadow={true}
        color={"#ff5656"}
        position={[-3, 69, -480]}
        distance={10000}
        decay={2}
        //shadow-mapSize={[3000, 3000]}
      />

      <pointLight
        position={[-99, 120, -370]}
        color={"#ff0000"}
        intensity={4000}
        distance={250}
        decay={1.9}
      />

      <pointLight
        position={[-99, 100, -510]}
        color={"#ff0000"}
        intensity={4000}
        distance={250}
        decay={1.9}
      />

      <pointLight
        position={[100, 110, -410]}
        color={"#ff0000"}
        intensity={4000}
        distance={250}
        decay={1.9}
      />

      <pointLight
        position={[0, 80, -580]}
        color={"#ff0000"}
        intensity={10000}
        distance={450}
        decay={1.9}
      />

      <ambientLight color={"#0083ff"} intensity={0.5} />

      <Sparkles
        position={[0, -14, -150]}
        count={1800}
        size={40}
        scale={[width, height, depth]}
        speed={5}
        color="#d14c2e"
        fade={true}
      />

      <Sparkles
        position={[0, -14, -400]}
        count={1800}
        size={40}
        scale={[width, height, depth]}
        speed={5}
        color="#d14c2e"
        fade={true}
      />
    </>
  );
};

export default Ligths;
