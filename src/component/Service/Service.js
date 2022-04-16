import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, image, description } = service;
    const navigate = useNavigate()


    const handleCheckout = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <button onClick={() => handleCheckout(id)}>Order</button>
        </div>
    );
};

export default Service;