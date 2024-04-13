import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const Links = [
        {
            title: "Company",
            links: [
                {
                    title: "Home",
                    link: "/",
                },
                {
                    title: "About",
                    link: "/about",
                },
                {
                    title: "Contact",
                    link: "/contact",
                },
                {
                    title: "Movies",
                    link: "/movies",
                },
            ],
        },
        {
            title: "Categories",
            links: [
                {
                    title: "Action",
                    link: "#",
                },
                {
                    title: "Horror",
                    link: "#",
                },
                {
                    title: "Comedy",
                    link: "#",
                },
                {
                    title: "Sci-fi",
                    link: "#",
                },
            ],
        },
        {
            title: "My account",
            links: [
                {
                    title: "Dashboard",
                    link: "/dashboard",
                },
                {
                    title: "My favorites",
                    link: "/favorites",
                },
                {
                    title: "Account",
                    link: "/profile",
                },
                {
                    title: "Change password",
                    link: "/password",
                },
            ],
        },
    ];

    return (
        <div className="bg-subMain py-4 border-t-subMain border-t-2">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
                    {Links.map((link, index) => (
                        <div
                            key={index}
                            className="col-span-2 md:col-span-3 xl:col-span-4 pb-4 sm:pb-0"
                        >
                            <h3 className="text-md text-center lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-1">
                                {link.title}
                            </h3>
                            <ul className="text-sm flex flex-col space-y-3 text-center">
                                {link.links.map((item, index) => (
                                    <li key={index} className="flex items-baseline">
                                        <Link to={item.link} className="text-white inline-block w-full hover:text-dry">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
