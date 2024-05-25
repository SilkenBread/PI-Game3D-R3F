import React from "react";
import "./stylesMsg.css";

export default function ControlPoint() {
  return (
    <div className="main-box">
      <img
        className="point-box"
        src="/assets/images/uiImages/cards/CardMessReward.png"
      />
      <div className="alert-box">
        <div className="tree-box">
          <img className="tree" src="\assets\images\uiImages\cards\checkPointAnimatet2.gif" />
        </div>
        <div className="box-text">
          <text className="tittle-Point">Punto de Control Alcanzado</text>
        </div>
      </div>
    </div>
  );
}
