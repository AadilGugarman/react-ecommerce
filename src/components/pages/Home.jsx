import React from "react";
import MultiSlider from "../ImageSlider/MultiSlider";
import BasicSlider from "../ImageSlider/BasicSlider";
import FreeShipping from "../Section/FreeShipping";
import AdsSlider from "../ImageSlider/AdsSlider";
import TabSection from "../Section/TabSection";
import FeaturedProducts from "../Section/FeaturedProducts";
import ServiceHighlights from "../Section/ServiceHighlights";


const Home = () => {
  return (
    <div>
      <BasicSlider />
      <MultiSlider />
      <FreeShipping/>
      {/* <AdsSlider/> */}
       <TabSection/>
       <FeaturedProducts/>
       <ServiceHighlights/>
       
     
    </div>
  );
};

export default Home;
