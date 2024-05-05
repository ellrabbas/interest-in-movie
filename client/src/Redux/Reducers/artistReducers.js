import * as artistConstants from "../Constants/artistsConstants";

export const getArtistsListReducer = (state = { artists: [] }, action) => {
    switch (action.type) {
        case artistConstants.ARTISTS_LIST_REQUEST:
            return { isLoading: true };
        case artistConstants.ARTISTS_LIST_SUCCESS:
            return {
                isLoading: false,
                artists: action.payload.artists,
                pages: action.payload.pages,
                page: action.payload.page,
                totalArtists: action.payload.totalArtists,
            };
        case artistConstants.ARTISTS_LIST_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const artistDetailsReducer = (state = { artist: {} }, action) => {
    switch (action.type) {
        case artistConstants.ARTIST_DETAILS_REQUEST:
            return { isLoading: true };
        case artistConstants.ARTIST_DETAILS_SUCCESS:
            return { isLoading: false, movie: action.payload };
        case artistConstants.ARTIST_DETAILS_FAIL:
            return { isLoading: false, isError: action.payload };
        case artistConstants.ARTIST_DETAILS_RESET:
            return { artist: {} };
        default:
            return state;
    }
};

export const deleteArtistReducer = (state = {}, action) => {
    switch (action.type) {
        case artistConstants.DELETE_ARTIST_REQUEST:
            return { isLoading: true };
        case artistConstants.DELETE_ARTIST_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case artistConstants.DELETE_ARTIST_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const updateArtistServiceReducer = (state = {}, action) => {
    switch (action.type) {
        case artistConstants.UPDATE_ARTIST_REQUEST:
            return { isLoading: true };
        case artistConstants.UPDATE_ARTIST_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case artistConstants.UPDATE_ARTIST_FAIL:
            return { isLoading: false, isError: action.payload };
        case artistConstants.UPDATE_ARTIST_RESET:
            return {};
        default:
            return state;
    }
};
