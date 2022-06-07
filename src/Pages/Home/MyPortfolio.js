import React from 'react';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.webp';
import project3 from '../../img/project3';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-center font-bold text-3xl text-warning text-uppercase pb-20'>My Portfolio</h2>
            <div className='grid grid-cols md:grid-cols-2  lg:grid-cols-3 gap-10 mx-auto center mb-20 ml-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Personal Web Application With React JS and responsive</h2>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Doctors Chamber Web Application with React JS</h2>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={project3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Restaurants Web Site with React JS and firebase and MongoDB</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;