import React from 'react';
import error404 from '../../images/404/error-404.png';

const NotFound = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-center mt-10 lg:mt-20'>
                <img className='' src={error404} alt="" />
            </div>
        </div>
    );
};

export default NotFound;