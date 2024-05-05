import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileUpload } from "react-icons/fa";
import Loader from "./Notifications/Loading";
import ImageUploadService from "../Redux/APIs/imageUploadService";

function Uploader({ writing, width, setImageURL }) {
    const [loading, isLoading] = useState(false);

    const onDrop = useCallback(
        async (acceptedFiles) => {
            const file = new FormData();
            file.append("file", acceptedFiles[0]);
            const data = await ImageUploadService(file, isLoading);
            setImageURL(data);
        },
        [setImageURL]
    );

    const { getRootProps, getInputProps, isDragActive, isDragReject } =
        useDropzone({
            multiple: false,
            onDrop,
        });

    return (
        <div className={`${width} text-center text-text`}>
            <div className="h-[190px] md:h-[170px]">
                {loading ? (
                    <div className="w-full flex-column h-[170px] px-6 border border-stone-500 border-1 border-dotted rounded-md">
                        <Loader />
                    </div>
                ) : (
                    <div
                        {...getRootProps()}
                        className="px-6 pt-5 pb-6 border-3 flex-column h-full border border-stone-500 border-1 border-dotted rounded-md cursor-pointer"
                    >
                        <input {...getInputProps()} />
                        <span className="mx-auto flex-column text-dry text-3xl">
                            <FaFileUpload />
                        </span>
                        <p className="text-sm font-semibold mt-2">{writing}</p>
                        <em className="text-xs">
                            {isDragActive
                                ? "Drop the files here..."
                                : isDragReject
                                    ? "File type not allowed"
                                    : "only.jpg,.jpeg,.png files are allowed"}
                        </em>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Uploader;
