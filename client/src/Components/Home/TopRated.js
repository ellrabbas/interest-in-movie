import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Titles from '../Title';
import { CiBookmarkMinus } from "react-icons/ci";
import { Movies } from "../../Data/MovieData";
import { FaRegHeart, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import RatingStars from '../RatingStars';

function TopRated() {
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const classNames = "hover:text-dry transitions text-sm w-8 h-8 flex-column"


    return (
        <div className='my-16 ms-10'>
            <Titles title="Best-rated" Icon={CiBookmarkMinus} />
            <div className='mt-10'>
                <Swiper
                    navigation={{ nextEl, prevEl }}
                    slidesPerView={4}
                    spaceBetween={170}
                    autoplay={true}
                    speed={1000}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                >
                    {Movies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className='cursor-pointer w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] 2xl:w-[300px] shadow-md border border-stone-300 hovered rounded-lg overflow-hidden relative'>
                                <img src={movie.titleImage} alt={movie.name} className='w-full h-[190px] md:h-[250px] lg:h-[310px] xl:h-[370px] 2xl:h-[430px] object-center rounded-lg' />
                                <div className='px-4 text-center absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 transitions opacity-0 hover:opacity-100'>
                                    <button className='w-12 h-12 flex-column transitions hover:bg-dry rounded-full bg-white bg-opacity-40 text-white relative top-2 -right-[60%] md:-right-[70%] lg:-right-[80%]'>
                                        <FaRegHeart />
                                    </button>
                                    <div className='flex-column relative top-[20%] lg:top-[50%]'>
                                        <Link to={`/movie/${movie.name}`} className='font-semibold text-white text-xl traucated line-clamp-2 text-center'>
                                            {movie.name}
                                        </Link>
                                        <div className='flex gap-2 text-star'>
                                            <RatingStars value={movie.rate} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='w-full px-2 flex-rows gap-6 pt-12'>
                    <button className={classNames} ref={(node) => setPrevEl(node)}><FaChevronCircleLeft size={30} /></button>
                    <button className={classNames} ref={(node) => setNextEl(node)}><FaChevronCircleRight size={30} /></button>
                </div>
            </div>
        </div>
    )
}

export default TopRated;