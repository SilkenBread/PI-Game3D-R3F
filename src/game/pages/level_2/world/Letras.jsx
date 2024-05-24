import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

export default function Letras(props) {
    const group = useRef()
    const letra1 = useRef()
    const letra2 = useRef(null)
    const letra3 = useRef(null)
    const letra4 = useRef(null)

    const animaciones = ['R1', 'R2', 'R3', 'R4']
    let posicion = 0;
    const { nodes, materials, animations } = useGLTF('/assets/models/level_2/letra1.glb')
    const { actions } = useAnimations(animations, letra1)

    const yRotationAxies = new THREE.Vector3(0, 0, 0);
    const quaternionRotation = useMemo(() => new THREE.Quaternion(), []);

    const onCollisionEnterBody = (e) => {
        if (posicion <= 2) {
            console.log("posicion", posicion, animaciones[posicion]);
            letra1.rotation.x = Math.PI / 2;
            posicion++;
        } else {
            console.log("posicion", posicion, animaciones[posicion]);
            posicion = 0;
        }

        for (let index = 0; index < 10; index++) {
            letra1.current?.setNextKinematicRotation(
                quaternionRotation.setFromAxisAngle(yRotationAxies.setX(-1), crono * 0.4)
            );
        }

    }

    const onHandleTorus = () => {
        if (posicion <= 2) {
            for (let index = 0; index < 1.57; index= index + 0.01) {
                letra1.current?.setNextKinematicRotation(
                    quaternionRotation.setFromAxisAngle(yRotationAxies.setX(-1), index)
                );
            }
            console.log("posicion", posicion, animaciones[posicion]);
            posicion++;
        } else {
            console.log("posicion", posicion, animaciones[posicion]);
            posicion = 0;
        }
    }

    return (<>
        <group ref={group} {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
            <RigidBody
                ref={letra1}
                type={'kinematicPosition'}
                colliders="hull"
                position={props.position}
                onCollisionEnter={(e) => onCollisionEnterBody(e)}
            >
                <mesh
                    name="Cube1_1"
                    onClick={onHandleTorus}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube1_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    name="Cube1_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube1_2.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    name="Cube1_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube1_3.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    name="Cube1_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube1_4.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    name="Cube1_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube1_5.geometry}
                    material={materials['Material.004']}
                />
            </RigidBody>

            {/* <RigidBody
                ref={letra2}
                type={'kinematicPosition'}
                colliders="hull"
                position={props.position}
            >
                <mesh
                    name="Cube3_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube3_1.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    name="Cube3_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube3_2.geometry}
                    material={materials.Material}
                />
                <mesh
                    name="Cube3_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube3_3.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    name="Cube3_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube3_4.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    name="Cube3_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube3_5.geometry}
                    material={materials['Material.003']}
                />
            </RigidBody>

            <RigidBody
                ref={letra3}
                type={'kinematicPosition'}
                colliders="hull"
                position={props.position}
            >
                <mesh
                    name="Cube2_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube2_1.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    name="Cube2_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube2_2.geometry}
                    material={materials.Material}
                />
                <mesh
                    name="Cube2_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube2_3.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    name="Cube2_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube2_4.geometry}
                    material={materials['Material.002']}
                />
                <mesh
                    name="Cube2_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube2_5.geometry}
                    material={materials['Material.003']}
                />
            </RigidBody>

            <RigidBody
                ref={letra4}
                type={'kinematicPosition'}
                colliders="hull"
                position={props.position}
            >
                <mesh
                    name="Cube4_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube4_1.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    name="Cube4_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube4_2.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    name="Cube4_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube4_3.geometry}
                    material={materials.Material}
                />
                <mesh
                    name="Cube4_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube4_4.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    name="Cube4_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube4_5.geometry}
                    material={materials['Material.002']}
                />
            </RigidBody> */}
        </group>
    </>
    )
}

useGLTF.preload('/assets/models/level_2/letras.glb')