import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/logo image.png';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import './Navbar.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();
    const doSignOut = () => {
        console.log('signed out', user);
        signOut(auth);
        navigate('/login');
    }

    return (
        <div className='bg-gray-100 sticky top-0 z-20 py-2 font-montserat'>
            <div className='hidden lg:block'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <Link to='/'>
                                    <img className='w-24' src={logo} alt="site logo" />
                                </Link>
                            </div>
                            <div>
                                <Link to='/'>
                                    <h1 className='text-xl'>Sport's Gear</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex space-x-6 justify-center items-center '>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/'>Home</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/blogs'>Blogs</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/about'>About Us</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex pr-16 space-x-6 justify-center items-center '>
                            {
                                user ? <>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                                    </div>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/addnewitem'>Add Item</NavLink>
                                    </div>
                                    <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/myitems'>My Items</NavLink>
                                    </div>
                                    <div onClick={doSignOut} className='hover:text-[#0E9CF6] '>
                                        <NavLink to='/login'>Logout</NavLink>
                                    </div>
                                </>
                                    : <div className='hover:text-[#0E9CF6]'>
                                        <NavLink to='/login'>Login</NavLink>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden'>
                <div className='flex justify-between items-center w-11/12 md:w-4/5 mx-auto'>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Link to='/'>
                                <img className='w-24' src={logo} alt="site logo" />
                            </Link>
                        </div>
                        <div>
                            <h1 className='text-xl'>Sport's Gear</h1>
                        </div>
                    </div>
                    {showNav ?
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <XIcon className='cursor-pointer w-8 h-8 text-black pl-1'>
                            </XIcon>
                        </div>
                        :
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <MenuIcon onClick={() => setShowNav(!showNav)} className='cursor-pointer w-8 h-8 text-black pl-1'></MenuIcon>
                        </div>
                    }
                </div>
                <div className={(showNav ? "top-[75px] bg-gray-100" : "-top-full") + " fixed text-black h-[260px] rounded w-full space-y-3 items-center transition-top duration-500 ease-in-out text-center"}>
                    <div className='mt-2 md:mt-0 hover:text-[#0E9CF6]'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6] '>
                        <NavLink to='/about'>About Us</NavLink>
                    </div>
                    {
                        user ? <>
                            <div className='hover:text-[#0E9CF6] '>
                                <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/addnewitem'>Add Item</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/myitems'>My Items</NavLink>
                            </div>
                            <div onClick={doSignOut} className='hover:text-[#0E9CF6]'>
                                <NavLink to='/login'>Logout</NavLink>
                            </div>
                        </>
                            : <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;