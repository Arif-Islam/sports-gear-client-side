import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner/Spinner';
import ItemCard from '../ItemCard/ItemCard';
import './HomeInventory.css';

const HomeInventory = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const goToManageInventory = () => {
        navigate('/manageinventory');
    }

    useEffect(() => {
        // setLoading(true);
        fetch('https://sports-gear-server.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
        setLoading(false);
    }, []);

    return (
        <div className='pt-10 bg-gray-100'>
            <h1 className='text-center text-2xl lg:text-4xl font-semibold font-mono text-[#0E9CF6] text-indigo-500 mb-2 md:mb-3'>Inventory Items</h1>
            <hr className='w-32 border border-indigo-500 mx-auto ' />
            {/* <h1 className='mt-10'>{items.length} </h1> */}
            <div className="bg-white mt-10 pt-6">
                <div className='w-4/5 mx-auto pb-16'>
                    {
                        !loading ?
                            <div className='flex gap-10 flex-wrap items-center justify-center'>
                                {
                                    items.slice(0, 6).map(item => <ItemCard
                                        key={item._id}
                                        item={item}
                                    ></ItemCard>)
                                }
                            </div>
                            :
                            <>
                                <Spinner></Spinner>
                            </>
                    }
                    {/* <div className='flex gap-10 flex-wrap items-center justify-center'>
                        {
                            items.slice(0, 6).map(item => <ItemCard
                                key={item._id}
                                item={item}
                            ></ItemCard>)
                        }
                    </div> */}


                    <div className='flex justify-center mt-10'>
                        <button onClick={goToManageInventory} className='w-56 bg-sky-600 py-2 text-stone-100 border-2 border-sky-600 hover:border-sky-700 rounded font-medium hover:bg-sky-700 '>
                            Manage Inventory
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default HomeInventory;