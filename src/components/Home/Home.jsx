import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../ServicesCard/Services';

const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 w-[80%] mx-auto pt-10'>
                {
                    data.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;