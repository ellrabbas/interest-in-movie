import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import FlexMovieItem from "../FlexMovieItems";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Loader from "../../Components/Notifications/Loading";
import { RiMovie2Fill } from "react-icons/ri";

const Swipper = ({ movies, sameClass }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className={sameClass}
        >
            {movies?.slice(0, 6).map((movie) => (
                <SwiperSlide key={movie?._id} className="relative overflow-hidden">
                    <img
                        src={movie?.image ? movie.image : "/images/no-image.png"}
                        alt={movie?.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute linear-background xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold capitalize font-sans">
                            {movie.name}
                        </h1>
                        <div className="flex gap-5 items-center">
                            <FlexMovieItem movie={movie} />
                        </div>
                        <div className="flex gap-5 items-center">
                            <Link to={`/watch/${movie?._id}`}>
                                <button className="flex items-center gap-4 bg-dry hover:text-subMain transitions px-4 py-3 rounded-md font-bold sm:text-sm text-xs">
                                    Watch Now
                                    <FaPlay />
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

function Banner({ movies, isLoading }) {
    const sameClass = "w-full xl:h-96 bg-main lg:h-64 h-48";
    return (
        <div className="w-full relative text-white">
            {isLoading ? (
                <div className={sameClass}>
                    <Loader />
                </div>
            ) : movies?.length > 0 ? (
                <Swipper sameClass={sameClass} movies={movies} />
            ) : (
                <div className={`${sameClass} flex-column`}>
                    <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
                        <RiMovie2Fill size={45} />
                    </div>
                    <p className="text-md font-semibold mt-2 text-text">
                        Sorry, there are no movies to display
                    </p>
                </div>
            )}
        </div>
    );
}

export default Banner;
