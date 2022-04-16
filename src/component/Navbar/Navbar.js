import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }

    return (
        <div className='md:flex md:px-40 py-5 justify-between'>
            <div>
                <h2 className='text-3xl font-bold text-orange-500'>Weeding Photographer</h2>
            </div>
            <div className='flex items-center justify-center'>
                <CustomLink className='px-5 py-3 hover:text-orange-500' to='/'>Home</CustomLink>
                <CustomLink className='px-5 py-3 hover:text-orange-500' to='/blog'>Blog</CustomLink>
                <CustomLink className='px-5 py-3 hover:text-orange-500 ' to='/about'>About</CustomLink>
                {
                    user ?
                        <CustomLink onClick={handleSignOut} className='px-4  py-2 rounded-md' to='/login'>Sign Out</CustomLink>
                        :
                        <CustomLink className='px-4 py-2 rounded-md text-white bg-orange-500' to='/login'>Login</CustomLink>}

            </div>

        </div>
    );
};

export default Navbar;