import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Titles from "../Title";
import { CiBookmarkMinus } from "react-icons/ci";
import {
    FaRegHeart,
    FaChevronCircleLeft,
    FaChevronCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars";
import Loader from "../Notifications/Loading";
import { Empty } from "../Notifications/Empty";
import { useDispatch, useSelector } from "react-redux";
import { IfLikeMovieAction, LikeMovie } from "../../Context/Functionalities";

const SwiperTop = ({ movies, nextEl, prevEl }) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.userLikeMovie);
    const { userInfo } = useSelector((state) => state.userLogin);

    const isLiked = (movie) => {
        return IfLikeMovieAction(movie);
    };

    return (
        <Swiper
            navigation={{ nextEl, prevEl }}
            autoplay={true}
            speed={1000}
            loop={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                300: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                1500: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                },
                2000: {
                    slidesPerView: 6,
                    spaceBetween: 5,
                },
                2500: {
                    slidesPerView: 7,
                    spaceBetween: 5,
                },
            }}
        >
            {movies?.map((movie) => (
                <SwiperSlide key={movie?._id}>
                    <div className="cursor-pointer w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] xxl:w-[300px] shadow-md border border-stone-300 hovered rounded-lg overflow-hidden relative ms-10">
                        <img
                            src={movie?.titleImage ? movie?.titleImage : "/images/user.png"}
                            alt={movie?.name}
                            className="w-full h-[190px] md:h-[250px] lg:h-[310px] xl:h-[370px] xxl:h-[430px] object-center rounded-lg"
                        />
                        <Link
                            to={`/movie/${movie?._id}`}
                            className="px-4 text-center absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 transitions opacity-0 hover:opacity-100"
                        >
                            <button
                                onClick={() => LikeMovie(movie, dispatch, userInfo)}
                                disabled={isLiked(movie) || isLoading}
                                className={`w-12 h-12 flex-column transitions hover:bg-dry 
                                rounded-full relative 
                                top-2 -right-[60%] md:-right-[70%] lg:-right-[80%]
                                ${isLiked(movie)
                                        ? "bg-dry text-white"
                                        : "bg-white bg-opacity-40 text-white"
                                    }`}
                            >
                                <FaRegHeart />
                            </button>
                            <div className="flex-column relative top-[20%] lg:top-[50%]">
                                <p className="font-semibold text-white text-md md:text-lg lg:text-xl traucated line-clamp-2 text-center">
                                    {movie?.name}
                                </p>
                                <div className="flex gap-2 text-star">
                                    <RatingStars value={movie?.rate} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

function TopRated({ isLoading, movies }) {
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const classNames = "hover:text-dry transitions text-sm w-8 h-8 flex-column";

    return (
        <div className="my-16">
            <div className="ms-10">
                <Titles title="Best-rated" Icon={CiBookmarkMinus} />
            </div>
            <div className="mt-10">
                {isLoading ? (
                    <Loader />
                ) : movies?.length > 0 ? (
                    <SwiperTop movies={movies} nextEl={nextEl} prevEl={prevEl} />
                ) : (
                    <Empty message="Sorry, there are no movies to display" />
                )}
                <div className="w-full px-2 flex-rows gap-6 pt-12">
                    <button className={classNames} ref={(node) => setPrevEl(node)}>
                        <FaChevronCircleLeft size={30} />
                    </button>
                    <button className={classNames} ref={(node) => setNextEl(node)}>
                        <FaChevronCircleRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopRated;
