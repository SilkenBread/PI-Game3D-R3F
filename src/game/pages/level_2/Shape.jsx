import { useGLTF } from "@react-three/drei";
import { ConeCollider, ConvexHullCollider, CuboidCollider, MeshCollider, RapierCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function Shape(props) {
    const { nodes, materials } = useGLTF('/assets/models/level_2/world2.glb')
    const shapeRockRef = useRef()
    const shapeRockRef1 = useRef()
    const shapeCubeRef = useRef()

    const onHandleRock = (ref) => {
        ref.current.applyTorqueImpulse(
            { x: 0.00025, y: 0.00025, z: 0.00025},
            true
        )
    }

    return (<>
        <RigidBody position={[0,0,0]} type="fixed">

        </RigidBody>
        <RigidBody position={props.position} type="fixed" colliders={false}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Planeta.geometry}
                material={materials['Material.006']}
            >
                <CuboidCollider args={[7, 0.2, 7]} />
            </mesh>
        </RigidBody>

        <RigidBody ref={shapeCubeRef}type="dynamic" colliders="cuboid">
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cubo.geometry}
                material={materials['Material.005']}
                onClick={() => onHandleRock(shapeCubeRef)}
            />
        </RigidBody>

        <RigidBody type="dynamic" colliders="hull">
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
        </RigidBody>

        <RigidBody
            ref={shapeRockRef}
            colliders="hull"
            restitution={0.6}
            friction={3}

        >
            <mesh

                castShadow
                receiveShadow
                geometry={nodes.Rock19.geometry}
                material={materials['rock_moss_set_01.001']}
                onClick={() => onHandleRock(shapeRockRef)}
            />
        </RigidBody>
        <RigidBody
            ref={shapeRockRef1}
            colliders="hull"
            restitution={0.6}
            friction={3}

        >
            <mesh

                castShadow
                receiveShadow
                geometry={nodes.Rock17.geometry}
                material={materials['rock_moss_set_01.001']}
                onClick={() => onHandleRock(shapeRockRef1)}
            />
        </RigidBody>
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock14.geometry}
            material={materials['rock_moss_set_01.001']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock12.geometry}
            material={materials['rock_moss_set_01.001']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock9.geometry}
            material={materials['rock_moss_set_01.001']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock7.geometry}
            material={materials['rock_moss_set_01.001']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock20.geometry}
            material={materials['rock_moss_set_01.002']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock15.geometry}
            material={materials['rock_moss_set_01.002']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock10.geometry}
            material={materials['rock_moss_set_01.002']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock18.geometry}
            material={materials['rock_moss_set_01.003']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock13.geometry}
            material={materials['rock_moss_set_01.003']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock8.geometry}
            material={materials['rock_moss_set_01.003']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock21.geometry}
            material={materials['rock_moss_set_01.004']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock16.geometry}
            material={materials['rock_moss_set_01.004']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock11.geometry}
            material={materials['rock_moss_set_01.004']}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock1.geometry}
            material={materials.rock_moss_set_01}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock2.geometry}
            material={materials.rock_moss_set_01}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock3.geometry}
            material={materials.rock_moss_set_01}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock4.geometry}
            material={materials.rock_moss_set_01}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock5.geometry}
            material={materials.rock_moss_set_01}
        />
        <mesh
            onClick={onHandleRock}
            castShadow
            receiveShadow
            geometry={nodes.Rock6.geometry}
            material={materials.rock_moss_set_01}
        />
    </>
    )
}