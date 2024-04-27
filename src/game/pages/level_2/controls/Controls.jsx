import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../../context/AvatarContext";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";

export default function Controls() {
    const { avatar, setAvatar } = useAvatar();
    const [sub, get] = useKeyboardControls();
    const controlsRef = useRef();
    let walkDirection = new Vector3();
    let rotateAngle = new Vector3(0, 1, 0);
    let rotateQuaternion = new Quaternion();
    const velocity = 3;
    let cameraTarget = new Vector3();
    const desiredDistance = 2;

    const getDirectionOffset = (forward, backward, leftward, rightward) => {
        if (leftward && forward) return Math.PI / 4;
        if (rightward && forward) return -Math.PI / 4;
        if (leftward && backward) return Math.PI * 3 / 4;
        if (rightward && backward) return -Math.PI * 3 / 4;
        if (forward) return 0;
        if (backward) return Math.PI;
        if (leftward) return Math.PI / 2;
        if (rightward) return -Math.PI / 2;
    }

    useEffect(() => {
        return sub(
            (state) => state.forward,
            (pressed) => {
                console.log("forward", pressed);
            }
        )
    }, [])

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward } = get()
        if (forward || backward || leftward || rightward) {
            const directionOffset = getDirectionOffset(forward, backward, leftward, rightward)
            const currentTranslation = avatar.body?.translation()

            const angleYCameraDirection = Math.atan2(
                state.camera.position.x - currentTranslation.x,
                state.camera.position.z - currentTranslation.z
            )

            rotateQuaternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + Math.PI + directionOffset
            );

            avatar.ref.quaternion.rotateTowards(rotateQuaternion, 0.2);

            state.camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, directionOffset);

            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;

            const newPosition = new Vector3(
                currentTranslation.x + moveX,
                currentTranslation.y,
                currentTranslation.z + moveZ
            )

            avatar.body?.setTranslation(
                {x: newPosition.x,
                y: newPosition.y,
                z: newPosition.z
            }, true);

            avatar.body.setRotation(
                new Quaternion({
                    x: 0,
                    y: avatar.ref.quaternion.y,
                    z: 0,
                    w: 1
                }).normalize()
            );

            state.camera.position.add(
                new Vector3(
                    moveX,
                    0,
                    moveZ
                )
            )

            cameraTarget.set(
                newPosition.x,
                newPosition.y + 1,
                newPosition.z
            )

            controlsRef.current.target = cameraTarget;

            const avatarPosition = new Vector3(
                newPosition.x,
                newPosition.y + 1,
                newPosition.z
            )

            const cameraPosition = state.camera.position
            const direction = cameraPosition.sub(avatarPosition).normalize()
            const newCameraPosition = avatarPosition.add(direction.multiplyScalar(desiredDistance))
            state.camera.position.copy(newCameraPosition)

        } else {
            avatar.body?.sleep()
        }

        const pressed = get().back
    })

    return (
        <OrbitControls
            ref={controlsRef}
            target={[0, 0.8, -5.5]}
        />
    )
}