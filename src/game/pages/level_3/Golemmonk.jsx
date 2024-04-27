import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Golemmonk(props) {
  const { nodes, materials } = useGLTF('assets/models/level_4/rockVilllan.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.EyesCont.geometry} material={materials.ThirdMaterial} />
      <mesh geometry={nodes.Head.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.Arms.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.Body.geometry} material={materials.PrimaryMaterial} />
      <mesh geometry={nodes.BodyDetails.geometry} material={materials.SecondMaterial} />
      <mesh geometry={nodes.Ring.geometry} material={materials.ThirdMaterial} />
      <mesh geometry={nodes.Eyes.geometry} material={materials.QuarterMaterial} />
    </group>
  )
}

useGLTF.preload('assets/models/level_4/rockVilllan.glb')
