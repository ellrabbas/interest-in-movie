import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { likeMovieAction } from "../Redux/Actions/userActions";

const IfLikeMovieAction = (movie) => {
    const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);
    return likedMovies?.find((likedMovie) => likedMovie?._id === movie?._id);
};

const LikeMovie = (movie, dispatch, userInfo) => {
    return !userInfo
        ? toast.error("You must be logged in to like a movie")
        : dispatch(
            likeMovieAction({
                movieId: movie?._id,
            })
        );
};

export { IfLikeMovieAction, LikeMovie };
