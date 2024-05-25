import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useAnimations, useGLTF } from "@react-three/drei";
import { avatarPositionState, enemyPositionState, laserPositionState, scoreState } from "../../pages/level_2/world/Shooter";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Avatar(props) {
  const avatarRef = useRef();
  const avatarBodyRef = useRef();
  const ammoRef = useRef();
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

  // Game settings.
  const LASER_RANGE = 50;
  const LASER_Z_VELOCITY = 0.5;
  const GROUND_HEIGHT = -50;

  function ArWing() {
    const [shipPosition, setAvatarPosition] = useRecoilState(avatarPositionState);
    useFrame(({ mouse }) => {
      setAvatarPosition({
        rotation: { z: 0, x: 0, y: mouse.y * 0.2 },
      });
    });

    return (
      null
    );
  }

  function Target() {
    const rearTarget = useRef();
    const frontTarget = useRef();

    const loader = new TextureLoader();
    const texture = loader.load("/assets/models/level_2/target.png");

    useFrame(({ mouse }) => {
      rearTarget.current.position.y = -mouse.y * 10;

      frontTarget.current.position.y = -mouse.y * 20;
    });


    return (
      <group>
        <sprite position={[0, 0, 8]} ref={rearTarget} >
          <spriteMaterial attach="material" map={texture} />
        </sprite>
        <sprite position={[0, 0, 16]} ref={frontTarget}>
          <spriteMaterial attach="material" map={texture} />
        </sprite>
      </group>
    );
  }

  function LaserController() {
    const shipPosition = useRecoilValue(avatarPositionState);
    const [lasers, setLasers] = useRecoilState(laserPositionState);
    return (
      <mesh
        position={[0, 0, -1]}
        rotation={[0, Math.PI, 0]}
        onClick={() =>
          setLasers([
            // ...lasers,
            {
              id: Math.random(), // This needs to be unique.. Random isn't perfect but it works. Could use a uuid here.
              x: 0,
              y: 0,
              z: 2,
              velocity: [shipPosition.rotation.x, shipPosition.rotation.y]
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

  function Lasers() {
    const lasers = useRecoilValue(laserPositionState);
    return (
      <group>
        {lasers.map((laser) => (
          <RigidBody position={[laser.x, laser.y, laser.z]} type={'kinematicVelocity'}>
            <mesh position={[laser.x, laser.y, laser.z]} key={`${laser.id}`}>
              <boxGeometry attach="geometry" args={[1, 1, 1]} />
              <meshStandardMaterial attach="material" emissive="white" wireframe />
            </mesh>
          </RigidBody>
        ))}
      </group>
    );
  }

  function GameTimer() {
    const [lasers, setLaserPositions] = useRecoilState(laserPositionState);

    useFrame(({ mouse }) => {
      // Move the Lasers and remove lasers at end of range or that have hit the ground.
      setLaserPositions(
        lasers
          .map((laser) => ({
            id: laser.id,
            x: laser.x - laser.velocity[0],
            y: laser.y - laser.velocity[1],
            z: laser.z + LASER_Z_VELOCITY,
            velocity: laser.velocity,
          }))
          .filter((laser) => laser.z > -LASER_RANGE && laser.y > GROUND_HEIGHT)
      );
    });
    return null;
  }

  return (<>
    <RecoilRoot>
      <ArWing />
      <Target />
      <Lasers />
      <LaserController />
      <GameTimer />
    </RecoilRoot>
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