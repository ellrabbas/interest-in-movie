import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import NotFound from "../Screens/NotFound";
import MoviesPage from "../Screens/MoviesPage";
import SingleMovie from "../Screens/SingleMovie";
import Watch from "../Screens/Watch";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Account from "../Screens/Dashboard/Account";
import Password from "../Screens/Dashboard/Password";
import FavMovies from "../Screens/Dashboard/FavMovies";
import MovieList from "../Screens/Dashboard/Admin/MovieList";
import Dashboard from "../Screens/Dashboard/Admin/Dashboard";
import Categories from "../Screens/Dashboard/Admin/Categories";
import Users from "../Screens/Dashboard/Admin/Users";
import AddMovie from "../Screens/Dashboard/Admin/AddMovie";
import EditMovie from "../Screens/Dashboard/Admin/EditMovie";
import ScrollOnTop from "../ScrollOnTop";
import Aos from "aos";
import ToastContainer from "../Components/Notifications/ToastContainer";
import { AdminProtectedRouter, ProtectedRouter } from "../ProtectRouter";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../Redux/Actions/categoryActions";
import { getAllMoviesAction } from "../Redux/Actions/movieAction";
import { getFavoriteMoviesAction } from "../Redux/Actions/userActions";
import toast from "react-hot-toast";

function Router() {
  Aos.init();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { isSuccess, isError } = useSelector((state) => state.userLikeMovie);
  const { isError: catError } = useSelector((state) => state.categoryGetAll);

  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllMoviesAction({}));
    if (userInfo) {
      dispatch(getFavoriteMoviesAction());
    }

    if (isSuccess) {
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }

    if (isError || catError) {
      toast.error(isError || catError);
      dispatch({ type: "LIKE_MOVIE_RESET" });
    }
  }, [dispatch, userInfo, isSuccess, isError, catError]);

  return (
    <>
      <ToastContainer />
      <ScrollOnTop>
        <Routes>
          {/**************** PUBLIC ROUTERS ********************/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:search" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          {/**************** PRIVATE PUBLIC ROUTERS ********************/}
          <Route element={<ProtectedRouter />}>
            <Route path="/profile" element={<Account />} />
            <Route path="/password" element={<Password />} />
            <Route path="/favorites" element={<FavMovies />} />

            {/**************** ADMIN ROUTERS ********************/}
            <Route element={<AdminProtectedRouter />}>
              <Route path="/movieList" element={<MovieList />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/users" element={<Users />} />
              <Route path="/addmovie" element={<AddMovie />} />
              <Route path="/edit/:id" element={<EditMovie />} />
            </Route>
          </Route>
        </Routes>
      </ScrollOnTop>
    </>
  );
}

export default Router;
