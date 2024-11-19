import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../ServicesCard/Services';
import Header from '../Header/Header';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='mt-10'>
                <Header></Header>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 lg:w-[80%] mx-auto pt-10'>
                {
                    data.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;