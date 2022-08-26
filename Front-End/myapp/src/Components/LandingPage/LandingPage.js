import React from "react";
import Header from "../HeaderComponents/Header";
import Banner from "../SliderComponents/Banner";
import Body from "./../HomeComponents/Body";
import Footer from "../FooterComponents/Footer";

function LandingPage() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
