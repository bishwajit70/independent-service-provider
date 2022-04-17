import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    let location = useLocation()
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    if (error) {
        errorElement = <p className='text-orange-600'>Error: {error?.message}</p>;
    }
    const handleSignInWithEmailPassword = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    if (sending) {
        return <Loading></Loading>
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address')
        }

    }

    return (
        <div className='border-2 ml-2 mr-2 mt-5 border-b-orange-300 border-l-orange-300 shadow-2xl w-90% md:w-4/6 lg:w-2/6 p-5 rounded md:mx-auto'>
            <form onSubmit={handleSignInWithEmailPassword} className='grid'>
                <h2 className='text-center pb-2 font-bold text-2xl text-orange-500'>Please Login</h2>
                <div className='grid mb-2 text-left w-full md:w-4/5 mx-auto'>
                    <label className='pb-2' htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} className='border-2 p-2 rounded' type="text" name="email" id="email" required />
                </div>
                <div className='grid mb-2 text-left w-full md:w-4/5 mx-auto'>
                    <label className='pb-2' htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} className='border-2 p-2 rounded' type="password" name="password" id="password" required />
                </div>
                <p>{errorElement}</p>
                <div className='grid my-2 text-left w-full md:w-4/5 mx-auto'>
                    <input
                        className='cursor-pointer duration-700 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase p-2 rounded' type="submit" value="Login" />
                </div>

                <div className='grid my-5 text-left w-full md:w-4/5 mx-auto'>
                    <p>Don't have an account? <Link to='/register' className='text-orange-500 cursor-pointer'>Please Register</Link> </p>
                </div>
                <div className='w-100 px-2 md:px-10 flex w-full items-center justify-around'>
                    <div className='bg-slate-500 w-1/2 md:w-2/5 h-0.5'></div>
                    <h2 className='text-center font-bold py-1 text-slate-500'>OR</h2>
                    <div className='bg-slate-500 w-1/2 md:w-2/5 h-0.5'></div>
                </div>
            </form>
            <SocialLogin></SocialLogin>
            <div className='grid my-2 text-left w-full md:w-4/5 mx-auto'>
                <input onClick={resetPassword}
                    className='cursor-pointer duration-700 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase p-2 rounded' type="submit" value="Reset Password" />

            </div>
            <ToastContainer />

        </div>
    );
};

export default Login;