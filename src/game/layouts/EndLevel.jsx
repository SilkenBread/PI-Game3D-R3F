import React, { useEffect, useRef } from "react";
import "./stylesMsg.css";
import { useNavigate } from "react-router-dom";

export default function EndLevel() {
  const starSoundRef = useRef(null);
  const navigate = useNavigate();
  const onHandleButtonLevel = () => {
    if (
      (starSoundRef.current = new Audio("/assets/sounds/alertasefxs/Play.wav"))
    ) {
      starSoundRef.current.volume = 0.5;
      starSoundRef.current.play();
    }
    setTimeout(() => {
      navigate("/LevelSelector");
    }, 3000);
  };
  return (
    <div className="main-box">
      <img
        className="endLeve-backGround"
        src="../assets/images/uiImages/cards/mainMessagCar.png"
      />
      <div className="components-box">
      <div className="box-elements-img">
        <img className="gosh-animated" src="/assets/images/uiImages/cards/gostAnimation.gif"/>
        <img className="portal-animated" src="/assets/images/uiImages/cards/portalAnimationR.gif"/>
      </div>
        <div className="box-text">
          <text className="tittle-Point">Nivel Completado</text>
          <div className="separador"></div>
          <text className="info-text">
            ¡Enhorabuena, intrépido aventurero! Has superado los desafíos y
            desentrañado los misterios de este mundo. Tu valentía y habilidad te
            han llevado a través del universo, y el cosmos celebra tu
            victoria. El camino por delante es largo y está lleno de nuevas
            maravillas y peligros. Pero por ahora, disfruta de este momento de
            triunfo. Prepárate para la siguiente etapa de tu épica odisea. ¡El
            universo te espera!
          </text>
        </div>
        <div className="box-btns">
        <button className="nextLevel">
            <text>»» El viaje continúa... ««</text>
          </button>
        </div>
      </div>
    </div>
  );
}
