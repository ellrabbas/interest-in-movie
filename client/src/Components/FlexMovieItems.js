import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

function FlexMovieItems({ movie }) {
    return (
        <>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>{movie.category}</span>
            </div>
            <div className='flex items-center gap-2'>
                <FaCalendarAlt className='w-3 h-3' />
                <span className='text-sm font-medium'>{movie.year}</span>
            </div>
            <div className='flex items-center gap-2'>
                <MdLanguage className='w-4 h-4' />
                <span className='text-sm font-medium'>{movie.language}</span>
            </div>
        </>
    )
}

export default FlexMovieItems;