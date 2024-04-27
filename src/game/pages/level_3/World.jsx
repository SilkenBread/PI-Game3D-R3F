import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier';

export default function World(props) {
    const { nodes, materials } = useGLTF('assets/models/level_3/world3.glb')
    return (
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
            <RigidBody type="fixed" colliders="cuboid">
                <mesh
                    receiveShadow
                    geometry={nodes.InitCubeBase.geometry}
                    material={materials['BrownStone.001']}
                    position={[0.6, -1.068, 1.529]}
                />
            </RigidBody>

            <group position={[0.247, -1.068, 6.332]}>
                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation4_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>
                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation4_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.524, -1.068, 2.602]}>
                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation1_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation1_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.527, -1.076, 3.701]}>
                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation2_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation2_2.geometry}
                        material={materials.Sand}
                    />
                </RigidBody>
            </group>

            <group position={[0.494, -1.071, 5.258]}>
                <RigidBody type="fixed" colliders="cuboid">
                    <mesh
                        receiveShadow
                        geometry={nodes.CubeRotation3_1.geometry}
                        material={materials['BrownStone.001']}
                    />
                </RigidBody>

                <RigidBody type="fixed" colliders="cuboid">
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
    )
}

useGLTF.preload('assets/models/level_3/world3.glb')