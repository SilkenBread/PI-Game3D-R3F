import React from "react";

import "./stylesLayaout.css";
import { useAvatar } from "../../context/AvatarContext";

export default function MainLayaout(props) {
  const {avatar, setAvatar} = useAvatar();
  const {displayName} = props.info;

  return (
    <div className="main-scren">
      <header className="header-game">
        <text className="tittleLevel">{props.text}</text>
        <div className="title-deco">
          <img src="/assets/images/uiImages/tittle.png" alt="detalistitlle" />
        </div>
      </header>

      <section className="info-boxes">
        <div className="reward-box">
          <text className="rewards-counting">{avatar.recompensas}</text>
          <img src="/assets/images/uiImages/rewardsDeco.png" alt="rewards" />
        </div>
        <div className="life-box">
          <text className="life-counting">{avatar.vidas}</text>
          <img src="/assets/images/uiImages/lifeDeco.png" alt="lifes" />
        </div>
        <div className="player-info">
          <text className="player-name">{displayName}</text>
          <img src="/assets/images/uiImages/PlayerLayer.png" alt="" />
        </div>
      </section>
    </div>
  );
};
