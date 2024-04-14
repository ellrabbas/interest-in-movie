import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Titles from '../Title';
import { RiUserStarFill } from "react-icons/ri";
import { UserData } from '../../Data/UserData';

function MovieCasts() {
    return (
        <div className='my-12 text-text'>
            <Titles title="Cast" Icon={RiUserStarFill} />
            <div className='mt-3 border-t-2'></div>
            <div className=' mt-10'>
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    speed={1000}
                    modules={[Autoplay]}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        400: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}>
                    {
                        UserData.map((artist, i) => (
                            <SwiperSlide key={i}>
                                <div className='w-full p-2 pb-5 italic text-md rounded flex-column border-gray-800'>
                                    <img src={artist.picture} alt={artist.name} className='w-[165px] h-[175px]  rounded-full making-shadow object-cover' />
                                    <p className='pt-2 font-semibold'>{artist.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default MovieCasts;