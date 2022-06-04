import React from 'react';
import Banner from '../Banner/Banner';
import About from './About';

const Home = () => {
    return (
        <div className='bg-warning'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;