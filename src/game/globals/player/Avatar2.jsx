import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Avatar2(props) {
    const avatarRef = useRef();
    const avatarBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/characters/caracterKnigth.glb')

    const { actions } = useAnimations(animations, avatarRef);
    console.log(nodes);
    useEffect(() => {
        setAvatar({
            ref: avatarRef.current,
            body: avatarBodyRef.current,
        });
    }, [avatarBodyRef.current, avatarRef.current]);

    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation])
                actions[avatar.animation].fadeOut(0.5);
        }

    }, [actions, avatar.animation]);

    return (
        <RigidBody ref={avatarBodyRef} position={props.position} type="dynamic" colliders={false}>
            <group ref={avatarRef} name="Scene">
                <group 
                    name="Armature"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={props.scale}>
                    <skinnedMesh
                        name="addons001"
                        geometry={nodes.addons001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.addons001.skeleton}
                    />
                    <skinnedMesh
                        name="Back001"
                        geometry={nodes.Back001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Back001.skeleton}
                    />
                    <skinnedMesh
                        name="Body001"
                        geometry={nodes.Body001.geometry}
                        material={materials['AnimatedTexture.001']}
                        skeleton={nodes.Body001.skeleton}
                    />
                    <skinnedMesh
                        name="Chest001"
                        geometry={nodes.Chest001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Chest001.skeleton}
                    />
                    <skinnedMesh
                        name="DetailsChest001"
                        geometry={nodes.DetailsChest001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.DetailsChest001.skeleton}
                    />
                    <skinnedMesh
                        name="diamont001"
                        geometry={nodes.diamont001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.diamont001.skeleton}
                    />
                    <skinnedMesh
                        name="Eyes001"
                        geometry={nodes.Eyes001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.Eyes001.skeleton}
                    />
                    <skinnedMesh
                        name="Helmet001"
                        geometry={nodes.Helmet001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Helmet001.skeleton}
                    />
                    <skinnedMesh
                        name="HelmetDevil001"
                        geometry={nodes.HelmetDevil001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.HelmetDevil001.skeleton}
                    />
                    <skinnedMesh
                        name="Legs001"
                        geometry={nodes.Legs001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Legs001.skeleton}
                    />
                    <skinnedMesh
                        name="LegsDe001"
                        geometry={nodes.LegsDe001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.LegsDe001.skeleton}
                    />
                    <skinnedMesh
                        name="SholdDe001"
                        geometry={nodes.SholdDe001.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.SholdDe001.skeleton}
                    />
                    <skinnedMesh
                        name="sholders001"
                        geometry={nodes.sholders001.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.sholders001.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
            <CapsuleCollider args={[0.28, 0.15]} position={[0, 0.06, 0]} />
        </RigidBody>
    )
}

useGLTF.preload('assets/models/characters/caracterKnigth.glb')