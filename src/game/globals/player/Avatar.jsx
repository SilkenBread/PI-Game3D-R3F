import { CapsuleCollider, RigidBody, quat, vec3 } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { avatarPositionState, enemyPositionState, laserPositionState, scoreState } from "../../pages/level_2/world/Shooter";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import Ecctrl from "ecctrl";
import { socket } from "../../../socket/socket-manager";

export default function Avatar(props) {
  const rbPlayer2Ref = useRef();
  const player2Ref = useRef();

  const ammoRef = useRef();
  const { avatar, setAvatar } = useAvatar();
  const { nodes, materials, animations } = useGLTF('/assets/models/characters/Robot.glb')
  const { actions } = useAnimations(animations, rbPlayer2Ref);
  let spawn = false;

  const movePlayer = (transforms) => {
    const { translation, rotation } = transforms;

    const newTranslation = vec3(translation);
    const newRotation = quat(rotation);

    rbPlayer2Ref.current?.setTranslation(newTranslation, true);
    rbPlayer2Ref.current?.setRotation(newRotation, true);
  };

  useEffect(() => {
    actions[avatar.animation]?.reset().fadeIn(0.5).play();
    return () => {
      if (actions[avatar.animation])
        actions[avatar.animation].fadeOut(0.5);
    }

  }, [actions, avatar.animation]);

  useEffect(() => {
    // Set up the WebSocket event listener for "player-moving"
    socket.on("player-moving", (transforms) => movePlayer(transforms));

    // Clean up the event listener on component unmount
    return () => {
      socket.off("player-moving", (transforms) => movePlayer(transforms));
    };
  }, []);

  return (
    <RigidBody
      ref={rbPlayer2Ref}
      position={[0, 2, -6]}
      type="dynamic"
      colliders={false}
      lockRotations
    >
      <group ref={player2Ref} name="Scene" position-y={-0.25} scale={0.003}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
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
      <CapsuleCollider args={[0.35, 0.35]} />
    </RigidBody>

  )
}

useGLTF.preload('assets/models/characters/Robot.glb')