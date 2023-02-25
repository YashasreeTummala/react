import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import React from "react";
import "./Style.css";

export default function Item(props) {
  console.log("Item: ",props)
  return (
    <div className="p-3">
      <img src={props.src} alt="main poster" className="poster" />
      <div onClick={() => props.updateSong(props.song)}>
        <PlayCircleFilled color={props.color} />
      </div>
    </div>
  );
}
