import React from "react";
import FlexMovieItem from "../FlexMovieItems";
import { IoTime } from "react-icons/io5";
import { FaShareAlt, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import RaitingStars from "../RatingStars";

function MovieInfo({ movie, setModalOpen }) {
    return (
        <div className="text-text xl:text-black w-full xl:h-[1000px] relative">
            <img
                src={movie?.image ? movie?.image : "/images/movie.png"}
                alt={movie?.name}
                className="w-full opacity-60 hidden xl:inline-block h-full object-cover"
            />
            <div className="flex-column bg-subMain bg-opacity-10 xl:absolute top-0 left-0 right-0 bottom-0">
                <div className="container  px-3 mx-auto xl:grid-cols-3 flex-column py-10 lg:py-20 gap-8">
                    <div className="w-[50%] sm:w-[35%] lg:w-[25%] lg:mt-10 xl:w-[20%] xl:col-span-1 shadow-2xl h-[300px] md:h-[380px] xxl:h-[450px] rounded-lg overflow-hidden">
                        <img
                            src={movie?.titleImage ? movie?.titleImage : "/images/movie.png"}
                            alt={movie?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-10 text-center">
                        <h1 className="xl:text-4xl capitalize font-sans font-bold text-2xl">
                            {movie?.name}
                        </h1>
                        <span className="font-bold">Rating {movie?.rate}</span>
                        <div className="flex justify-center gap-2 text-star">
                            <RaitingStars value={movie?.rate} />
                        </div>
                        <div className="flex justify-center items-center gap-4 font-medium">
                            <FlexMovieItem movie={movie && movie} />
                            <div className="flex items-center gap-2">
                                <IoTime className="w-4 h-4" />
                                <span className="text-sm font-medium">{movie?.time}</span>
                            </div>
                        </div>
                        <p className=" text-md leading-5 text-left">{movie?.desc}</p>
                        <div className="flex justify-center item-center gap-7">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="bg-dry flex items-center gap-4 text-white hover:text-subMain transitions px-8 py-3 rounded font-bold sm:text-sm text-xs"
                            >
                                Share
                                <FaShareAlt />
                            </button>
                            <Link to={`/watch/${movie?._id}`}>
                                <button className="bg-dry flex items-center gap-4 text-white hover:text-subMain transitions px-8 py-3 rounded font-bold sm:text-sm text-xs">
                                    Watch Now
                                    <FaPlay />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
