import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/logo-removebg-preview.png';
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
        <div className='bg-gray-100 lg:bg-sky-50 sticky top-0 z-20 py-2'>
            <div className='hidden lg:block'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex justify-center'>
                            <Link to='/'>
                                <img className='w-24' src={logo} alt="site logo" />
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex space-x-6 justify-center items-center font-semibold'>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/'>Home</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/blogs'>Blogs</NavLink>
                            </div>
                            <div className='hover:text-[#0E9CF6]'>
                                <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 mx-auto'>
                        <div className='flex pr-16 space-x-6 justify-center items-center font-semibold'>
                            {
                                user ? <>
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
                    <Link to='/'>
                        <img className='w-24' src={logo} alt="site logo" />
                    </Link>
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
                <div className={(showNav ? "top-[75px] bg-gray-100" : "-top-full") + " fixed text-black h-[230px] rounded w-full space-y-3 items-center transition-top duration-500 ease-in-out font-semibold text-center"}>
                    <div className='mt-2 md:mt-0 hover:text-[#0E9CF6]'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6] '>
                        <NavLink to='/manageinventory'>Manage Inventory</NavLink>
                    </div>
                    {
                        user ? <>

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

            {/* <div className='md:flex items-center justify-between w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto '>
                <div className='flex justify-between items-center w-4/5 md:w-1/3 mx-auto'>
                    <Link to='/'>
                        <img className='w-24' src={logo} alt="site logo" />
                    </Link>
                    {showNav ?
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <XIcon className='md:hidden block cursor-pointer w-8 h-8 text-black pl-1'>
                            </XIcon>
                        </div>
                        :
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <MenuIcon onClick={() => setShowNav(!showNav)} className='md:hidden block cursor-pointer w-8 h-8 text-black pl-1'></MenuIcon>
                        </div>
                    }
                </div>
                <div className={(showNav ? "top-[75px] bg-gray-100" : "-top-full") + " fixed md:static md:flex text-black h-[230px] md:h-auto rounded w-full space-y-3 md:space-y-0 items-center md:w-auto md:space-x-6 transition-top duration-500 ease-in-out uppercase font-semibold text-black text-center"}>
                    <div className='mt-2 md:mt-0 hover:text-[#0E9CF6]'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/contact'>Contact</NavLink>
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

            </div> */}
        </div>
    );
};

export default Navbar;