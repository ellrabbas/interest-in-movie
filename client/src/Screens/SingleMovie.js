import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../Components/Single/MovieInfo";
import Layout from "../Layout/Layout";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieDirectors from "../Components/Single/MovieDirectors";
import MovieRates from "../Components/Single/MovieRates";
import ShareModal from "../Components/Modals/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdAction } from "../Redux/Actions/movieAction";
import Loader from "../Components/Notifications/Loading";
import { RiMovie2Fill } from "react-icons/ri";

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const sameClass = "w-full gap-6 flex-column min-h-screen";

  const { isLoading, isError, movie } = useSelector(
    (state) => state.getMovieById
  );

  useEffect(() => {
    dispatch(getMovieByIdAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      {isLoading ? (
        <div className={sameClass}>
          <Loader />
        </div>
      ) : isError ? (
        <div className={`${sameClass} flex-column`}>
          <div className="flex-column w-24 h-24 p-5 rounded-full bg-dry text-main">
            <RiMovie2Fill size={45} />
          </div>
          <p className="text-md font-semibold mt-2 text-text">
            Something went wrong!
          </p>
        </div>
      ) : (
        <>
          <ShareModal
            movie={movie}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <MovieInfo movie={movie} setModalOpen={setModalOpen} />
          <div className="container mx-auto min-h-screen px-2 my-6">
            <MovieDirectors movie={movie} />
            <MovieCasts movie={movie} />
            <MovieRates movie={movie} />
          </div>
        </>
      )}
    </Layout>
  );
}

export default SingleMovie;
