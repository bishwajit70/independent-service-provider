import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, image, description } = service;
    const navigate = useNavigate()


    const handleCheckout = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='rounded-lg border border-b-orange-300 border-l-orange-300 shadow-2xl'>
            <img src={image} alt="" />
            <div className='text-left px-3 py-3'>
                <h2 className='text-2xl pb-3 font-semibold'>{name}</h2>
                <h3 className='text-xl pb-2 font-semibold'>Price : $ {price}</h3>
                <p>{description.slice(0, 120)}</p>
            </div>

            <div className='px-3'>
                <button onClick={() => handleCheckout(id)} className='bg-orange-500 hover:bg-orange-600 w-full duration-700 text-white uppercase p-3 mt-8 mb-8 rounded font-bold'>Order Now <span className='font-semibold'></span> </button>
            </div>
        </div>
    );
};

export default Service;