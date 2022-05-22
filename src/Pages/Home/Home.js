import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import HomeHeader from './HomeHeader';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            
            <HomeHeader></HomeHeader>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>

           
        </div>
    );
};

export default Home;