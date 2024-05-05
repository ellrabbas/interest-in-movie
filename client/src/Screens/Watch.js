import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdAction } from "../Redux/Actions/movieAction";
import Loader from "../Components/Notifications/Loading";
import { RiMovie2Fill } from "react-icons/ri";
import { IfLikeMovieAction, LikeMovie } from "../Context/Functionalities";
import ReactPlayer from "react-player";

function Watch() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [play, setPlay] = useState(false);
  const sameClass = "w-full gap-6 flex-column min-h-screen";

  const { isLoading, isError, movie } = useSelector(
    (state) => state.getMovieById
  );

  const { isLoading: likeLoading } = useSelector(
    (state) => state.userLikeMovie
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const isLiked = (movie) => {
    return IfLikeMovieAction(movie);
  };

  useEffect(() => {
    dispatch(getMovieByIdAction(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className="text-text container mx-auto p-6 mb-12">
        {!isError && (
          <div className=" flex flex-col mb-6 gap-2 rounded">
            <Link
              to={`/movie/${movie?._id}`}
              className="flex max-w-fit items-center gap-4 bg-dry text-white hover:text-subMain transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
            >
              <IoMdArrowRoundBack size={25} /> {movie?.name}
            </Link>
            <div className="flex sm:w-auto w-full gap-5">
              <button
                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                disabled={isLiked(movie) || likeLoading}
                className={`w-10 h-10 flex-column border border-dry
                                rounded-full hover:border-0 hover:bg-dry hover:text-main transitions
                                ${
                                  isLiked(movie)
                                    ? "bg-dry text-white"
                                    : "text-dry bg-white"
                                }`}
                title="Add to favorites"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        )}

        {play ? (
          <div className="wrapper">
            <ReactPlayer
              className="player"
              url={movie?.video}
              controls
              playing={play}
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <div className="w-full h-screen rounded-lg overflow-hidden relative">
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
                  Something went wrong, please try again!
                </p>
              </div>
            ) : (
              <>
                <div className="absolute top-0 left-0 bottom-0 right-0 flex-column">
                  <button
                    onClick={() => setPlay(true)}
                    className="w-[50px] px-2 py-2 bg-main text-dry hover:bg-subMain transitions flex justify-center rounded-lg font-medium text-xl"
                  >
                    <FaPlay />
                  </button>
                </div>
                <img
                  src={movie?.image ? `${movie?.image}` : "images/user.png"}
                  alt={movie?.name}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Watch;
