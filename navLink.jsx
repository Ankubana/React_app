  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import "../Find_move/style.css"
  import  { useState } from "react"
  import logo from "../Find_move/Assets/blinker-logo.png"
import { faSync } from "@fortawesome/free-solid-svg-icons";
import SELECTMOVE from "../Home/selectedMove.jsx";
import axios from "axios";
const Nav=()=>{
//Responsive nav link
function openMenu() {
  document.body.classList += " menu--open"
}
function closeMenu() {
  document.body.classList.remove('menu--open')
}

    return(
    <>
<section id="nav__header">
<nav>
<figure className="logo">
<img src={logo} alt="" className="logo__img"/>
</figure>
 <ul className="nav__links">
  <li className="nav_link ">
   <a  href="index.html" className="link__hover-effect--purple">Home</a>
   </li>
    <li className="nav_link ">
    <a href=""className="link__hover--effect link__hover-effect--black">Find your Movie</a>
   </li>
   <li >
    <a href=""className="nav__link--primary">Contact</a>
   </li>
 </ul>
 <button className="btn__menu" onClick={openMenu}>
  <i className="fas fa-bars" aria-hidden="true"></i>
</button>
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
</nav>

 </section>

 </>  
 )
}
 export default Nav