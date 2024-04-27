import { Helper, useHelper } from "@react-three/drei";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useControls } from "leva";
import { PointLightHelper, SpotLightHelper } from "three";

const Ligths = () => {
  const pointLigthRef = useRef(null);
  const spotLightRef = useRef(null);
  const targetRef = useRef();
  const targetRef2 = useRef();
  
//   useHelper(pointLigthRef, PointLightHelper);

//   const optionPointLigth = useMemo(() => {
//     return {
//       positionEP: { value: [2, 60, -490] },
//       colorED: {value: "white"},
//       intensityED: {value: {}}
//     };
//   });

//   const { positionEP, colorED, intensityED  } = useControls("SheperLigtsControls", optionPointLigth);

  return (
    <>
      <mesh ref={targetRef} position={[0, 0, -222]} />
      <mesh ref={targetRef2} position={[0, 0, -267]} />

      <pointLight
        intensity={12000}
        castShadow={true}
        color={"#9AFFD7"}
        position={[2, 91, -80]}
        distance={400}
        decay={1.9}
        //shadow-mapSize={[3000, 3000]}
      />

      <pointLight
        intensity={8500}
        castShadow={true}
        color={"#9AFFD7"}
        position={[0, 74, -370]}
        distance={130}
        decay={1.9}
        //shadow-mapSize={[3000, 3000]}
      />

      <pointLight
        intensity={50000}
        castShadow={true}
        color={"#5f2b2b"}
        position={[-3,69,-480]}
        distance={1000}
        decay={2}
        //shadow-mapSize={[3000, 3000]}
      />

      <spotLight
        power={10000}
        castShadow={true}
        position={[0, 57, -222]}
        color={"#FF8331"}
        distance={25}
        angle={76.2}
        decay={1.9}
        target={targetRef.current}
      />

      <spotLight
        power={10000}
        castShadow={true}
        position={[0, 62, -267]}
        color={"#FF8331"}
        distance={25}
        angle={76.2}
        decay={1.9}
        target={targetRef2.current}
      />

    </>
  );
};

export default Ligths;
