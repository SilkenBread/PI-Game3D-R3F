import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { distance } from "three/examples/jsm/nodes/Nodes.js";

const Lights = () => {
  const directionalRef = useRef(null);
  const pointLigthRef = useRef(null);
  const targetRef = useRef();

  useHelper(pointLigthRef, PointLightHelper);

  const optionPointLigh = useMemo(() => {
    return {
      positionED: { value: [0, 91, -80] },
      colorED: {value: "#9AFFD7"},
      intensityED: {value: 1200},
      distanceED: {value: 150},
      decayED: {value: 1.9}
    };
  });

  const { positionED,colorED,intensityED,distanceED,decayED } = useControls("LigthsControls", optionPointLigh);

  return (
    <>
      <mesh ref={targetRef} position={[0, 250, 250]} />

      <directionalLight
        intensity={0.8}
        castShadow={true}
        position={[125, 450, 200]}
        target={targetRef.current}
      />

    <pointLight
        position={[7,74,-138]}
        color={"#9a99ff"}
        intensity={19097}
        castShadow = {true}
        distance={150}
        decay={2.05}
      />

      <pointLight
        position={[68,144,-420]}
        color={"#ff99da"}
        intensity={19097}
        castShadow = {true}
        distance={150}
        decay={2.05}
      />

      <pointLight
        position={[178,251,-144]}
        color={"#db99ff"}
        intensity={19097}
        castShadow = {true}
        distance={150}
        decay={2.05}
      />

    <pointLight
        position={[-47,387,-351]}
        color={"#f56d6d"}
        intensity={19097}
        castShadow = {true}
        distance={150}
        decay={2.05}
      />
    </>
  );
};

export default Lights;
