import React, { useState } from "react"
import logo from "./blinker-logo.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    document.body.classList.add("menu--open");
    setIsOpen(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open");
    setIsOpen(false);
  };

  return (
    <section id="header_section">
      <nav>
        <figure className="logo">
          <img src={logo} alt="Logo" className="logo__img" />
        </figure>

        <ul className="nav__links">
          <li className="nav_link">
            <Link to="/" className="link__hover-effect--purple">
              Home
            </Link>
          </li>
          <li className="nav_link">
            <Link to="/LandingPage" className="link__hover--effect link__hover-effect--black">
              Find your car
            </Link>
          </li>
          <li>
            <a href="#" className="nav__link--primary">
              Contact
            </a>
          </li>
        </ul>
        
        <button className="btn__menu" onClick={openMenu}>
         <FontAwesomeIcon icon="fa-bars"><i className="fas fa-bars" aria-hidden="true"></i></FontAwesomeIcon>
        </button>

         {isOpen && (
          <div className="menu__backdrop">
             <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              
              <FontAwesomeIcon icon="fa-times"></FontAwesomeIcon>
            </button>
            <ul className="menu_links">
              <li className="menu__list">
                <a href="#" className="menu__link" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a href="#features" className="menu__link" onClick={closeMenu}>
                  Find your Movie
                </a>
              </li>
              <li className="menu__list">
                <a className="menu__link no-cursor" onClick={closeMenu}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default NavLink;