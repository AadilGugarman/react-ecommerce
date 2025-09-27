import React from "react";
import MultiSlider from "../ImageSlider/MultiSlider";
import BasicSlider from "../ImageSlider/BasicSlider";
import FreeShipping from "../Section/FreeShipping";
import AdsSlider from "../ImageSlider/AdsSlider";
import TabSection from "../Section/TabSection";


const Home = () => {
  return (
    <div>
      <BasicSlider />
      <MultiSlider />
      <FreeShipping/>
      {/* <AdsSlider/> */}
       <TabSection/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
