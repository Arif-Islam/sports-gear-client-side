import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../images/slider/footballnet.jpg';
import img2 from '../../../images/slider/cricket.jpg';
import img3 from '../../../images/slider/rugby.jpg';
import img4 from '../../../images/slider/tabletennis.jpg';

const Banner = () => {
    const images = [
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2
        },
        {
            id: 3,
            img: img3
        },
        {
            id: 4,
            img: img4
        },
    ]
    
    return (
        <div>
            <Carousel autoplay infiniteLoop interval={5000} showThumbs={false}>
                <div>
                    <img className='w-full h-[650px] object-cover' src={img1} />
                </div>
                <div>
                    <img className='w-full h-[650px] object-cover' src={img2} />
                </div>
                <div>
                    <img className='w-full h-[650px] object-cover' src={img3} />
                </div>
                <div>
                    <img className='w-full h-[650px] object-cover' src={img4} />
                </div>
            </Carousel>
        </div >
    );
};

export default Banner;