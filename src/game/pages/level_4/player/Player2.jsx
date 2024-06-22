import { CylinderCollider, RigidBody, quat, vec3 } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { socket } from "../../../../socket/socket-manager";
import { useGLTF } from "@react-three/drei";

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

  const { nodes, materials, animations } = useGLTF('/assets/models/characters/caracterKnigth.glb')

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
          args={[0.8, 0.35]} // Height, Radius
          position={[0, 0, 0]} // Relative position of the collider within the RigidBody
        />
      <mesh ref={player2Ref}>
        <group name="Scene" position-y={-0.15}>
          <group
            name="Armature"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.003}
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
    </RigidBody>
  );
}

useGLTF.preload('/assets/models/characters/caracterKnigth.glb')