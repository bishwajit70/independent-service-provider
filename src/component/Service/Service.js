import React from 'react';

const Service = ({ service }) => {
    const { id, name, price, image, description } = service;
    return (
        <div>
            <img src={image} alt="image" />
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <button>Order</button>
        </div>
    );
};

export default Service;