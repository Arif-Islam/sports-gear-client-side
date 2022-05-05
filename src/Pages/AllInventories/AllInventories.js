import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllInventories.css';
import TabularItem from './TabularItem/TabularItem';

const AllInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items]);
    return (
        <div>
            <h1 className='text-center text-2xl lg:text-3xl font-semibold mt-10 mb-4'>Manage Inventories</h1>
            <div className='flex justify-center'>
                <button className='w-56 hover:bg-gray-200 py-2 hover:text-gray-900 border-2 border-gray-700 rounded-sm bg-stone-200 text-black mb-10'>
                    <Link to='/addnewitem'>Add New Item</Link>
                </button>
            </div>
            <h1 className="text-2xl pt-6 pb-6 text-center bg-gray-100">All items</h1>
            <div className='bg-gray-100'>
                <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                    <div className='flex bg-gray-200 flex-wrap'>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Image</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Name</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Price</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Quantity</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Supplier</p>
                        <p className='p-2 w-2/12 text-sm md:text-base font-semibold tracking-wide text-center border-x-[1px] md:border-x-2 border-gray-50'>Remove Item</p>
                    </div>
                </div>
            </div>
            {/* <hr className='w-32 border border-indigo-500 mx-auto mb-6' /> */}
            {
                items.map(item => <TabularItem
                    key={item._id}
                    item={item}
                ></TabularItem>)
            }
            <div className='h-10 bg-gray-100'></div>

        </div>

    );
};

export default AllInventories;