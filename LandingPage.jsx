import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import "../Find_move/style.css"
   import  { useState } from "react"
 import SELECTMOVE from "../Home/selectedMove.jsx";
import react from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../Find_move/Assets/blinker-logo.png"
import { keyboard } from "@testing-library/user-event/dist/keyboard/index.js";


const LandingPage=()=>{
const [userdata,setUserData]=useState()
const [inputvalue,setInputvalue]=useState("")
const [spinner,setSpinner]=useState("fas fa-spinner")
 async function handlechange(event){
    const value=event.target.value
     console.log(value)
    if ((event.key ==='Enter')||((value==="Fast")||value==="fast")) {
     setInputvalue(event.target.value)
   const{data}=await axios.get("https://omdbapi.com/?apikey=4cfe7eb4&s=fast")
  console.log(data)
  setUserData(data) 
  setSpinner("no_spinner")
    }
}  
 async function SearchMove(event){
  setInputvalue(event.target.value)
  const{data}=await axios.get("https://omdbapi.com/?apikey=4cfe7eb4&s=fast")
  console.log(data)
  setUserData(data) 
  setSpinner("no_spinner")
}
  const [isOpen, setIsOpen] = useState(false);
 
   const openMenu = () => {
     document.body.classList.add("menu--open");
     setIsOpen(true);
   };
 
   const closeMenu = () => {
     document.body.classList.remove("menu--open");
     setIsOpen(false);
   };
    return(
    <>
    <section id="nav__header">
<nav>
<figure className="logo">
<img src={logo} alt="" className="logo__img"/>
</figure>
 <ul className="nav__links">
  <li className="nav_link ">
   <Link to="/" className="link__hover-Effect--purple">Home</Link>
   </li>
    <li className="nav_link ">
    <a href=""className="link__hover--effect Link__hover-effect--black">Find your Movie</a>
   </li>
   <li >
    <a href=""className="Nav__link--primary">Contact</a>
   </li>
 </ul>

 <button className="btn__menu" onClick={openMenu}>
 <FontAwesomeIcon icon="fa-bars"></FontAwesomeIcon>
</button>
 {isOpen && (
<div className="menu__backdrop">
 <button className="btn__menu btn__menu--close" onClick={closeMenu}>
     <i className="fas fa-times" aria-hidden="true"></i>
 </button>
 <ul className="menu_links">
   <li className="menu__list">
       <a href="#" className="menu__link" onClick={closeMenu}>Home</a>
   </li>
   <li className="menu__list">
      <a href="#features" className="menu__link" onClick={closeMenu}>Find your Movie</a>
  </li>
    <li className="menu__list">
      <a className="menu__link no-cursor" onClick={closeMenu}>Contacts</a>
   </li>
 </ul>
</div>
 )}
</nav>
     <div className="header"> 
     <div className="searchInput__wrapper">
     <input  type="text" className="inputsearch"   placeholder="Search by Fast"  onKeyDown={handlechange}
      >
    </input>
  <button className="button_search"><FontAwesomeIcon icon="fas fa-search"  className="fa-search" onClick={SearchMove} /></button>    
    </div>
 </div>
 </section>
 <div className="line_drown">
  <div className="moving_line"></div>
</div>

  <script src="https://kit.fontawesome.com/ad0b70db15.js" crossOrigin="anonymous"></script>

 <div data-v-040c1d60="" className="md-progress-bar md-indeterminate md-theme-default" style={{position:"absolute", top:"0px", left:"0px",right:"0px"}}><div className="md-progress-bar-track"></div> <div className="md-progress-bar-fill"></div> <div className="md-progress-bar-buffer"></div></div>

 <section className="movies__project">
<div data-v-66aecfa2="" data-v-040c1d60="" id="filter" className="content-wrapper justify-between">
<h1 data-v-66aecfa2="" className="search-info">
<span data-v-66aecfa2="" className="black-txt">Search results:</span><span className="text_purple">{inputvalue}</span>
</h1><div data-v-66aecfa2="" className="price-filter flex flex-col">
<h2 data-v-66aecfa2=""><span data-v-66aecfa2=""className="black-txt" style={{marginRright:8}}>Price range:</span> $0 to $100,000 </h2>
<div data-v-66aecfa2="" className="slider-wrapper"><div data-v-66aecfa2="" role="slider" aria-valuemin={0} aria-valuemax={100000} aria-orientation="horizontal" className="el-slider" aria-valuetext={0-100000} aria-label="slider between 0 and 100000">
 <div className="el-slider__runway">
<div className="el-slider__bar" style={{width:'100%',left:'0%'}}></div>
<div tabIndex="0" className="el-slider__button-wrapper" style={{left:'0%'}}>
    <div className="el-tooltip el-slider__button" aria-describedby="el-tooltip-4826" tabIndex={0}></div></div>
    <div tabIndex="0" className="el-slider__button-wrapper" style={{left:'100%'}}>
   <div className="el-tooltip el-slider__button" aria-describedby="e{-tooltip-9271" tabIndex={0}></div></div><div>
   <div className="el-slider__stop el-slider__marks-stop" style={{left:'0%'}}></div>
   <div className="el-slider__stop el-slider__marks-stop" style={{left:'100%'}}></div></div>
   <div className="el-slider__marks"><div className="el-slider__marks-text" style={{left:'0%'}}>$0</div>
   <div className="el-slider__marks-text" style={{left:'100%'}}>$100,000</div></div></div></div></div>
    </div>
     </div>
 </section>
   <FontAwesomeIcon icon={spinner} className={spinner}/>
   <div className="project__select--move">
  <SELECTMOVE selectMovie={userdata}  />
  </div>
 </>
    )
}
export default LandingPage