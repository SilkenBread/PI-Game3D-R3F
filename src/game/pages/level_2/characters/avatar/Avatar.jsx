import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../../../context/AvatarContext";

export default function Avatar() {
    const avatarRef = useRef();
    const avatarBodyRef = useRef();
    const { avatar, setAvatar } = useAvatar();

    useEffect(() => {
        setAvatar({
            ref: avatarRef.current,
            body: avatarBodyRef.current,
        });
    }, [avatarBodyRef.current, avatarRef.current]);

    return (
        <RigidBody
            ref={avatarBodyRef}
            position={[0, 0.5, 1]}
            colliders="ball"
        >
            <mesh
                ref={avatarRef}
            >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    )
}