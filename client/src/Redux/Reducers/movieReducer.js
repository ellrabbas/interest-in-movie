import * as movieConstants from "../Constants/moviesConstants";

export const getMoviesListReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case movieConstants.MOVIES_LIST_REQUEST:
            return { isLoading: true };
        case movieConstants.MOVIES_LIST_SUCCESS:
            return {
                isLoading: false,
                movies: action.payload.movies,
                pages: action.payload.pages,
                page: action.payload.page,
                totalMovies: action.payload.totalMovies,
            };
        case movieConstants.MOVIES_LIST_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const moviesRandomReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case movieConstants.MOVIES_RANDOM_REQUEST:
            return { isLoading: true };
        case movieConstants.MOVIES_RANDOM_SUCCESS:
            return { isLoading: false, movies: action.payload };
        case movieConstants.MOVIES_RANDOM_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const movieDetailsReducer = (state = { movie: {} }, action) => {
    switch (action.type) {
        case movieConstants.MOVIE_DETAILS_REQUEST:
            return { isLoading: true };
        case movieConstants.MOVIE_DETAILS_SUCCESS:
            return { isLoading: false, movie: action.payload };
        case movieConstants.MOVIE_DETAILS_FAIL:
            return { isLoading: false, isError: action.payload };
        case movieConstants.MOVIE_DETAILS_RESET:
            return { movie: {} };
        default:
            return state;
    }
};

export const moviesTopRatedReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case movieConstants.MOVIE_TOP_RATED_REQUEST:
            return { isLoading: true };
        case movieConstants.MOVIE_TOP_RATED_SUCCESS:
            return { isLoading: false, movies: action.payload };
        case movieConstants.MOVIE_TOP_RATED_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const createReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.CREATE_REVIEW_REQUEST:
            return { isLoading: true };
        case movieConstants.CREATE_REVIEW_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.CREATE_REVIEW_FAIL:
            return { isLoading: false, isError: action.payload };
        case movieConstants.CREATE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
};

export const deleteReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.DELETE_REVIEW_REQUEST:
            return { isLoading: true };
        case movieConstants.DELETE_REVIEW_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.DELETE_REVIEW_FAIL:
            return { isLoading: false, isError: action.payload };
        case movieConstants.DELETE_REVIEW_RESET:
            return {};
        default:
            return state;
    }
};

export const deleteMovieReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.DELETE_MOVIE_REQUEST:
            return { isLoading: true };
        case movieConstants.DELETE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.DELETE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const deleteAllMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.DELETE_ALL_MOVIES_REQUEST:
            return { isLoading: true };
        case movieConstants.DELETE_ALL_MOVIES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.DELETE_ALL_MOVIES_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const createMovieServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.CREATE_MOVIE_REQUEST:
            return { isLoading: true };
        case movieConstants.CREATE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.CREATE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case movieConstants.CREATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
};

export const movieCastsReducer = (state = { casts: [] }, action) => {
    switch (action.type) {
        case movieConstants.ADD_CAST:
            return { casts: [...state.casts, action.payload] };
        case movieConstants.EDIT_CAST:
            const updatedCast = state.casts.map((cast) =>
                cast.id === action.payload.id ? action.payload : cast
            );
            return { casts: updatedCast };
        case movieConstants.DELETE_CAST:
            return {
                ...state,
                casts: state.casts.filter((cast) => cast.id !== action.payload),
            };
        case movieConstants.RESET_CAST:
            return { casts: [] };
        default:
            return state;
    }
};

export const movieDirectorsReducer = (state = { directors: [] }, action) => {
    switch (action.type) {
        case movieConstants.ADD_DIRECTOR:
            return { directors: [...state.directors, action.payload] };
        case movieConstants.EDIT_DIRECTOR:
            const updatedDirector = state.directors.map((director) =>
                director.id === action.payload.id ? action.payload : director
            );
            return { directors: updatedDirector };
        case movieConstants.DELETE_DIRECTOR:
            return {
                ...state,
                directors: state.directors.filter(
                    (director) => director.id !== action.payload
                ),
            };
        case movieConstants.RESET_DIRECTOR:
            return { directors: [] };
        default:
            return state;
    }
};

export const updateMovieServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case movieConstants.UPDATE_MOVIE_REQUEST:
            return { isLoading: true };
        case movieConstants.UPDATE_MOVIE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case movieConstants.UPDATE_MOVIE_FAIL:
            return { isLoading: false, isError: action.payload };
        case movieConstants.UPDATE_MOVIE_RESET:
            return {};
        default:
            return state;
    }
};
