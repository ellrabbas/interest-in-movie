import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Titles from "../Title";
import { FcFilmReel } from "react-icons/fc";
import MovieCard from "../MovieCard";
import Loader from "../Notifications/Loading";
import { Empty } from "../Notifications/Empty";

function PopularMovies({ isLoading, movies }) {
    return (
        <>
            <div className="my-16">
                <div className="ms-10">
                    <Titles title="Most Watched Movies" Icon={FcFilmReel} />
                </div>
            </div>
            {isLoading ? (
                <Loader />
            ) : movies?.length > 0 ? (
                <div className="flex mx-5 gap-8 overflow-x-scroll xxl:over scrollbar-hide">
                    <Swiper
                        speed={1000}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            300: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1000: {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                            1500: {
                                slidesPerView: 5,
                                spaceBetween: 5,
                            },
                            2000: {
                                slidesPerView: 6,
                                spaceBetween: 5,
                            },
                            2500: {
                                slidesPerView: 7,
                                spaceBetween: 5,
                            },
                        }}
                    >
                        {movies?.slice(0, 7).map((movie) => (
                            <SwiperSlide key={movie?._id}>
                                <MovieCard key={movie?._id} movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ) : (
                <div className="mt-6">
                    <Empty message="Sorry, there are no movies to display" />
                </div>
            )}
        </>
    );
}

export default PopularMovies;
