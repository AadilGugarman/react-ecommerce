// src/components/BasicSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'



export default function BasicSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true, 
  };

  return (
    <div className="relative w-full px-3 mx-auto mt-2"> 
      <Slider {...settings}>
        <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg h-72">
          <h3 className="text-2xl font-bold">Slide 1</h3>
        </div>
        <div className="flex items-center justify-center text-white bg-green-500 rounded-lg h-72">
          <h3 className="text-2xl font-bold">Slide 2</h3>
        </div>
        <div className="flex items-center justify-center text-white bg-red-500 rounded-lg h-72">
          <h3 className="text-2xl font-bold">Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
}
