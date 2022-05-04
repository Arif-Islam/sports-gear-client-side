import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './HomeInventory.css';

const HomeInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className='pt-10 bg-gray-100'>
            <h1 className='text-center text-2xl lg:text-4xl font-semibold font-mono text-[#0E9CF6] text-indigo-500 mb-2 md:mb-3'>Inventory Items</h1>
            <hr className='w-32 border border-indigo-500 mx-auto ' />
            {/* <h1 className='mt-10'>{items.length} </h1> */}
            <div className="bg-white mt-10 pt-6">
                <div className='w-4/5 mx-auto pb-16'>
                    <div className='flex gap-10 flex-wrap items-center justify-center'>
                        {
                            items.map(item => <ItemCard
                                key={item._id}
                                item={item}
                            ></ItemCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInventory;