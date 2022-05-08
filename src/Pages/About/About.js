import React from 'react';
import about from '../../images/about/pexels-cottonbro-7019222 (1).jpg'

const About = () => {
    return (
        <div className='mb-48'>
            <div className='font-montserat my-10'>
                <h1 className='text-center text-4xl mb-16'>About Us</h1>
                <div className='w-11/12 lg:w-3/4 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
                        <div className=''>
                            <img className=' rounded' src={about} alt="" />
                        </div>
                        <div className='flex items-center'>
                            <p>Sports Gear is a warehouse where one can find their desired gears. We have a lot of sports gear collection in our inventory. These gears come from well known suppliers. We have enough quantity of each gear in our inventory. Sports Gear warehouse is big and it is maintained very nicely.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;