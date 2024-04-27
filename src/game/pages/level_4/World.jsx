import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function World(props) {
  const { nodes, materials } = useGLTF("assets/models/level_4/levelBase.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.IsLand1.geometry}
          material={materials["Amatist.001"]}
        />
      </RigidBody>

      <mesh
        castShadow
        geometry={nodes.Rocks.geometry}
        material={materials.Material}
      />

      <mesh
        receiveShadow
        geometry={nodes.Montains.geometry}
        material={materials.MountainsColor}
      />

      <RigidBody type="fixed" colliders="cuboid">
        <mesh
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.002"]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.CheckPoints.geometry}
          material={materials.Amatist}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.CheckPoints2.geometry}
          material={materials.Amatist}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.CheckPoints3.geometry}
          material={materials.Amatist}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.Bridge.geometry}
          material={materials.PrimaryColor}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.StartBase.geometry}
          material={materials.PrimaryColor}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.platformM1.geometry}
          material={materials.Esmerald}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.PlaftFormM2.geometry}
          material={materials.Esmerald}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.PlatFormMoved.geometry}
          material={materials["Amatist.001"]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.BaseRoom.geometry}
          material={materials["Amatist.001"]}
        />
      </RigidBody>

      <mesh
        castShadow
        geometry={nodes.Rings.geometry}
        material={materials.Esmerald}
      />

      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          geometry={nodes.FloorRooms.geometry}
          material={materials.Amatist}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          geometry={nodes.ColumsM.geometry}
          material={materials.Marmle}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/levelBase.glb");
