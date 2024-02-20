import React from "react";

const HomePage = () => {
  return (
    <div>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">Plan your Trip With Travel Dot</h1>
            <p className="subTitl">
              Travel to your fvuorite with respectful of the enviroment
            </p>
            <button className="btn">
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
