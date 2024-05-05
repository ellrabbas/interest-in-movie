import React from "react";
import Layout from "../../Layout/Layout";
import { MdSpaceDashboard } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TbPassword } from "react-icons/tb";
import { FaUsersCog } from "react-icons/fa";
import { BiCategoryAlt, BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/Actions/userActions";
import { CiLogout } from "react-icons/ci";
import toast from "react-hot-toast";

function SideBar({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.userLogin);

    const logOutHandler = () => {
        dispatch(logoutAction());
        toast.success("Logged out successfully");
        navigate("/login");
    };

    const SideLink = userInfo?.isAdmin
        ? [
            {
                name: "Dashboard",
                link: "/dashboard",
                icon: MdSpaceDashboard,
            },
            {
                name: "Update account",
                link: "/profile",
                icon: RxUpdate,
            },
            {
                name: "Change password",
                link: "/password",
                icon: TbPassword,
            },
            {
                name: "Users",
                link: "/users",
                icon: FaUsersCog,
            },
            {
                name: "Categories",
                link: "/categories",
                icon: BiCategoryAlt,
            },
            {
                name: "Adding a movie",
                link: "/addmovie",
                icon: BiSolidMoviePlay,
            },
            {
                name: "Favorite movies",
                link: "/favorites",
                icon: MdOutlineFavorite,
            },
            {
                name: "Movie List",
                link: "/movieList",
                icon: CiViewList,
            },
        ]
        : userInfo
            ? [
                {
                    name: "Update account",
                    link: "/profile",
                    icon: RxUpdate,
                },
                {
                    name: "Change password",
                    link: "/password",
                    icon: TbPassword,
                },
                {
                    name: "Favorite movies",
                    link: "/favorites",
                    icon: MdOutlineFavorite,
                },
            ]
            : [];

    const active = "bg-main text-dry font-semibold";
    const hover = "bg-main hover:text-white hover:bg-dry";
    const inActive =
        "bg-main rounded-lg border-b-2 shadow-xl border-dry mb-2 font-light text-sm transitions flex gap-3 items-center p-4";
    const Hover = ({ isActive }) =>
        isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

    return (
        <Layout>
            <div className=" text-text  min-h-screen container mx-auto px-2">
                <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6 ">
                    <div className="bg-main px-2 py-1 col-span-2 xl:mb-0 mb-5 h-full z-10">
                        {SideLink.map((item, index) => (
                            <NavLink to={item.link} key={index} className={Hover}>
                                <item.icon />
                                <p>{item.name}</p>
                            </NavLink>
                        ))}
                        <button
                            onClick={logOutHandler}
                            className={`${inActive} ${hover} w-full`}
                        >
                            <CiLogout />
                            Log Out
                        </button>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className="col-span-6 rounded-md py-6"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SideBar;