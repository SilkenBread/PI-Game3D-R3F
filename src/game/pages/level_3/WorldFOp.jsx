import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export default function World3FOp(props) {
  const { nodes, materials } = useGLTF('assets/models/level_3/world3FOp.glb')

  const platform1 = useRef(null)
  const platform2 = useRef(null)
  const platform3 = useRef(null)
  const platform4 = useRef(null)
  const platform5 = useRef(null)
  const boundarie = useRef(null)

  function movePlatforms(move) {
    platform1.current?.setNextKinematicTranslation({
      x: move,
      y: platform1.current?.translation().y,
      z: platform1.current?.translation().z
    }, true);

    platform2.current?.setNextKinematicTranslation({
      x: -move,
      y: platform2.current?.translation().y,
      z: platform2.current?.translation().z
    }, true);

    platform3.current?.setNextKinematicTranslation({
      x: move,
      y: platform3.current?.translation().y,
      z: platform3.current?.translation().z
    }, true);

    platform4.current?.setNextKinematicTranslation({
      x: -move,
      y: platform4.current?.translation().y,
      z: platform4.current?.translation().z
    }, true);

    platform5.current?.setNextKinematicTranslation({
      x: move,
      y: platform5.current?.translation().y,
      z: platform5.current?.translation().z
    }, true);
  }

  const onRecolectReward = (e) => {
    if (e.other.rigidBodyObject.name === "player") {
      e.other.rigidBody.setTranslation({ x: 0, y: 0, z: 0 }, true)
      e.other.rigidBody.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 }, true)
    }
  }

  useFrame(({ clock }) => {
    const moveX = Math.cos(clock.getElapsedTime()) * 5

    movePlatforms(moveX)

  })

  return (<>
    <group {...props} dispose={null}>

      //LABERINTO
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.FloorLaberinto.geometry} material={materials.Material} />
      </RigidBody>
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.BaseLaberinto.geometry} material={materials['BrownStone.001']} />
      </RigidBody>

      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.Walls.geometry} material={materials['BrownStone.001']} />
      </RigidBody>

      <mesh geometry={nodes.PisoTrampa1.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa2.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa3.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa4.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa5.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa6.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa7.geometry} material={materials.Material} />

      //INICIO
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.BaseInicio.geometry} material={materials['BrownStone.001']} />
      </RigidBody>
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.FloorInicio.geometry} material={materials.Material} />
      </RigidBody>
      <RigidBody type='fixed' colliders='cuboid'>
        <mesh geometry={nodes.InitCubeBase.geometry} material={materials['BrownStone.001']} />
      </RigidBody>

      //PUERTAS
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.PuertaMarco3.geometry} material={materials.Rock} />
      </RigidBody>
      <mesh geometry={nodes.Puerta3.geometry} material={materials.JailMaterial} />

      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.PuertaMarco1.geometry} material={materials.Rock} />
      </RigidBody>
      <mesh geometry={nodes.Puerta1.geometry} material={materials.JailMaterial} />

      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.PuertaMarco2.geometry} material={materials.Rock} />
      </RigidBody>
      <mesh geometry={nodes.Puerta2.geometry} material={materials.JailMaterial} />

      //arbol
      <RigidBody type='fixed' colliders='trimesh'>
        <mesh geometry={nodes.arbol.geometry} material={materials['boneMaterial.001']} />
      </RigidBody>

      //CIEMPIES
      {/* <mesh geometry={nodes.mosterDecoEsqe1.geometry} material={materials['boneMaterial.005']} />
      <mesh geometry={nodes.mosterDecoEsqe2.geometry} material={materials['boneMaterial.005']} />
      <mesh geometry={nodes.mosterDecoEsqe3.geometry} material={materials['boneMaterial.005']} /> */}

      //PLATAFORMAS INICIALES
      <RigidBody ref={platform5} type="kinematicPosition" colliders="cuboid">
        <mesh geometry={nodes.CubeRotation4_1.geometry} material={materials['BrownStone.001']} />
        <mesh geometry={nodes.CubeRotation4_2.geometry} material={materials.Material} />
      </RigidBody>

      <RigidBody ref={platform1} type="kinematicPosition" colliders="cuboid">
        <mesh geometry={nodes.CubeRotation1_1.geometry} material={materials['BrownStone.001']} />
        <mesh geometry={nodes.CubeRotation1_2.geometry} material={materials.Material} />
      </RigidBody>

      <RigidBody ref={platform2} type="kinematicPosition" colliders="cuboid">
        <mesh geometry={nodes.CubeRotation2_1.geometry} material={materials['BrownStone.001']} />
        <mesh geometry={nodes.CubeRotation2_2.geometry} material={materials.Material} />
      </RigidBody>

      <RigidBody ref={platform4} type="kinematicPosition" colliders="cuboid">
        <mesh geometry={nodes.CubeRotation3_1.geometry} material={materials['BrownStone.001']} />
        <mesh geometry={nodes.CubeRotation3_2.geometry} material={materials.Material} />
      </RigidBody>

      <RigidBody ref={platform3} type="kinematicPosition" colliders="cuboid">
        <mesh geometry={nodes.CubeRotation2001_1.geometry} material={materials['BrownStone.001']} />
        <mesh geometry={nodes.CubeRotation2001_2.geometry} material={materials.Material} />
      </RigidBody>

      //TRAMPAS PISO
      <mesh geometry={nodes.trapFloor2_1.geometry} material={materials['jadePrimary.001']} />
      <mesh geometry={nodes.trapFloor2_2.geometry} material={materials['jadeSecundary.001']} />
      <mesh geometry={nodes.trapFloor3_1.geometry} material={materials['jadePrimary.002']} />
      <mesh geometry={nodes.trapFloor3_2.geometry} material={materials['jadeSecundary.002']} />
      <mesh geometry={nodes.trapFloor4_1.geometry} material={materials['jadePrimary.003']} />
      <mesh geometry={nodes.trapFloor4_2.geometry} material={materials['jadeSecundary.003']} />
      <mesh geometry={nodes.trapFloor5_1.geometry} material={materials['jadePrimary.004']} />
      <mesh geometry={nodes.trapFloor5_2.geometry} material={materials['jadeSecundary.004']} />
      <mesh geometry={nodes.trapFloor6_1.geometry} material={materials['jadePrimary.005']} />
      <mesh geometry={nodes.trapFloor6_2.geometry} material={materials['jadeSecundary.005']} />
      <mesh geometry={nodes.trapFloor1001.geometry} material={materials['jadePrimary.006']} />
      <mesh geometry={nodes.trapFloor1001_1.geometry} material={materials['jadeSecundary.006']} />
      <mesh geometry={nodes.trapFloor7_1.geometry} material={materials['jadePrimary.007']} />
      <mesh geometry={nodes.trapFloor7_2.geometry} material={materials['jadeSecundary.007']} />

      //TRAMPAS BLOQUES
      <mesh geometry={nodes.trapBlock1_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock1_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock2003.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock2003_1.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock3_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock3_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock4_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock4_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock5_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock5_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock6_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock6_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock7_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock7_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock8_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock8_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock9_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock9_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock10_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock10_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      <mesh geometry={nodes.trapBlock11_1.geometry} material={materials['jadeSecundary.008']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.trapBlock11_2.geometry} material={materials['jadePrimary.008']} />
      </RigidBody>

      //ESQUELETOS
      <mesh geometry={nodes.skull_1.geometry} material={materials.obsidian} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull_2.geometry} material={materials.boneMaterial} />
      </RigidBody>

      <mesh geometry={nodes.skull2_1.geometry} material={materials['obsidian.001']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull2_2.geometry} material={materials['boneMaterial.001']} />
      </RigidBody>

      <mesh geometry={nodes.skull3_1.geometry} material={materials['obsidian.002']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull3_2.geometry} material={materials['boneMaterial.002']} />
      </RigidBody>

      <mesh geometry={nodes.skull4_1.geometry} material={materials['obsidian.003']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull4_2.geometry} material={materials['boneMaterial.003']} />
      </RigidBody>

      <mesh geometry={nodes.skull5_1.geometry} material={materials['obsidian.004']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull5_2.geometry} material={materials['boneMaterial.004']} />
      </RigidBody>

      <mesh geometry={nodes.skull6_1.geometry} material={materials['obsidian.004']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.skull6_2.geometry} material={materials['boneMaterial.004']} />
      </RigidBody>

      <mesh geometry={nodes.skull7_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull7_2.geometry} material={materials['boneMaterial.004']} />
      <mesh geometry={nodes.skull8_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull8_2.geometry} material={materials['boneMaterial.004']} />

      //MONUMENTO FINAL
      <mesh geometry={nodes.finalMonument_1.geometry} material={materials['jadeSecundary.009']} />
      <RigidBody type='fixed' colliders='hull'>
        <mesh geometry={nodes.finalMonument_2.geometry} material={materials['jadePrimary.009']} />
      </RigidBody>
      <mesh geometry={nodes.finalMonument_3.geometry} material={materials['obsidian.005']} />
      <mesh geometry={nodes.finalMonument_4.geometry} material={materials['boneMaterial.006']} />
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

      <RigidBody
        position={[21, 5, -78]}
        type="fixed"
      >
        <CuboidCollider args={[1, 5, 5]} />
      </RigidBody>

      <RigidBody
        position={[-23, 5, -78]}
        type="fixed"
      >
        <CuboidCollider args={[1, 5, 5]} />
      </RigidBody>
    </group>
  </>
  )
}

useGLTF.preload('assets/models/level_3/world3FOp.glb')