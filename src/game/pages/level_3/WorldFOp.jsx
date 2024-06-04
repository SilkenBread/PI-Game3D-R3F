import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function World3FOp(props) {
  const { nodes, materials } = useGLTF('assets/models/level_3/world3FOp.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.FloorLaberinto.geometry} material={materials.Material} />
      <mesh geometry={nodes.BaseLaberinto.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.Walls.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.PisoTrampa1.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa2.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa3.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa4.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa5.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa6.geometry} material={materials.Material} />
      <mesh geometry={nodes.PisoTrampa7.geometry} material={materials.Material} />
      <mesh geometry={nodes.BaseInicio.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.FloorInicio.geometry} material={materials.Material} />
      <mesh geometry={nodes.InitCubeBase.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.PuertaMarco3.geometry} material={materials.Rock} />
      <mesh geometry={nodes.Puerta3.geometry} material={materials.JailMaterial} />
      <mesh geometry={nodes.PuertaMarco1.geometry} material={materials.Rock} />
      <mesh geometry={nodes.Puerta1.geometry} material={materials.JailMaterial} />
      <mesh geometry={nodes.PuertaMarco2.geometry} material={materials.Rock} />
      <mesh geometry={nodes.Puerta2.geometry} material={materials.JailMaterial} />
      <mesh geometry={nodes.arbol.geometry} material={materials['boneMaterial.001']} />
      <mesh geometry={nodes.mosterDecoEsqe1.geometry} material={materials['boneMaterial.005']} />
      <mesh geometry={nodes.mosterDecoEsqe2.geometry} material={materials['boneMaterial.005']} />
      <mesh geometry={nodes.mosterDecoEsqe3.geometry} material={materials['boneMaterial.005']} />
      <mesh geometry={nodes.CubeRotation4_1.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.CubeRotation4_2.geometry} material={materials.Material} />
      <mesh geometry={nodes.CubeRotation1_1.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.CubeRotation1_2.geometry} material={materials.Material} />
      <mesh geometry={nodes.CubeRotation2_1.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.CubeRotation2_2.geometry} material={materials.Material} />
      <mesh geometry={nodes.CubeRotation3_1.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.CubeRotation3_2.geometry} material={materials.Material} />
      <mesh geometry={nodes.CubeRotation2001_1.geometry} material={materials['BrownStone.001']} />
      <mesh geometry={nodes.CubeRotation2001_2.geometry} material={materials.Material} />
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
      <mesh geometry={nodes.trapBlock1_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock1_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock2003.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock2003_1.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock3_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock3_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock4_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock4_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock5_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock5_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock6_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock6_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock7_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock7_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock8_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock8_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock9_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock9_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock10_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock10_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.trapBlock11_1.geometry} material={materials['jadeSecundary.008']} />
      <mesh geometry={nodes.trapBlock11_2.geometry} material={materials['jadePrimary.008']} />
      <mesh geometry={nodes.skull_1.geometry} material={materials.obsidian} />
      <mesh geometry={nodes.skull_2.geometry} material={materials.boneMaterial} />
      <mesh geometry={nodes.skull2_1.geometry} material={materials['obsidian.001']} />
      <mesh geometry={nodes.skull2_2.geometry} material={materials['boneMaterial.001']} />
      <mesh geometry={nodes.skull3_1.geometry} material={materials['obsidian.002']} />
      <mesh geometry={nodes.skull3_2.geometry} material={materials['boneMaterial.002']} />
      <mesh geometry={nodes.skull4_1.geometry} material={materials['obsidian.003']} />
      <mesh geometry={nodes.skull4_2.geometry} material={materials['boneMaterial.003']} />
      <mesh geometry={nodes.skull5_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull5_2.geometry} material={materials['boneMaterial.004']} />
      <mesh geometry={nodes.skull6_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull6_2.geometry} material={materials['boneMaterial.004']} />
      <mesh geometry={nodes.skull7_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull7_2.geometry} material={materials['boneMaterial.004']} />
      <mesh geometry={nodes.skull8_1.geometry} material={materials['obsidian.004']} />
      <mesh geometry={nodes.skull8_2.geometry} material={materials['boneMaterial.004']} />
      <mesh geometry={nodes.finalMonument_1.geometry} material={materials['jadeSecundary.009']} />
      <mesh geometry={nodes.finalMonument_2.geometry} material={materials['jadePrimary.009']} />
      <mesh geometry={nodes.finalMonument_3.geometry} material={materials['obsidian.005']} />
      <mesh geometry={nodes.finalMonument_4.geometry} material={materials['boneMaterial.006']} />
    </group>
  )
}

useGLTF.preload('assets/models/level_3/world3FOp.glb')