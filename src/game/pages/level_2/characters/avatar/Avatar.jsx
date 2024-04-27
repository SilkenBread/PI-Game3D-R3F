import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Avatar() {
    const avatarRef = useRef();
    const avatarBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/level_2/avatar/caracterKnigth.glb')

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
        <RigidBody ref={avatarBodyRef} position={[5.3, 0.7, -4.35]} type="dynamic" colliders={false}>
            <group ref={avatarRef} name="Scene">
                <group
                    name="Armature"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.0015}>
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
            {/* 
            <RigidBody ref={avatarBodyRef} position={[5.3, 0.7, -4.35]} type="dynamic" colliders={false}>
            <group ref={avatarRef} name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
                    <skinnedMesh
                        name="Abdomen"
                        geometry={nodes.Abdomen.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Abdomen.skeleton}
                    />
                    <skinnedMesh
                        name="BaseCasco"
                        geometry={nodes.BaseCasco.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.BaseCasco.skeleton}
                    />
                    <skinnedMesh
                        name="BrazoD_1"
                        geometry={nodes.BrazoD_1.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.BrazoD_1.skeleton}
                    />
                    <skinnedMesh
                        name="BrazoD_2"
                        geometry={nodes.BrazoD_2.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.BrazoD_2.skeleton}
                    />
                    <skinnedMesh
                        name="BrazoI_1"
                        geometry={nodes.BrazoI_1.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.BrazoI_1.skeleton}
                    />
                    <skinnedMesh
                        name="BrazoI_2"
                        geometry={nodes.BrazoI_2.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.BrazoI_2.skeleton}
                    />
                    <skinnedMesh
                        name="Casco"
                        geometry={nodes.Casco.geometry}
                        material={materials['HeadGlass.001']}
                        skeleton={nodes.Casco.skeleton}
                    />
                    <skinnedMesh
                        name="Cintura"
                        geometry={nodes.Cintura.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.Cintura.skeleton}
                    />
                    <skinnedMesh
                        name="Cuello"
                        geometry={nodes.Cuello.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.Cuello.skeleton}
                    />
                    <skinnedMesh
                        name="Cuerpo"
                        geometry={nodes.Cuerpo.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.Cuerpo.skeleton}
                    />
                    <skinnedMesh
                        name="PechoE"
                        geometry={nodes.PechoE.geometry}
                        material={materials['HeadGlass.001']}
                        skeleton={nodes.PechoE.skeleton}
                    />
                    <skinnedMesh
                        name="PechoI"
                        geometry={nodes.PechoI.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.PechoI.skeleton}
                    />
                    <skinnedMesh
                        name="PiernaD_1"
                        geometry={nodes.PiernaD_1.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.PiernaD_1.skeleton}
                    />
                    <skinnedMesh
                        name="PiernaD_2"
                        geometry={nodes.PiernaD_2.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.PiernaD_2.skeleton}
                    />
                    <skinnedMesh
                        name="PiernaI_1"
                        geometry={nodes.PiernaI_1.geometry}
                        material={materials['PrimaryColor.001']}
                        skeleton={nodes.PiernaI_1.skeleton}
                    />
                    <skinnedMesh
                        name="PiernaI_2"
                        geometry={nodes.PiernaI_2.geometry}
                        material={materials['SecondColor.001']}
                        skeleton={nodes.PiernaI_2.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group> 
            <CapsuleCollider args={[0.2, 0.25]} position={[0, 0.06, 0]} />
        </RigidBody>*/}
            <CapsuleCollider args={[0.28, 0.15]} position={[0, 0.06, 0]} />
        </RigidBody>
    )
}