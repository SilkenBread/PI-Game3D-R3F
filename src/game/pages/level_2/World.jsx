import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

export default function World2(props) {
  const { nodes, materials } = useGLTF('/assets/models/level_2/world2.glb')

  return (<>
    <RigidBody type='fixed' colliders={false}>
      <group dispose={null}>
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
          geometry={nodes.CuerpoBase.geometry}
          material={materials['Material.010']}
        />
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
        <RigidBody type='fixed' colliders={false}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Planeta.geometry}
            material={materials['Material.006']}
          />
        </RigidBody>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base.geometry}
          material={materials['Material.001']}
        />
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_1.geometry}
            material={materials['rock_07.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_2.geometry}
            material={materials['rock_09.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_3.geometry}
            material={materials['rock_07.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_4.geometry}
            material={materials['rock_07.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_5.geometry}
            material={materials['rock_07.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BigRocks_6.geometry}
            material={materials['rock_09.002']}
          />
        </group>
      </group>
    </RigidBody>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.TelescopioInt.geometry}
      material={materials['Material.009']}
    />
    <RigidBody type='fixed' colliders={false}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cono.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dona.geometry}
          material={materials['Material.005']}
        />
      </group>

      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks_1.geometry}
          material={materials['rock_moss_set_01.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks_2.geometry}
          material={materials['rock_moss_set_01.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks_3.geometry}
          material={materials['rock_moss_set_01.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks_4.geometry}
          material={materials['rock_moss_set_01.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rocks_5.geometry}
          material={materials['rock_moss_set_01.009']}
        />
      </group>
    </RigidBody>
  </>
  )
}

useGLTF.preload('/assets/models/level_2/world2.glb');