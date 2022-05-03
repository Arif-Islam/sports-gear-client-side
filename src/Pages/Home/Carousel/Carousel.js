import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from '../../../images/slider/footballnet.jpg';
import img2 from '../../../images/slider/cricket.jpg';
import img3 from '../../../images/slider/rugby.jpg';
import img4 from '../../../images/slider/tabletennis.jpg';

const Carousel = () => {
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
        <div className='relative'>
            <Slider autoplay="10000"
                infinite="true"
                classNames="animateOut"
                className="slider-wrapper"
                previousButton=""
                nextButton=""
                >
                {images.map((image) => (
                    <div
                        className="absolute top-0 w-full"
                        key={image.id}
                        style={{
                            backgroundImage: `url(${image.img})`,
                            backgroundSize: 'cover',
                            objectFit: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '655px',
                        }}
                    >
                    </div>
                ))
                }
            </Slider >
            <div>
                <span
                    id="blackOverlay"
                    className="w-full absolute bg-center opacity-20 bg-black top-0"
                    style={{ height: '655px' }}
                ></span>
            </div>
        </div >
    );
};

export default Carousel;