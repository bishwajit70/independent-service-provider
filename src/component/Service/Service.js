import React from 'react';

const Service = ({ service }) => {
    const { id, name, image, desctiption } = service;
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt="image" />
        </div>
    );
};

export default Service;