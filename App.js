import React from "react";
 
import "./index.css";
import NavLink from "./components/pages/Find_move/navLink.jsx";
import Project from "./components/pages/Home/Project.jsx"
import LandingPage from "./components/pages/Find_move/LandingPage.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import "./index.js"
import Movie_description from "./components/pages/Home/Movie_description.jsx";
import selecteddMovie from "./components/pages/Home/selectedMove.jsx";


 //https://omdbapi.com/?apikey=4cfe7eb4&s=fast
function App() {
  return (
       
    <div className="App">
       <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/LandingPage" element={<LandingPage/>}/>
      <Route path="/Movie_description/:imdbID"  element={<Movie_description/>}/>
      
      </Routes>
      
    </div>
  

  );
}

export default App;
