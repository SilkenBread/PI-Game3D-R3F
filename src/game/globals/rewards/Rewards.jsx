import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { RigidBody } from '@react-three/rapier'

export default function Rewards(props)  {
    const rewardsChasisERef = useRef(null)
    const rewardsChasisIRef = useRef(null)
    const rewardsNucleoRef = useRef(null)
    const { nodes, materials } = useGLTF('assets/models/Reward.glb')

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
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ChasisE.geometry}
                
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ChasisI.geometry}
                
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Nucleo_1.geometry}
                
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Nucleo_2.geometry}
                
            />
        </group>
    </>
    )
}

useGLTF.preload('assets/models/Reward.glb')