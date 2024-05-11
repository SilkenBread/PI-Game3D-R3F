import { createContext, useContext, useState } from "react";
import { func } from "three/examples/jsm/nodes/Nodes.js";

export const villainContext = createContext ();

export const useVillain = () => {
    const context = useContext(villainContext);
    if (!context) {
        console.error("Error creando el contexto del Villano");
        return;
    }
    return context;
}
export function VillainProvider({children}) {
    const [villain, setVillain] = useState({
        ref: null,
        body: null,
        vidas: 500,
        death: false,
    });

    return (
        <villainContext.Provider value={{villain, setVillain}}>
            {children}
        </villainContext.Provider>
    )
}