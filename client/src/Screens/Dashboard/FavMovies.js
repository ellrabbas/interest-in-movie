import React, { useEffect } from "react";
import SideBar from "./SideBar";
import TableFav from "../../Components/TableFav";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteFavoriteMoviesAction,
    getFavoriteMoviesAction,
} from "../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../Components/Notifications/Loading";
import { Empty } from "../../Components/Notifications/Empty";

function FavMovies() {
    const dispatch = useDispatch();

    const { isLoading, isError, likedMovies } = useSelector(
        (state) => state.userGetFavoriteMovies
    );

    const {
        isLoading: deleteLoading,
        isError: deleteError,
        isSuccess,
    } = useSelector((state) => state.userDeleteFavoriteMovies);

    const deleteMoviesHandler = () => {
        window.confirm("Are you sure you want to delete all favorite movies?") &&
            dispatch(deleteFavoriteMoviesAction());
    };

    useEffect(() => {
        dispatch(getFavoriteMoviesAction());

        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({
                type: isError
                    ? "GET_FAVORITE_MOVIES_RESET"
                    : "DELETE_FAVORITE_MOVIES_RESET",
            });
        }
    }, [dispatch, isError, deleteError, isSuccess]);

    return (
        <SideBar>
            <div className="text-text flex flex-col gap-6">
                <div className="flex-btn">
                    <h2 className="text-xl font-bold">Favorite movies</h2>
                    {likedMovies?.length > 0 && (
                        <button
                            disabled={deleteLoading}
                            onClick={deleteMoviesHandler}
                            className="flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                        >
                            {deleteLoading ? "Deleting..." : "Delete all"}
                        </button>
                    )}
                </div>
                {isLoading ? (
                    <Loader />
                ) : likedMovies?.length > 0 ? (
                    <TableFav data={likedMovies} admin={false} />
                ) : (
                    <Empty message="Sorry, you don't have any favorite movies" />
                )}
            </div>
        </SideBar>
    );
}

export default FavMovies;