import Axios from "./axios";

// ************** PUBLIC APIs ***************

const getAllArtistService = async (
    gender,
    nationality,
    zodiacSign,
    search,
    pageNumber
) => {
    const { data } = await Axios.get(
        `/artists?gender=${gender}&nationality=${nationality}&zodiacSign=${zodiacSign}&search=${search}&pageNumber=${pageNumber}`
    );
    return data;
};

const getArtistByIdService = async (id) => {
    const { data } = await Axios.get(`/artists/${id}`);
    return data;
};

// ************** ADMIN APIs ***************

const deleteArtistService = async (token, id) => {
    const { data } = await Axios.delete(`/artists/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

const updateArtistService = async (token, id, movie) => {
    const { data } = await Axios.put(`/artists/${id}`, movie, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export {
    getAllArtistService,
    deleteArtistService,
    updateArtistService,
    getArtistByIdService,
};