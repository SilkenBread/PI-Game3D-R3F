import { CylinderCollider, RigidBody, quat, vec3 } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { socket } from "../../../../socket/socket-manager";
import { useAnimations, useGLTF } from "@react-three/drei";

/**
 * Player2 component controls a player character in a 3D environment.
 * It handles synchronization of player movements with a server via WebSockets.
 *
 * @component
 * @returns {JSX.Element} The Player2 component.
 */
export default function Player2() {
  // Refs for the rigid body and player mesh
  const rbPlayer2Ref = useRef();
  const player2Ref = useRef();
  const avatarRef = useRef();

  // const { nodes, materials, animations } = useGLTF('/assets/models/characters/caracterKnigth.glb')
  const { nodes, materials, animations } = useGLTF('assets/models/characters/Robot.glb')
  const { actions } = useAnimations(animations, avatarRef)
  const [animation, setAnimation] = useState('Idle')

  socket.on('updates-animation', (animation) => {
    setAnimation(animation)
  })

  useEffect(() => {
    actions['Death'].clampWhenFinished = true
    actions['Death'].repetitions = 0
    actions['Attack'].timeScale = 2
    actions['Attack'].clampWhenFinished = true
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      if (actions[animation]) actions[animation].fadeOut(0.5)
    }
  }, [actions, animation])

  /**
   * Moves the player to a new position and rotation.
   *
   * @param {Object} transforms - The transformation data.
   * @param {Array} transforms.translation - The new translation (position) as a 3-element array.
   * @param {Array} transforms.rotation - The new rotation as a quaternion array.
   */
  const movePlayer = (transforms) => {
    const { translation, rotation } = transforms;

    const newTranslation = vec3(translation);
    const newRotation = quat(rotation);

    rbPlayer2Ref.current?.setTranslation(newTranslation, true);
    rbPlayer2Ref.current?.setRotation(newRotation, true);
  };

  useEffect(() => {
    // Set up the WebSocket event listener for "player-moving"
    socket.on("player-moving", (transforms) => movePlayer(transforms));

    // Clean up the event listener on component unmount
    return () => {
      socket.off("player-moving", (transforms) => movePlayer(transforms));
    };
  }, []);

  return (
    <RigidBody ref={rbPlayer2Ref} position={[0, 5, 5]} lockRotations>
      <CylinderCollider
          args={[0.6, 0.3]} // Height, Radius
          position={[0, 0, 0]} // Relative position of the collider within the RigidBody
        />
      <mesh ref={player2Ref}>
        <group ref={avatarRef} name="Scene" position-y={-0.15}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
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
    </RigidBody>
  );
}

useGLTF.preload('/assets/models/characters/caracterKnigth.glb')