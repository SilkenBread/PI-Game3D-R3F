import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUser, readUser, updateUser } from "../db/users-collections"

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.error("Error creando el contexto de Autenticación");
        return;
    }
    return context;
}


export function AuthProvider({ children }) {
    const [userLogged, setUserLogged] = useState(null);
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentuser) => {
            !currentuser ? setUserLogged(null) : setUserLogged(currentuser);
        })

        return () => suscribed();
    }, [])

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);

            return res;
        } catch (error) {
            return error;
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            return error;
        }
    }

    return (
        <authContext.Provider value={{ 
            userLogged, 
            loginWithGoogle, 
            logout,
            position, 
            setPosition }}
        >
            {children}
        </authContext.Provider>
    )
}