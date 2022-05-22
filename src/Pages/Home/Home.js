import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import HomeHeader from './HomeHeader';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeHeader></HomeHeader>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>

            <Footer></Footer>
        </div>
    );
};

export default Home;