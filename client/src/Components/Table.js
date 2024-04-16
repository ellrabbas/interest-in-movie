import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Table({ data, admin }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    const Head = "text-xs text-center font-bold px-6 py-4 uppercase";
    const Text =
        "text-sm text-lighter text-left leading-6 whitespace-nowrap px-5 py-3";

    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const Rows = (movie, index, admin) => {
        return (
            <tr key={index}>
                <td className={`${Text}`}>
                    <div className="w-12 bg-main border border-gray-500 h-12 rounded overflow-hidden">
                        <img
                            src={movie.titleImage}
                            alt={movie?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </td>
                <td className={`${Text}`}>
                    {truncateText(movie?.name, 20)}
                </td>
                <td className={`${Text}`}>
                    {truncateText(movie?.desc, 23)}
                </td>
                <td className={`${Text}`}>{movie.language}</td>
                <td className={`${Text}`}>{movie.category}</td>
                <td className={`${Text}`}>{truncateText(movie?.cast, 20)}</td>
                <td className={`${Text}`}>{truncateText(movie?.directors, 20)}</td>
                <td className={`${Text}`}>{movie.year}</td>
                <td className={`${Text}`}>{movie.time}</td>
                <td className={`${Text} flex-rows gap-2 mt-2`}>
                    {admin === true ? (
                        <>
                            <button title="Edit" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                <MdEdit size={15} />
                            </button>
                            <button title="Delete" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                <MdDelete size={15} />
                            </button>
                        </>
                    ) : (
                        <>
                            <button title="Download" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                <IoMdDownload size={15} />
                            </button>
                            <Link to={movie?.name} title="See" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                <FaEye size={15} />
                            </Link>
                        </>
                    )}

                </td>
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
            <div className="overflow-y-scroll max-h-content scrollbar-hide relative w-full ">
                <table
                    draggable="true"
                    className="w-full table-auto divide-y-subMain"
                >
                    <thead>
                        <tr className="bg-dryGray">
                            <th scope="col" className={`${Head}`}>
                                Image
                            </th>
                            <th scope="col" className={`${Head} `}>
                                Name
                            </th>
                            <th scope="col" className={`${Head} `}>
                                Description
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Language
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Category
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Cast
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Director
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Year
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Hours
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {currentItems.map((item, index) => Rows(item, index, admin))}
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


export default Table;
