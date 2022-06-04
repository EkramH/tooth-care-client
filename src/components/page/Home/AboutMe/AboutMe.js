import React from "react";
import hero from "../../../../assets/hero.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div className="about-section">
        <div className="about-content shadow rounded-3">
          <div className="about-content-wrapper d-flex align-items-center g-5 position-relative flex-xl-row flex-column">
            <img className="img-fluid p-5" src={hero} alt="" />
            <div className=" px-3 px-lg-5">
              <h2>Dr. Samira Khan</h2>
              <h5>B.D.S(D.U), P.G.T(OMS)</h5>
              <p>Dhaka Dental College</p>
              <p>
                After I graduate from Dhaka Dental College got opportunity to
                work as internship in Dhaka Dental College. I have 10 years
                experience in Oral and Dental Surgen. Also I am special trained
                in Dental implant and cosmetic dentristi.
              </p>
            </div>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-3 main-bg text-light shadow">
              <h3 className="px-3">About Me</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
