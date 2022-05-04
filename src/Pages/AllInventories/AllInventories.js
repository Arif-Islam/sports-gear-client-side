import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../Home/ItemCard/ItemCard';
import './AllInventories.css';
import TabularItem from './TabularItem/TabularItem';

const AllInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return (
        <div>
            <h1 className='text-center text-2xl lg:text-3xl font-semibold mt-10 mb-4'>Manage Inventories</h1>
            <div className='flex justify-center'>
                <button className='w-56 hover:bg-gray-200 py-2 hover:text-gray-900 border-2 border-gray-700 rounded-sm bg-stone-200 text-black mb-10'>
                    <Link to='/'>Add New Item</Link>
                </button>
            </div>
            <h1 class="text-2xl pt-6 pb-6 text-center bg-gray-100">All items</h1>
            <div className='bg-gray-100'>
                <div className='w-[1500px] mx-auto'>
                    <thead class="bg-gray-200 border-b-2 border-gray-200 ">
                        <tr>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-center">Image</th>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-right">Name</th>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-right">Price</th>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-center">Quantity</th>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-center">Supplier</th>
                            <th class="w-1/12 p-3 text-sm font-semibold tracking-wide text-center"></th>
                        </tr>
                    </thead>
                </div>
            </div>
            {/* <hr className='w-32 border border-indigo-500 mx-auto mb-6' /> */}
            {
                items.map(item => <TabularItem
                    key={item._id}
                    item={item}
                ></TabularItem>)
            }
            <div className='pb-6'></div>

        </div>

    );
};

export default AllInventories;