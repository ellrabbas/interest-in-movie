import React from "react";

function MovieCard({ movie }) {
    const {
        titleImage,
        name,
        year,
        rate
    } = movie;

    return (
        <div className="flex p-5">
            <div className="shadow-xl border w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] 2xl:w-[300px] rounded-md hover:scale-90 hover:cursor-pointer transitions">
                <div className="w-full h-[190px] md:h-[250px] lg:h-[310px] xl:h-[370px] 2xl:h-[430px] overflow-hidden rounded-t-md object-fill">
                    <img src={titleImage} alt={name} />
                </div>
                <div className="p-1 rounded-b-md">
                    <h2 className="font-bold truncate overflow-hidden">{name}</h2>
                    <div className="flex justify-between items-start">
                        <div className="text-gray-800">{year}</div>
                        <div className="text-center bg-yellow-400 w-8 h-8 p-1 rounded-full font-bold">{rate}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;

