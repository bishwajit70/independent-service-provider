import React from 'react';
import useServices from '../../hooks/useServices';
import Banner from '../Banner/Banner';
import ExtraServices from '../ExtraServices/ExtraServices';
import Service from '../Service/Service';


const Home = () => {
    const [services] = useServices()
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <h2 className='text-5xl text-orange-500 font-bold text-center py-20'>Regular Services</h2>
                <div className='px-5 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-8'>

                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>


            <ExtraServices></ExtraServices>
        </div>
    );
};

export default Home;