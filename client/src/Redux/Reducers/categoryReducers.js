import * as categoryConstants from "../Constants/categoriesConstants";

export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            return { isLoading: true };
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            return { isLoading: false, categories: action.payload };
        case categoryConstants.GET_ALL_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

export const createCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstants.CREATE_CATEGORY_REQUEST:
            return { isLoading: true };
        case categoryConstants.CREATE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: action.payload };
        case categoryConstants.CREATE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload };
        case categoryConstants.CREATE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }
};

export const updateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstants.UPDATE_CATEGORY_REQUEST:
            return { isLoading: true };
        case categoryConstants.UPDATE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: action.payload };
        case categoryConstants.UPDATE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload };
        case categoryConstants.UPDATE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }
};

export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case categoryConstants.DELETE_CATEGORY_REQUEST:
            return { isLoading: true };
        case categoryConstants.DELETE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case categoryConstants.DELETE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload };
        case categoryConstants.DELETE_CATEGORY_RESET:
            return {};
        default:
            return state;
    }
};