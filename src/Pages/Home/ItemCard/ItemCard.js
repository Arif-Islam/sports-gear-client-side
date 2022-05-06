import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = (props) => {
    const { _id, name, image, description, price, quantity, supplier } = props.item;
    const navigate = useNavigate();
    const showSingleItem = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='bg-white w-[400px]  overflow-hidden'>
            <div className='flex flex-col items-center justify-center border border-gray-200 rounded'>
                <img className='w-80 h-96 object-cover mx-auto hover:opacity-60 ' src={image} alt="" />
                <div className='bg-[#F6F6F6] px-4 h-[340px] md:h-72 flex flex-col justify-center items-start overflow-hidden'>
                    <h1 className='text-xl font-semibold text-blue-600 pb-2' >{name}</h1>
                    <h2 className='text-gray-600 pb-1 text-base'>{description}</h2>
                    <h2 className='text-xl font-medium text-blue-600 pb-1'>Price: <span className='text-amber-400 font-semibold '>{price}</span></h2>
                    <h2 className='text-gray-600 pb-1'>Quantity: {quantity}</h2>
                    <h2 className='text-gray-700 pb-2'>Supplied from {supplier}</h2>
                    <button onClick={() => showSingleItem(_id)} className='w-36 bg-sky-600 py-2 text-stone-100 border-2 border-sky-600 rounded hover:bg-sky-700 hover:border-sky-700 font-medium'>
                        Manage item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;