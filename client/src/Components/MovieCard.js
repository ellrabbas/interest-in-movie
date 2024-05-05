import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <>
            <Link to={`/movie/${movie?._id}`}>
                <div className="flex justify-center p-5">
                    <div className="shadow-xl border w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] rounded-md hover:scale-90 hover:cursor-pointer transitions">
                        <div className="w-full h-[190px] md:h-[250px] lg:h-[310px] xl:h-[370px] overflow-hidden rounded-t-md object-cover">
                            <img
                                src={movie?.titleImage ? movie?.titleImage : "/images/user.png"}
                                alt={movie?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-1 rounded-b-md">
                            <h2 className="font-bold truncate overflow-hidden">
                                {movie?.name}
                            </h2>
                            <div className="flex justify-between items-start">
                                <div className="text-gray-800">{movie?.year}</div>
                                <div className="text-center bg-yellow-400 w-8 h-8 p-1 rounded-full font-bold">
                                    {movie?.rate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default MovieCard;
