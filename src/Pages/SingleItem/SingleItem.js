import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item]);

    const updateQuantity = id => {
        let quantity = item.quantity;
        // console.log(quantity);
        quantity -= 1;
        // console.log(quantity);
        const updatedDetail = { quantity };
        // console.log(updatedDetail);
        fetch(`http://localhost:5000/items/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedDetail),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    // console.log(item);

    return (
        <div className='bg-gray-100 pb-10'>
            <div className='w-3/4 mx-auto pt-10'>
                <div className='flex items-center justify-center flex-col xl:flex-row gap-14 md:gap-10'>
                    <img className='w-[450px] rounded-sm' src={item.image} alt="" />
                    <div className='bg-white p-4 relative'>
                        <p className='pb-1'>You accessed the item with id <br /> <span className='text-gray-600'>{id}</span></p>
                        <h1 className='text-xl font-semibold text-indigo-600 pb-2'>{item.name}</h1>
                        <p className='text-gray-700 pb-1'> {item.description} </p>
                        <p className='text-xl font-medium text-indigo-500 pb-1'>Price: <span className='text-amber-400 font-semibold'>{item.price}</span></p>
                        <h2 className='text-gray-600 text-2xl font-bold pb-1 absolute -top-8 md:top-2 right-0 pr-0 md:pr-4'>Quantity: <span className='text-amber-400'>{item.quantity}</span></h2>
                        <h2 className='text-gray-700 pb-1'>Supplied from {item.supplier}</h2>
                        <h2 className='text-gray-700 pb-2'>Sold status No</h2>
                        <button onClick={() => updateQuantity(id)} className='w-32 bg-gray-800 py-2 font-medium text-white border-2 border-gray-700 rounded-sm hover:bg-stone-200 hover:text-black'>
                            Delivered
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SingleItem;