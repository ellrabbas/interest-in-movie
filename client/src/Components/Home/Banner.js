import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Movies } from "../../Data/MovieData";
import FlexMovieItem from "../FlexMovieItems";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full xl:h-96 bg-main lg:h-64 h-48"
            >
                {Movies.slice(0, 6).map((movie, index) => (
                    <SwiperSlide key={index} className="relative overflow-hidden">
                        <img
                            src={movie.image}
                            alt={movie.name}
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
                                <Link to={`/movie/${movie.name}`} className="bg-dry hover:text-subMain transitions px-8 py-3 rounded font-bold sm:text-sm text-xs">
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
