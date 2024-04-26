import { Sky, Sparkles, Stars } from "@react-three/drei"

export default function Environments() {
    return <>
        <Sky
            inclination={0.2}
            azimuth={180}
            rayleigh={0.1}
            turbidity={0.1}
            luminance={1}
            sunPosition={[-1, 0, -1]}
        />
        <Sparkles
            color={"#FF7D33"}
            count={100}
            size={4}
            scale={1}
            speed={0.5}
            position={[-4.5, 0.5, -4.5]}
        />
        <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade={true}
        />
    </>
}