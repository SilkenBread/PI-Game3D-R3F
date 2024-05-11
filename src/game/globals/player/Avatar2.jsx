import { BallCollider, CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Suspense, useEffect, useRef } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Avatar2(props) {
    const avatarRef = useRef();
    const avatarCollider = useRef();
    const avatarBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('/assets/models/characters/caracterKnigth.glb')
    const { actions } = useAnimations(animations, avatarRef);

    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation])
                actions[avatar.animation].fadeOut(0.5);
        }

    }, [actions, avatar.animation]);

    return (<>
        <group ref={avatarRef} name="Scene" position-y={-0.15}>
            <group
                name="Armature"
                rotation={[Math.PI / 2, 0, 0]}
                scale={props.scale}
            >
                <skinnedMesh
                    name="addons"
                    geometry={nodes.addons.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.addons.skeleton}
                />
                <skinnedMesh
                    name="Back"
                    geometry={nodes.Back.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.Back.skeleton}
                />
                <skinnedMesh
                    name="Body"
                    geometry={nodes.Body.geometry}
                    material={materials['AnimatedTexture.011']}
                    skeleton={nodes.Body.skeleton}
                />
                <skinnedMesh
                    name="Chest"
                    geometry={nodes.Chest.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.Chest.skeleton}
                />
                <skinnedMesh
                    name="DetailsChest"
                    geometry={nodes.DetailsChest.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.DetailsChest.skeleton}
                />
                <skinnedMesh
                    name="diamont"
                    geometry={nodes.diamont.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.diamont.skeleton}
                />
                <skinnedMesh
                    name="Eyes"
                    geometry={nodes.Eyes.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.Eyes.skeleton}
                />
                <skinnedMesh
                    name="Helmet"
                    geometry={nodes.Helmet.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.Helmet.skeleton}
                />
                <skinnedMesh
                    name="HelmetDevil"
                    geometry={nodes.HelmetDevil.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.HelmetDevil.skeleton}
                />
                <skinnedMesh
                    name="Legs"
                    geometry={nodes.Legs.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.Legs.skeleton}
                />
                <skinnedMesh
                    name="LegsDe"
                    geometry={nodes.LegsDe.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.LegsDe.skeleton}
                />
                <skinnedMesh
                    name="SholdDe"
                    geometry={nodes.SholdDe.geometry}
                    material={materials['PrimaryColor.011']}
                    skeleton={nodes.SholdDe.skeleton}
                />
                <skinnedMesh
                    name="sholders"
                    geometry={nodes.sholders.geometry}
                    material={materials['SecondColor.011']}
                    skeleton={nodes.sholders.skeleton}
                />
                <primitive object={nodes.mixamorigHips} />
            </group>
        </group>
    </>
    )
}

useGLTF.preload('assets/models/characters/caracterKnigth.glb')