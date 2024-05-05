import React, { useEffect } from "react";
import SideBar from "../SideBar";
import { FaThList } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import Table from "../../../Components/Table";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteMovieAction,
    getAllMoviesAction,
} from "../../../Redux/Actions/movieAction";
import { getAllArtistsAction } from "../../../Redux/Actions/artistAction";
import { getAllCategoriesAction } from "../../../Redux/Actions/categoryActions";
import { getAllUsersAction } from "../../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../../Components/Notifications/Loading";
import { Empty } from "../../../Components/Notifications/Empty";

function Dashboard() {
    const dispatch = useDispatch();
    const {
        isLoading: catLoading,
        isError: catError,
        categories,
    } = useSelector((state) => state.categoryGetAll);

    const {
        isLoading: userLoading,
        isError: userError,
        users,
    } = useSelector((state) => state.adminGetAllUsers);
    const {
        isLoading: artistLoading,
        isError: artistError,
        totalArtists,
    } = useSelector((state) => state.ArtistGetAll);
    const { isLoading, isError, movies, totalMovies } = useSelector(
        (state) => state.movieGetAll
    );
    const { isLoading: deleteLoading, isError: deleteError } = useSelector(
        (state) => state.deleteMovie
    );

    const deleteMovieHandler = (id) => {
        window.confirm("Are you sure you want to delete this movie?") &&
            dispatch(deleteMovieAction(id));
    };

    useEffect(() => {
        dispatch(getAllMoviesAction({}));
        dispatch(getAllArtistsAction({}));
        dispatch(getAllCategoriesAction());
        dispatch(getAllUsersAction());

        if (isError || catError || userError || artistError || deleteError) {
            toast.error("Something went wrong");
        }
    }, [dispatch, isError, catError, userError, artistError, deleteError]);

    const DashboardData = [
        {
            bg: "bg-dry",
            icon: FaThList,
            title: "Movies",
            total: isLoading ? "Loading..." : totalMovies || 0,
        },
        {
            bg: "bg-dry",
            icon: RiUserStarFill,
            title: "Artists",
            total: artistLoading ? "Loading..." : totalArtists || 0,
        },
        {
            bg: "bg-dry",
            icon: TbCategoryPlus,
            title: "Categories",
            total: catLoading ? "Loading..." : categories?.length || 0,
        },
        {
            bg: "bg-dry",
            icon: FaUserGroup,
            title: "Users",
            total: userLoading ? "Loading..." : users?.length || 0,
        },
    ];

    return (
        <SideBar>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                {DashboardData.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col bg-clip-border rounded-xl mt-1 bg-white text-gray-700 shadow-md"
                    >
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden ${item.bg} shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}
                        >
                            <item.icon className="text-main" size={25} />
                        </div>
                        <div className="p-4 text-right">
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                {item.total}
                            </h4>
                        </div>
                        <div className="border-t border-blue-gray-50 p-4">
                            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                <strong>{item.title}</strong>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-md font-medium my-6">Recent Movies</div>
            {isLoading || deleteLoading ? (
                <Loader />
            ) : movies?.length > 0 ? (
                <Table
                    data={movies?.slice(0, 4)}
                    admin={true}
                    onDeleteHandler={deleteMovieHandler}
                />
            ) : (
                <Empty message="Sorry, you don't have any recent movies" />
            )}
        </SideBar>
    );
}

export default Dashboard;
