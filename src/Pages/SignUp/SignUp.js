import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-removebg-preview.png';
import { BsGoogle } from "react-icons/bs";

const SignUp = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <img className='w-44' src={logo} alt="" />
            </div>
            {/* <p className='text-center text-2xl font-medium my-6'>Please Login</p> */}
            <div className='flex flex-col items-center justify-center'>
                <form className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="name" id="" placeholder='Name' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Confirm Password' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Sign Up" />
                </form>

                <div className='flex w-80 items-center justify-center'>
                    <div className='text-sky-600 pt-4 font-medium'>
                        <Link to='/login'>Already have an account?</Link>
                    </div>
                </div>

                <div className='h-6 pt-3 hidden'>
                    <p className='font-medium' style={{ color: 'red' }}>error</p>
                </div>
                <hr className='w-80 mt-3 border-[1px] ' />
                <div className='h-10'></div>

            </div>
            {/* <div className='flex items-center justify-center mb-16'>
                
            </div> */}

        </div>
    );
};

export default SignUp;