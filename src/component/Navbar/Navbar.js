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
                <h2>Expert Weeding Photographer</h2>
            </div>
            <div className='flex items-center justify-center'>
                <CustomLink className='px-2' to='/'>Home</CustomLink>
                <CustomLink className='px-2' to='/blog'>Blog</CustomLink>
                <CustomLink className='px-2' to='/checkout'>Checkout</CustomLink>

                <CustomLink className='px-2' to='/about'>About</CustomLink>
                {
                    user ?
                        <CustomLink onClick={handleSignOut} className='px-2 py-5' to='/login'>Sign Out</CustomLink>
                        :
                        <CustomLink className='px-2' to='/login'>Login</CustomLink>}

            </div>

        </div>
    );
};

export default Navbar;