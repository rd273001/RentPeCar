import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Header } from "./Header";

const HomeImageSlider = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="row title">
          <div class="col-sm btn btn-warning">
            <h1>Welcome To RentPeCar - Online Car Rental Services</h1>
          </div>
        </div>
      </div>

      <div>

      
        <Carousel>
          <Carousel.Item interval={5000}>
            <img
              style={{ height: "800px"}}
              className="d-block w-100"
              src="images/slider1.jpg"
              alt="sliderimage"
            />
            <Link className="carousel-button" to="car_type">
              Let's GO!    
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={5000} style={{ height: "800px" }}>
            <img
              style={{ height: "800px" }}
              className="d-block w-100"
              src={"images/slider2.jpg"}
              alt="sliderimage"

            />
            <Link className="carousel-button" to="car_type">
              Let's GO!    
            </Link>
          </Carousel.Item>

          <Carousel.Item interval={2000} style={{ height: "800px" }}>
            <img
              style={{ height: "800px" }}
              className="d-block w-100"
              src={"images/slider3.jpg"}
              alt="sliderimage"

            />
            <Link className="carousel-button" to="car_type">
              Let's GO!    
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default HomeImageSlider;
