import React, { useEffect, useState } from 'react';
import SupplierCard from './SupplierCard/SupplierCard';

const BestSuppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        fetch('supplier.json')
            .then(res => res.json())
            .then(data => setSuppliers(data));
    }, []);
    return (
        <div className='font-montserat'>
            <div className='text-center py-16 bg-gray-100'>
                <h1 className='text-2xl lg:text-4xl  text-gray-700 mb-5 uppercase'>Best Suppliers</h1>
                <hr className='w-2/4 md:w-2/5 xl:w-2/6 2xl:w-1/12 mx-auto border-gray-800 mb-8' />
            </div>
            <div className='bg-gray-100'>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-3/4 xl:w-3/5 2xl:w-3/4 mx-auto lg:gap-20 gap-10 pb-4 lg:pb-20'>
                    {
                        suppliers.map(supplier => <SupplierCard
                            key={supplier.id}
                            supplier={supplier}
                        ></SupplierCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestSuppliers;