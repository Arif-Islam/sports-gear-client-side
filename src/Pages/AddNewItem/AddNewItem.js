import React from 'react';

const AddNewItem = () => {
    return (
        <div>
            <p className='text-center text-2xl font-medium pt-6 pb-6 text-gray-800'>Fill out the form to add item to inventory</p>
            <div className='flex items-center justify-center mb-16'>
                <form className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="name" id="" placeholder='Name' />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="url" id="" name="image" placeholder='Image url'></input>

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="price" id="" placeholder='Price' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="quantity" id="" placeholder='Quantity' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="supplier" id="" placeholder='Supplier' required />

                    <textarea className='w-80 h-20 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="textarea" name="description" id="" placeholder='Short Description' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Add Item" />
                </form>
            </div>
        </div >
    );
};

export default AddNewItem;