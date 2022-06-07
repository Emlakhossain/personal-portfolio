import React from 'react';
import img from '../../img/banner .png';

const About = () => {
    return (
        <div>

            <div class="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-60 bg-base-content">
                <img width={600} src={img} alt="Movie" className='bg-dark' />
                <div class="card-body bg-base-content p-20 text-warning">
                    <h2 id='about' className=' font-bold'>ABOUT</h2>
                    <h2 class="card-title text-5xl font-bold">Font End Developer</h2>
                    <p className='pt-5'>I'm web developer, and I'm very passionate and dedicated to my work. With 1 year experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-outline text-white hover:btn-warning">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;