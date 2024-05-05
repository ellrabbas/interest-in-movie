import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const Links = [
        {
            title: "Sitemap",
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
        <div className="bg-subMain py-4 border-t-subMain border-t-2 relative z-20">
            <div className="container mx-auto px-2">
                <div className="flex flex-col md:flex-row justify-center lg:gap-5 py-10 ">
                    {Links.map((link, index) => (
                        <div key={index} className="my-2 md:mt-0 md:w-1/2 pb-4 sm:pb-0">
                            <h3 className="text-md text-center lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-1">
                                {link.title}
                            </h3>
                            <ul className="text-sm flex flex-col space-y-3 text-center">
                                {link.links.map((item, index) => (
                                    <li key={index} className="flex items-baseline">
                                        <Link
                                            to={item.link}
                                            className="text-white inline-block w-full hover:text-dry"
                                        >
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
