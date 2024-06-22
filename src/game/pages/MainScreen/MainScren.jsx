import React, { useEffect, useRef } from "react";
import "./stylesMainScren.css";
import { useNavigate } from "react-router-dom";

export const MainScren = () => {
  const audioRef = useRef(null);
  const starSoundRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  }, []);

  const onHandleButtonStart = () => {
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
    <div className="main-screnbxb">
      <audio
        ref={audioRef}
        src="/assets/sounds/ambient/AmbientSound.wav"
        loop
      />
      <img
        className="background"
        src="/assets/images/uiImages/uiScrens/Fondo(Espacio).jpg"
      />
      <div className="box-start">
        <img
          className="crytal-deco"
          src="/assets/images/uiImages/uiScrens/DecoCrystalnf.gif"
        />
        <button className="start" onClick={onHandleButtonStart}>
          JUGAR
        </button>
        <img
          className="crytal-deco"
          src="/assets/images/uiImages/uiScrens/DecoCrystalnf.gif"
        />
      </div>
    </div>
  );
};
