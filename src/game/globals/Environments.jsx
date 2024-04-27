import { Sky, Sparkles, Stars } from "@react-three/drei"

export default function Environments() {
    return <>
        <Stars
            radius={270}
            depth={1}
            count={25000}
            factor={4}
            saturation={0}
            fade={true}
        />
    </>
}