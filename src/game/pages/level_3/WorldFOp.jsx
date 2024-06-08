import React, { useContext, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RigidBody,
  useFixedJoint,
  useRapier,
} from "@react-three/rapier";
import { useAvatar } from "../../../context/AvatarContext";
import { authContext, useAuth } from "../../../context/AuthContext";
import { createUser, readUser } from "../../../db/users-collections";

export default function World3FOp(props) {
  const { nodes, materials } = useGLTF("assets/models/level_3/world3FOp.glb");
  const context = useContext(authContext);
  const auth = useAuth();

  const saveDataUser = async (valuesUser) => {
    const { success, data } = await readUser(valuesUser.email)

    if (!success)
      await createUser(valuesUser)

    context.setPosition(data[0]);
  }

  const [dataUser, setDataUser] = useState('');

  useEffect(() => {
    if (auth.userLogged) {
      const { displayName, email, photoURL } = auth.userLogged

      setDataUser({ displayName, email, photoURL });

      saveDataUser({
        name: displayName,
        email: email,
      })
    }
  }, [auth.userLogged])

  const platform1 = useRef(null);
  const platform2 = useRef(null);
  const platform3 = useRef(null);
  const platform4 = useRef(null);
  const platform5 = useRef(null);
  const boundarie = useRef(null);

  const block1 = useRef(null);
  const block1_1 = useRef(null);
  const block2 = useRef(null);
  const block2_2 = useRef(null);
  const block3 = useRef(null);
  const block3_3 = useRef(null);
  const block4 = useRef(null);
  const block4_4 = useRef(null);
  const block5 = useRef(null);
  const block5_5 = useRef(null);
  const block6 = useRef(null);
  const block6_6 = useRef(null);
  const block7 = useRef(null);
  const block7_7 = useRef(null);
  const block8 = useRef(null);
  const block8_8 = useRef(null);
  const block9 = useRef(null);
  const block9_9 = useRef(null);
  const block10 = useRef(null);
  const block10_10 = useRef(null);
  const block11 = useRef(null);
  const block11_11 = useRef(null);

  function movePlatforms(move) {
    platform1.current?.setNextKinematicTranslation(
      {
        x: move,
        y: platform1.current?.translation().y,
        z: platform1.current?.translation().z,
      },
      true
    );

    platform2.current?.setNextKinematicTranslation(
      {
        x: -move,
        y: platform2.current?.translation().y,
        z: platform2.current?.translation().z,
      },
      true
    );

    platform3.current?.setNextKinematicTranslation(
      {
        x: move,
        y: platform3.current?.translation().y,
        z: platform3.current?.translation().z,
      },
      true
    );

    platform4.current?.setNextKinematicTranslation(
      {
        x: -move,
        y: platform4.current?.translation().y,
        z: platform4.current?.translation().z,
      },
      true
    );

    platform5.current?.setNextKinematicTranslation(
      {
        x: move,
        y: platform5.current?.translation().y,
        z: platform5.current?.translation().z,
      },
      true
    );
  }

  function activedBlockTramps(fallY) {
    const blocks = [
      block1,
      block1_1,
      block2,
      block2_2,
      block3,
      block3_3,
      block4,
      block4_4,
      block5,
      block5_5,
      block6,
      block6_6,
      block7,
      block7_7,
      block8,
      block8_8,
      block9,
      block9_9,
      block10,
      block10_10,
      block11,
      block11_11,
    ];

    blocks.forEach((block) => {
      block.current?.setTranslation(
        {
          x: block.current?.translation().x,
          y: fallY,
          z: block.current?.translation().z,
        },
        true
      );
    });
  }

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const t = (elapsedTime % 4) / 4;
    const easeInOutQuad = (t) => {
      if (t < 2.4) {
        return 2 * t * t;
      } else {
        t -= 1.5;
        return 2 * t * t;
      }
    };
    // const easeInOutQuad = (t) => (t < 1 ? 2 * t  : -0.1 * -0.1 );
    // const fallY = Math.sin(elapsedTime * 2) * 3 + 1.5;
    const fallY = easeInOutQuad(t) * 2.5;

    activedBlockTramps(fallY);
  });

  const onRecolectReward = (e) => {
    if (e.other.rigidBodyObject.name === "player") {
      e.other.rigidBody.setTranslation({ x: 0, y: 0, z: 0 }, true);
      e.other.rigidBody.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 }, true);
    }
  };

  useFrame(({ clock }) => {
    const moveX = Math.cos(clock.getElapsedTime()) * 5;
    movePlatforms(moveX);
  });

  const trampsMesh = useRef([]);
  const trampsKillMesh = useRef([]);

  const [visibleFloorTramps, setVisibleFloorTramps] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleCollision = (index) => {
    setVisibleFloorTramps((prev) => {
      const newVisibleFloorTramps = [...prev];
      newVisibleFloorTramps[index] = false;
      return newVisibleFloorTramps;
    });
  };

  // TRAMPAS PISO
  const fallTrapCollision = (e) => {
    if (e.other.rigidBodyObject.name === "player") {
      e.other.rigidBody.setTranslation(
        { x: context.position?.position_level_3[0], 
          y: context.position?.position_level_3[1],
          z: context.position?.position_level_3[2]
        }, 
        true
      );
    }
  };

  const pisosTrampa = [
    nodes.PisoTrampa1,
    nodes.PisoTrampa2,
    nodes.PisoTrampa3,
    nodes.PisoTrampa4,
    nodes.PisoTrampa5,
    nodes.PisoTrampa6,
    nodes.PisoTrampa7,
  ];

  const trampasPinchos = [
    { node: nodes.trapFloor2_1, material: materials["jadePrimary.001"] },
    { node: nodes.trapFloor2_2, material: materials["jadeSecundary.001"] },
    { node: nodes.trapFloor3_1, material: materials["jadePrimary.002"] },
    { node: nodes.trapFloor3_2, material: materials["jadeSecundary.002"] },
    { node: nodes.trapFloor4_1, material: materials["jadePrimary.003"] },
    { node: nodes.trapFloor4_2, material: materials["jadeSecundary.003"] },
    { node: nodes.trapFloor5_1, material: materials["jadePrimary.004"] },
    { node: nodes.trapFloor5_2, material: materials["jadeSecundary.004"] },
    { node: nodes.trapFloor6_1, material: materials["jadePrimary.005"] },
    { node: nodes.trapFloor6_2, material: materials["jadeSecundary.005"] },
    { node: nodes.trapFloor1001, material: materials["jadePrimary.006"] },
    { node: nodes.trapFloor1001_1, material: materials["jadeSecundary.006"] },
    { node: nodes.trapFloor7_1, material: materials["jadePrimary.007"] },
    { node: nodes.trapFloor7_2, material: materials["jadeSecundary.007"] },
  ];

  const doorsConfig = [
    {
      keyUtilyRequired: 1,
      node: nodes.Puerta1,
      material: materials.JailMaterial,
    },
    {
      keyUtilyRequired: 2,
      node: nodes.Puerta2,
      material: materials.JailMaterial,
    },
    {
      keyUtilyRequired: 3,
      node: nodes.Puerta3,
      material: materials.JailMaterial,
    },
  ];

  const doorRefs = useRef([]);
  const { avatar } = useAvatar();
  const [visibleDoors, setVisibleDoors] = useState(Array(doorsConfig.length).fill(true));

  useEffect(() => {
    const newVisibleDoors = doorsConfig.map(door =>
      avatar.keyUtily >= door.keyUtilyRequired ? false : true
    );
    setVisibleDoors(newVisibleDoors);
  }, [avatar.keyUtily]);

  return (
    <>
      <group {...props} dispose={null}>
        //LABERINTO
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.FloorLaberinto.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.BaseLaberinto.geometry}
            material={materials["BrownStone.001"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.Walls.geometry}
            material={materials["BrownStone.001"]}
          />
        </RigidBody>
        // ------------------- Pisos trampa --------------------
        {pisosTrampa.map(
          (mesh, index) =>
            visibleFloorTramps[index] && (
              <RigidBody
                key={mesh.name}
                type="fixed"
                colliders={"trimesh"}
                onCollisionEnter={() => handleCollision(index)}
              >
                <mesh
                  ref={(el) => (trampsMesh.current[index] = el)}
                  geometry={mesh.geometry}
                  material={materials.Material}
                />
              </RigidBody>
            )
        )}
        // ---------------- Trampas Pinchos -----------------------------
        {trampasPinchos.map((trampa, index) => (
          <RigidBody
            key={trampa.node.name}
            type="fixed"
            colliders="trimesh"
            onCollisionEnter={(e) => fallTrapCollision(e)}
          >
            <mesh
              ref={(el) => (trampsKillMesh.current[index] = el)}
              geometry={trampa.node.geometry}
              material={trampa.material}
            />
          </RigidBody>
        ))}
        //------------------------ PUERTAS -------------------
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.PuertaMarco1.geometry}
            material={materials.Rock}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.PuertaMarco2.geometry}
            material={materials.Rock}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.PuertaMarco3.geometry}
            material={materials.Rock}
          />
        </RigidBody>
        {doorsConfig.map((door, index) => (
          <RigidBody
            key={door.node.name}
            type="fixed"
            colliders= "hull"
            ref={(el) => (doorRefs.current[index] = el)}
          >
            {visibleDoors[index] && (
            <mesh geometry={door.node.geometry} material={door.material} />
          )}
          </RigidBody>
        ))}
        //INICIO
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.BaseInicio.geometry}
            material={materials["BrownStone.001"]}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.FloorInicio.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            geometry={nodes.InitCubeBase.geometry}
            material={materials["BrownStone.001"]}
          />
        </RigidBody>
        //PUERTAS //arbol
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            geometry={nodes.arbol.geometry}
            material={materials["boneMaterial.001"]}
          />
        </RigidBody>
        //CIEMPIES
        <mesh
          geometry={nodes.mosterDecoEsqe1.geometry}
          material={materials["boneMaterial.005"]}
        />
        <mesh
          geometry={nodes.mosterDecoEsqe2.geometry}
          material={materials["boneMaterial.005"]}
        />
        <mesh
          geometry={nodes.mosterDecoEsqe3.geometry}
          material={materials["boneMaterial.005"]}
        />
        //PLATAFORMAS INICIALES
        <RigidBody ref={platform5} type="kinematicPosition" colliders="cuboid">
          <mesh
            geometry={nodes.CubeRotation4_1.geometry}
            material={materials["BrownStone.001"]}
          />
          <mesh
            geometry={nodes.CubeRotation4_2.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody ref={platform1} type="kinematicPosition" colliders="cuboid">
          <mesh
            geometry={nodes.CubeRotation1_1.geometry}
            material={materials["BrownStone.001"]}
          />
          <mesh
            geometry={nodes.CubeRotation1_2.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody ref={platform2} type="kinematicPosition" colliders="cuboid">
          <mesh
            geometry={nodes.CubeRotation2_1.geometry}
            material={materials["BrownStone.001"]}
          />
          <mesh
            geometry={nodes.CubeRotation2_2.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody ref={platform4} type="kinematicPosition" colliders="cuboid">
          <mesh
            geometry={nodes.CubeRotation3_1.geometry}
            material={materials["BrownStone.001"]}
          />
          <mesh
            geometry={nodes.CubeRotation3_2.geometry}
            material={materials.Material}
          />
        </RigidBody>
        <RigidBody ref={platform3} type="kinematicPosition" colliders="cuboid">
          <mesh
            geometry={nodes.CubeRotation2001_1.geometry}
            material={materials["BrownStone.001"]}
          />
          <mesh
            geometry={nodes.CubeRotation2001_2.geometry}
            material={materials.Material}
          />
        </RigidBody>
        //TRAMPAS BLOQUES
        <RigidBody ref={block1_1} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock1_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block1} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock1_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block2_2} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock2003.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block2} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock2003_1.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block3_3} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock3_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block3} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock3_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block4_4} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock4_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block4} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock4_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block5_5} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock5_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block5} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock5_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block6_6} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock6_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block6} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock6_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block7_7} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock7_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block7} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock7_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block8_8} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock8_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block8} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock8_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block9_9} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock9_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block9} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock9_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block10_10} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock10_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block10} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock10_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        <RigidBody
          ref={block11_11}
          type="kinematicPosition"
          colliders="trimesh"
        >
          <mesh
            geometry={nodes.trapBlock11_1.geometry}
            material={materials["jadeSecundary.008"]}
          />
        </RigidBody>
        <RigidBody ref={block11} type="kinematicPosition" colliders="hull">
          <mesh
            geometry={nodes.trapBlock11_2.geometry}
            material={materials["jadePrimary.008"]}
          />
        </RigidBody>
        //ESQUELETOS
        <mesh geometry={nodes.skull_1.geometry} material={materials.obsidian} />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull_2.geometry}
            material={materials.boneMaterial}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull2_1.geometry}
          material={materials["obsidian.001"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull2_2.geometry}
            material={materials["boneMaterial.001"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull3_1.geometry}
          material={materials["obsidian.002"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull3_2.geometry}
            material={materials["boneMaterial.002"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull4_1.geometry}
          material={materials["obsidian.003"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull4_2.geometry}
            material={materials["boneMaterial.003"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull5_1.geometry}
          material={materials["obsidian.004"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull5_2.geometry}
            material={materials["boneMaterial.004"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull6_1.geometry}
          material={materials["obsidian.004"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.skull6_2.geometry}
            material={materials["boneMaterial.004"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.skull7_1.geometry}
          material={materials["obsidian.004"]}
        />
        <mesh
          geometry={nodes.skull7_2.geometry}
          material={materials["boneMaterial.004"]}
        />
        <mesh
          geometry={nodes.skull8_1.geometry}
          material={materials["obsidian.004"]}
        />
        <mesh
          geometry={nodes.skull8_2.geometry}
          material={materials["boneMaterial.004"]}
        />
        //MONUMENTO FINAL
        <mesh
          geometry={nodes.finalMonument_1.geometry}
          material={materials["jadeSecundary.009"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            geometry={nodes.finalMonument_2.geometry}
            material={materials["jadePrimary.009"]}
          />
        </RigidBody>
        <mesh
          geometry={nodes.finalMonument_3.geometry}
          material={materials["obsidian.005"]}
        />
        <mesh
          geometry={nodes.finalMonument_4.geometry}
          material={materials["boneMaterial.006"]}
        />
      </group>
      //LIMITES
      <group>
        <RigidBody
          ref={boundarie}
          position={[0, -20, -10]}
          type="fixed"
          onCollisionEnter={(e) => onRecolectReward(e)}
        >
          <CuboidCollider args={[125, 1, 150]} />
        </RigidBody>

        <RigidBody position={[21, 5, -78]} type="fixed">
          <CuboidCollider args={[1, 5, 5]} />
        </RigidBody>

        <RigidBody position={[-23, 5, -78]} type="fixed">
          <CuboidCollider args={[1, 5, 5]} />
        </RigidBody>
      </group>
    </>
  );
}

useGLTF.preload("assets/models/level_3/world3FOp.glb");
