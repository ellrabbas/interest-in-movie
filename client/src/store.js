import * as User from "./Redux/Reducers/userReducers";
import * as Category from "./Redux/Reducers/categoryReducers";
import * as Movie from "./Redux/Reducers/movieReducer";
import * as Artist from "./Redux/Reducers/artistReducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  // User Reducers
  userLogin: User.userLoginReducer,
  userRegister: User.userRegisterReducer,
  userUpdateAccount: User.userUpdateReducer,
  userDeleteAccount: User.userDeleteReducer,
  userChangePassword: User.userChangePasswordReducer,
  userGetFavoriteMovies: User.userGetFavoriteMoviesReducer,
  userDeleteFavoriteMovies: User.userDeleteFavoriteMoviesReducer,
  adminGetAllUsers: User.adminGetAllUsersReducer,
  adminDeleteUser: User.adminDeleteUserReducer,
  userLikeMovie: User.userLikeMovieReducer,

  // Category Reducers
  categoryGetAll: Category.getAllCategoriesReducer,
  categoryCreate: Category.createCategoryReducer,
  categoryUpdate: Category.updateCategoryReducer,
  categoryDelete: Category.deleteCategoryReducer,

  // Movie Reducers
  movieGetAll: Movie.getMoviesListReducer,
  getRandomMovies: Movie.moviesRandomReducer,
  getMovieById: Movie.movieDetailsReducer,
  getTopRatedMovies: Movie.moviesTopRatedReducer,
  createReview: Movie.createReviewReducer,
  deleteReview: Movie.deleteReviewReducer,
  createMovie: Movie.createMovieServiceReducer,
  deleteMovie: Movie.deleteMovieReducer,
  deleteAllMovies: Movie.deleteAllMoviesReducer,
  castCRUD: Movie.movieCastsReducer,
  directorCRUD: Movie.movieDirectorsReducer,
  updateMovie: Movie.updateMovieServiceReducer,

  // Artist Reducers
  ArtistGetAll: Artist.getArtistsListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
