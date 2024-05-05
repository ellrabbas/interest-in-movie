import * as categoryConstants from "../Constants/categoriesConstants";
import * as categoryAPI from "../APIs/categoryService";
import { ErrorsAction, tokenProtection } from "../Protection";
import toast from "react-hot-toast";

export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        const response = await categoryAPI.getCategoryService();
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.GET_ALL_CATEGORIES_FAIL);
    }
};

export const createCategoryAction = (title) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.CREATE_CATEGORY_REQUEST });
        await categoryAPI.createCategoryService(title, tokenProtection(getState));
        dispatch({ type: categoryConstants.CREATE_CATEGORY_SUCCESS });
        toast.success("Category created successfully");
        dispatch(getAllCategoriesAction());
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.CREATE_CATEGORY_FAIL);
    }
};

export const updateCategoryAction =
    (id, title) => async (dispatch, getState) => {
        try {
            dispatch({ type: categoryConstants.UPDATE_CATEGORY_REQUEST });
            await categoryAPI.updateCategoryService(
                id,
                title,
                tokenProtection(getState)
            );
            dispatch({ type: categoryConstants.UPDATE_CATEGORY_SUCCESS });
            toast.success("Category updated successfully");
            dispatch(getAllCategoriesAction());
        } catch (error) {
            ErrorsAction(error, dispatch, categoryConstants.UPDATE_CATEGORY_FAIL);
        }
    };

export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: categoryConstants.DELETE_CATEGORY_REQUEST });
        await categoryAPI.deleteCategoryService(id, tokenProtection(getState));
        dispatch({ type: categoryConstants.DELETE_CATEGORY_SUCCESS });
        toast.success("Category deleted successfully");
        dispatch(getAllCategoriesAction());
    } catch (error) {
        ErrorsAction(error, dispatch, categoryConstants.DELETE_CATEGORY_FAIL);
    }
};