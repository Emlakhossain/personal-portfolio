import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Blogs from './Blogs';
import Education from './Education';
import MyPortfolio from './MyPortfolio';

const Home = () => {
    return (
        <div className='bg-base-content'>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <MyPortfolio></MyPortfolio>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;