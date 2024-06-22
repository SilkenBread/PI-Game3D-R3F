import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { AmbientLight, DirectionalLightHelper, PointLightHelper } from "three";
import { color, distance } from "three/examples/jsm/nodes/Nodes.js";

const Lights = () => {
  const directionalRef = useRef(null);
  const pointLigthRef = useRef(null);
  const targetRef = useRef();

  useHelper(pointLigthRef, PointLightHelper);

  // const optionPointLigh = useMemo(() => {
  //   return {
  //     positionED: { value: [-30, 14, -59] },
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
      <mesh ref={targetRef} position={[0, 0, -25]} />

      {/* <pointLight
      ref={pointLigthRef}
        position={positionED}
        color={colorED}
        intensity={intensityED}
        distance={distanceED}
        decay={decayED}
      /> */}

      <ambientLight color="white" intensity={0.5}/>

      <directionalLight
        intensity={0.6}
        castShadow={true}
        position={[0, 90, -100]}
        distance={200}
        target={targetRef.current}
      />

      <pointLight
        position={[0, 5, -16]}
        color={"#ef5252"}
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
        position={[-7.9, 61.7, -49.8]}
        color={"#9a99ff"}
        intensity={260}
        castShadow={true}
        distance={36}
        decay={2.05}
      />

      <pointLight
        position={[35, 23, -92]}
        color={"#cec176"}
        intensity={50}
        distance={8}
        decay={1.8}
      />

      <pointLight
        position={[-1, 38, -4]}
        color={"#cec176"}
        intensity={30}
        distance={8}
        decay={1.8}
      />

      {/*Luces para las recompensas en orden de 1 a 5*/}
      <pointLight
        position={[-29.5, 17.5, -57.5]}
        color={"#ffffff"}
        intensity={80}
        distance={5}
        decay={1.9}
      />

      <pointLight
        position={[23.5, 22.5, -70.5]}
        color={"#ffffff"}
        intensity={80}
        distance={5}
        decay={1.9}
      />

      <pointLight
        position={[50.5, 22.5, -36.5]}
        color={"#ffffff"}
        intensity={80}
        distance={5}
        decay={1.9}
      />

      <pointLight
        position={[27.5, 32.5, -14.5]}
        color={"#ffffff"}
        intensity={80}
        distance={5}
        decay={1.9}
      />

      <pointLight
        position={[-48.5, 52.5, -0.5]}
        color={"#ffffff"}
        intensity={80}
        distance={5}
        decay={1.9}
      />
    </>
  );
};

export default Lights;
