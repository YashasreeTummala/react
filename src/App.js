import React, { useState } from "react";
import "./App.css";
import Album from "./modules/music_store/Album";
import Header from "./modules/music_store/Header";
import Player from "./modules/music_store/Player";

function App() {
  const [song, setSong] = useState("Malang.mp3");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleSubmit}>
          <input type="text" value={song} onChange={(e) => setSong(e.target.value)} />
          <input type="submit" value="Submit" />
      </form>
      <Album updateSong={(updatedSong) => setSong(updatedSong)} />
      <Player song={song} />
    </div>
  );
}

export default App;





// function App() {
//   const [childData, setChildData] = useState("Yash-Click here")
//   return (
//     <div className="buttons">
//       <Button1 parent={childData} child="Sara" grandChild="Karl" onChange = {(data)=> setChildData(data)}/>
//     </div>
//   );
// }
