import * as movieConstants from "../Constants/moviesConstants";
import * as movieAPI from "../APIs/movieService";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";
import { getAllArtistsAction } from "./artistAction";

export const getAllMoviesAction =
    ({
        category = "",
        time = "",
        language = "",
        rate = "",
        year = "",
        search = "",
        pageNumber = "",
    }) =>
        async (dispatch) => {
            try {
                dispatch({ type: movieConstants.MOVIES_LIST_REQUEST });
                const response = await movieAPI.getAllMoviesService(
                    category,
                    time,
                    language,
                    rate,
                    year,
                    search,
                    pageNumber
                );
                dispatch({ type: movieConstants.MOVIES_LIST_SUCCESS, payload: response });
            } catch (error) {
                ErrorsAction(error, dispatch, movieConstants.MOVIES_LIST_FAIL);
            }
        };

export const getRandomMoviesAction = () => async (dispatch) => {
    try {
        dispatch({ type: movieConstants.MOVIES_RANDOM_REQUEST });
        const response = await movieAPI.getRandomMoviesService();
        dispatch({ type: movieConstants.MOVIES_RANDOM_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.MOVIES_RANDOM_FAIL);
    }
};

export const getMovieByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: movieConstants.MOVIE_DETAILS_REQUEST });
        const response = await movieAPI.getMovieByIdService(id);
        dispatch({ type: movieConstants.MOVIE_DETAILS_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.MOVIE_DETAILS_FAIL);
    }
};

export const getTopRatedMoviesAction = () => async (dispatch) => {
    try {
        dispatch({ type: movieConstants.MOVIE_TOP_RATED_REQUEST });
        const response = await movieAPI.getTopRatedMoviesService();
        dispatch({
            type: movieConstants.MOVIE_TOP_RATED_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.MOVIE_TOP_RATED_FAIL);
    }
};

export const reviewMovieAction =
    ({ movieId, review }) =>
        async (dispatch, getState) => {
            try {
                dispatch({ type: movieConstants.CREATE_REVIEW_REQUEST });
                const response = await movieAPI.reviewMovieService(
                    tokenProtection(getState),
                    movieId,
                    review
                );
                dispatch({
                    type: movieConstants.CREATE_REVIEW_SUCCESS,
                    payload: response,
                });
                toast.success("Review created successfully");
                dispatch({ type: movieConstants.CREATE_REVIEW_RESET });
                dispatch(getMovieByIdAction(movieId));
            } catch (error) {
                ErrorsAction(error, dispatch, movieConstants.CREATE_REVIEW_FAIL);
            }
        };

export const deleteReviewAction = (movieId) => async (dispatch, getState) => {
    try {
        dispatch({ type: movieConstants.DELETE_REVIEW_REQUEST });
        const response = await movieAPI.deleteMovieReviewService(
            tokenProtection(getState),
            movieId
        );
        dispatch({
            type: movieConstants.DELETE_REVIEW_SUCCESS,
            payload: response,
        });
        toast.success("Review deleted successfully");
        dispatch({ type: movieConstants.DELETE_REVIEW_RESET });
        dispatch(getMovieByIdAction(movieId));
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.DELETE_REVIEW_FAIL);
    }
};

export const deleteMovieAction = (movieId) => async (dispatch, getState) => {
    try {
        dispatch({ type: movieConstants.DELETE_MOVIE_REQUEST });
        const response = await movieAPI.deleteMovieService(
            tokenProtection(getState),
            movieId
        );
        dispatch({
            type: movieConstants.DELETE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Movie deleted successfully");
        dispatch(getAllMoviesAction({}));
        dispatch(getAllArtistsAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.DELETE_MOVIE_FAIL);
    }
};

export const deleteAllMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: movieConstants.DELETE_ALL_MOVIES_REQUEST });
        const response = await movieAPI.deleteAllMoviesService(
            tokenProtection(getState)
        );
        dispatch({
            type: movieConstants.DELETE_ALL_MOVIES_SUCCESS,
            payload: response,
        });
        toast.success("All movies deleted successfully");
        dispatch(getAllMoviesAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.DELETE_ALL_MOVIES_FAIL);
    }
};

export const createMovieAction = (movie) => async (dispatch, getState) => {
    try {
        dispatch({ type: movieConstants.CREATE_MOVIE_REQUEST });
        const response = await movieAPI.createMovieService(
            tokenProtection(getState),
            movie
        );
        dispatch({
            type: movieConstants.CREATE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Movie created successfully");
        dispatch(deleteAllCastsAction());
        dispatch(deleteAllDirectorsAction());
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.CREATE_MOVIE_FAIL);
    }
};

// ************** ARTISTS ***************

export const addCastAction = (cast) => async (dispatch, getState) => {
    dispatch({ type: movieConstants.ADD_CAST, payload: cast });
    localStorage.setItem("casts", JSON.stringify(getState().castCRUD.casts));
};

export const deleteCastAction = (id) => async (dispatch, getState) => {
    dispatch({ type: movieConstants.DELETE_CAST, payload: id });
    localStorage.removeItem("casts", JSON.stringify(getState().castCRUD.casts));
};

export const updateCastAction = (cast) => async (dispatch, getState) => {
    dispatch({ type: movieConstants.EDIT_CAST, payload: cast });
    localStorage.setItem("casts", JSON.stringify(getState().castCRUD.casts));
};

export const deleteAllCastsAction = () => async (dispatch) => {
    dispatch({ type: movieConstants.RESET_CAST });
    localStorage.removeItem("casts");
};

export const addDirectorAction = (director) => async (dispatch, getState) => {
    dispatch({ type: movieConstants.ADD_DIRECTOR, payload: director });
    localStorage.setItem(
        "directors",
        JSON.stringify(getState().directorCRUD.directors)
    );
};

export const deleteDirectorAction = (id) => async (dispatch, getState) => {
    dispatch({ type: movieConstants.DELETE_DIRECTOR, payload: id });
    localStorage.setItem(
        "directors",
        JSON.stringify(getState().directorCRUD.directors)
    );
};

export const updateDirectorAction =
    (director) => async (dispatch, getState) => {
        dispatch({ type: movieConstants.EDIT_DIRECTOR, payload: director });
        localStorage.setItem(
            "directors",
            JSON.stringify(getState().directorCRUD.directors)
        );
    };

export const deleteAllDirectorsAction = () => async (dispatch) => {
    dispatch({ type: movieConstants.RESET_DIRECTOR });
    localStorage.removeItem("directors");
};

export const updateMovieAction = (id, movie) => async (dispatch, getState) => {
    try {
        dispatch({ type: movieConstants.UPDATE_MOVIE_REQUEST });
        const response = await movieAPI.updateMovieService(
            tokenProtection(getState),
            id,
            movie
        );
        dispatch({
            type: movieConstants.UPDATE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("Movie updated successfully");
        dispatch(getMovieByIdAction(id));
        dispatch(deleteAllCastsAction());
        dispatch(deleteAllDirectorsAction());
    } catch (error) {
        ErrorsAction(error, dispatch, movieConstants.UPDATE_MOVIE_FAIL);
    }
};
