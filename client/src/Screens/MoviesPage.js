import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import MovieCard from "../Components/MovieCard";
import { Movies as MovieList } from "../Data/MovieData";
import { CgSpinner } from "react-icons/cg";

function MoviesPage() {
    const maxPage = 10;
    const [page, setPage] = useState(maxPage);
    const handleLoadPage = () => {
        setPage(page + maxPage);
    };

    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 text-text mb-6">
                <Filters />
                <p className="text-lg font-medium my-6 pb-5 border-b-2">
                    Total <span className="font-bold ">{MovieList?.length} </span>
                    items found
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5">
                    {MovieList.slice(0, page)?.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
                <div className="w-full flex-column md:my-20 my-10">
                    <button
                        className="flex-rows gap-3 font-lighter md:font-semibold md:tracking-wider text-white py-2 md:py-3 px-4 md:px-5 rounded-md bg-dry hover:text-text transitions"
                        onClick={handleLoadPage}
                    >
                        Acquiring more items{" "}
                        <CgSpinner size={25} className="animate-spin" />
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default MoviesPage;
