import React from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../Components/Single/MovieInfo';
import Layout from '../Layout/Layout';
import { Movies } from '../Data/MovieData';

function SingleMovie() {

    const { id } = useParams();
    const movie = Movies.find((movie) => movie.name === id);

    return (
        <Layout>
            <MovieInfo movie={movie} />
        </Layout>
    )
}

export default SingleMovie;