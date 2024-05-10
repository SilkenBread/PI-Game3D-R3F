import React from "react";
import "./stylesLayaout.css";

export default function Menu() {
  return (
    <div className="menu-box">
      <section className="contend-box">
        <div className="audio-box">
          <button className="btn-audio">
            <img
              src="/assets/images/uiImages/btns/audiobtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Audio</text>
        </div>
        <div className="contro-box">
          <button className="btn-audio">
            <img
              src="/assets/images/uiImages/btns/controlsbtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Controles</text>
        </div>
        <div className="guide-box">
          <button className="btn-audio">
            <img
              src="/assets/images/uiImages/btns/guidebtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Guia</text>
        </div>
        <div className="logout-box">
          <button className="btn-audio">
            <img
              src="/assets/images/uiImages/btns/logoutbtn.png"
              alt="audio-btn"
            />
          </button>
          <text>Salir</text>
        </div>
      </section>
    </div>
  );
}
