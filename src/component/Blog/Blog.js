import React from 'react';

const Blog = () => {
    return (
        <div className='px-5 pt-20 md:px-5 lg:px-10 xl:px-40 grid grid-flow-row md:flex justify-between items-center'>
            <div className='text-left w-full pb-10 md:w-1/2 md:mr-5'>
                <h1 className='text-orange-500 text-5xl pb-3'>A Photographer </h1>
                <h1 className='text-orange-500 text-5xl pb-3'>Classic Service Provider</h1>
                <p>It's a great oppurtunity for you to get your memories forever. We past this times but the day you enjoyed will be remembered for ever. So took the opportunity to get a professional touch to remember this days. Have a good day forever!!!</p>
            </div>
            <div className='w-full md:w-1/2'>
                <img className='rounded-lg' src="https://img.freepik.com/free-photo/professional-indian-young-photographer-taking-photos-studio-with-leight_231208-3780.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blog;