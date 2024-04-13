import React from 'react';
import Titles from '../Title';
import { FcFilmReel } from "react-icons/fc";
import { Movies } from '../../Data/MovieData';
import MovieCard from '../MovieCard';


function PopularMovies() {
    return (
        <>
            <div className='my-16 ms-10'>
                <Titles title='Most Watched Movies' Icon={FcFilmReel} />
            </div>
            <div class="flex mx-5 gap-8 overflow-x-scroll xxl:over scrollbar-hide">
                {Movies.slice(0, 7).map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </>
    )
}

export default PopularMovies;

