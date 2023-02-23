import { useState } from "react";
import "./App.css";

import Button1 from "./modules/react_components/Button1";

function App() {
  const [childData, setChildData] = useState("Yash-Click here")
  return (
    <div className="buttons">
      <Button1 parent={childData} child="Sara" grandChild="Karl" onChange = {(data)=> setChildData(data)}/>
    </div>
  );
}
export default App;

