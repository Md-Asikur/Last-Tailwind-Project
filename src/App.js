import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Nav";
import Navbarmenu from "./components/Nav/Nav";
import Services from "./components/services/Services";
import Testimonials from "./components/Testmonials/Testimonials";

function App() {
  return (
    <div>
    
        {/* Add Menu Component */}
     <Navbar/>
      <Home/>
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}
export default App;
