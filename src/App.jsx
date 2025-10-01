import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import "./index.css";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
