import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.1}
            floatIntensity={0.5}
            floatingRange={[0, 1]}
        >
            <Center position={props.position}>
                <Text3D
                    position={props.position}
                    font={"assets/fonts/MarsMissionFont.json"}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.1}
                    letterSpacing={0.05}
                    size={props.size}
                    rotation={props.rotation}
                >
                    <meshNormalMaterial />
                    {props.text}
                </Text3D>
            </Center>
        </Float>
    )
}

export default WelcomeText;