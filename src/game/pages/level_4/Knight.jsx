import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Knight(props) {
  const { nodes, materials } = useGLTF('assets/models/level_4/caracterKnigth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chest.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.DetailsChest.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.Back.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.sholders.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.SholdDe.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.addons.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.diamont.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.Body.geometry} material={materials.AnimatedTexture} />
      <mesh geometry={nodes.Legs.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.LegsDe.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.HelmetDevil.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.Helmet.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.Eyes.geometry} material={materials.SecondColor} />
    </group>
  )
}

useGLTF.preload('assets/models/level_4/caracterKnigth.glb')
