import React, { useEffect, useRef, useState } from 'react'
import { Capsule, useGLTF } from '@react-three/drei'
import { CapsuleCollider, CylinderCollider, RigidBody } from '@react-three/rapier'
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'

export default function Ghost(props) {
  const { nodes, materials } = useGLTF('assets/models/characters/goshVillan.glb')

  let velocityVar = 4.5;
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
      currentIndex: 1, // Índice actual del fantasma 1 en su camino
      path: positions[0], // Camino del fantasma 1
      rigidBody: ghostRB1, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref2, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[1], // Camino del fantasma 2
      rigidBody: ghostRB2, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref3, // Referencia a la malla del fantasma 1
      currentIndex: 1, // Índice actual del fantasma 1 en su camino
      path: positions[2], // Camino del fantasma 1
      rigidBody: ghostRB3, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref4, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[3], // Camino del fantasma 2
      rigidBody: ghostRB4, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref5, // Referencia a la malla del fantasma 1
      currentIndex: 1, // Índice actual del fantasma 1 en su camino
      path: positions[4], // Camino del fantasma 1
      rigidBody: ghostRB5, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref6, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[5], // Camino del fantasma 2
      rigidBody: ghostRB6, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref7, // Referencia a la malla del fantasma 1
      currentIndex: 1, // Índice actual del fantasma 1 en su camino
      path: positions[6], // Camino del fantasma 1
      rigidBody: ghostRB7, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref8, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[7], // Camino del fantasma 2
      rigidBody: ghostRB8, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref9, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[8], // Camino del fantasma 2
      rigidBody: ghostRB9, // Opcional: Cuerpo rígido del fantasma 2
    },
    {
      meshRef: ref10, // Referencia a la malla del fantasma 1
      currentIndex: 1, // Índice actual del fantasma 1 en su camino
      path: positions[9], // Camino del fantasma 1
      rigidBody: ghostRB10, // Opcional: Cuerpo rígido del fantasma 1
    },
    {
      meshRef: ref11, // Referencia a la malla del fantasma 2
      currentIndex: 1, // Índice actual del fantasma 2 en su camino
      path: positions[10], // Camino del fantasma 2
      rigidBody: ghostRB11, // Opcional: Cuerpo rígido del fantasma 2
    }

  ]

  const onContact = (e, BDref, ref, i) => {
    if (e.other.rigidBodyObject.name === "player") {
      // ghosts[i].rigidBody.current?.setTranslation(new THREE.Vector3(0, -11, 0), true);
      BDref.current.setEnabled(false)
      ref.current.visible = false
    }
  };

  useEffect(() => {
    if (positions.length > 0) {
      ref1.current.position.copy(positions[0][0]); // Empezar desde la primera posición
      ref2.current.position.copy(positions[1][0]);
      ref3.current.position.copy(positions[2][0]);
      ref4.current.position.copy(positions[3][0]);
      ref5.current.position.copy(positions[4][0]);
      ref6.current.position.copy(positions[5][0]);
      ref7.current.position.copy(positions[6][0]);
      ref8.current.position.copy(positions[7][0]);
      ref9.current.position.copy(positions[8][0]);
      ref10.current.position.copy(positions[9][0]);
      ref11.current.position.copy(positions[10][0]);
    }
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
          rigidBody.current?.setTranslation(meshRef.current?.position, true);
        }
      }
    });
  });

  return (<>
    <group {...props} dispose={null} ref={ref1} >
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref2}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref3}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref4}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref5}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref6}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref7}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref8}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref9}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref10}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

    <group {...props} dispose={null} ref={ref11}>
      <mesh geometry={nodes.body.geometry} material={materials.PrimaryColor} />
      <mesh geometry={nodes.eye.geometry} material={materials.SkinColor} />
      <mesh geometry={nodes.toge.geometry} material={materials.Material} />
      <mesh geometry={nodes.EyesDetails.geometry} material={materials.SecondColor} />
      <mesh geometry={nodes.pupila.geometry} material={materials.SmeralEyes} />
      <mesh geometry={nodes.cola.geometry} material={materials.SkinColor} />
    </group >

      <RigidBody
        colliders={false}
        type="kinematicPosition"
        ref={ghostRB1}
        position={[-18, -2, -5]}
      >
        <CapsuleCollider
          args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
          position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
          onCollisionEnter={(e) => onContact(e, ghostRB1, ref1, 0)}
        />
      </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB2}
      position={[-26, 6, -24]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB2, ref2, 1)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB3}
      position={[-27, 12, -46]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB3, ref3, 2)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB4}
      position={[0, 15, -67]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB4, ref4, 3)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB5}
      position={[13, 16, -58]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB5, ref5, 4)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB6}
      position={[18, 17, -47]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB6, ref6, 5)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB7}
      position={[15, 42, -42.5]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB7, ref7, 6)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB8}
      position={[33, 17, -38]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB8, ref8, 7)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB9}
      position={[44, 22, -53]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB9, ref9, 8)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB10}
      position={[45, 22.5, -68]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB10, ref10, 9)}
      />
    </RigidBody>

    <RigidBody
      colliders={false}
      type="kinematicPosition"
      ref={ghostRB11}
      position={[-3, 36.5, -170]}
    >
      <CapsuleCollider
        args={[1.5, 0.7]} // Radius, height, and depth of the cylinder collider
        position={[0, 0, 1.05]}// Relative position of the collider within the RigidBody
        onCollisionEnter={(e) => onContact(e, ghostRB11, ref11, 10)}
      />
    </RigidBody>
  </>
  )
}

useGLTF.preload('assets/models/characters/goshVillan.glb')