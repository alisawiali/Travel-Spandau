import React, { useEffect } from "react";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

// let us import img  ==========>
import imgOrange from "../../assets/organe-Home.jpeg";
// so since we have finisched styling ervey content,
//let us also use the same high order arary methode (map)
// to list our offers

// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";

// Import offers array  aus offers.js
import offers from "./offers";

// useEffect should be a function that takes
const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="offers container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural specteculars. come see the best of
            the world.
          </p>
        </div>
        <div className="mainContent" data-aos="fade-left">
          {offers &&
            offers.map(({ id, imgSrc, destTitle, location, price }) => {
              return (
                <div className="singelOffer" key={id}>
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                    <span className="descou">15% OFF</span>
                  </div>
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className="icon" />
                        <small>1 bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className="icon" />
                        <small>Wi-Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className="icon" />
                        <small>Shuttle</small>
                      </div>
                    </div>
                    <div className="location flex">
                      <MdLocationPin className="icon" />
                      <small>450 Vine '310, {location}</small>
                    </div>
                    <button className="btn flex">
                      View Detailes
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
