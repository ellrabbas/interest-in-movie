import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import NoPhoto from "../../Assets/no-image-icon-4.png";
import Logo from "../../Assets/Logo.png";

function Navbar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.userLogin);
    const { likedMovies } = useSelector((state) => state.userGetFavoriteMovies);
    const hover = "hover:text-dry transitions text-white";
    const isHover = ({ isActive }) => (isActive ? "text-dry" : hover);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/movies/${search}`);
            setSearch(search);
        } else {
            navigate("/movies");
        }
    };

    return (
        <div className="bg-subMain shadow-md sticky top-0 z-20">
            <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* Logo */}
                <div className="col-span-1 lg:block hidden">
                    <img src={Logo} alt="logo" className="w-full h-14 object-contain" />
                </div>
                {/* Search input */}
                <div className="col-span-3">
                    <form
                        onSubmit={handleSearch}
                        className="w-full text-sm bg-dryGray flex-btn gap-4 rounded-md"
                    >
                        <button
                            type="submit"
                            className="bg-dry text-white w-12 h-12 flex-column rounded-tl-md rounded-bl-md"
                        >
                            <RiSearchLine />
                        </button>
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            className="font-medium placeholder:text-border w-11/12 h-12 bg-transparent border-none px-2 text-black"
                        />
                    </form>
                </div>
                {/* Menus */}
                <div className="col-span-3 font-semibold text-lg hidden xl:gap-14 xxl:gap-20 justify-between lg:flex xl:justify-end items-center">
                    <NavLink to="/" className={isHover}>
                        Home
                    </NavLink>
                    <NavLink to="/movies" className={isHover}>
                        Movies
                    </NavLink>
                    <NavLink
                        to={
                            userInfo?.isAdmin
                                ? "/dashboard"
                                : userInfo
                                    ? "/profile"
                                    : "/login"
                        }
                        className={isHover}
                    >
                        <div className="flex gap-2">
                            {userInfo ? (
                                <>
                                    <img
                                        src={userInfo?.image ? userInfo?.image : NoPhoto}
                                        alt={userInfo?.username}
                                        className="w-8 h-8 bg-main rounded-full border object-cover"
                                    />
                                    <span>{userInfo?.username}</span>
                                </>
                            ) : (
                                <>
                                    <span>Log in</span>
                                </>
                            )}
                        </div>
                    </NavLink>
                    <NavLink to="/favorites" className={`${isHover} relative`}>
                        <FaRegHeart className="w-5 h-5" />
                        <div className="bg-dry text-white absolute w-5 h-5 flex-column rounded-full text-xs -top-3 -right-3">
                            {likedMovies?.length || 0}
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
