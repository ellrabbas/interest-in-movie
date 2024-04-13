import React from 'react';
import Layout from '../Layout/Layout';
import Banner from '../Components/Home/Banner';
import PopularMovies from '../Components/Home/PopularMovies';
import TopRated from '../Components/Home/TopRated';
import Promos from '../Components/Home/Promos';

function Home() {
    return (
        <Layout>
            <div className='min-h-screen mb-6 text-text'>
                <Banner />
                <PopularMovies />
                <Promos />
                <TopRated />
            </div>
        </Layout>
    )
}

export default Home