import React from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../Components/Single/MovieInfo';
import Layout from '../Layout/Layout';
import { Movies } from '../Data/MovieData';
import MovieCasts from '../Components/Single/MovieCasts';
import MovieRates from '../Components/Single/MovieRates';

function SingleMovie() {

    const { id } = useParams();
    const movie = Movies.find((movie) => movie.name === id);

    return (
        <Layout>
            <MovieInfo movie={movie} />
            <div className='container mx-auto min-h-screen px-2 my-6'>
                <MovieCasts />
                <MovieRates movie={movie} />
            </div>
        </Layout>
    )
}

export default SingleMovie;