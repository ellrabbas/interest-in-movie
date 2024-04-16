import React from 'react';
import SideBar from '../SideBar';
import { Input, Select } from '../../../Components/UserInputs';
import { Message } from '../../../Components/UserInputs';
import Uploader from '../../../Components/Uploader';
import { CategoriesData } from '../../../Data/CategoriesData';
import { UserData } from '../../../Data/UserData';
import { MdEdit, MdDelete } from "react-icons/md";
import banner from "../../../Assets/banner-1155437_960_720.webp"

function AddMovie() {
    return (
        <SideBar>

            <div className='text-text flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Create movie</h2>

                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-lighter text-sm md:text-lg'>
                            Cover Image
                        </p>
                        <Uploader width="w-[70%] h-[170px]" writing="Upload cover image" />
                        <div className='w-[30%] h-[70px] border rounded-md'>
                            <img
                                src={banner}
                                alt=""
                                className='w-full h-full object-cover rounded-md' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className='font-lighter text-sm md:text-lg'>
                            Title Image
                        </p>
                        <Uploader width="md:w-[40%] lg:w-[30%] h-[170px]" writing="Upload title image" />
                        <div className='w-[10%] md:w-[15%] lg:w-[10%] h-[70px] border rounded-md'>
                            <img
                                src={banner}
                                alt=""
                                className='w-full h-full object-cover rounded-md' />
                        </div>
                    </div>
                </div>

                <div className='w-full grid md: grid-cols-3 gap-6'>
                    <Input label="Title" type="text" bg={true} />
                    <Input label="Time" type="text" bg={true} />
                    <Select options={CategoriesData} />
                </div>
                <div className='w-full grid md: grid-cols-3 gap-6'>
                    <Input label="Language" type="text" bg={true} />
                    <Input label="Rating" type="number" bg={true} />
                    <Input label="Year" type="number" bg={true} />
                </div>
                <div className='w-full grid md:grid-cols-2 gap-6'>
                    <Message placeholder="Write the description of the movie here" />
                    <div className='flex flex-col gap-2'>
                        <p className='font-lighter text-sm md:text-lg'>
                            Movie video
                        </p>
                        <Uploader width="md:w-[40%] lg:w-[30%] h-[170px]" writing="Upload movie" />
                    </div>

                </div>
                <div className='lg:flex '>
                    <div className='w-full flex flex-col gap-6'>
                        <button className='place-self-start self-center max-w-content bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>Add Cast</button>
                        <div className='p-1 overflow-y-scroll scrollbar-hide h-[300px] grid place-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                            {UserData.map((user, index) => (
                                <div
                                    key={index}
                                    className='w-[85px] h-[140px] flex flex-col shadow-md italic text-xs rounded overflow-hidden border'>
                                    <img
                                        src={user.image ? user.image : "user.png"}
                                        alt={user.name}
                                        className='w-full h-[85px] object-cover border-t-rounded mb-1'
                                    />
                                    <p className='truncate text-center'>{user.name}</p>
                                    <div className='flex-rows w-full gap-2'>
                                        <button title="Edit" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                            <MdEdit size={15} />
                                        </button>
                                        <button title="Delete" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                            <MdDelete size={15} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-0 w-full flex flex-col gap-6'>
                        <button className='place-self-start self-center max-w-content bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>Add Director</button>
                        <div className='p-1 overflow-y-scroll scrollbar-hide h-[300px] grid place-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4'>
                            {UserData.map((user, index) => (
                                <div
                                    key={index}
                                    className='w-[85px] h-[140px] flex flex-col shadow-md italic text-xs rounded overflow-hidden border'>
                                    <img
                                        src={user.image ? user.image : "user.png"}
                                        alt={user.name}
                                        className='w-full h-[85px] object-cover border-t-rounded mb-1'
                                    />
                                    <p className='truncate text-center'>{user.name}</p>
                                    <div className='flex-rows w-full gap-2'>
                                        <button title="Edit" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                            <MdEdit size={15} />
                                        </button>
                                        <button title="Delete" className="border border-dry text-dry hover:bg-dry hover:text-main transitions flex-rows gap-2 rounded-full p-1">
                                            <MdDelete size={15} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className='flex gap-2'>
                    <button className='flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Create movie
                    </button>
                </div>
            </div>
        </SideBar>
    )
}

export default AddMovie;