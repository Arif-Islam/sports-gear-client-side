import React from 'react';
import useGetItems from '../../../hooks/useGetItems';

const TabularItem = (props) => {
    const { _id, name, image, price, quantity, supplier } = props.item;
    const [items, setItems] = useGetItems();
    const deleteItem = id => {
        const remove = window.confirm('Are you sure you want to delete this item?');
        if(remove){
            fetch(`http://localhost:5000/items/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
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

                {/* <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1000</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1001</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Shipped</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                    <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                        <div class="flex items-center space-x-2 text-sm">
                            <div>
                                <a href="#" class="text-blue-500 font-bold hover:underline">#1002</a>
                            </div>
                            <div class="text-gray-500">10/10/2021</div>
                            <div>
                                <span
                                    class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">Canceled</span>
                            </div>
                        </div>
                        <div class="text-sm text-gray-700">
                            Kring New Fit office chair, mesh + PU, black
                        </div>
                        <div class="text-sm font-medium text-black">
                            $200.00
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default TabularItem;