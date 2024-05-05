import React, { useEffect, useRef, useState } from "react";
import SideBar from "../SideBar";
import { Input, Select } from "../../../Components/UserInputs";
import { Message } from "../../../Components/UserInputs";
import Uploader from "../../../Components/Uploader";
import { MdEdit, MdDelete } from "react-icons/md";
import CastModal from "../../../Components/Modals/CastModal";
import DirectorModal from "../../../Components/Modals/DirectorModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MovieValidation } from "../../../Components/Validation/MovieValidation";
import {
    deleteCastAction,
    deleteDirectorAction,
    getMovieByIdAction,
    updateMovieAction,
} from "../../../Redux/Actions/movieAction";
import toast from "react-hot-toast";
import { InlineError } from "../../../Components/Notifications/Error";
import { ImagePreview } from "../../../Components/ImagePreview";
import Loader from "../../../Components/Notifications/Loading";
import { RiMovie2Fill } from "react-icons/ri";

function EditMovie() {
    const sameClass = "w-full gap-6 flex-column min-h-screen";
    const [castModalOpen, setCastModalOpen] = useState(false);
    const [directorModalOpen, setDirectorModalOpen] = useState(false);
    const [cast, setCast] = useState(null);
    const [director, setDirector] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [titleImage, setTitleImage] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const { id } = useParams();
    const ModalRef = useRef(null);

    const { categories } = useSelector((state) => state.categoryGetAll);
    const { isLoading, isError, movie } = useSelector(
        (state) => state.getMovieById
    );
    const {
        isLoading: editLoading,
        isError: editError,
        isSuccess,
    } = useSelector((state) => state.updateMovie);
    const { casts } = useSelector((state) => state.castCRUD);
    const { directors } = useSelector((state) => state.directorCRUD);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(MovieValidation),
    });

    const onSubmit = (data) => {
        dispatch(
            updateMovieAction(movie?._id, {
                ...data,
                titleImage: titleImage,
                image: coverImage,
                video: videoUrl,
                casts: casts.length > 0 ? casts : movie?.casts,
                directors: directors.length > 0 ? directors : movie?.directors,
            })
        );
    };

    const deleteCastHandler = (id) => {
        dispatch(deleteCastAction(id));
        toast.success("Cast deleted successfully");
    };

    const deleteDirectorHandler = (id) => {
        dispatch(deleteDirectorAction(id));
        toast.success("Director deleted successfully");
    };

    useEffect(() => {
        if (movie?._id !== id) {
            dispatch(getMovieByIdAction(id));
        } else {
            setValue("name", movie?.name);
            setValue("time", movie?.time);
            setValue("category", movie?.category);
            setValue("language", movie?.language);
            setValue("rate", movie?.rate);
            setValue("year", movie?.year);
            setValue("desc", movie?.desc);
            setTitleImage(movie?.titleImage);
            setCoverImage(movie?.image);
            setVideoUrl(movie?.video);
        }

        if (castModalOpen === false) {
            setCast();
        }
        if (directorModalOpen === false) {
            setDirector();
        }

        if (isSuccess) {
            dispatch({ type: "UPDATE_MOVIE_RESET" });
            navigate(`/edit/${id}`);
        }

        if (editError) {
            toast.error("Something went wrong, please try again");
            dispatch({ type: "UPDATE_MOVIE_RESET" });
        }
    }, [
        dispatch,
        id,
        setValue,
        isSuccess,
        editError,
        movie,
        castModalOpen,
        directorModalOpen,
        navigate,
    ]);

    return (
        <SideBar>
            <CastModal
                modalOpen={castModalOpen}
                setModalOpen={setCastModalOpen}
                cast={cast}
            />
            <DirectorModal
                modalOpen={directorModalOpen}
                setModalOpen={setDirectorModalOpen}
                director={director}
            />
            {isLoading ? (
                <Loader />
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
                <div ref={ModalRef} className="text-text flex flex-col gap-6">
                    <h2 className="text-xl font-bold">Update "{movie?.name}"</h2>

                    <div className="w-full grid md:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="font-lighter text-sm md:text-lg">Title Image</p>
                            <Uploader
                                width="w-[30%] md:w-[40%] lg:w-[30%] h-[170px] mb-5 md:mb-0"
                                writing="Upload title image"
                                setImageURL={setTitleImage}
                            />
                            <ImagePreview
                                image={titleImage}
                                name="titleImage"
                                sizes="w-[10%] md:w-[15%] lg:w-[10%] h-[70px] border rounded-md"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-lighter text-sm md:text-lg">Cover Image</p>
                            <Uploader
                                width="w-[70%] h-[170px] mb-5 md:mb-0"
                                writing="Upload cover image"
                                setImageURL={setCoverImage}
                            />
                            <ImagePreview
                                image={coverImage}
                                name="coverImage"
                                sizes="w-[30%] h-[70px] border rounded-md"
                            />
                        </div>
                    </div>

                    <div className="w-full grid md: grid-cols-3 gap-6">
                        <div className="w-full pb-5">
                            <Input
                                label="Title"
                                type="text"
                                bg={true}
                                name="name"
                                register={register("name")}
                            />
                            {errors.name && <InlineError error={errors.name.message} />}
                        </div>
                        <div className="w-full">
                            <Input
                                label="Time"
                                type="number"
                                bg={true}
                                name="time"
                                register={register("time")}
                            />
                            {errors.time && <InlineError error={errors.time.message} />}
                        </div>
                        <div className="w-full">
                            <Select
                                options={categories?.length > 0 ? categories : []}
                                name="category"
                                register={register("category")}
                            />
                            {errors.category && (
                                <InlineError error={errors.category.message} />
                            )}
                        </div>
                    </div>
                    <div className="w-full grid md: grid-cols-3 gap-6">
                        <div className="w-full">
                            <Input
                                label="Language"
                                type="text"
                                bg={true}
                                name="language"
                                register={register("language")}
                            />
                            {errors.language && (
                                <InlineError error={errors.language.message} />
                            )}
                        </div>
                        <div className="w-full">
                            <Input
                                label="Rating"
                                type="number"
                                bg={true}
                                name="rate"
                                register={register("rate")}
                            />
                            {errors.rate && <InlineError error={errors.rate.message} />}
                        </div>
                        <div className="w-full">
                            <Input
                                label="Year"
                                type="number"
                                bg={true}
                                name="year"
                                register={register("year")}
                            />
                            {errors.year && <InlineError error={errors.year.message} />}
                        </div>
                    </div>
                    <div className="w-full grid md:grid-cols-2 gap-6">
                        <div className="w-full">
                            <Message
                                placeholder="Write the description of the movie here"
                                name="desc"
                                register={register("desc")}
                            />
                            {errors.desc && <InlineError error={errors.desc.message} />}
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="font-lighter text-sm md:text-lg">
                                Movie video
                            </label>
                            <div
                                className={`w-full grid ${videoUrl && "md:grid-cols-1"} gap-6`}
                            >
                                <Uploader
                                    width="w-full h-[170px]"
                                    writing="Upload movie"
                                    setImageURL={setVideoUrl}
                                />
                                {videoUrl && (
                                    <div className="w-full mt-1 bg-main text-sm py-4 border border-stone-500 border-1 border-dotted rounded-md flex-column">
                                        Video successfully uploaded!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex ">
                        <div className="w-full flex flex-col gap-6">
                            <button
                                onClick={() => {
                                    setCastModalOpen(true);
                                    ModalRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="place-self-start self-center max-w-content bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                            >
                                Add Cast
                            </button>
                            <div className="p-1 overflow-y-scroll scrollbar-hide h-[300px] grid place-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                                {casts?.length > 0 &&
                                    casts?.map((cast) => (
                                        <div
                                            key={cast?._id}
                                            className="w-[85px] h-[140px] flex flex-col shadow-md italic text-xs rounded overflow-hidden border"
                                        >
                                            <img
                                                src={cast?.image ? cast?.image : "/images/user.png"}
                                                alt={cast?.fullName}
                                                className="w-full h-[85px] object-cover border-t-rounded mb-1"
                                            />
                                            <p className="truncate text-center">{cast?.fullName}</p>
                                            <div className="flex-rows w-full gap-2">
                                                <button
                                                    title="Edit"
                                                    onClick={() => {
                                                        setCast(cast);
                                                        setCastModalOpen(true);
                                                        ModalRef.current.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "start",
                                                        });
                                                    }}
                                                    className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                                                >
                                                    <MdEdit size={15} />
                                                </button>
                                                <button
                                                    onClick={() => deleteCastHandler(cast?.id)}
                                                    title="Delete"
                                                    className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                                                >
                                                    <MdDelete size={15} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="mt-5 lg:mt-0 w-full flex flex-col gap-6">
                            <button
                                onClick={() => {
                                    setDirectorModalOpen(true);
                                    ModalRef.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="place-self-start self-center max-w-content bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                            >
                                Add Director
                            </button>
                            <div className="p-1 overflow-y-scroll scrollbar-hide h-[300px] grid place-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                                {directors?.length > 0 &&
                                    directors?.map((director) => (
                                        <div
                                            key={director?._id}
                                            className="w-[85px] h-[140px] flex flex-col shadow-md italic text-xs rounded overflow-hidden border"
                                        >
                                            <img
                                                src={
                                                    director?.image ? director?.image : "/images/user.png"
                                                }
                                                alt={director?.fullName}
                                                className="w-full h-[85px] object-cover border-t-rounded mb-1"
                                            />
                                            <p className="truncate text-center">
                                                {director?.fullName}
                                            </p>
                                            <div className="flex-rows w-full gap-2">
                                                <button
                                                    title="Edit"
                                                    onClick={() => {
                                                        setDirector(director);
                                                        setDirectorModalOpen(true);
                                                        ModalRef.current.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "start",
                                                        });
                                                    }}
                                                    className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                                                >
                                                    <MdEdit size={15} />
                                                </button>
                                                <button
                                                    onClick={() => deleteDirectorHandler(director?.id)}
                                                    title="Delete"
                                                    className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                                                >
                                                    <MdDelete size={15} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            disabled={isLoading}
                            onClick={handleSubmit(onSubmit)}
                            className="flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                        >
                            {editLoading ? "Updating..." : "Update movie"}
                        </button>
                    </div>
                </div>
            )}
        </SideBar>
    );
}

export default EditMovie;