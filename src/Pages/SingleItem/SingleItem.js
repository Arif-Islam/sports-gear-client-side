import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/items/${id}`;
    console.log(url);
    // const _id = props.params;
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, []);

    console.log(item);

    return (
        <div className='bg-gray-100'>
            <div className='w-3/4 mx-auto'>
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
            </div>

        </div>
    );
};

export default SingleItem;