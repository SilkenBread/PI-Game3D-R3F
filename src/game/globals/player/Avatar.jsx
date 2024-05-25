import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { avatarPositionState, enemyPositionState, laserPositionState, scoreState } from "../../pages/level_2/world/Shooter";
import { useRecoilState, useRecoilValue } from "recoil";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Avatar(props) {
    const avatarRef = useRef();
    const avatarBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();
    const { nodes, materials, animations } = useGLTF('assets/models/characters/Robot.glb')
    const { actions } = useAnimations(animations, avatarRef);

    useEffect(() => {
        actions[avatar.animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[avatar.animation])
                actions[avatar.animation].fadeOut(0.5);
        }

    }, [actions, avatar.animation]);

    function Target() {
        const rearTarget = useRef();
        const frontTarget = useRef();
    
        const loader = new TextureLoader();
        // A png with transparency to use as the target sprite.
        const texture = loader.load("/assets/models/level_2/target.png");
    
        // Update the position of the reticle based on the ships current position.
        useFrame(({ mouse }) => {
          rearTarget.current.position.y = -mouse.y * 10;
    
          frontTarget.current.position.y = -mouse.y * 20;
        });
        // Sprite material has a prop called map to set the texture on.
        return (
          <group>
            <sprite position={[0, 0, 8]} ref={rearTarget} renderOrder={999}>
              <spriteMaterial attach="material" map={texture} />
            </sprite>
            <sprite position={[0, 0, 16]} ref={frontTarget}>
              <spriteMaterial attach="material" map={texture} renderOrder={999}/>
            </sprite>
          </group>
        );
      }

      function LaserController() {
        // const avatarPosition = useRecoilValue(avatarPositionState);
        const [lasers, setLasers] = useRecoilState(laserPositionState);
        return (
          <mesh
            position={[0, 0, -8]}
            onClick={() =>
              setLasers([
                ...lasers,
                {
                  id: Math.random(), // This needs to be unique.. Random isn't perfect but it works. Could use a uuid here.
                  x: 0,
                  y: 0,
                  z: 0,
                  velocity: [avatarRef.rotation.x * 6, avatarRef.rotation.y * 5]
                }
              ])
            }
          >
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial
              attach="material"
              color="orange"
              emissive="#ff0860"
              visible={false}
            />
          </mesh>
        );
      }

    return (<>
        <Target />
        <LaserController />
        
        <group ref={avatarRef} name="Scene" position-y={-0.25}>
            <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={props.scale}>
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
    </>
    )
}

useGLTF.preload('assets/models/characters/Robot.glb')