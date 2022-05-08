import React from 'react';
import BeASupplier from '../BeASupplier/BeASupplier';
import BestSuppliers from '../BestSuppliers/BestSuppliers';
import Banner from '../Carousel/Banner';
import HomeInventory from '../HomeInventory/HomeInventory';

// import Navbar from '../../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <BestSuppliers></BestSuppliers>
            <BeASupplier></BeASupplier>
            
        </div>
    );
};

export default Home;