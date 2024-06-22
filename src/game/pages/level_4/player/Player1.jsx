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
  // const { nodes, materials, animations } = useGLTF('assets/models/characters/Robot.glb')
  const { nodes, materials, animations } = useGLTF('/assets/models/characters/caracterKnigth.glb')
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
      position={[0, 10, 0]}
      jumpVel={4.5}
      slopJumpMult={0.1}
      moveImpulsePointY={1.5}
      maxVelLimit={3}
      springK={0}
      floatHeight={0}
      sprintJumpMult={1.4}
    >
      <mesh ref={player1Ref}>
        <group ref={avatarRef} name="Scene" position-y={-0.1}>
          <group
            name="Armature"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0025}
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
      </mesh>
    </Ecctrl>
  );
}

useGLTF.preload('assets/models/characters/Robot.glb')