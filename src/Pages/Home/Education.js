import React from 'react';

const Education = () => {
    return (
        <div>
            <h2 className='text-center text-white font-bold text-3xl my-20'>Education</h2>
            <div className='gap-5 mx-auto px-20 items-center'>
                <div class="card card-side bg-base-100 shadow-xl w-4/5">
                    <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end px-5">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl w-4/5 my-10">
                    <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;