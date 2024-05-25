import { useContext,useEffect, useState } from "react";
import { avatarContext, useAvatar } from "../../../context/AvatarContext";
import GameOverLy from "../../layouts/GameOverLy";
import { useVillain } from "../../../context/villainContext";
import EndLevel from "../../layouts/EndLevel";


export default function AlertasUI() {
    const { avatar, setIsFrozen, setAvatar } = useAvatar();
    const { villain} = useVillain();
    const [deadMenuVisible, setDeadMenuVisible] = useState(false);
    const [winMenuVisible, setWinMenuVisible] = useState(false);

    useEffect(()=>{
        if (avatar.vidas == 0){
            setTimeout(()=> {
                setDeadMenuVisible(true);
                setIsFrozen(true);
            },4000);
        }
    }, [avatar.vidas]);

    useEffect(()=>{
        if(villain.vidas == 0){
            setTimeout(()=>{
                setWinMenuVisible(true);
            },6000)
        }
    })

    return <div className="alter-display">{deadMenuVisible && <GameOverLy/>} {winMenuVisible && <EndLevel/> }</div>;
}