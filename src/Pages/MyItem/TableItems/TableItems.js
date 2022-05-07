import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useGetItems from '../../../hooks/useGetItems';

const TabularItem = (props) => {
    const { _id, name, email, image, price, quantity, supplier } = props.item;
    const [user] = useAuthState(auth);

    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/myitems?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const deleteItem = id => {
        // const email = user?.email;
        const remove = window.confirm('Are you sure you want to delete this item?');
        if (remove) {
            fetch(`http://localhost:5000/myitems?email=${email}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    console.log('remaining items', remaining, items);
                    setItems(remaining);
                    console.log('items', items);
                })
        }
    }

    return (
        <div className=''>
            <div className="bg-gray-100">
                <div className="rounded-lg shadow ">
                    <div className='w-full md:w-3/4 2xl:w-1/2 mx-auto'>
                        <div className='flex bg-white'>
                            <div className='w-2/12 border-[1px] md:border-2 border-gray-100'>
                                <img className='w-20 mx-auto' src={image} alt="" />
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{name} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{price} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{quantity} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <p className='text-center text-sm text-gray-700'>{supplier} </p>
                            </div>
                            <div className='w-2/12 flex items-center justify-center border-[1px] md:border-2 border-gray-100'>
                                <button type="button" data-modal-toggle="popup-modal" onClick={() => deleteItem(_id)} className='p-1.5 text-xs font-bold uppercase md:tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50 hover:bg-red-300'>Remove</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabularItem;