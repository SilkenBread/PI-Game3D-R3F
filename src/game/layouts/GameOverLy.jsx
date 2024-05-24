import React from "react";
import "./stylesMsg.css";

export default function GameOverLy(props) {
  return (
    <div className="main-box">
      <img
        className="fondo-box"
        src="../assets/images/uiImages/cards/mainMessagCar.png"
      />
      <div className="second-box">
        <div className="box-img">
          <img
            className="dead-deco"
            src="/assets/images/uiImages/cards/skullAnimation.gif"
            alt=""
          />
        </div>
        <div className="box-text">
            <text className="tittle-aviss">▂▃▄▅▆▇█▓▒░ GAME OVER ░▒▓█▇▆▅▄▃▂</text>
          <text className="info-text">
            Tu viaje ha llegado a su fin en este rincon del cosmos. Las
            estrellas observan en silencio mientras tu luz de desvanece. Pero no
            temas, valiente aventurero, pues cada final en solo un preludio de
            un nuevo comienzo. Levantate, ajusta tu armadura y adentrate una vez
            más en los misterios del Universo. El destino te llama y tu historia
            aun no ha terminado.
          </text>
        </div>
        <div className="box-btns">
          <button className="reset">
            <text>»» RENACER ««</text>
          </button>
          <button className="Leave">
            <text>»» ABANDONAR ««</text>
          </button>
        </div>
      </div>
    </div>
  );
}
