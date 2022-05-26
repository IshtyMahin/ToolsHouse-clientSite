import React from "react";
import Navbar from "../Shared/Navbar";

import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import ContactUs from "./ContactUs";
import HomeHeader from "./HomeHeader";
import Review from "./Review";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Review></Review>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
