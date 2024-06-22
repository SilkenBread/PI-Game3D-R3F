import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useAvatar } from "../../../context/AvatarContext";
import { useFrame } from "@react-three/fiber";

export default function World4FOp(props) {
  const { nodes, materials } = useGLTF("assets/models/level_4/level4Op.glb");
  const { avatar, setAvatar } = useAvatar();
  const platform1 = useRef();
  const verticalMovePlatformRef = useRef();
  const finalPlatform = useRef();
  const limitsCollision = (e) => {
    if (e.other.rigidBodyObject.name === "player") {
      e.other.rigidBody.setTranslation({ x: 0, y: 0, z: 0 }, true);
      if (avatar.vidas > 0) {
        setAvatar({ ...avatar, vidas: avatar.vidas - 1 });
      } else {
        setAvatar({ ...avatar, animation: "Death" });
      }
    }
  };

  useFrame(({ clock }) => {
    const moveX = Math.cos(clock.getElapsedTime() / 2) * 7;
    platform1.current?.setNextKinematicTranslation(
      {
        x: moveX,
        y: platform1.current?.translation().y,
        z: platform1.current?.translation().z
      },
      true
    );

    const y = 3.5 + Math.sin(clock.getElapsedTime()) * 3.5;
    verticalMovePlatformRef.current?.setNextKinematicTranslation({
      x: 0,
      y,
      z: 0
    });

    const moveZ = 45 * (Math.sin(clock.getElapsedTime() / 3.5) + 1) - 85;
    finalPlatform.current?.setNextKinematicTranslation(
      {
        x: platform1.current?.translation().x,
        y: platform1.current?.translation().y,
        z: moveZ
      },
      true
    );

  });
  return (<>
    <group {...props} dispose={null}>

      {/*Elementos de movimiento*/}
      {/*La que se tiene que mover en x, es la miniIsla para cruzar los puentes*/}
      <RigidBody ref={platform1} type='kinematicPosition' colliders="trimesh" castShadow={true}>
        <mesh
          geometry={nodes.PlatformPassBridge1.geometry}
          material={materials.Amatist}
        />
      </RigidBody>

      {/*Esta es la verde que esta despues del segundo checkPoint tiene que subir y bajar*/}
      <RigidBody ref={verticalMovePlatformRef} type='kinematicPosition' colliders="trimesh">
        <mesh
          geometry={nodes.platformM114.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
      </RigidBody>

      {/*Esta es la plataforma Final*/}
      <RigidBody ref={finalPlatform} type='kinematicPosition' colliders="trimesh" castShadow={true}>
        <mesh
          geometry={nodes.PlatFormMoved001.geometry}
          material={materials["Amatist.002"]}
        />
      </RigidBody>

      {/*Elementos de limite del mundo (pisos de lava)(con un coboid esta bien)*/}
      <RigidBody type="fixed" colliders="cuboid" onCollisionEnter={(e) => limitsCollision(e)} >
        <mesh
          geometry={nodes["Limits(lava)2"].geometry}
          material={materials.lavaColor2}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes["Limits(lava)_1"].geometry}
          material={materials.lavaColor3}
          receiveShadow={true}
        />
        <mesh
          geometry={nodes["Limits(lava)_2"].geometry}
          material={materials.lavaColor}
          receiveShadow={true}
        />
      </RigidBody>

      {/*Elementos con fisicas sin interaccion (puentes, islas (Mesh))*/}
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          geometry={nodes.IsLand1.geometry}
          material={materials["Amatist.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.StartBase.geometry}
          material={materials.PrimaryColor}
        />
        <mesh
          geometry={nodes.Bridge.geometry}
          material={materials.Marmle}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM12.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM13.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM14.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM15.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM16.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM17.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM18.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM19.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM110.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM111.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM112.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />
        <mesh
          geometry={nodes.platformM113.geometry}
          material={materials.Esmerald}
          castShadow={true}
        />

        <mesh geometry={nodes.BaseRoom.geometry} material={materials.Amatist} />

        <mesh
          geometry={nodes.FloorRooms.geometry}
          material={materials.Material}
        />
        <mesh geometry={nodes.ColumsM.geometry} material={materials.Marmle} />

        <mesh
          geometry={nodes.bridge3_1.geometry}
          material={materials["Esmerald.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge3_2.geometry}
          material={materials["Material.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge2_1.geometry}
          material={materials["Esmerald.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge2_2.geometry}
          material={materials["Material.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge1_1.geometry}
          material={materials["Esmerald.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge1_2.geometry}
          material={materials["Material.001"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge4_1.geometry}
          material={materials["Esmerald.002"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.bridge4_2.geometry}
          material={materials["Material.003"]}
          castShadow={true}
        />
        <mesh
          geometry={nodes.PlatformPassBridge2.geometry}
          material={materials.Amatist}
          castShadow={true}
        />
      </RigidBody>

      {/*Elementos decorativos sin fisicas*/}
      <mesh geometry={nodes.Rocks.geometry} material={materials.Material} />
      <mesh
        geometry={nodes.Montains.geometry}
        material={materials.MountainsColor}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Rings.geometry}
        material={materials["Esmerald.001"]}
      />
      <mesh
        geometry={nodes.skull.geometry}
        material={materials.boneMaterial}
        receiveShadow={true}
      />
      <mesh
        geometry={nodes.Blades_1.geometry}
        material={materials.cuartColor}
      />
      <mesh
        geometry={nodes.Blades_2.geometry}
        material={materials.SecondColor}
      />
      <mesh
        geometry={nodes.Blades_3.geometry}
        material={materials.detailsColor}
      />
      <mesh
        geometry={nodes.Blades_4.geometry}
        material={materials["PrimaryColor.001"]}
      />
      <mesh geometry={nodes.Blades_5.geometry} material={materials.terColor} />
    </group>
  </>
  );
}

useGLTF.preload("assets/models/level_4/level4Op.glb");
