import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { RigidBody } from '@react-three/rapier'

export default function Rewards({ position }) {
    const rewardsChasisERef = useRef(null)
    const rewardsChasisIRef = useRef(null)
    const rewardsNucleoRef = useRef(null)
    const { nodes, materials } = useGLTF('assets/models/characters/villains/Reward.glb')

    const amplitude = 0.2

    useFrame(({ clock }) => {
        const moveY = Math.cos(clock.getElapsedTime()) * amplitude + position[1];

        rewardsChasisERef.current?.setTranslation({
            x: rewardsChasisERef.current?.translation().x,
            y: moveY,
            z: rewardsChasisERef.current?.translation().z
        }, true)

        rewardsChasisIRef.current?.setTranslation({
            x: rewardsChasisIRef.current?.translation().x,
            y: moveY,
            z: rewardsChasisIRef.current?.translation().z
        }, true)

        rewardsNucleoRef.current?.setTranslation({
            x: rewardsNucleoRef.current?.translation().x,
            y: moveY,
            z: rewardsNucleoRef.current?.translation().z
        }, true)

    })

    return (<>
        return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ChasisE.geometry}
                material={nodes.ChasisE.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ChasisI.geometry}
                material={nodes.ChasisI.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Nucleo_1.geometry}
                material={nodes.Nucleo_1.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Nucleo_2.geometry}
                material={nodes.Nucleo_2.material}
            />
        </group>
        )
    </>
    )
}

useGLTF.preload('assets/models/characters/villains/Reward.glb')