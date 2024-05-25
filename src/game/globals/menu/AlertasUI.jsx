import { useContext, useEffect, useState } from "react";
import { avatarContext, useAvatar } from "../../../context/AvatarContext";
import GameOverLy from "../../layouts/GameOverLy";
import { useVillain } from "../../../context/villainContext";
import EndLevel from "../../layouts/EndLevel";

export default function AlertasUI() {
  const { avatar, setIsFrozen, setAvatar } = useAvatar();
  const { villain } = useVillain();
  const [deadMenuVisible, setDeadMenuVisible] = useState(false);
  const [winMenuVisible, setWinMenuVisible] = useState(false);

  useEffect(() => {
    if (avatar.vidas == 0 && !winMenuVisible) {
      setTimeout(() => {
        setDeadMenuVisible(true);
        setIsFrozen(true);
      }, 4000);
    }
  }, [avatar.vidas, winMenuVisible]);

  useEffect(() => {
    if (villain.death == true && !deadMenuVisible) {
      setTimeout(() => {
        setWinMenuVisible(true);
      }, 6000);
    }
  }, [villain.death, deadMenuVisible]);

  return (
    <div className="alter-display">
      {deadMenuVisible && <GameOverLy />}{winMenuVisible && <EndLevel />}
    </div>
  );
}
