import React, { useState } from 'react';
import Titles from '../Title';
import { MdOutlineReviews } from "react-icons/md";
import { Message, Select } from '../UserInputs';
import RaitingStars from '../RatingStars';
import { UserData } from '../../Data/UserData';

function MovieRates({ movie }) {

    const Ratings = [
        {
            title: "0 - Poor",
            value: 0
        },
        {
            title: "1 - Fair",
            value: 1
        },
        {
            title: "2 - Good",
            value: 2
        },
        {
            title: "3 - Very Good",
            value: 3
        },
        {
            title: "4 - Excellent",
            value: 4
        },
        {
            title: "5 - Perfect",
            value: 5
        }
    ]

    const [raiting, setRating] = useState(0);

    return (
        <div className='text-text my-12'>
            <Titles title="Feedback" Icon={MdOutlineReviews} />
            <div className='mt-3 xl:grid border-t-2 flex-column grid-cols-5 gap-12 xs:p-10 py-10 px-2 sm:p-20 rounded'>
                <div className='xl:col-span-2 w-full flex flex-col gap-8'>
                    <h3 className='text-xl font-semibold'>Review
                        <span className='font-light ml-4 text-dry'>{movie?.name}</span>
                    </h3>
                    <div className='flex gap-2 text-star'>
                        <RaitingStars value={raiting} />
                    </div>
                    <div className='text-sm w-full'>
                        <Select label="Raiting" options={Ratings} onChange={(e) => setRating(e.target.value)} />
                    </div>
                    <Message label="Comment" placeholder="Write something" />
                    <button className="self-end bg-dry w-1/3 text-white hover:text-subMain transitions px-4 py-3 rounded-md font-bold sm:text-sm text-xs">
                        Submit
                    </button>
                </div>
                <div className=' w-full col-span-3 text-text flex flex-col gap-6'>
                    <h3 className='text-xl font-lighter ml-11'>Comments (17)</h3>
                    <div className='w-full flex flex-col gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll scrollbar-hide'>
                        {
                            UserData.map((user, index) => (
                                <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 p-4 border rounded-md border-subMain '>
                                    <div className='col-span-3 hidden md:block '>
                                        <img
                                            src={user ? user.picture : "user.jpg"}
                                            alt={user.name}
                                            className='w-full md:h-[65%] lg:h-[76%] rounded-full object-cover'
                                        />
                                    </div>
                                    <div className='col-span-9 flex flex-col gap-2 overflow-hidden'>
                                        <h2>{user?.name}</h2>
                                        <div className='col-span-3 flex text-star'>
                                            <RaitingStars value={user?.rating} />
                                        </div>
                                        <p className='text-xs bg-dryGray p-1 shadow-md rounded break-words h-20 scrollbar-hide leading-6 font-medium overflow-y-scroll'>
                                            {user?.message}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieRates;