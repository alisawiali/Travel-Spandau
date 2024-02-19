import React from "react";

const Home = () => {
  return (
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
            <label htmlFor="location" className="location">
              Location
            </label>
            <input type="text" placeholder=" Fream Destination" />

            <div className="distDev">
              <label htmlFor="distDev" className="location">
                Location
              </label>
              <input type="text" placeholder=" 11/Meters" />
            </div>
            <div className="priceDev">
              <label htmlFor="priceDev" className="location">
                Location
              </label>
              <input type="text" placeholder="$140-$500" />
            </div>
            <button className="btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
