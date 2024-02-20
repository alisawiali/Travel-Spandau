import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
// M 27
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Code to toggle/ shwo navBar
  const showNavBar = () => {
    setActive("navBar activeNavbar");
  };

  // Code to remove
  const hideNavBar = () => {
    setActive("navBar");
  };

  // code to add background color to the header
  const [transpernt, setTranspernt] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 340) {
      setTranspernt("header activeNavbar");
    } else {
      setTranspernt("header");
    }
  };
  window.addEventListener("scroll", addBg);
  return (
    <div className="navBarSection">
      <div className={transpernt}>
        <div className="logoDev">
          <a href="#" className="logo">
            <h1>
              <SiYourtraveldottv className="icon" />
              Dot
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="navItem">
              <NavLink to="/popular">Popular</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/about">About</NavLink>
            </li>
            <div className="headersBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn ">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          <div onClick={hideNavBar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavBar} className="toggelNavbae">
          <TbGridDots className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
