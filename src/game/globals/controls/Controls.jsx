import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";

export default function Controls() {
    const { avatar, setAvatar } = useAvatar();
    const [sub, get] = useKeyboardControls();
    const controlsRef = useRef();
    const [runSound] = useState(new Audio("/assets/sounds/FastWalking.wav"));
    const [play, setPlay] = useState(false);

    useEffect(() => {
        const unsubscribe = sub(
            (state) => ({
                walk:
                    state.forward || state.backward || state.leftward || state.rightward,
                run:
                    state.run &&
                    (state.forward ||
                        state.backward ||
                        state.leftward ||
                        state.rightward),
                jump: state.jump,
                attack: state.attack,
                death: state.death,
            }),
            ({ walk, run, jump, attack, death }) => {
                if (jump) {
                    setAvatar({ ...avatar, animation: 'Jump' })
                } else if (run) {
                    setAvatar({ ...avatar, animation: 'Run' })
                } else if (walk) {
                    setAvatar({ ...avatar, animation: 'Walk' })
                } else if (attack) {
                    setAvatar({ ...avatar, animation: 'Attack' })
                } else if (death) {
                    setAvatar({ ...avatar, animation: 'Death' })
                } else {
                    setAvatar({ ...avatar, animation: 'Idle' })
                }
            }
        );
        return () => unsubscribe();
    }, [avatar, setAvatar, sub, get]);

    useEffect(() => {
        if (play) {
            runSound.currentTime = 0;
            runSound.volume = Math.random()
            runSound.play()
        } else {
            runSound.pause()
        }
    }, [play])

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward, jump } = get()
        if (forward || backward || leftward || rightward) {
            setPlay(true)
        } else {
            setPlay(false)
        }

        const pressed = get().back
    })

    return (
        null
    )
}