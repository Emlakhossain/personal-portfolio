import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Blogs from './Blogs';
import MyPortfolio from './MyPortfolio';
import Skils from './Skils';

const Home = () => {
    return (
        <div className='bg-base-content'>
            <Banner></Banner>
            <About></About>
            <MyPortfolio></MyPortfolio>
            <Skils></Skils>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;