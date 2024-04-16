import React from "react";
import SideBar from "../SideBar";
import { FaThList } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import Table from "../../../Components/Table";
import { Movies } from "../../../Data/MovieData";

function Dashboard() {
    const DashboardData = [
        {
            bg: "bg-dry",
            icon: FaThList,
            title: "Movies",
            total: 90,
        },
        {
            bg: "bg-dry",
            icon: TbCategoryPlus,
            title: "Categories",
            total: 8,
        },
        {
            bg: "bg-dry",
            icon: FaUserGroup,
            title: "Users",
            total: 134,
        },
    ];

    return (
        <SideBar>
            <h2 className="text-xl font-bold">Dashboard</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {DashboardData.map((item, index) => (
                    <div key={index} className="relative flex flex-col bg-clip-border rounded-xl mt-1 bg-white text-gray-700 shadow-md">
                        <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden ${item.bg} shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
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
            <Table
                data={Movies.slice(0, 10)}
                admin={true}
            />
        </SideBar>
    );
}

export default Dashboard;