import * as artistConstants from "../Constants/artistsConstants";
import * as artistAPI from "../APIs/artistService";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";

export const getAllArtistsAction =
    ({
        gender = "",
        nationality = "",
        zodiacSign = "",
        search = "",
        pageNumber = "",
    }) =>
        async (dispatch) => {
            try {
                dispatch({ type: artistConstants.ARTISTS_LIST_REQUEST });
                const response = await artistAPI.getAllArtistService(
                    gender,
                    nationality,
                    zodiacSign,
                    search,
                    pageNumber
                );
                dispatch({
                    type: artistConstants.ARTISTS_LIST_SUCCESS,
                    payload: response,
                });
            } catch (error) {
                ErrorsAction(error, dispatch, artistConstants.ARTISTS_LIST_FAIL);
            }
        };

export const getArtistByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: artistConstants.ARTIST_DETAILS_REQUEST });
        const response = await artistAPI.getArtistByIdService(id);
        dispatch({
            type: artistConstants.ARTIST_DETAILS_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, artistConstants.ARTIST_DETAILS_FAIL);
    }
};

export const deleteArtistAction = (artistId) => async (dispatch, getState) => {
    try {
        dispatch({ type: artistConstants.DELETE_ARTIST_REQUEST });
        const response = await artistAPI.deleteArtistService(
            tokenProtection(getState),
            artistId
        );
        dispatch({
            type: artistConstants.DELETE_ARTIST_SUCCESS,
            payload: response,
        });
        toast.success("Artist deleted successfully");
        dispatch(getAllArtistsAction({}));
    } catch (error) {
        ErrorsAction(error, dispatch, artistConstants.DELETE_ARTIST_FAIL);
    }
};

export const updateArtistAction =
    (id, artist) => async (dispatch, getState) => {
        try {
            dispatch({ type: artistConstants.UPDATE_ARTIST_REQUEST });
            const response = await artistAPI.updateArtistService(
                tokenProtection(getState),
                id,
                artist
            );
            dispatch({
                type: artistConstants.UPDATE_ARTIST_SUCCESS,
                payload: response,
            });
            toast.success("Artist updated successfully");
            dispatch(getArtistByIdAction(id));
        } catch (error) {
            ErrorsAction(error, dispatch, artistConstants.UPDATE_ARTIST_FAIL);
        }
    };
