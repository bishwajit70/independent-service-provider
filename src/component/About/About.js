import React from 'react';

const About = () => {
    return (
        <div className='px-5 pt-20 md:px-5 lg:px-10 xl:px-40 grid grid-flow-row md:flex justify-between items-center'>
            <div className='text-left w-full pb-10 md:w-1/2 md:mr-5'>
                <h1 className='text-orange-500 text-5xl pb-3'>A Photographer </h1>
                <h1 className='text-orange-500 text-5xl pb-3'>Classic Service Provider</h1>
                <p>Wedding Photographer provides all kinds of wedding and event photography & cinematographic service. We had started our journey at 2020 as a wedding & event photography firm & covered almost 600 + events within last 2 years. We believes in Excellence, Hard-work, Creativity, and Sincerity. These are the pillars of our company. Customer satisfaction is our main goal. We always treat our customers like family and give them our service just like that. We will do everything to make your wedding the most special day of your life. So that even after decades you will have some special memories of that day. We believe that if we can make you smile on your wedding day that is our biggest success. We try hard to keep that smile even after decades. Contact us to make your wedding special and memorable.</p>
            </div>
            <div className='w-full md:w-1/2'>
                <img className='rounded-lg' src="https://img.freepik.com/free-photo/professional-indian-young-photographer-taking-photos-studio-with-leight_231208-3780.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;