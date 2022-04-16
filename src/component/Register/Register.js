import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='border-2 ml-2 mr-2 mt-5 border-b-orange-300 border-l-orange-300 shadow-2xl w-90% md:w-4/6 lg:w-2/6 p-5 rounded md:mx-auto'>
                <form onSubmit={handleCreateUser} className='grid'>
                    <h2 className='text-center pb-2 font-bold text-2xl text-orange-500'>Please Register</h2>
                    <div className='grid mb-2 text-left w-full md:w-4/5 mx-auto'>
                        <label className='pb-2' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='border-2 p-2 rounded' type="text" name="email" id="email" required />
                    </div>
                    <div className='grid mb-2 text-left w-full md:w-4/5 mx-auto'>
                        <label className='pb-2' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='border-2 p-2 rounded' type="password" name="password" id="password" required />
                    </div>
                    <div className='grid mb-2 text-left w-full md:w-4/5 mx-auto'>
                        <label className='pb-2' htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} className='border-2 p-2 rounded' type="password" name="confirmPassword" id="confirmPassword" required />
                    </div>
                    <div className='grid my-2 text-left w-full md:w-4/5 mx-auto'>
                        <input className='cursor-pointer duration-700 bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase p-2 rounded' type="submit" value="Register" />
                    </div>
                    <div className='grid my-5 text-left w-full md:w-4/5 mx-auto'>
                        <p>Already have an account? <Link to='/login' className='text-orange-500 cursor-pointer'>Please Login</Link> </p>
                    </div>
                    <div className='w-100 px-2 md:px-10 flex w-full items-center justify-around'>
                        <div className='bg-slate-500 w-1/2 md:w-2/5 h-0.5'></div>
                        <h2 className='text-center font-bold py-1 text-slate-500'>OR</h2>
                        <div className='bg-slate-500 w-1/2 md:w-2/5 h-0.5'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Register;