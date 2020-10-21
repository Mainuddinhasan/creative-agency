import React from 'react';
import CarouselPortion from '../CarouselPortion/CarouselPortion';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import SocialSiteLink from '../SocialSiteLink/SocialSiteLink';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SocialSiteLink></SocialSiteLink>
            <OurServices></OurServices>
            <CarouselPortion></CarouselPortion>
            <ClientsFeedback></ClientsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;