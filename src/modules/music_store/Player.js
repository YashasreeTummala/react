import React from "react";
import "./Style.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player(props) {
  console.log("Player: ",props)
  return (
    <div className="music-player">
      <AudioPlayer
        autoPlay
        src={`assets/audio/${props.song}`}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
