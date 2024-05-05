import React, { useEffect, useMemo, useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import MovieCard from "../Components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Components/Notifications/Loading";
import { Empty } from "../Components/Notifications/Empty";
import { getAllMoviesAction } from "../Redux/Actions/movieAction";
import { LanguagesData, TimesData, YearData } from "../Data/FilterData";
import { useParams } from "react-router-dom";

function MoviesPage() {
  const { search } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ title: "All Categories" });
  const [year, setYear] = useState(YearData[0]);
  const [time, setTime] = useState(TimesData[0]);
  const [language, setLanguage] = useState(LanguagesData[0]);

  const sameClass = "w-full gap-6 flex-column min-h-screen";
  const { isLoading, isError, movies, pages, page } = useSelector(
    (state) => state.movieGetAll
  );

  const { categories } = useSelector((state) => state.categoryGetAll);

  const queries = useMemo(() => {
    const query = {
      category: category?.title === "All Categories" ? "" : category?.title,
      time: time?.title.replace(/\D/g, ""),
      language: language?.title === "Sort By Language" ? "" : language?.title,
      year: year?.title.replace(/\D/g, ""),
      search: search ? search : "",
    };
    return query;
  }, [category, time, language, year, search]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }

    dispatch(getAllMoviesAction(queries));
  }, [dispatch, isError, queries]);

  const nextPage = () => {
    dispatch(
      getAllMoviesAction({
        ...queries,
        pageNumber: page + 1,
      })
    );
  };

  const prevPage = () => {
    dispatch(
      getAllMoviesAction({
        ...queries,
        pageNumber: page - 1,
      })
    );
  };

  const infos = {
    categories: categories,
    category: category,
    setCategory: setCategory,
    language: language,
    setLanguage: setLanguage,
    year: year,
    setYear: setYear,
    time: time,
    setTime: setTime,
  };

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 text-text mb-6">
        <Filters data={infos} />
        <p className="text-lg font-medium my-6 pb-5 border-b-2">
          Total{" "}
          <span className="font-bold ">{movies ? movies?.length : 0} </span>
          items found {search && `for "${search}"`}
        </p>
        {isLoading ? (
          <div className={sameClass}>
            <Loader />
          </div>
        ) : movies?.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5">
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
            <div className="w-full flex-rows gap-6 md:my-20 my-10">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className="flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
              >
                Previous
              </button>
              <span className="w-10 h-10 flex-column border border-dry text-dry bg-main rounded-full">
                {page}
              </span>
              <button
                onClick={nextPage}
                disabled={page === pages}
                className="flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <Empty message="No movies found" />
        )}
      </div>
    </Layout>
  );
}

export default MoviesPage;
