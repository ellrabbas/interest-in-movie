import Axios from "./axios";

// ************** PUBLIC APIs ***************

const getAllMoviesService = async (
    category,
    time,
    language,
    rate,
    year,
    search,
    pageNumber
) => {
    const { data } = await Axios.get(
        `/movies?category=${category}&time=${time}&language=${language}&rate=${rate}&year=${year}&search=${search}&pageNumber=${pageNumber}`
    );
    return data;
};

const getRandomMoviesService = async () => {
    const { data } = await Axios.get("/movies/random/all");
    return data;
};

const getMovieByIdService = async (id) => {
    const { data } = await Axios.get(`/movies/${id}`);
    return data;
};

const getTopRatedMoviesService = async () => {
    const { data } = await Axios.get("/movies/rated/top");
    return data;
};

// ************** PRIVATE APIs ***************

const reviewMovieService = async (token, id, review) => {
    const { data } = await Axios.post(`/movies/${id}/reviews`, review, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const deleteMovieReviewService = async (token, id) => {
    const { data } = await Axios.delete(`/movies/${id}/reviews`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// ************** ADMIN APIs ***************

const deleteMovieService = async (token, id) => {
    const { data } = await Axios.delete(`/movies/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const deleteAllMoviesService = async (token) => {
    const { data } = await Axios.delete(`/movies`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const createMovieService = async (token, movie) => {
    const { data } = await Axios.post(`/movies`, movie, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const updateMovieService = async (token, id, movie) => {
    const { data } = await Axios.put(`/movies/${id}`, movie, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export {
    getAllMoviesService,
    getRandomMoviesService,
    getMovieByIdService,
    getTopRatedMoviesService,
    reviewMovieService,
    deleteMovieReviewService,
    deleteMovieService,
    deleteAllMoviesService,
    createMovieService,
    updateMovieService,
};
