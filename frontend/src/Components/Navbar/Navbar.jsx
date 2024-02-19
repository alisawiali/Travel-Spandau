import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
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
  return (
    <div className="navBarSection">
      <div className="header">
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
              <a href="#" className="navlink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navlink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Resoues
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Contacts
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navlink">
                Blog
              </a>
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
