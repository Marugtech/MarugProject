import React from "react";
import Header from "../HeaderComponents/Header";
import Banner from "../SliderComponents/Banner";
import Home from "../HomeComponents/Home";
import Footer from "../FooterComponents/Footer";

function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
