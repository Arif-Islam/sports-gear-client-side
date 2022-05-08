import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TabularItem from '../AllInventories/TabularItem/TabularItem';
import TableItems from './TableItems/TableItems';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    useEffect(() => {

        fetch(`https://sports-gear-server.herokuapp.com/myitems?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user, items]);

    return (
        <div>
            <div>
                <p className='text-center text-2xl lg:text-3xl font-semibold mt-10 mb-10'>My Added Items ({items.length})</p>
                {/* <p className='text-center'>{items.length} </p> */}
                {/* <div>
                    user in my items {user?.email}
                </div> */}
                <div className='bg-gray-100 pt-6'>
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
                    {
                        items.map(item => <TableItems
                            key={item._id}
                            item={item}
                        ></TableItems>)
                    }
                    <div className='h-10 bg-gray-100'></div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;