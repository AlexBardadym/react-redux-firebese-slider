import React, { Component } from "react";
import Slider from "react-slick";
import "./userslider.scss";
import { Link } from "react-router-dom";

class UserSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true
    };
    return (
      <div className="slider-items">
        <h2>{localStorage.getItem("currentUser")}</h2>
        <Slider {...settings}>
          <div>
            <img src="http://static.uvarosa.com.br/sliders/img/landscape/01.jpg" />
          </div>
          <div>
            <img src="https://slidervilla.com/smooth-slider/files/2014/05/6.jpg" />
          </div>
          <div>
            <img src="http://wowslider.com/sliders/demo-91/data1/images/stream384655_1280.jpg" />
          </div>
          <div>
            <img src="https://www.jamesbondracing.com/backend/News/jssor/img/home/01.jpg" />
          </div>
          <div>
            <img src="http://wowslider.com/sliders/demo-83/data1/images/innsbruck358280_1280.jpg" />
          </div>
          <div>
            <img src="http://cssslider.com/sliders/demo-32/data1/images/herbage349812_1280.jpg" />
          </div>
          <div>
            <img src="http://responsiveslides.com/2.jpg" />
          </div>
          <div>
            <img src="http://marineacademy.edu.pk/assets/slider/slider11.jpeg" />
          </div>
          <div>
            <img src="https://smartslider3.com/wp-content/uploads/slider132/image-slider-with-thumbnail1.jpeg" />
          </div>
        </Slider>
        <Link to={"/user-data-page"}>
          <a className="waves-effect waves-light btn #5c6bc0 indigo lighten-1">
            Back
          </a>
        </Link>
      </div>
    );
  }
}

export default UserSlider;
