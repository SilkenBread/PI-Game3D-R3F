import { useMemo } from "react"

export default function useMovements() {
    const MOVEMENTES = {
        forward: "forward",
        backward: "backward",
        leftward: "leftward",
        rightward: "rightward",
        jump: "jump",
        exit: "exit",
        run: "run"
    }

    const map = useMemo(() => {
        return[
            {name: MOVEMENTES.forward, keys: ["KeyW", "ArrowUp"]},
            {name: MOVEMENTES.backward, keys: ["KeyS", "ArrowDown"]},
            {name: MOVEMENTES.leftward, keys: ["KeyA", "ArrowLeft"]},
            {name: MOVEMENTES.rightward, keys: ["KeyD", "ArrowRight"]},
            {name: MOVEMENTES.jump, keys: ["Space"]},
            {name: MOVEMENTES.exit, keys: ["Escape"]},
            {name: MOVEMENTES.run, keys: ["ShiftLeft"]}
        ]
    }, [])

    return map;
}