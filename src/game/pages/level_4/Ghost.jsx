import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'

export default function Ghost(props) {
  const { nodes, materials } = useGLTF('assets/models/characters/goshVillan.glb')

  let velocityVar = 3;
  let targetPosition = new THREE.Vector3();

  const positions = [
    // Fantasma 1
    [new THREE.Vector3(-18, -2, -5),
    new THREE.Vector3(-15, 0, -10),
    new THREE.Vector3(-22, 1, -12),
    new THREE.Vector3(-18, 4, -18)],

    // Fantasma 2
    [new THREE.Vector3(-26, 6, -24),
    new THREE.Vector3(-24, 8, -29),
    new THREE.Vector3(-31, 8.5, -34),
    new THREE.Vector3(-29, 10, -42)],

    // Fantasma 3
    [new THREE.Vector3(-27, 12, -46),
    new THREE.Vector3(-30, 13, -50),
    new THREE.Vector3(-26, 14, -55),
    new THREE.Vector3(-19, 14, -55)],

    // Fantasma 4
    [new THREE.Vector3(0, 15, -67),
    new THREE.Vector3(-4, 15, -54)],

    // Fantasma 5
    [new THREE.Vector3(13, 16, -58),
    new THREE.Vector3(4, 16, -49)],

    // Fantasma 6
    [new THREE.Vector3(18, 17, -47),
    new THREE.Vector3(12, 17, -36)],

    // Fantasma 7
    [new THREE.Vector3(15, 42, -42.5),
    new THREE.Vector3(20, 18, 37.5),
    new THREE.Vector3(27, 20, -36)],

    // Fantasma 8
    [new THREE.Vector3(33, 17, -38),
    new THREE.Vector3(33, 19, -42),
    new THREE.Vector3(40, 19, -41),
    new THREE.Vector3(46, 21, -48)],

    // Fantasma 9
    [new THREE.Vector3(44, 22, -53),
    new THREE.Vector3(46, 22.5, -60),
    new THREE.Vector3(50, 22.5, -65),
    new THREE.Vector3(50, 22.5, -70)],

    // Fantasma 10
    [new THREE.Vector3(45, 22.5, -68),
    new THREE.Vector3(44, 22.5, -73),
    new THREE.Vector3(48, 22.5, -75),
    new THREE.Vector3(45, 22.5, -79)],

    // Fantasma 11
    [new THREE.Vector3(-3, 36.5, -170),
    new THREE.Vector3(-3, 40.5, -199),
    new THREE.Vector3(-1, 40.5, -215)],

    // Roca 1
    [new THREE.Vector3(-17, 26.5, -86),
    new THREE.Vector3(16, 18.5, -70)],

    // Roca 2
    [new THREE.Vector3(1, 44, -182),
    new THREE.Vector3(1, 32, -135)],
  ];

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();

  const ghostRB1 = useRef();
  const ghostRB2 = useRef();
  const ghostRB3 = useRef();
  const ghostRB4 = useRef();
  const ghostRB5 = useRef();
  const ghostRB6 = useRef();
  const ghostRB7 = useRef();
  const ghostRB8 = useRef();
  const ghostRB9 = useRef();
  const ghostRB10 = useRef();
  const ghostRB11 = useRef();

  const ghosts = [

    {
      meshRef: ref1, // Referencia a la malla del fantasma 1
      currentIndex: 0, // Índice actual del fantasma 1 en su camino
      path: positions[0], // Camino del fantasma 1
      rigidBody: ghostRB1, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref2, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[1], // Camino del fantasma 2
      rigidBody: ghostRB2, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref3, // Referencia a la malla del fantasma 1
      currentIndex: 0, // Índice actual del fantasma 1 en su camino
      path: positions[2], // Camino del fantasma 1
      rigidBody: ghostRB3, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref4, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[3], // Camino del fantasma 2
      rigidBody: ghostRB4, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref5, // Referencia a la malla del fantasma 1
      currentIndex: 0, // Índice actual del fantasma 1 en su camino
      path: positions[4], // Camino del fantasma 1
      rigidBody: ghostRB5, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref6, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[5], // Camino del fantasma 2
      rigidBody: ghostRB6, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref7, // Referencia a la malla del fantasma 1
      currentIndex: 0, // Índice actual del fantasma 1 en su camino
      path: positions[6], // Camino del fantasma 1
      rigidBody: ghostRB7, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref8, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[7], // Camino del fantasma 2
      rigidBody: ghostRB8, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref9, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[8], // Camino del fantasma 2
      rigidBody: ghostRB9, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref10, // Referencia a la malla del fantasma 1
      currentIndex: 0, // Índice actual del fantasma 1 en su camino
      path: positions[9], // Camino del fantasma 1
      rigidBody: ghostRB10, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref11, // Referencia a la malla del fantasma 2
      currentIndex: 0, // Índice actual del fantasma 2 en su camino
      path: positions[10], // Camino del fantasma 2
      rigidBody: ghostRB11, // Opcional: Cuerpo rígido del fantasma 2
    }

  ]

  useEffect(() => {
    ghosts.forEach((ghost) => {
      ghost.meshRef.current.position.copy(ghost.path[0]);
      ghost.currentIndex = 1;
    });
  
  }, [positions]);

  useFrame((state, delta) => {
    ghosts.forEach((ghost) => {
      const { meshRef, currentIndex, path, rigidBody } = ghost;
  
      if (path.length > 0 && currentIndex < path.length) {
        const targetPosition = path[currentIndex];
        const currentPosition = meshRef.current.position;
        const direction = new THREE.Vector3().subVectors(targetPosition, currentPosition);
        const distance = direction.length();
        const velocity = direction
          .normalize()
          .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí
  
        if (distance < 0.1) {
          ghost.currentIndex = (ghost.currentIndex + 1) % path.length;
        } else {
          meshRef.current.position.add(velocity);
        }
  
        if (rigidBody) {
          rigidBody.current.setTranslation(meshRef.current.position, true);
        }
      }
    });
  });

  return (<>
    <group {...props} dispose={null} ref={ref1} >
      <RigidBody
        ref={ghostRB1}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref2}>
      <RigidBody
        ref={ghostRB2}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref3} >
      <RigidBody
        ref={ghostRB3}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref4} >
      <RigidBody
        ref={ghostRB4}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref5} >
      <RigidBody
        ref={ghostRB5}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref6} >
      <RigidBody
        ref={ghostRB6}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref7} >
      <RigidBody
        ref={ghostRB7}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref8} >
      <RigidBody
        ref={ghostRB8}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref9} >
      <RigidBody
        ref={ghostRB9}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref10} >
      <RigidBody
        ref={ghostRB10}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >

    <group {...props} dispose={null} ref={ref11} >
      <RigidBody
        ref={ghostRB11}
        type="kinematicPosition"
        colliders="hull"
      >
        <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
        <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
        <mesh geometry={nodes.toge.geometry} material={materials.Material} />
        <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
        <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
        <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
      </RigidBody>
    </group >
  </>
  )
}

useGLTF.preload('assets/models/characters/goshVillan.glb')
