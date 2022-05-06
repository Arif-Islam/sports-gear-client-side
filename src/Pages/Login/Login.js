import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-removebg-preview.png';
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <img className='w-44' src={logo} alt="" />
            </div>
            {/* <p className='text-center text-2xl font-medium my-6'>Please Login</p> */}
            <div className='flex flex-col items-center justify-center'>
                <form className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Login" />
                </form>

                <div className='flex w-80'>
                    <div className='text-sky-600 pt-3 font-medium mr-9'>
                        <Link to='/signup'>New to Sports Gear?</Link>
                    </div>
                    <div className='text-red-600 pt-3'>
                        <button className='font-medium'>Forgot Password?</button>
                    </div>
                </div>

                <div className='h-6 pt-3 hidden'>
                    <p className='font-medium' style={{ color: 'red' }}>error</p>
                </div>
                <hr className='w-80 mt-3 border-[1px] ' />
                <div className='flex items-center mt-6 hover:cursor-pointer rounded-sm bg-stone-100 mb-6'>
                    <div className='text-sky-600  bg-stone-100 p-2 rounded-full hover:bg-sky-600 hover:text-stone-100'>
                        <BsGoogle className='w-6 h-6 '></BsGoogle>
                    </div>
                    <div className='pr-2 pl-1'>
                        <p className='text-sky-600 font-medium'>Sign in with Google</p>
                    </div>
                </div>

            </div>
            {/* <div className='flex items-center justify-center mb-16'>
                
            </div> */}

        </div>
    );
};

export default Login;