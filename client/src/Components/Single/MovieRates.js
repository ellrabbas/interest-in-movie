import React, { useEffect } from "react";
import Titles from "../Title";
import { MdOutlineReviews } from "react-icons/md";
import { Message, Select } from "../UserInputs";
import RaitingStars from "../RatingStars";
import { EmptyForComments } from "../../Components/Notifications/Empty";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ReviewValidation } from "../Validation/MovieValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { InlineError } from "../../Components/Notifications/Error";
import { Link } from "react-router-dom";
import {
    deleteReviewAction,
    reviewMovieAction,
} from "../../Redux/Actions/movieAction";
import { FaTrashAlt } from "react-icons/fa";

const Ratings = [
    {
        title: "0 - Poor",
        value: 0,
    },
    {
        title: "1 - Fair",
        value: 2,
    },
    {
        title: "2 - Good",
        value: 4,
    },
    {
        title: "3 - Very Good",
        value: 6,
    },
    {
        title: "4 - Excellent",
        value: 8,
    },
    {
        title: "5 - Perfect",
        value: 10,
    },
];

function MovieRates({ movie }) {
    const dispatch = useDispatch();
    const { isLoading, isError } = useSelector((state) => state.createReview);
    const {
        isLoading: deleteLoading,
        isSuccess,
        isError: deleteError,
    } = useSelector((state) => state.deleteReview);
    const { userInfo } = useSelector((state) => state.userLogin);
    const sameClass =
        "self-end w-fit border border-dry bg-main text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold sm:text-sm text-xs";

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ReviewValidation),
    });

    const onSubmit = (data) => {
        dispatch(
            reviewMovieAction({
                movieId: movie?._id,
                review: data,
            })
        );
    };

    const deleteReview = (userId) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            const movieId = movie && (movie._id || movie?._id);
            if (movieId) {
                if (userInfo && userInfo._id === userId) {
                    dispatch(deleteReviewAction(movieId));
                } else {
                    toast.error("You can only delete your own comment");
                }
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: "DELETE_REVIEW_RESET" });
        }

        if (isError) {
            toast.error(isError || deleteError);
            dispatch(
                { type: "CREATE_REVIEW_RESET" } || { type: "DELETE_REVIEW_RESET" }
            );
        }
    }, [dispatch, isError, deleteError, isSuccess]);

    return (
        <div className="text-text my-12">
            <Titles title="Feedback" Icon={MdOutlineReviews} />
            <div className="mt-3 xl:grid border-t-2 flex-column grid-cols-5 gap-12 xs:p-10 py-10 px-2 sm:p-20 rounded">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="xl:col-span-2 w-full flex flex-col gap-8"
                >
                    <h3 className="text-xl font-semibold">
                        Review
                        <span className="font-light ml-4 text-dry">{movie?.name}</span>
                    </h3>
                    <div className="w-full">
                        <div className="flex gap-2 text-star mb-5">
                            <RaitingStars value={watch("rating", false)} />
                        </div>
                        <div className="text-sm w-full mb-5">
                            <Select
                                label="Raiting"
                                margin="mr-5"
                                options={Ratings}
                                name="rating"
                                register={{ ...register("rating") }}
                            />
                        </div>
                        {errors.rating && <InlineError error={errors.rating.message} />}
                    </div>
                    <Message
                        name="comment"
                        register={{ ...register("comment") }}
                        label="Comment"
                        placeholder="Write something"
                    />
                    {errors.comment && <InlineError error={errors.comment.message} />}
                    {userInfo ? (
                        <button disabled={isLoading} type="submit" className={sameClass}>
                            {isLoading ? "Loading..." : "Submit"}
                        </button>
                    ) : (
                        <Link to="/login" className={sameClass}>
                            Log in to post a comment
                        </Link>
                    )}
                </form>
                <div className=" w-full col-span-3 text-text flex flex-col gap-6">
                    <h3 className="text-xl font-lighter ml-11">
                        Comments ({movie?.numberOfReviews})
                    </h3>
                    <div className="w-full flex flex-col gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll overflow-hidden">
                        {movie?.reviews?.length > 0 ? (
                            movie?.reviews?.map((user) => (
                                <div
                                    key={user?.userId}
                                    className="md:grid flex flex-col w-full grid-cols-12 gap-6 p-4 border rounded-md border-subMain "
                                >
                                    <div className="col-span-3 hidden md:block ">
                                        <div className="md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] ">
                                            <img
                                                src={
                                                    user?.userImage ? user?.userImage : "/images/user.jpg"
                                                }
                                                alt={user?.userName}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-9 flex flex-col gap-2 overflow-hidden">
                                        <h2>{user?.userName}</h2>
                                        <div className="col-span-3 flex text-star">
                                            <RaitingStars value={user?.rating} />
                                        </div>
                                        <p className="text-xs bg-dryGray p-1 shadow-md rounded break-words h-20 scrollbar-hide leading-6 font-medium overflow-y-scroll">
                                            {user?.comment}
                                        </p>
                                    </div>
                                    {userInfo ? (
                                        <button
                                            disabled={deleteLoading}
                                            onClick={() => deleteReview(user?.userId)}
                                            className="w-6 p-1 text-sm text-center rounded-full border border-dry bg-main text-dry hover:bg-dry hover:text-main transitions "
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    ) : (
                                        <Link to="/login"></Link>
                                    )}
                                </div>
                            ))
                        ) : (
                            <EmptyForComments message="Give your opinion about the movie" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieRates;
