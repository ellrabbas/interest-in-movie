import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Table({ data, admin, onDeleteHandler }) {
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

    const Rows = (movie, onDeleteHandler, admin) => {
        const casts = movie?.casts?.map((artist) => artist.fullName);
        const directors = movie?.directors?.map((artist) => artist.fullName);
        return (
            <tr key={movie?._id}>
                <td className={`${Text}`}>
                    <div className="w-12 bg-main border border-gray-500 h-12 rounded overflow-hidden">
                        <img
                            src={movie?.titleImage ? movie?.titleImage : "/images/user.png"}
                            alt={movie?.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </td>
                <td className={`${Text}`}>{truncateText(movie?.name, 25)}</td>
                <td className={`${Text}`}>{truncateText(movie?.desc, 23)}</td>
                <td className={`${Text}`}>{movie?.language}</td>
                <td className={`${Text}`}>{movie?.category}</td>
                <td className={`${Text}`}>{truncateText(directors?.join(", "), 20)}</td>
                <td className={`${Text}`}>{truncateText(casts?.join(", "), 20)}</td>
                <td className={`${Text}`}>{movie?.year}</td>
                <td className={`${Text}`}>{movie?.time}hr</td>
                <td className={`${Text} flex-rows gap-2 mt-2`}>
                    {admin ? (
                        <>
                            <Link
                                to={`/edit/${movie?._id}`}
                                title="Edit"
                                className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                            >
                                <MdEdit size={15} />
                            </Link>
                            <button
                                onClick={() => onDeleteHandler(movie?._id)}
                                title="Delete"
                                className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                            >
                                <MdDelete size={15} />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to={`/movie/${movie?._id}`}
                                title="See"
                                className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1"
                            >
                                <FaEye size={15} />
                            </Link>
                        </>
                    )}
                </td>
            </tr>
        );
    };

    return (
        <div>
            <div className="overflow-y-scroll max-h-content relative w-full ">
                <table draggable="true" className="w-full table-auto divide-y-subMain">
                    <thead>
                        <tr className="bg-dryGray">
                            <th scope="col" className={`${Head}`}>
                                Image
                            </th>
                            <th scope="col" className={`${Head} text-start`}>
                                Name
                            </th>
                            <th scope="col" className={`${Head} text-start`}>
                                Description
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Language
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Category
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Director
                            </th>
                            <th scope="col" className={`${Head}`}>
                                Cast
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
                        {data.map((item, index) =>
                            Rows(item, index, onDeleteHandler, admin)
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
