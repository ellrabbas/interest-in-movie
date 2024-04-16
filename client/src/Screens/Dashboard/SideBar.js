import React from 'react';
import Layout from '../../Layout/Layout';
import { MdSpaceDashboard } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TbPassword } from "react-icons/tb";
import { FaUsersCog } from "react-icons/fa";
import { BiCategoryAlt, BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { NavLink } from 'react-router-dom';


function SideBar({ children }) {
    const SideLink = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: MdSpaceDashboard
        },
        {
            name: 'Update account',
            link: '/profile',
            icon: RxUpdate
        },
        {
            name: 'Change password',
            link: '/password',
            icon: TbPassword
        },
        {
            name: 'Users',
            link: '/users',
            icon: FaUsersCog
        },
        {
            name: 'Categories',
            link: '/categories',
            icon: BiCategoryAlt
        },
        {
            name: 'Adding a movie',
            link: '/addmovie',
            icon: BiSolidMoviePlay
        },
        {
            name: 'Favorite movies',
            link: '/favorites',
            icon: MdOutlineFavorite
        },
        {
            name: 'Movie List',
            link: '/movieList',
            icon: CiViewList
        }
    ]

    const active = "bg-main text-dry font-semibold";
    const hover = "bg-main hover:text-white hover:bg-dry";
    const inActive = "bg-main rounded-lg border-b-2 shadow-xl border-dry mb-2 font-light text-sm transitions flex gap-3 items-center p-4";
    const Hover = ({ isActive }) => isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

    return (
        <Layout>
            <div className=' text-text  min-h-screen container mx-auto px-2'>
                <div className='xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6'>
                    <div className='bg-main px-2 py-1 col-span-2 xl:mb-0 mb-5 max-h-screen z-40'>
                        {
                            SideLink.map((item, index) => (
                                <NavLink to={item.link} key={index} className={Hover}>
                                    <item.icon />
                                    <p>{item.name}</p>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div
                        data-aos='fade-right'
                        data-aos-duration='800'
                        data-aos-delay='10'
                        data-aos-offset='200'
                        className='col-span-6 rounded-md py-6'>{children}</div>
                </div>
            </div>
        </Layout>
    )
}

export default SideBar;