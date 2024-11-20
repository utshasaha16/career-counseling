import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../ServicesCard/Services';
import Header from '../Header/Header';
import OurProcess from '../OurProcess/OurProcess';
import FeaturedService from '../FeaturedService/FeaturedService';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <header className='pt-24'>
                <Header></Header>
            </header>
            <main>
                <section className='pt-24'>
                <Banner></Banner>
                </section>
                <section className='pt-24'>
                    <FeaturedService></FeaturedService>
                </section>
                <section className='pt-24'>
                    <Header></Header>
                    </section>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 lg:w-[80%] md:w-[90%] mx-auto pt-24'>
                        {
                            data.map(service => <Services key={service.id} service={service}></Services>)
                        }
                    </div>
                
                <section className='py-24'>
                <OurProcess></OurProcess>
                </section>
            </main>
        </div>
    );
};

export default Home;