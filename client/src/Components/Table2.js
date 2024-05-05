import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { DateFormat, shortUpperCaseId } from "./Notifications/Empty";

function Table2({ data, users, onEditFunction, onDeleteFunction }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    const Head = "text-xs text-left font-bold px-6 py-4 uppercase";
    const Text =
        "text-sm text-lighter text-left leading-6 whitespace-nowrap px-5 py-3";

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const Rows = ({ data, users, onEditFunction, onDeleteFunction }) => {
        return (
            <tr>
                {users ? (
                    <>
                        <td className={`${Text}`}>
                            <div className="w-12 bg-main border border-gray-500 h-12 rounded overflow-hidden">
                                <img
                                    src={data?.image ? data?.image : "/images/user.png"}
                                    alt={data?.username}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </td>
                        <td className={`${Text}`}>
                            {data?._id ? shortUpperCaseId(data?._id) : "2RT75T8"}
                        </td>
                        <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
                        <td className={`${Text}`}>{data?.username}</td>
                        <td className={`${Text}`}>{data?.email}</td>
                        <td className={`${Text}`}>{data?.isAdmin ? "Admin" : "User"}</td>
                        <td className={`${Text} flex-rows gap-2 mt-2`}>
                            {!data?.isAdmin && (
                                <button
                                    onClick={() => onDeleteFunction(data?._id)}
                                    title="Delete"
                                    className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                                >
                                    <MdDelete size={15} />
                                </button>
                            )}
                        </td>
                    </>
                ) : (
                    <>
                        <td className={`${Text} font-bold`}>
                            {data?._id ? shortUpperCaseId(data?._id) : "2RT75T8"}
                        </td>
                        <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
                        <td className={`${Text}`}>{data?.title}</td>
                        <td className={`${Text} flex-rows gap-2 mt-2`}>
                            <button
                                onClick={() => onEditFunction(data)}
                                title="Edit"
                                className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                            >
                                <MdEdit size={15} />
                            </button>
                            <button
                                onClick={() => onDeleteFunction(data?._id)}
                                title="Delete"
                                className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                            >
                                <MdDelete size={15} />
                            </button>
                        </td>
                    </>
                )}
            </tr>
        );
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="overflow-y-scroll max-h-content relative w-full ">
                <table draggable="true" className="w-full table-auto divide-y-subMain">
                    <thead>
                        <tr className="bg-dryGray">
                            {users ? (
                                <>
                                    <th scope="col" className={`${Head}`}>
                                        Image
                                    </th>
                                    <th scope="col" className={`${Head} `}>
                                        ID
                                    </th>
                                    <th scope="col" className={`${Head} `}>
                                        Time
                                    </th>
                                    <th scope="col" className={`${Head}`}>
                                        Username
                                    </th>
                                    <th scope="col" className={`${Head}`}>
                                        Email
                                    </th>
                                    <th scope="col" className={`${Head}`}>
                                        Role
                                    </th>
                                    <th scope="col" className={`${Head} text-center`}>
                                        Actions
                                    </th>
                                </>
                            ) : (
                                <>
                                    <th scope="col" className={`${Head} `}>
                                        ID
                                    </th>
                                    <th scope="col" className={`${Head} `}>
                                        Time
                                    </th>
                                    <th scope="col" className={`${Head}`}>
                                        Name
                                    </th>
                                    <th scope="col" className={`${Head} text-center`}>
                                        Actions
                                    </th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {currentItems.map((data, index) => (
                            <Rows
                                data={data}
                                index={index}
                                users={users}
                                onEditFunction={onEditFunction}
                                onDeleteFunction={onDeleteFunction}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <ul className="flex justify-center items-center gap-3 mt-3">
                <li>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((number) => {
                    if (
                        number === currentPage ||
                        number === currentPage - 1 ||
                        number === currentPage + 1
                    ) {
                        return (
                            <li
                                key={number}
                                className={
                                    currentPage === number
                                        ? "w-10 h-10 flex-column border border-dry bg-dry text-main rounded-full"
                                        : "w-10 h-10 flex-column border border-dry text-dry bg-main rounded-full"
                                }
                            >
                                <button onClick={() => paginate(number)}>{number}</button>
                            </li>
                        );
                    }
                    return null;
                })}
                <li>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === pageNumbers.length}
                        className="flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md cursor-pointer"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Table2;
