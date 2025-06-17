 import axios from "axios";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { useState,useEffect } from "react";
 import Project from "./Project";
import { getValue } from "@testing-library/user-event/dist/utils";


    const Landing=()=>{
    const [userData,setUserData]=useState(null)
    const [movephoto,setMoviephoto]=useState(null)
    const [search,setSearch]=useState("fas fa-search")
    const [spinner,setSpinner]=useState(null)
    const [btn,setBtn]=useState("btn")
    async  function onloading(){
     const{data}=await axios.get("https://omdbapi.com/?apikey=4cfe7eb4&s=fast")
         setUserData(data.Search.map((data)=>data))
         setSearch("Remove_Search")
         setSpinner("fa-spinner")
         setBtn("btn_bg")
      } 
     async function getValue()
      {
         const{data}=await axios.get("https://omdbapi.com/?apikey=4cfe7eb4&s=fast")
         setMoviephoto(data.Search.map((data)=>data))
        
      }
  return(
  <>
  
<section className="landing">
   <div className="header" > 
    
    <h1 className="header__title">Australia's most awarded movie subscription platform</h1>
    <h2 className="header__sub-title">FIND YOUR DREAM MOVIE  WITH <span className="text_purple">KUBARAINBOW</span></h2>
     <div className="Input__wrapper">
    <div className="search">
     <input className="searchInput" type="text"  hidden="" placeholder="search by title,by actor "onClick={getValue}></input> 
      </div>
     <div className="loading__button">
     <button className={btn}>
     <FontAwesomeIcon icon={search} className="fas fa-search SearchIcon " onClick={onloading}/><FontAwesomeIcon icon={spinner} aria-hidden="true"/></button> 
       </div>
  </div>
  </div>
   <Project movieSelected={userData} check={movephoto}/>
  </section>
    
  </>
    )
}
export default Landing