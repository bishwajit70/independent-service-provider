import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='grid my-2 text-left md:w-4/5 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='cursor-pointer duration-700 bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase p-2 rounded'>Continue With Google</button>
            </div>
            <div className='grid my-2 text-left md:w-4/5 mx-auto'>
                <button className='cursor-pointer duration-700 bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase p-2 rounded'>Continue With GitHub</button>
            </div>
        </div >
    );
};

export default SocialLogin;