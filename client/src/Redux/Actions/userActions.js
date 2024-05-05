import * as userConstants from "../Constants/userConstants";
import * as movieConstants from "../Constants/moviesConstants";
import * as categoryConstants from "../Constants/categoriesConstants";
import * as userAPI from "../APIs/userService";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";

const loginAction = (datas) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_LOGIN_REQUEST });
        const response = await userAPI.loginService(datas);
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
    }
};

const registerAction = (datas) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const response = await userAPI.registerService(datas);
        dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: response });
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
    }
};

const logoutAction = () => async (dispatch) => {
    userAPI.logoutService();
    dispatch({ type: userConstants.USER_LOGOUT });
    dispatch({ type: userConstants.USER_LOGIN_RESET });
    dispatch({ type: userConstants.USER_REGISTER_RESET });
    dispatch({ type: userConstants.DELETE_FAVORITE_MOVIES_RESET });
    dispatch({ type: userConstants.USER_UPDATE_ACCOUNT_RESET });
    dispatch({ type: userConstants.USER_DELETE_ACCOUNT_RESET });
    dispatch({ type: userConstants.USER_CHANGE_PASSWORD_RESET });
    dispatch({ type: userConstants.GET_FAVORITE_MOVIES_RESET });
    dispatch({ type: userConstants.GET_ALL_USERS_RESET });
    dispatch({ type: userConstants.DELETE_USER_RESET });
    dispatch({ type: userConstants.LIKE_MOVIE_RESET });
    dispatch({ type: movieConstants.MOVIE_DETAILS_RESET });
    dispatch({ type: movieConstants.CREATE_REVIEW_RESET });
    dispatch({ type: movieConstants.CREATE_MOVIE_RESET });
    dispatch({ type: movieConstants.RESET_CAST });
    dispatch({ type: movieConstants.RESET_DIRECTOR });
    dispatch({ type: movieConstants.UPDATE_MOVIE_RESET });
    dispatch({ type: categoryConstants.CREATE_CATEGORY_RESET });
    dispatch({ type: categoryConstants.UPDATE_CATEGORY_RESET });
    dispatch({ type: categoryConstants.DELETE_CATEGORY_RESET });
};

const updateAccountAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_UPDATE_ACCOUNT_REQUEST });
        const response = await userAPI.updateAccountService(
            user,
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.USER_UPDATE_ACCOUNT_SUCCESS,
            payload: response,
        });
        toast.success("Account updated successfully");
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_UPDATE_ACCOUNT_FAIL);
    }
};

const deleteAccountAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_DELETE_ACCOUNT_REQUEST });
        await userAPI.deleteProfileService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_DELETE_ACCOUNT_SUCCESS });
        toast.success("Account deleted successfully");
        dispatch(logoutAction());
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_DELETE_ACCOUNT_FAIL);
    }
};

const changePasswordAction = (password) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
        const response = await userAPI.changePasswordService(
            password,
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.USER_CHANGE_PASSWORD_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
    }
};

const getFavoriteMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_FAVORITE_MOVIES_REQUEST });
        const response = await userAPI.getFavoriteMoviesService(
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.GET_FAVORITE_MOVIES_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.GET_FAVORITE_MOVIES_FAIL);
    }
};

const deleteFavoriteMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.DELETE_FAVORITE_MOVIES_REQUEST });
        await userAPI.deleteFavoriteMovieService(tokenProtection(getState));
        dispatch({ type: userConstants.DELETE_FAVORITE_MOVIES_SUCCESS });
        toast.success("Favorite movies deleted successfully");
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.DELETE_FAVORITE_MOVIES_FAIL);
    }
};

const getAllUsersAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });
        const response = await userAPI.getAllUsersService(
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.GET_ALL_USERS_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.GET_ALL_USERS_FAIL);
    }
};

const deleteUserAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.DELETE_USER_REQUEST });
        await userAPI.deleteUserService(id, tokenProtection(getState));
        dispatch({ type: userConstants.DELETE_USER_SUCCESS });
        toast.success("User deleted successfully");
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.DELETE_USER_FAIL);
    }
};

const likeMovieAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.LIKE_MOVIE_REQUEST });
        const response = await userAPI.likeMovieService(
            id,
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.LIKE_MOVIE_SUCCESS,
            payload: response,
        });
        toast.success("The movie has been successfully added to your favorites");
        dispatch(getFavoriteMoviesAction());
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.LIKE_MOVIE_FAIL);
    }
};

export {
    loginAction,
    registerAction,
    logoutAction,
    updateAccountAction,
    deleteAccountAction,
    changePasswordAction,
    getFavoriteMoviesAction,
    deleteFavoriteMoviesAction,
    getAllUsersAction,
    deleteUserAction,
    likeMovieAction,
};
