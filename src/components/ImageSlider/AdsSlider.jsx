import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const AdsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="relative w-full px-3 m-5 ">
      <Slider {...settings}>
        {/* Card 1 */}
        <div className="px-2">
          <Link to="/card1" className="block">
            <div className="relative flex items-center justify-center h-40 overflow-hidden bg-pink-500 rounded-lg ">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 1"
                className="object-cover w-full h-full"
              />
              <h3 className="absolute text-xl font-bold text-white">Card 1</h3>
            </div>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="px-2">
          <Link to="/card2" className="block">
            <div className="relative flex items-center justify-center h-40 overflow-hidden bg-yellow-500 rounded-lg ">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 2"
                className="object-cover w-full h-full"
              />
              <h3 className="absolute text-xl font-bold text-black">Card 2</h3>
            </div>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="px-2 ">
          <Link to="/card3" className="block">
            <div className="relative flex items-center justify-center h-40 overflow-hidden bg-indigo-500 rounded-lg ">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 3"
                className="object-cover w-full h-full"
              />
              <h3 className="absolute text-xl font-bold text-white">Card 3</h3>
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default AdsSlider;
