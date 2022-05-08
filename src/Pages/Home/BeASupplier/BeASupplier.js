import React from 'react';
import img from '../../../images/slider/sports-tools.jpg'

const BeASupplier = () => {
    return (
        <div className='font-montserat '>
            <div className='relative'>
                <div>
                    <img className='h-96 object-cover w-screen hover:opacity-90' src={img} alt="" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='absolute top-32'>
                        <h1 className='text-2xl text-center mb-4 text-stone-700 p-2 rounded bg-sky-300 bg-opacity-80 font-medium '>Want to be a supplier?</h1>
                        <div className='flex'>
                            <input className='w-56 md:w-72 rounded p-2 focus:outline-none' type="text" name="" id="" placeholder='Email' />
                            <button className='bg-amber-400 text-gray-800 p-2 -ml-1 rounded-r hover:bg-amber-500'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeASupplier;