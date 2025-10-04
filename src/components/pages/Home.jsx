import React from "react";
import FreeShipping from "../Section/FreeShipping";
import TabSection from "../Section/TabSection";
import FeaturedProducts from "../Slider/FeaturedProducts";
import ServiceHighlights from "../Section/ServiceHighlights";
import SliderSection from "../Slider/SliderSection";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <FreeShipping />
      <TabSection />
      <FeaturedProducts />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
