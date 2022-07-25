import React, { useState, useEffect, useRef } from "react";

//Icons
import speakerIcon from "../../../assets/Icons/volume-solid.svg";
import speakerSlashIcon from "../../../assets/Icons/volume-slash-solid.svg";

import music from "../../../assets/Music/bg-music-default.mp3";

const MusicBox = () => {
  const [muted, setMuted] = useState(true);

  const audioRef = useRef();

  return (
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
  );
};

export default MusicBox;
