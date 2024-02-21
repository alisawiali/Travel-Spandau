import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-down" className="title">
              Plan your Trip With Travel Dot
            </h1>
            <p
              className="subTitl"
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              Travel to your fvuorite with respectful of the enviroment
            </p>
            <button
              className="btn"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <a href="#">Explore Now</a>
            </button>
          </div>
          <div className="homeCard grid">
            <div className="locationDev">
              <div className="location">
                <label htmlFor="location" className="location">
                  Location
                  <input type="text" placeholder=" Fream Destination" />
                </label>
              </div>
              <div className="distDev">
                <label htmlFor="distDev" className="location">
                  Location
                  <input type="text" placeholder=" 11/Meters" />
                </label>
              </div>
              <div className="priceDev">
                <label htmlFor="priceDev" className="location">
                  Location
                  <input type="text" placeholder="$140-$500" />
                </label>
              </div>
              <button className="btn">Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
