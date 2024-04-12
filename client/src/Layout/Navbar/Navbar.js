import React from "react";
import { Link, NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaUserAlt, FaRegHeart } from "react-icons/fa";

function Navbar() {
    const hover = "hover:text-dry transitions text-white";
    const isHover = ({ isActive }) => isActive ? "text-main" : hover;
    return (
        <div className="bg-subMain shadow-md sticky top-0 z-20">
            <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                {/* Logo */}
                <div className="col-span-1 lg:block hidden">
                    <Link to="/">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/de16/a5ad/d6e33eb262ad45a781efb5b71b9c8c6c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LWP-LF8SpRKRaB0H2iL03rd9eNy-7Lqyr1yODiHKs9HZVrW2DwXgPt5MLe-n90fGH9Tq2deIwnb1THlthml48TMhwGozxOGNAUKmiQYMQnbyO17f3du9sPHQ7-IHUZOf4JMkJFdL6UFEI7vRerD6zoODEYVpzB3U6frl~C6YIY1dn-Z0ESN37w2jvKcD1Z2VrivciwEk53i9-~3GZTHQb03jQ0mypy9IIMF4p-5ewICC5CJt1~pNJXXkCbg2bqgRQBWEE7VSRZyemxQUydwcJZxzC0r2vkLV0BEgUWnbuM5lsOOLLOAyPHOteVYvvTWFMZA-EZusQfFTXkIDqXJkbA__"
                            alt="logo"
                            className="w-full h-14 object-contain"
                        />
                    </Link>
                </div>
                {/* Search input */}
                <div className="col-span-3">
                    <form className="w-full text-sm bg-dryGray flex-btn gap-4 rounded-md">
                        <button type="submit" className="bg-dry text-white w-12 h-12 flex-column rounded-tl-md rounded-bl-md">
                            <RiSearchLine />
                        </button>
                        <input type="text" placeholder="Search" className="font-medium placeholder:text-border w-11/12 h-12 bg-transparent border-none px-2 text-black" />
                    </form>
                </div>
                {/* Menus */}
                <div className="col-span-3 font-semibold text-lg hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                    <NavLink to="/movies" className={isHover}>
                        Movies
                    </NavLink>
                    <NavLink to="/login" className={isHover}>
                        <FaUserAlt className="w-5 h-5" />
                    </NavLink>
                    <NavLink to="/favorite" className={`${isHover} relative`}>
                        <FaRegHeart className="w-5 h-5" />
                        <div className="bg-dry text-white absolute w-5 h-5 flex-column rounded-full text-xs -top-3 -right-3">7</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
