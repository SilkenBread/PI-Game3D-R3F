import React, { useEffect, useRef } from "react";
import "./stylesLevelSelectos.css";
import { useNavigate } from "react-router-dom";


export const LevelSelector = () => {
  const audioRef = useRef(null);
  const starSoundRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  }, []);

  const onHandleButtonLevel = (path) => {
    if (
      (starSoundRef.current = new Audio("/assets/sounds/alertasefxs/Play.wav"))
    ) {
      starSoundRef.current.volume = 0.5;
      starSoundRef.current.play();
    }
    setTimeout(() => {
      navigate(path);
    }, 3000);
  };
  return (
    <div className="main-screnlvl">
    <text className="tittle-select">¿Que Mundo Quieres Explorar?</text>
      <audio
        ref={audioRef}
        src="/assets/sounds/ambient/AmbientSound.wav"
        loop
      />
      <img
        className="background-level"
        src="/assets/images/uiImages/uiScrens/Fondo(EspacioSinTexto).jpg"
      />
      <div className="levels-container">
        <button className="level" onClick={() => onHandleButtonLevel("/Level1")}>
          <img
            className="level-img"
            src="assets/images/uiImages/uiScrens/levelVs/Level1Vs.png"
          />
          <span className="tittle-level1">Eterna Celestia</span>
        </button>
        <button className="level" onClick={() => onHandleButtonLevel("/Level2")}>
          <img
            className="level-img2"
            src="assets/images/uiImages/uiScrens/levelVs/Level2Vs.png"
          />
          <span className="tittle-level2">Orbitronix</span>
        </button>
        <button className="level" onClick={() => onHandleButtonLevel("/Level3")}>
          <img
            className="level-img3"
            src="assets/images/uiImages/uiScrens/levelVs/Level3Vs.png"
          />
          <span className="tittle-level3">GalacticMaze</span>
        </button>
        <button className="level" onClick={() => onHandleButtonLevel("/Level4")}>
          <img
            className="level-img4"
            src="assets/images/uiImages/uiScrens/levelVs/Level4Vs.png"
          />
          <span className="tittle-level4">Obsidian Abyss</span>
        </button>
      </div>
    </div>
  );
};
