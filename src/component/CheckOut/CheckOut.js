import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const { serviceId } = useParams()

    return (
        <div>
            <h1>This is Checkout Page:{serviceId}</h1>

            <p>
                Package details

                (Full Time) 1 Senior + 2 Associate Photographer

                Lead Cinematographer + 2 Senior + 1 Associate Cinematographer

                Unlimited Photos

                All Edited Photos

                200X5R & 10X12L & 1X20L

                1 Premium Custom Designed Album

                1 Cinematic Trailer (2-5 minutes) 1 Cinematic Movie (25-55 minutes)

                6 Hours

                Drone + Gimble

                100,000 BDT

                Select Plan
            </p>


        </div>
    );
};

export default CheckOut;