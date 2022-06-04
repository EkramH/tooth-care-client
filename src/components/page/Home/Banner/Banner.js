import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../../assets/banner1.png";
import banner2 from "../../../../assets/banner2.png";
import banner3 from "../../../../assets/banner3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-info display-3 fw-bold">
              Let Me Brighten Your Smile
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-info display-3 fw-bold">
              Let Me Brighten Your Smile
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-info display-3 fw-bold">
              Let Me Brighten Your Smile
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
