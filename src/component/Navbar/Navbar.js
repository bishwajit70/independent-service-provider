import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='md:flex md:px-40 py-5 justify-between'>
            <div>
                <h2>Expert Weeding Photographer</h2>
            </div>
            <div className='flex items-center justify-center'>
                <CustomLink className='px-2' to='/'>Home</CustomLink>
                <CustomLink className='px-2' to='/blog'>Blog</CustomLink>
                <CustomLink className='px-2' to='/about'>About</CustomLink>
                <CustomLink className='px-2' to='/login'>Login</CustomLink>
                <CustomLink className='px-2' to='/register'>Register</CustomLink>
            </div>

        </div>
    );
};

export default Navbar;