import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/slider/footballnet.jpg';
import img2 from '../../../images/slider/cricket.jpg';
import img3 from '../../../images/slider/rugby.jpg';
import img4 from '../../../images/slider/tabletennis.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
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
        </div >
    );
};

export default Banner;