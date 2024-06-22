import Ecctrl from "ecctrl";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { socket } from "../../../../socket/socket-manager";
import { useAvatar } from "../../../../context/AvatarContext";

/**
 * Player1 component controls a player character in a 3D environment.
 * It handles movement and communication with a server via WebSockets.
 *
 * @component
 * @returns {JSX.Element} The Player1 component.
 */
export default function Player1() {
  // Refs for the rigid body and player mesh
  const rbPlayer1Ref = useRef();
  const player1Ref = useRef();
  const avatarRef = useRef();

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

  // Keyboard controls
  const [sub, get] = useKeyboardControls();

  // useFrame hook to handle per-frame updates
  useFrame(() => {
    // Get current keyboard input states
    const { forward, backward, leftward, rightward } = get();

    // If any movement key is pressed, emit the player's movement data to the server
    if (forward || backward || leftward || rightward) {
      window.setTimeout(() => {
        socket.emit("player-moving", {
          translation: rbPlayer1Ref.current?.translation(),
          rotation: rbPlayer1Ref.current?.rotation(),
        });
      }, 100);
    }
  });

  return (
    <Ecctrl
      ref={rbPlayer1Ref}
      position={[0, 5, 0]}
      jumpVel={4.5}
      slopJumpMult={0.1}
      moveImpulsePointY={1.5}
      maxVelLimit={3}
      springK={0}
      floatHeight={0}
      sprintJumpMult={1.4}
    >
      <mesh ref={player1Ref}>
        <group ref={avatarRef} name="Scene" position-y={-0.25}>
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.00285}>
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
      </mesh>
    </Ecctrl>
  );
}

useGLTF.preload('assets/models/characters/Robot.glb')