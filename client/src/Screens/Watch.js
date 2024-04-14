import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import { Movies } from '../Data/MovieData';
import { useParams, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

function Watch() {
    let { id } = useParams();
    const movie = Movies.find(movie => movie.name === id);
    const [play, setPlay] = useState(false);


    return (
        <Layout>
            <div className='text-text container bg-red-600 mx-auto p-6 mb-12'>
                <div className=' flex flex-col mb-6 gap-2 rounded'>
                    <Link to={`/movie/${movie?.name}`} className='flex max-w-fit items-center gap-4 bg-dry text-white hover:text-subMain transitions px-4 py-3 rounded-md font-bold sm:text-sm text-xs'>
                        <IoMdArrowRoundBack size={25} /> {movie?.name}
                    </Link>
                    <div className='flex sm:w-auto w-full gap-5'>
                        <button className='w-10 h-10 flex-column text-dry bg-main rounded-full hover:bg-subMain transitions' title='Add to favorites'>
                            <FaHeart />
                        </button>
                        <button className='w-10 h-10 flex-column text-dry bg-main rounded-full hover:bg-subMain transitions' title='Download'>
                            <IoCloudDownloadOutline className='w-6 h-6 text-center' />
                        </button>
                    </div>
                </div>

                {
                    play ? (
                        <video controls autoPlay={play} className='w-full h-screen rounded'>
                            <source src="/images/movie.mp4" type='video/mp4' title={movie?.name} />
                        </video>
                    ) : (
                        <div className='bg-blue-700 w-full h-screen rounded-lg overflow-hidden relative'>
                            <div className='absolute top-0 left-0 bottom-0 right-0 flex-column'>
                                <button className='w-[50px] px-2 py-2 bg-main text-dry hover:bg-subMain transitions flex justify-center rounded-lg font-medium text-xl'>
                                    <FaPlay />
                                </button>
                            </div>
                            <img
                                src={movie?.image ? `${movie.image}` : "images/user.png"}
                                alt={movie?.name}
                                className='w-full h-full object-cover rounded-lg' />
                        </div>)
                }
            </div>

        </Layout>
    )
}

export default Watch;