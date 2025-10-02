import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./components/pages/CategoryPage";
import {
  fashionProducts,
  electronicsProducts,
  beautyProducts,
} from "./Data/dummyData.js";

import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
