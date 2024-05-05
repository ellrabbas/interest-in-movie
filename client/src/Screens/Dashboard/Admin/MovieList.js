import React, { useEffect } from "react";
import SideBar from "../SideBar";
import Table from "../../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteAllMoviesAction,
    deleteMovieAction,
    getAllMoviesAction,
} from "../../../Redux/Actions/movieAction";
import toast from "react-hot-toast";
import Loader from "../../../Components/Notifications/Loading";
import { Empty } from "../../../Components/Notifications/Empty";

function MovieList() {
    const dispatch = useDispatch();
    const { isLoading, isError, movies, pages, page } = useSelector(
        (state) => state.movieGetAll
    );
    const { isLoading: deleteLoading, isError: deleteError } = useSelector(
        (state) => state.deleteMovie
    );

    const { isLoading: deleteAllLoading, isError: deleteAllrror } = useSelector(
        (state) => state.deleteAllMovies
    );

    const deleteMovieHandler = (id) => {
        window.confirm("Are you sure you want to delete this movie?") &&
            dispatch(deleteMovieAction(id));
    };

    const deleteAllMoviesHandler = () => {
        window.confirm("Are you sure you want to delete all movies?") &&
            dispatch(deleteAllMoviesAction());
    };

    useEffect(() => {
        if (isError || deleteError || deleteAllrror) {
            toast.error(isError || deleteError || deleteAllrror);
        }

        dispatch(getAllMoviesAction({}));
    }, [dispatch, isError, deleteError, deleteAllrror]);

    const nextPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page + 1,
            })
        );
    };

    const prevPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page - 1,
            })
        );
    };

    return (
        <SideBar>
            <div className="text-text flex flex-col gap-6">
                <div className="flex-btn">
                    <h2 className="text-xl font-bold">Movies List</h2>
                    {movies?.length > 0 && (
                        <button
                            disabled={deleteAllLoading}
                            onClick={deleteAllMoviesHandler}
                            className="flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                        >
                            {deleteLoading ? "Deleting All..." : "Delete all"}
                        </button>
                    )}
                </div>
                {isLoading || deleteLoading ? (
                    <Loader />
                ) : movies?.length > 0 ? (
                    <Table
                        data={movies}
                        admin={true}
                        onDeleteHandler={deleteMovieHandler}
                    />
                ) : (
                    <Empty message="Sorry, you don't have any movies" />
                )}
            </div>
            <div className="w-full flex-rows gap-3 mt-3">
                <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className={
                        movies?.length === 0
                            ? "hidden"
                            : "flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
                    }
                >
                    Previous
                </button>
                <span
                    className={
                        movies?.length === 0
                            ? "hidden"
                            : "w-10 h-10 flex-column border border-dry text-dry bg-main rounded-full"
                    }
                >
                    {page}
                </span>
                <button
                    onClick={nextPage}
                    disabled={page === pages}
                    className={
                        movies?.length === 0
                            ? "hidden"
                            : "flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
                    }
                >
                    Next
                </button>
            </div>
        </SideBar>
    );
}

export default MovieList;