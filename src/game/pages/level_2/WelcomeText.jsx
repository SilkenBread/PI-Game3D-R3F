import { Center, Float, Html, Text, Text3D } from "@react-three/drei";

const WelcomeText = (props) => {
   
    return (
        <Float
            speed={1.5}
            rotationIntensity={0.1}
            floatIntensity={0.5}
            floatingRange={[0, 1]}
        >

            <Center position={[0, 0.8, -6.5]}>
                <Text3D
                    position={props.position}
                    font={"/assets/fonts/MarsMissionFont.json"}
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

        // <Float
        //     speed={1.5}
        //     rotationIntensity={0.1}
        //     floatIntensity={0.5}
        //     floatingRange={[-1, 0]}
        // >
        //     <Text
        //         position={props.position}
        //         fontSize={0.2}
        //         color={"orange"}
        //         textAlign="center"
        //         font="/assets/fonts/MarsMissionFont.ttf"
        //     >
        //         Estacion Planetaria 2
        //     </Text>
        // </Float>

        //   <Html
        //     className="welcome-text"
        //     position={props.position}
        //     distanceFactor={10}
        //     occlude
        //   >
        //     <h2>Estacion Planetaria 2</h2> 
        //     </Html>
    )
}

export default WelcomeText;