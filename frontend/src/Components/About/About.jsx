import React, { useEffect } from "react";
// Images ==============>
import img1 from "../../assets/AboutImages/customer.png";
import img2 from "../../assets/AboutImages/mountair.png";
import img3 from "../../assets/AboutImages/climbing-png.webp";
// Import  Video ============>
// import video from "../../assets/AboutImages/IMG_5815.mov";

// Aos Import
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  //

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className=" about section ">
      <div className="secContainer" data-aos="fade-left">
        <h2 className="title">Why Hikings?</h2>
        <div className="mainContainer container grid">
          <div className="singleItem">
            <img src={img3} alt="Image Name" />
            <h3>100+ Mountains</h3>
            <p>
              Reserach showa that chance to breacj away from the normal rhythms
              of daily life reduces stress and improves health and well-bging.
            </p>
            <button className="btn">More Info</button>
          </div>
          <div className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>1000+ Hikings</h3>
            <p>
              Reserach showa that chance to breacj away from the normal rhythms
              of daily life reduces stress and improves health and well-bging.
            </p>
            <button className="btn">More Info</button>
          </div>
          <div className="singleItem">
            <img src={img1} alt="Image Name" />
            <h3>2000+ Customer</h3>
            <p>
              Reserach showa that chance to breacj away from the normal rhythms
              of daily life reduces stress and improves health and well-bging.
            </p>
            <button className="btn">More Info</button>
          </div>
        </div>

        {/* <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House experience nin threr!.</h2>
              <p>
                The Advenure subranking is based on an equally weigthef avergae
                of scores from five country.
              </p>
            </div>
            <div className="cardVideo">
              <video src="" autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
