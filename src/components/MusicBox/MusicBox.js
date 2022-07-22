import React, { useState, useEffect } from "react";

//Icons
import speakerIcon from "../../assets/Icons/volume-solid.svg";
import speakerSlashIcon from "../../assets/Icons/volume-slash-solid.svg";

import music from "../../assets/Music/Lana-Del-Rey-Summertime-Sadness.mp3";

const MusicBox = () => {
  const [volumeOn, setVolumeOn] = useState(true);

  useEffect(() => {
    const audio = document?.getElementById("invite-music");
    if (audio) console.log(audio);
  }, []);

  return (
    <button className="music_box">
      <audio id="invite-music" controls loop autoplay>
        <source src={music} type="audio/mp3" />
      </audio>
      <img
        className="music_box_image"
        src={volumeOn ? speakerIcon : speakerSlashIcon}
        alt="volume-icon"
        onClick={() => {
          setVolumeOn(!volumeOn);
          const audio = document.getElementById("invite-music");
          audio.muted = volumeOn;
          audio.pause();
        }}
      />
    </button>
  );
};

export default MusicBox;
