import React from "react";
import { NavLink } from "react-router-dom";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDev">
          <div className="footerLogo">
            <NavLink className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </NavLink>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condation</a>
          </li>
          <li>
            <a href="#">privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <li className="phone">
            <FaPhoneAlt /> <a href="tel:++91 8045673210">+91 8045673210</a>
          </li>
          <li className="email">
            <MdOutlineMail />
            <a href="mailto:info@travelfy.com">info@travelfy.com</a>
          </li>
          <li className="location">
            <HiLocationMarker /> <a href="http://">New York, USA</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
