import Axios from "./axios";

// ************** PUBLIC APIs ***************

const getCategoryService = async () => {
    const { data } = await Axios.get("/categories");
    return data;
};

// ************** ADMIN APIs ***************

const createCategoryService = async (title, token) => {
    const { data } = await Axios.post("/categories", title, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const deleteCategoryService = async (id, token) => {
    const { data } = await Axios.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const updateCategoryService = async (id, title, token) => {
    const { data } = await Axios.put(`/categories/${id}`, title, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export {
    getCategoryService,
    createCategoryService,
    deleteCategoryService,
    updateCategoryService,
};