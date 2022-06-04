import React from 'react';
import banner1 from '../../img/banner .png';
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-warning">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={600} src={banner1} class="h-auto rounded-lg shadow-2xl" />
                <div className='mx-10	'>
                    <h1 class="text-5xl font-bold ">Hello Imran Ahmed</h1>
                    <p class="py-6 font-bold">Font End Web Developer</p>
                    <button class="btn btn-outline font-bold">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;