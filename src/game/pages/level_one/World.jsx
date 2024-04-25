import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props) {
    // const { nodes, materials } = useGLTF("assets/models/level_one/world.glb")
    const worldModel = useGLTF("assets/models/level_one/world.glb")

    console.log(worldModel)

    // const PATH_FLOOR = "/assets/textures/floor/"
    // const PATH_WALLS = "/assets/textures/wall/"

    // const propsFloorTexture = useTexture({
    //     map: PATH_FLOOR + "coast_sand_rocks_02_diff_1k.jpg",
    //     normalMap: PATH_FLOOR + "coast_sand_rocks_02_nor_gl_1k.jpg",
    //     roughnessMap: PATH_FLOOR + "coast_sand_rocks_02_rough_1k.jpg",
    //     displacementMap: PATH_FLOOR + "coast_sand_rocks_02_disp_1k.png",
    // })

    // const propsWallsTexture = useTexture({
    //     map: PATH_WALLS + "stone_tiles_02_diff_1k.jpg",
    //     normalMap: PATH_WALLS + "stone_tiles_02_nor_gl_1k.jpg",
    //     roughnessMap: PATH_WALLS + "stone_tiles_02_rough_1k.jpg",
    //     displacementMap: PATH_WALLS + "stone_tiles_02_disp_1k.png",
    // })

    // propsFloorTexture.map.repeat.set(4, 64);
    // propsFloorTexture.map.wrapS = propsFloorTexture.map.wrapT = RepeatWrapping;

    // propsFloorTexture.normalMap.repeat.set(4, 64);
    // propsFloorTexture.normalMap.wrapS = propsFloorTexture.normalMap.wrapT = RepeatWrapping;

    // propsFloorTexture.roughnessMap.repeat.set(4, 64);
    // propsFloorTexture.roughnessMap.wrapS = propsFloorTexture.roughnessMap.wrapT = RepeatWrapping;

    // propsFloorTexture.displacementMap.repeat.set(4, 64);
    // propsFloorTexture.displacementMap.wrapS = propsFloorTexture.displacementMap.wrapT = RepeatWrapping;



    // propsWallsTexture.map.repeat.set(4, 4);
    // propsWallsTexture.map.wrapS = propsWallsTexture.map.wrapT = RepeatWrapping;

    // propsWallsTexture.normalMap.repeat.set(4, 4);
    // propsWallsTexture.normalMap.wrapS = propsWallsTexture.normalMap.wrapT = RepeatWrapping;

    // propsWallsTexture.roughnessMap.repeat.set(4, 4);
    // propsWallsTexture.roughnessMap.wrapS = propsWallsTexture.roughnessMap.wrapT = RepeatWrapping;

    // propsWallsTexture.displacementMap.repeat.set(4, 4);
    // propsWallsTexture.displacementMap.wrapS = propsWallsTexture.displacementMap.wrapT = RepeatWrapping;

    return (
        <mesh>
            <primitive object={worldModel.scene} />
        </mesh>

        // <group {...props} dispose={null}>
        //     {/* Laberinto */}
        //     <mesh geometry={nodes.WallsLaberinto.geometry} material={materials.Material}>
        //         <meshStandardMaterial {...propsWallsTexture} />
        //     </mesh>
        //     <mesh geometry={nodes.BaseLaberinto.geometry} />
        //     <mesh geometry={nodes.FloorLaberinto.geometry} >
        //         <meshStandardMaterial {...propsFloorTexture} />
        //     </mesh>

        //     {/* Inicio */}
        //     <mesh geometry={nodes.BaseInicio.geometry} material={materials.Material}/>
        //     <mesh geometry={nodes.FloorInicio.geometry} >
        //         <meshStandardMaterial {...propsFloorTexture} />
        //     </mesh>
        // </group>
    )
}

useGLTF.preload('assets/models/level_one/world.glb')