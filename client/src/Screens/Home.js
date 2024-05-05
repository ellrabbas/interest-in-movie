import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import PopularMovies from "../Components/Home/PopularMovies";
import TopRated from "../Components/Home/TopRated";
import Promos from "../Components/Home/Promos";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMoviesAction,
  getRandomMoviesAction,
  getTopRatedMoviesAction,
} from "../Redux/Actions/movieAction";
import toast from "react-hot-toast";

function Home() {
  const dispatch = useDispatch();
  const {
    isLoading: RandomLoading,
    isError: randomError,
    movies: RandomMovies,
  } = useSelector((state) => state.getRandomMovies);
  const {
    isLoading: topLoading,
    isError: topError,
    movies: topMovies,
  } = useSelector((state) => state.getTopRatedMovies);
  const { isLoading, isError, movies } = useSelector(
    (state) => state.movieGetAll
  );

  useEffect(() => {
    dispatch(getRandomMoviesAction());
    dispatch(getAllMoviesAction({}));
    dispatch(getTopRatedMoviesAction());

    if (isError || randomError || topError) {
      toast.error(isError || randomError || topError);
    }
  }, [dispatch, isError, randomError, topError]);

  return (
    <Layout>
      <div className="min-h-screen mb-6 text-text">
        <Banner movies={movies} isLoading={isLoading} />
        <PopularMovies movies={RandomMovies} isLoading={RandomLoading} />
        <Promos />
        <TopRated movies={topMovies} isLoading={topLoading} />
      </div>
    </Layout>
  );
}

export default Home;
