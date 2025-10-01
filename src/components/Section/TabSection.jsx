import React, { useState } from "react";
import Box from "@mui/material/Box";
import TabsHeader from "./TabsHeader";
import TabContent from "./TabContent";
import MultiSlider from "../ImageSlider/MultiSlider";
import { Tab } from "@mui/material";
import Fashion from "../TabsComponent/Fashion";
import Beauty from "../TabsComponent/Beauty";

const TabSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Fashion",
    "Electronics",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery",
  ];

  const tabContents = [
    <Fashion/>,
    <Beauty/>
  ];

  return (
    <div className="w-full">
    <div className="container flex ">
      {/* Heading */}
    
      <div className="flex-col hidden w-1/3 lg:flex">
        <p className="text-2xl font-bold">Popular Products</p>
        <p>Do not miss the current Offers</p>
      </div>
      

      <Box className="w-full m-auto rounded-md md:w-full lg:w-2/3 ">
        <TabsHeader
          value={value}
          handleChange={handleChange}
          labels={tabLabels}
        />
           </Box>
         
    </div>
      
        {tabContents.map((component, idx) => (
          <TabContent key={idx} value={value} index={idx} className="!w-full ">
            {component}
          </TabContent>
        ))}
    </div>
  );
};

export default TabSection;


//  "👜 Latest Fashion Trends and Clothing",
//     "📱 Electronics – Mobiles, Laptops, Accessories",
//     "👟 Stylish Footwear for Men & Women",
//     "🛒 Fresh Groceries at Best Prices",
//     "💄 Beauty & Cosmetics Collections",
//     "💪 Health & Wellness Essentials",
//     "💍 Elegant Jewellery Designs",