import { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import Ghost from "./Ghost";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function GhostsManager(positions, ...props) {
    const [currentIndex, setCurrentIndex] = useState(1);
    let velocityVar = 8;
    let targetPosition = new THREE.Vector3();

    const [ghostsData, setGhostsData] = useState([
        { position: [-18, -2, -5], id: 1 },
        { position: [-26, 6, -24], id: 2 },
        { position: [-27, 12, -46], id: 3 },
        { position: [0, 15, -67], id: 4 },
        { position: [13, 16, -58], id: 5 },
        { position: [18, 17, -47], id: 6 },
        { position: [15, 42, -42.5], id: 7 },
        { position: [33, 17, -38], id: 8 },
        { position: [44, 22, -53], id: 9 },
        { position: [45, 22.5, -68], id: 10 },
        { position: [-3, 36.5, -170], id: 11 }
    ]);

    const onContact = (e, id) => {
        if (e.other.rigidBodyObject.name === "player") {
            console.log(e, id);
            setGhostsData(
                ghostsData.filter((ghostOb) => ghostOb.id !== id),
            );
        }
    };

    function moveGhosts(delta) {
        ghostsData.map((ghostOb) => {
            if (
                positions[ghostOb.id - 1]?.length > 0 &&
                currentIndex < positions[ghostOb.id - 1].length
                // && chasing == false
            ) {
                targetPosition = positions[ghostOb.id - 1][currentIndex];
                const currentPosition = ghostOb.id.current.position;
                const direction = new THREE.Vector3().subVectors(
                    targetPosition,
                    currentPosition
                );
                const distance = direction.length();
                const velocity = direction
                    .normalize()
                    .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí

                if (distance < 0.1) {
                    setCurrentIndex((currentIndex + 1) % positions[ghostOb.id - 1].length); // Mover al siguiente índice en el ciclo
                } else {
                    ghostOb.id.current.position.add(velocity);
                }
            }
        })

    }

    useFrame((state, delta) => {
        // moveGhosts(delta);

        ghostsData.map((ghostOb) => {
            if (
                positions[ghostOb.id - 1]?.length > 0 &&
                currentIndex < positions[ghostOb.id - 1].length
                // && chasing == false
            ) {
                targetPosition = positions[ghostOb.id - 1][currentIndex];
                const currentPosition = ghostOb.id.current.position;
                const direction = new THREE.Vector3().subVectors(
                    targetPosition,
                    currentPosition
                );
                const distance = direction.length();
                const velocity = direction
                    .normalize()
                    .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí

                if (distance < 0.1) {
                    setCurrentIndex((currentIndex + 1) % positions[ghostOb.id - 1].length); // Mover al siguiente índice en el ciclo
                } else {
                    ghostOb.id.current.position.add(velocity);
                }
            }
        })

        // else if (
        //     positions.length > 0 &&
        //     currentIndex < positions.length &&
        //     chasing == true
        // ) {
        //     const currentPosition = ref.current.position;
        //     const direction = new THREE.Vector3().subVectors(
        //         targetPosition,
        //         currentPosition
        //     );
        //     const distance = direction.length();
        //     const velocity = direction
        //         .normalize()
        //         .multiplyScalar(velocityVar * delta); // Ajusta la velocidad aquí

        //     if (distance < 0.1) {
        //         setChasing(false); // Mover al siguiente índice en el ciclo
        //     } else {
        //         ref.current.position.add(velocity);
        //     }
        // }

        // if (sensorMeshRef.current && ref.current && cilinderMeshRef.current) {
        //     sensorMeshRef.current.setTranslation(ref.current.position, true);
        //     cilinderMeshRef.current.setTranslation(ref.current.position, true);
        // }
    });

    return (
        <>
            {ghostsData.map((ghostOb) => (
                <RigidBody
                    key={ghostOb.id}
                    type="fixed"
                    colliders={"hull"}
                    onCollisionEnter={(e) => onContact(e, ghostOb.id)}
                >
                    <Ghost position={ghostOb.position} />
                </RigidBody>
            ))}
        </>
    )


}