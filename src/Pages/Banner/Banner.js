import jsPDF from 'jspdf';
import React from 'react';
import banner1 from '../../img/banner .png';
import resume from '../../img/emlak_resume.pdf';
const Banner = () => {

    return (
        <div id='#home' class="hero min-h-screen bg-base-content text-warning mx-auto ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={600} src={banner1} class="h-auto rounded-lg shadow-2xl" />
                <div className='mx-10	'>
                    <h1 class="text-5xl font-bold shadow-2xl rounded-lg ">Hello Imran Ahmed</h1>
                    <p class="pt-2 font-bold">Font End Web Developer</p>
                    <p className='font-bold py-5'>Email: emlak.hossain7@gmail.com</p>
                    <button class="btn btn-outline font-bold text-white hover:bg-warning">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;