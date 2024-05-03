import { Stars } from "@react-three/drei"

const Enviroments = (props) => {
    return <>
        <Stars
            radius={props.radius}
            depth={1}
            count={props.count}
            factor={4}
            saturation={0}
            fade={true}
        />
    </>
}

export default Enviroments;