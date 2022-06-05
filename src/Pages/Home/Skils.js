import React from 'react';

const Skils = () => {
    return (
        <div className='my-40'>
            <div className='mb-20'>
                <h2 className='text-center text-warning font-bold text-3xl'>Skils</h2>
                <p className='text-center text-warning font-bold'>Here is my Skils information</p>
            </div>
            <div>
                <div class="card w-2/3 bg-base-100 sm:w-3/4 shadow-xl mx-auto">
                    <h4 className='text-center font-bold text-3xl mt-5'>Heard Skills:</h4>
                    <div class="card-body">
                        <h2 class="card-title">HTML5</h2>
                        <p><progress class="progress progress-primary w-2/3" value="85" max="100"></progress>85%</p>
                        <h2 class="card-title">CSS3</h2>
                        <p><p><progress class="progress progress-primary w-2/3" value="80" max="100"></progress>80%</p></p>
                        <h2 class="card-title">JavaScript</h2>
                        <p><progress class="progress progress-primary w-2/3 " value="70" max="100"></progress>70%</p>
                        <h2 class="card-title">React JS</h2>
                        <p><progress class="progress progress-primary w-2/3 " value="85" max="100"></progress>85%</p>
                        <h2 class="card-title">Tailwind CSS</h2>
                        <p><progress class="progress progress-primary w-2/3 " value="85" max="100"></progress>85%</p>
                        <h2 class="card-title">Firebase</h2>
                        <p><progress class="progress progress-primary w-2/3 " value="85" max="100"></progress>85%</p>
                        <h2 class="card-title">MongoDB</h2>
                        <p><progress class="progress progress-primary w-2/3 " value="85" max="100"></progress>85%</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skils;