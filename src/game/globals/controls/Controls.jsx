import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useAvatar } from "../../../context/AvatarContext";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import Avatar2 from "../player/Avatar2";

export default function Controls() {
    const { avatar, setAvatar } = useAvatar();
    const [sub, get] = useKeyboardControls();
    const controlsRef = useRef();
    const [walkSound] = useState(new Audio("/assets/sounds/Walk.wav"));
    const [jumpSound] = useState(new Audio("/assets/sounds/Grunt.wav"));
    const [attackSound] = useState(new Audio("/assets/sounds/AttackExt.wav"));
    const [play, setPlay] = useState(false);
    const [sound, setSound] = useState(null);

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
                roll: state.roll,
                death: state.death,
            }),
            ({ walk, run, jump, attack, roll, death }) => {
                if (jump) {
                    setAvatar({ ...avatar, animation: 'Jump' })
                } else if (run) {
                    setAvatar({ ...avatar, animation: 'Run' })
                } else if (walk) {
                    setAvatar({ ...avatar, animation: 'Walk' })
                } else if (attack) {
                    setAvatar({ ...avatar, animation: 'Attack' })
                } else if (roll) {
                    setAvatar({ ...avatar, animation: 'Roll' })
                } else {
                    setAvatar({ ...avatar, animation: 'Idle' })
                }
            }
        );
        return () => unsubscribe();
    }, [avatar, setAvatar, sub, get]);

    useEffect(() => {
        if (play) {
          if (avatar.animation === 'Run') {
            walkSound.currentTime = 0
            walkSound.play()
          } else if (avatar.animation === 'Walk') {
            walkSound.currentTime = 0
            walkSound.play()
          }
          if (avatar.animation === 'Attack') {
            attackSound.currentTime = 0
            attackSound.volume = 0.5
            attackSound.play()
          } else if (avatar.animation === 'Jump') {
            jumpSound.currentTime = 0
            jumpSound.play()
          } 
        } else {
            // walkSound.pause()
        }
      }, [play, avatar.animation])

    useFrame(() => {
        const { forward, backward, leftward, rightward, jump, attack } = get()
        if (forward || backward || leftward || rightward || jump || attack) {
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