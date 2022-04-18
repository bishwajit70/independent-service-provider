import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { serviceId } = useParams()

    return (
        <div className='py-10 text-orange-600'>
            <h1 className='py-30 text-4xl pb-32'>You Have Orderd Package {serviceId}</h1>
            <h1 className='text-2xl'>Thank You For Your Order!</h1>
        </div>
    );
};

export default CheckOut;