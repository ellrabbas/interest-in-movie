import React from 'react';
import { useDropzone } from 'react-dropzone';
import { FaFileUpload } from "react-icons/fa";

function Uploader() {

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 1000000,
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles[0].name);
        }
    });

    return (
        <div className='w-[35%] md:w-[22%] lg:w-[18%] h-[170px] text-center text-text'>
            <div
                {...getRootProps()}
                className='px-6 pt-5 pb-6 border-3 flex-column h-full border border-stone-500 border-1 border-dotted rounded-md cursor-pointer'>
                <input {...getInputProps()} />
                <span className='mx-auto flex-column text-dry text-3xl'>
                    <FaFileUpload />
                </span>
                <p className='text-sm font-semibold mt-2'>Upload your image</p>
            </div>
        </div>
    )
}

export default Uploader;