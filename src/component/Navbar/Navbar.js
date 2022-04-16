import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='flex items-center justify-center'>
            <CustomLink className='px-2' to='/'>Home</CustomLink>
            <CustomLink className='px-2' to='/blog'>Blog</CustomLink>
            <CustomLink className='px-2' to='/about'>About</CustomLink>
            <CustomLink className='px-2' to='/login'>Login</CustomLink>
        </div>
    );
};

export default Navbar;