import React, { useState, useEffect, useRef } from "react";

//Icons
import speakerIcon from "../../../assets/Icons/volume-solid.svg";
import speakerSlashIcon from "../../../assets/Icons/volume-slash-solid.svg";

// Media
import music from "../../../assets/Music/bg-music-default.mp3";
import arrowDown from "../../../assets/Icons/arrow-down.svg";

const MusicBox = () => {
  const [muted, setMuted] = useState(true);

  const audioRef = useRef();

  return (
    <div className="music">
      <span className="music_text">Hit the vibe</span>
      <img 
        alt="arrow down"
        src={arrowDown}
        className="music_arrow"
      />
      <button className="music_box">
        <audio
          id="invite-music"
          loop
          autoPlay={true}
          muted={muted}
          ref={audioRef}
        >
          <source src={music} type="audio/mp3" />
        </audio>
        <img
          className="music_box_image"
          src={!muted ? speakerIcon : speakerSlashIcon}
          alt="volume-icon"
          onClick={() => {
            setMuted(!muted);
            const audio = document.getElementById("invite-music");
            audio.muted = !muted;
            audio.volume = 0.5;
            audio.play();
          }}
        />
      </button>
    </div>
  );
};

export default MusicBox;
