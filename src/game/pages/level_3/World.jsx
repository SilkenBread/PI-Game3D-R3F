import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props) {
    const worldModel = useGLTF("assets/models/level_3/world3.glb")

    return (
        <mesh>
            <primitive object={worldModel.scene} />
        </mesh>
    )
}

useGLTF.preload('assets/models/level_3/world.glb')