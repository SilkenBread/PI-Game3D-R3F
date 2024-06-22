import { createContext, useContext, useState } from "react";

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
        animation: "Idle",
        rbPlayer1Ref: null,
        rigidBodyAvatarRef: null,
        vidas: 5,
        recompensas: 0,
        keyUtily: 0,
    });

    const [isFrozen, setIsFrozen] = useState(false);

    return (
        <avatarContext.Provider value={{avatar, setAvatar, isFrozen, setIsFrozen}}>
            {children}
        </avatarContext.Provider>
    )
}