import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SupplierCard = (props) => {
    const { image, name, rating, description } = props.supplier;
    
    return (
        <div>
            <div className='shadow-lg hover:shadow-xl bg-white w-72 mx-auto md:w-96 h-80 md:h-72 rounded pt-8 mb-10 lg:mb-0'>
                <div className='pb-5'>
                    <img className='w-16 mx-auto rounded-full shadow-lg' src={image} alt="" />
                </div>
                <h2 className='text-center pt-2 text-md font-semibold text-blue-500 pb-1'>{name}</h2>
                <div className='flex justify-center text-stone-300 w-full pb-2'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(250 204 21)' }} icon={faStar} />}
                        fractions={2}
                        readonly
                    />
                </div>
                <div className='w-full text-center px-4'>
                    <p className='text-3xl text-left text-blue-500 h-4 font-medium'>"</p>
                    <p className='text-sm text-gray-600 text-center px-4'>{description}</p>
                    <p className='text-3xl text-right text-blue-500 font-medium'>"</p>
                </div>
            </div>
        </div>
    );
};

export default SupplierCard;