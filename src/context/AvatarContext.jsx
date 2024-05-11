import { createContext, useContext, useState } from "react";
import { func } from "three/examples/jsm/nodes/Nodes.js";

export const avatarContext = createContext ();

export const useAvatar = () => {
    const context = useContext(avatarContext);
    if (!context) {
        console.error("Error creando el contexto de Avatar");
        return;
    }
    return context;
}
export function AvatarProvider({children}) {
    const [avatar, setAvatar] = useState({
        ref: null,
        body: null,
        animation: "Idle",
        vidas: 5,
        recompensas: 0
    });

    return (
        <avatarContext.Provider value={{avatar, setAvatar}}>
            {children}
        </avatarContext.Provider>
    )
}