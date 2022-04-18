import React from 'react';
import useExtra from '../../hooks/useExtra';
import SingleExtra from '../SingleExtra/SingleExtra';


const ExtraServices = () => {
    const [extras] = useExtra()

    return (

        <div>
            <h2 className='text-5xl text-orange-500 font-bold text-center py-20'>Extra Services</h2>
            <div className='px-5 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-8'>
                {
                    extras.map(extra => <SingleExtra
                        key={extra.id}
                        extra={extra}
                    ></SingleExtra>)
                }
            </div>


        </div>
    );
};

export default ExtraServices;