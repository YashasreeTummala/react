import './App.css';
import img1 from './images/movie1.jpeg'
import img2 from './images/movie2.jpeg'
import img3 from './images/movie3.jpeg'
import img4 from './images/movie4.jpeg'
import img5 from './images/movie5.jpeg'
import img6 from './images/movie6.jpeg'

function App() {

  return (
    <div className="shows">
    <center>    
    <header>
    <h1> Movie Night </h1>
    <div className="movies1">
      <img src={img1} alt="movie 1"/>
      <img src={img2} alt="movie 2"/>
      <img src={img3} alt="movie 3"/>
    </div>
    <div className="movies2">
      <img src={img4} alt="movie 4"/>
      <img src={img5} alt="movie 5"/>
      <img src={img6} alt="movie 6"/>
    </div>
    </header>
    </center>
    </div>
  );
}

export default App;
