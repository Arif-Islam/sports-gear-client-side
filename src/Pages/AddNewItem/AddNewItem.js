import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [supplier, setSupplier] = useState('');
    const [description, setDescription] = useState('');
    const [user] = useAuthState(auth);

    useEffect(() => {

    }, [user]);

    const getName = event => {
        setName(event.target.value);
    }
    const getUrl = event => {
        setImage(event.target.value);
    }
    const getPrice = event => {
        setPrice(event.target.value);
    }
    const getQuantity = event => {
        setQuantity(event.target.value);
    }
    const getSupplier = event => {
        setSupplier(event.target.value);
    }
    const getDescription = event => {
        setDescription(event.target.value);
    }

    const email = user?.email;
    // if (user) {
    // setEmail(user.email);
    // }
    console.log('user', user);
    // if(user == null){
    //     setEmail('user@gmail.com');
    // }

    const handleAddItem = event => {
        event.preventDefault();
        const item = { name, email, image, price, quantity, supplier, description };
        fetch('https://sports-gear-server.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                console.log('item data', data);
                toast('New Item added to inventories!');
            })
    }

    return (
        <div className='font-montserat lg:h-screen'>
            <p className='text-center text-xl md:text-2xl font-medium pt-6 pb-6 text-gray-800'>Fill out the form to add item to inventory</p>
            <div className='flex items-center justify-center mb-16 lg:mb-0'>
                <form onSubmit={handleAddItem} className='flex flex-col space-y-5'>
                    <input onBlur={getName} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="name" id="" placeholder='Name' />

                    <input onBlur={getUrl} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="url" id="" name="image" placeholder='Image direct link'></input>

                    <input onBlur={getPrice} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="price" id="" placeholder='Price' required />

                    <input onBlur={getQuantity} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none ' type="text" name="quantity" id="" placeholder='Quantity' required />

                    <input onBlur={getSupplier} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="supplier" id="" placeholder='Supplier' required />

                    <textarea onBlur={getDescription} className='w-80 h-20 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="textarea" name="description" id="" placeholder='Short Description' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Add Item" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default AddNewItem;