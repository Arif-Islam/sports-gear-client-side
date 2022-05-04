import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
    const { name, image, description, price, quantity, supplier } = props.item;
    return (
        <div className='bg-white w-[400px]  overflow-hidden'>
            <div className='flex flex-col items-center justify-center border border-gray-200 rounded'>
                <img className='w-80 h-96 object-cover mx-auto hover:opacity-60 ' src={image} alt="" />
                <div className='bg-[#F6F6F6] px-4 h-64 flex flex-col justify-center items-start'>
                    <h1 className='text-xl font-semibold text-indigo-600 pb-2' >{name}</h1>
                    <h2 className='text-gray-600 pb-1 text-base'>{description}</h2>
                    <h2 className='text-xl font-medium text-indigo-500 pb-1'>Price: <span className='text-amber-400 font-semibold '>{price}</span></h2>
                    <h2 className='text-gray-600'>Quantity: {quantity}</h2>
                    <h2 className='te'>Supplier: {supplier}</h2>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;