import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo image.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Spinner from '../../Shared/Spinner/Spinner';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }
    const getConfirmPassword = event => {
        setconfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/');
    }
    const CreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords didn't match!");
            console.log(error);
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer!");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='font-montserat'>
            <div className='flex flex-col justify-center items-center my-6'>
                <div>
                    <Link to='/'>
                        <img className='w-24' src={logo} alt="site logo" />
                    </Link>
                </div>
                <div>
                    <h1 className='text-xl'>Sport's Gear</h1>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                <form onSubmit={CreateUser} className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="name" id="" placeholder='Name' required />

                    <input onBlur={getEmail} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input onBlur={getPassword} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input onBlur={getConfirmPassword} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Confirm Password' required />

                    <input className='bg-sky-600  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-sky-700' type="submit" value="Sign Up" />
                </form>

                <div className='flex w-80 items-center justify-center'>
                    <div className='text-sky-600 pt-4 font-medium'>
                        <Link to='/login'>Already have an account?</Link>
                    </div>
                </div>

                <div className='h-6 pt-3'>
                    <p className='font-medium' style={{ color: 'red' }}>{error}</p>
                </div>
                {
                    loading && <Spinner></Spinner>
                }
                <hr className='w-80 mt-3 border-[1px] ' />
                <div className='h-10'></div>

            </div>

        </div>
    );
};

export default SignUp;