import React from "react";
import "./stylesLayaout.css";

export default function MainLayaout() {
  return (
    <div className="main-scren">
      <header className="header-game">
        <text className="tittleLevel">ALPHACENTAURY</text>
        <div className="title-deco">
          <img src="/assets/images/uiImages/tittle.png" alt="detalistitlle" />
        </div>
      </header>

      <section className="info-boxes">
        <div className="reward-box">
          <text className="rewards-counting">10</text>
          <img src="/assets/images/uiImages/rewardsDeco.png" alt="rewards" />
        </div>
        <div className="life-box">
          <text className="life-counting">3</text>
          <img src="/assets/images/uiImages/lifeDeco.png" alt="lifes" />
        </div>
        <div className="player-info">
          <text className="player-name">Player Name</text>
          <img src="/assets/images/uiImages/PlayerLayer.png" alt="" />
        </div>
      </section>
    </div>
  );
};
