import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Feature from "./components/feature/feature";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
