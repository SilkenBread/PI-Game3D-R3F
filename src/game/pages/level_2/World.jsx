import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function World2(props) {
  const { nodes, materials } = useGLTF('/assets/models/level_2/world2.glb')

  return (
    <group dispose={null}>
      <mesh
        receiveShadow={true}
        geometry={nodes.Planeta.geometry}
        material={nodes.Planeta.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.CuerpoBase.geometry}
        material={nodes.CuerpoBase.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cueva.geometry}
        material={nodes.Cueva.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Montaña.geometry}
        material={nodes.Montaña.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Telescopio.geometry}
        material={nodes.Telescopio.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cubo.geometry}
        material={nodes.Cubo.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Cono.geometry}
        material={nodes.Cono.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Dona.geometry}
        material={nodes.Dona.material}
      />
      <mesh
        geometry={nodes.TelescopioInt.geometry}
        material={nodes.TelescopioInt.material}
      />
      <mesh
        castShadow={true}
        geometry={nodes.Soporte.geometry}
        material={nodes.Soporte.material}
      />
      {props.children}
    </group>
  )
}

useGLTF.preload('/assets/models/level_2/world2.glb');