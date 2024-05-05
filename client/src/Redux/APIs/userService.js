import Axios from "./axios";

// ************** PUBLIC APIs ***************

const registerService = async (user) => {
    const { data } = await Axios.post("/users", user);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

const loginService = async (user) => {
    const { data } = await Axios.post("/users/login", user);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

const logoutService = () => {
    localStorage.removeItem("userInfo");
    return null;
};

// ************** PRIVATE APIs ***************

const updateAccountService = async (user, token) => {
    const { data } = await Axios.put("/users", user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

const deleteProfileService = async (token) => {
    const { data } = await Axios.delete("/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.removeItem("userInfo");
    }
    return data;
};

const changePasswordService = async (password, token) => {
    const { data } = await Axios.put("/users/password", password, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const getFavoriteMoviesService = async (token) => {
    const { data } = await Axios.get("/users/favorites", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const deleteFavoriteMovieService = async (token) => {
    const { data } = await Axios.delete(`/users/favorites`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const likeMovieService = async (id, token) => {
    const { data } = await Axios.post(`/users/favorites`, id, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// ************** ADMIN APIs ***************

const getAllUsersService = async (token) => {
    const { data } = await Axios.get("/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const deleteUserService = async (id, token) => {
    const { data } = await Axios.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export {
    registerService,
    loginService,
    logoutService,
    updateAccountService,
    deleteProfileService,
    changePasswordService,
    getFavoriteMoviesService,
    deleteFavoriteMovieService,
    getAllUsersService,
    deleteUserService,
    likeMovieService,
};