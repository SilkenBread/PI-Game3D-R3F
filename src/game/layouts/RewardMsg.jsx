import React from "react";
import "./stylesMsg.css";

export default function RewardMsg() {
  return (
    <div className="main-box">
      <img
        className="reward-box"
        src="/assets/images/uiImages/cards/CardMessReward.png"
      />
      <div className="alert-box">
        <div className="coin-box">
          <img
            className="coin"
            src="/assets/images/uiImages/cards/coinsAnimation.gif"
          />
        </div>
        <div className="box-text">
          <text className="tittle-aviss2">🌟 Recompensa Reclamada 🌟</text>
          <div className="separador"></div>
          <text className="info-text">
            Tus habilidades y perseverancia han sido recompensadas. Has
            reclamado un tesoro de gran valor, una prueba de tu coraje y
            destreza. Esta recompensa te acercará un paso más a desentrañar los
            misterios que yacen ante ti.
          </text>
        </div>
      </div>
    </div>
  );
}
