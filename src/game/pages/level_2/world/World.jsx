import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { ConeCollider, CuboidCollider, RigidBody } from '@react-three/rapier';

export default function World2(props) {
  const { nodes, materials } = useGLTF('/assets/models/level_2/world/world2.glb')

  return (<>
    <RigidBody position={[0, 4, 7.2]} type="fixed">
      <CuboidCollider args={[7, 4, 0.1]} />
    </RigidBody>
    <RigidBody position={[0, 4, -7.2]} type="fixed">
      <CuboidCollider args={[7, 4, 0.1]} />
    </RigidBody>
    <RigidBody position={[7.2, 4, 0]} type="fixed">
      <CuboidCollider args={[0.1, 4, 7]} />
    </RigidBody>
    <RigidBody position={[-7.2, 4, 0]} type="fixed">
      <CuboidCollider args={[0.1, 4, 7]} />
    </RigidBody>

    <group dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TelescopioInt.geometry}
          material={materials['Material.009']}
        />

        <RigidBody type="fixed" colliders="ball">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.CuerpoBase.geometry}
            material={materials['Material.010']}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Base.geometry}
            material={materials['Material.001']}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="cuboid">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Telescopio.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Soporte.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antena.geometry}
            material={materials['Material.001']}
          />
        </RigidBody>

        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cueva.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Montaña.geometry}
            material={materials['Material.006']}
          />
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock2.geometry}
              material={materials['rock_07.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock6.geometry}
              material={materials['rock_09.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock1_1.geometry}
              material={materials['rock_07.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock1_2.geometry}
              material={materials['rock_09.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock3_1.geometry}
              material={materials['rock_07.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock3_2.geometry}
              material={materials['rock_07.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock4_1.geometry}
              material={materials['rock_07.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock4_2.geometry}
              material={materials['rock_07.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock5_1.geometry}
              material={materials['rock_07.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.BigRock5_2.geometry}
              material={materials['rock_07.006']}
            />
          </group>
        </RigidBody>
      </group>
    </group>
  </>
  )
}

useGLTF.preload('/assets/models/level_2/world2.glb');