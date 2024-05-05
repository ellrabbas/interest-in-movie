import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { FaUserAlt, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NoPhoto from "../../Assets/no-image-icon-4.png";
function MobileFooter() {
    const { userInfo } = useSelector((state) => state.userLogin);
    const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);
    const active = "text-dry";
    const inActive = "transitions text-2xl flex-column hover:text-dry px-4 py-3";

    const Hover = ({ isActive }) =>
        isActive ? `${active} ${inActive}` : inActive;

    return (
        <>
            <footer className="bg-subMain w-full lg:hidden fixed z-50 bottom-0 px-1">
                <div className="w-full rounded-md flex-rows gap-7 p-1">
                    <NavLink to="/" className={Hover}>
                        <MdHome />
                    </NavLink>
                    <NavLink to="/movies" className={Hover}>
                        <BiSolidMoviePlay />
                    </NavLink>
                    <NavLink
                        to={
                            userInfo?.isAdmin
                                ? "/dashboard"
                                : userInfo
                                    ? "/profile"
                                    : "/login"
                        }
                        className={Hover}
                    >
                        <div className="flex gap-2">
                            {userInfo ? (
                                <>
                                    <img
                                        src={userInfo?.image ? userInfo?.image : NoPhoto}
                                        alt={userInfo?.username}
                                        className="w-7 h-7 bg-main rounded-full border object-cover"
                                    />
                                </>
                            ) : (
                                <div>
                                    <FaUserAlt className="w-5 h-5" />
                                </div>
                            )}
                        </div>
                    </NavLink>
                    <NavLink to="/favorites" className={`${Hover} relative`}>
                        <FaRegHeart className="w-5 h-5" />
                        <div className="bg-dry text-white absolute w-5 h-5 flex-column rounded-full text-xs -top-3 -right-3">
                            {likedMovies?.length || 0}
                        </div>
                    </NavLink>
                </div>
            </footer>
        </>
    );
}

export default MobileFooter;
