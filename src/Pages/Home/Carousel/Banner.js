import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/slider/footballnet.jpg';
import img2 from '../../../images/slider/cricket.jpg';
import img3 from '../../../images/slider/rugby.jpg';
import img4 from '../../../images/slider/tabletennis.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false}>
                <div>
                    <img className='w-full h-[450px] md:h-[450px] object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[450px] md:h-[450px] object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[450px] md:h-[450px] object-cover' src={img3} />
                </div>
                <div>
                    <img className='w-full h-[450px] md:h-[450px] object-cover' src={img4} />
                </div>
            </Carousel>
            <div className='flex justify-center'>
                <div className="absolute bottom-28">
                    <button className='hover:cursor-text font-normal text-xl text-white border-2 w-80 mx-auto border-white py-1'>
                        Premium Sports Gear Available
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className='absolute bottom-14'>
                    <button className='font-medium text-xl text-black bg-white border-2 w-60 py-1 mx-auto border-white hover:text-white hover:bg-gray-900 hover:border-gray-900 uppercase'>
                        <Link to='/'>See Inventory</Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Banner;