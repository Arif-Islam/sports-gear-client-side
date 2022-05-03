import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo-removebg-preview.png';
import { XIcon, MenuIcon } from '@heroicons/react/solid';
import './Navbar.css';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    // const [user] = useAuthState(auth);
    // console.log(user);
    // const navigate = useNavigate();
    // const handleSignOut = () => {
    //     signOut(auth);
    //     navigate('/login');
    // }
    return (
        <div className='bg-blue-50 sticky top-0 z-20 py-2'>
            <div className='md:flex items-center justify-between w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto '>
                <div className='flex justify-between items-center w-4/5 mx-auto'>
                    <Link to='/home'>
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
                <div className={(showNav ? "top-[75px] bg-blue-50" : "-top-full") + " fixed md:static md:flex text-black h-[230px] md:h-auto rounded w-full space-y-3 md:space-y-0 items-center md:w-auto md:space-x-6 transition-top duration-500 ease-in-out uppercase font-semibold text-stone-200 text-center"}>
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
                    {/* { */}
                    {/* user ? '' : */}
                    <div className='hover:text-[#0E9CF6]'>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                    {/* } */}
                    {/* {
                        user ? <div onClick={handleSignOut} className='space-x-1 rounded-full md:bg-green-900 md:hover:bg-green-800 md:px-6 md:py-2 font-medium text-stone-100'>
                            <NavLink to='/login'>Sign</NavLink>
                            <NavLink to='/login'>out</NavLink>
                        </div> :
                            <div className='space-x-1 rounded-full md:bg-green-900 md:hover:bg-green-800 md:px-6 md:py-2 font-medium text-stone-100'>
                                <NavLink to='/signup'>Sign</NavLink>
                                <NavLink to='/signup'>up</NavLink>
                            </div>
                    } */}

                </div>

            </div>
        </div>
    );
};

export default Navbar;