import "./App.css";

import Button1 from "./modules/react_components/Button1";

function App() {
  return (
    <div className="buttons">
      <Button1 parent="Yash" child="Sara" grandChild="Karl" onChange= {(data)=> console.log(data)}/>
    </div>
  );
}

export default App;
