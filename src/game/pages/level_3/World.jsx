import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useRef } from "react";

export default function World(props) {
    const platform1 = useRef(null)
    const platform2 = useRef(null)
    const platform3 = useRef(null)
    const platform4 = useRef(null)
    const platform5 = useRef(null)
    const boundarie = useRef(null)
    const { nodes, materials } = useGLTF('assets/models/level_3/world3.glb')

    function movePlatforms(move) {
        platform1.current?.setNextKinematicTranslation({
            x: move,
            y: platform1.current?.translation().y,
            z: platform1.current?.translation().z
        }, true);

        platform2.current?.setNextKinematicTranslation({
            x: -move,
            y: platform2.current?.translation().y,
            z: platform2.current?.translation().z
        }, true);

        platform3.current?.setNextKinematicTranslation({
            x: move,
            y: platform3.current?.translation().y,
            z: platform3.current?.translation().z
        }, true);

        platform4.current?.setNextKinematicTranslation({
            x: -move,
            y: platform4.current?.translation().y,
            z: platform4.current?.translation().z
        }, true);

        platform5.current?.setNextKinematicTranslation({
            x: move,
            y: platform5.current?.translation().y,
            z: platform5.current?.translation().z
        }, true);
    }

    const onRecolectReward = (e) => {
        if (e.other.rigidBodyObject.name === "player") {
            e.other.rigidBody.setTranslation({x: 0, y: 0, z: 0}, true)
            e.other.rigidBody.setRotation({ w: 1.0, x: 0.0, y: 0.0, z: 0.0 }, true)
        }
      }

    useFrame(({ clock }) => {
        const moveX = Math.cos(clock.getElapsedTime()) * 5

        movePlatforms(moveX)

    })

    return (<>
        <group {...props} dispose={null}>
            {/* INICIO */}
            <RigidBody type="fixed" colliders="trimesh">
                <mesh
                    receiveShadow
                    geometry={nodes.BaseInicio.geometry}
                    material={materials.BrownStone}
                    position={[0.566, -1.005, -0.998]}
                />
            </RigidBody>

            <RigidBody type="fixed" colliders="hull">
                <mesh
                    receiveShadow
                    geometry={nodes.FloorInicio.geometry}
                    material={materials.Sand}
                    position={[0.44, -1.033, -0.909]}
                />
            </RigidBody>


            {/* OBSTACULOS */}
            <RigidBody ref={platform1} type='kinematicPosition' colliders="cuboid">
                <mesh
                    receiveShadow
                    geometry={nodes.InitCubeBase.geometry}
                    material={materials['BrownStone.001']}
                    position={[0.6, -1.068, 1.529]}
                />
            </RigidBody>

            <group position={[0.247, -1.068, 6.332]}>
                <RigidBody ref={platform5} type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation4_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>
                <RigidBody type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation4_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.524, -1.068, 2.602]}>
                <RigidBody ref={platform2} type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation1_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation1_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.527, -1.076, 3.701]}>
                <RigidBody ref={platform3} type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation2_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation2_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.494, -1.071, 5.258]}>
                <RigidBody ref={platform4} type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation3_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="kinematicPosition" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation3_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            {/* LABERINTO */}
            <RigidBody type="fixed" colliders="trimesh">
                <mesh
                    receiveShadow
                    geometry={nodes.WallsLaberinto.geometry}
                    material={materials.Rocas}
                    position={[0.402, -1.077, 12.986]}
                />
            </RigidBody>

            <RigidBody type="fixed" colliders="hull">
                <mesh
                    receiveShadow
                    geometry={nodes.FloorLaberinto.geometry}
                    material={materials.Sand}
                    position={[0.291, -1.242, 12.994]}
                />
            </RigidBody>

            <RigidBody type="fixed" colliders="hull">
                <mesh
                    receiveShadow
                    geometry={nodes.BaseLaberinto.geometry}
                    material={materials['BrownStone.001']}
                    position={[0.472, -1.076, 12.996]}
                />
            </RigidBody>
        </group>

        //LIMITES
        <group>
            <RigidBody
                ref={boundarie}
                position={[0, -20, 45]}
                type="fixed"
                onCollisionEnter={(e) => onRecolectReward(e)}
            >
                <CuboidCollider args={[30, 1, 100]} />
            </RigidBody>
        </group>
    </>
    )
}

useGLTF.preload('assets/models/level_3/world3.glb')