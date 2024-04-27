import { Center, Float, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
   
    return (
        <Float
            speed={1.5}
            rotationIntensity={0.1}
            floatIntensity={0.5}
            floatingRange={[0, 1]}
        >

            <Center position={[0, 0.8, -6]}>
                <Text3D
                    position={[0, 0.8, -6]}
                    font={"/public/assets/fonts/MarsMissionFont.json"}
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.1}
                    letterSpacing={0.05}
                    size={0.25}
                >
                    <meshDepthMaterial/>
                    {props.text}
                </Text3D>
            </Center>
        </Float>
    )
}

export default WelcomeText;