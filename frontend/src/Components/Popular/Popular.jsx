import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//  Import the Image ====================
import imgHome from "../../assets/wohnung-schnee.jpeg";
const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDev">
            <h2 className="secTitle">Popular Destionation</h2>
            <p>
              From histroical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>
          <div className="iconsDev flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          <div className="singleDestinalion">
            <div className="destImage">
              <img src={imgHome} alt="Image Title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className="icon" />
              </div>
            </div>
            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>Lodnon</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
