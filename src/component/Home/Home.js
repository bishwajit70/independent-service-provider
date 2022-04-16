import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import ExtraServices from '../ExtraServices/ExtraServices';
import Service from '../Service/Service';


const Home = () => {
    const [services] = useServices()
    

    return (
        <div>
            <Banner></Banner>
            <p>{services.length}</p>
            {
                services.map(service=><Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            <h1>This is home</h1>
            <ExtraServices></ExtraServices>
        </div>
    );
};

export default Home;