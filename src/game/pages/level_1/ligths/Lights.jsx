import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { color, distance } from "three/examples/jsm/nodes/Nodes.js";

const Lights = () => {
  const directionalRef = useRef(null);
  const pointLigthRef = useRef(null);
  const targetRef = useRef();

  useHelper(directionalRef, DirectionalLightHelper);

  const optionPointLigh = useMemo(() => {
    return {
      positionED: { value: [1, 1, 1] },
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
      <mesh ref={targetRef} position={[0, 0, -25]} />

      <directionalLight
        intensity={0.3}
        castShadow={true}
        position={[0, 90, -100]}
        distance = {200}
        target={targetRef.current}
      />

      <pointLight
        position={[0, 5, -16]}
        color={"#9a99ff"}
        intensity={260}
        castShadow={true}
        distance={30}
        decay={2.05}
      />

      <pointLight
        position={[13.9, 20.5, -60.6]}
        color={"#ffc799"}
        intensity={260}
        castShadow={true}
        distance={35}
        decay={2.05}
      />

      <pointLight
        position={[27.7, 39.7, -15.3]}
        color={"#e399ff"}
        intensity={260}
        castShadow={true}
        distance={36}
        decay={2.05}
      />

      <pointLight
        position={[-7.9,61.7,-49.8]}
        color={"#ef5252"}
        intensity={260}
        castShadow={true}
        distance={36}
        decay={2.05}
      />
    </>
  );
};

export default Lights;
