import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import CategoryPage from "./components/pages/CategoryPage";
import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "./Data/dummyData.js";

import "./index.css";
import "./App.css";
import HomeLayout from "./components/Layouts/HomeLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout.jsx";


function App() {
  return (
    <>

      <Routes>
       
        <Route element={<HomeLayout/>}>
        <Route path="/" element={<Home />} />
        </Route>
       <Route element={<MainLayout/>}>
            <Route
          path="/fashion"
          element={<CategoryPage title="Fashion" products={fashionProducts} />}
        />
        <Route
          path="/electronics"
          element={
            <CategoryPage title="Electronics" products={electronicsProducts} />
          }
        />
        <Route
          path="/beauty"
          element={<CategoryPage title="Beauty" products={beautyProducts} />}
        />
       </Route>
       
      </Routes>
   
    </>
  );
}

export default App;
