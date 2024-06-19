import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Villain3Skull(props) {
  const { nodes, materials } = useGLTF('assets/models/characters/villains/skull.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.muñecas.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.columna.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.pelvis.geometry} material={materials.secondColor} />
      <mesh geometry={nodes.costillas.geometry} material={materials.secondColor} />
      <mesh geometry={nodes.manos.geometry} material={materials.secondColor} />
      <mesh geometry={nodes.alas.geometry} material={materials.secondColor} />
      <mesh geometry={nodes.head.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.Brazos.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.Piernas.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.pies.geometry} material={materials.secondColor} />
      <mesh geometry={nodes.head001.geometry} material={materials.secondColor} />
    </group>
  )
}

useGLTF.preload('assets/models/characters/villains/skull.glb')