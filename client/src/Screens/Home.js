import React from 'react';
import Layout from '../Layout/Layout';
import Banner from '../Components/Home/Banner';
import PopularMovies from '../Components/Home/PopularMovies';
import TopRated from '../Components/Home/TopRated';
import Promos from '../Components/Home/Promos';

function Home() {
    return (
        <Layout>
            <Banner />
            <div className='container mx-auto min-h-screen px-2 mb-6 text-text'>
                <PopularMovies />
                <TopRated />
                <Promos />
            </div>
        </Layout>
    )
}

export default Home