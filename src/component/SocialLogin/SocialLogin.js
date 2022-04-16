import React from 'react';

const SocialLogin = () => {

    return (
        <div>
            <div className='grid my-2 text-left md:w-4/5 mx-auto'>
                <button className='cursor-pointer duration-700 bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase p-2 rounded'>Continue With Google</button>
            </div>
            <div className='grid my-2 text-left md:w-4/5 mx-auto'>
                <button className='cursor-pointer duration-700 bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase p-2 rounded'>Continue With GitHub</button>
            </div>
        </div >
    );
};

export default SocialLogin;