import React from 'react';
import Layout from '../Layout/Layout';
import Photo from "../Assets/smiling-young-man-watching-3d-movie-while-eating-popcorn-white-background_662251-2921-removebg-preview.png";
import { Input } from '../Components/UserInputs';
import { Link } from 'react-router-dom';
import { IoLogIn } from "react-icons/io5";

function Login() {
    return (
        <Layout>
            <div className='container text-text flex flex-col mx-auto px-2 my-24'>
                <div className='hidden md:flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <h1 className='md:text-5xl lg:text-7xl text-center font-semibold text-dry uppercase'>Watch</h1>
                        <span className='md:text-2xl lg:text-4xl font-light'>your favorite the movie</span>
                    </div>
                    <img src={Photo} alt="Watching-man" className='md:w-[300px] lg:w-[400px]' />
                </div>
                <div className='w-[60%] md:w-[45%] lg:w-[35%] mt-5 flex flex-col gap-2 self-center md:pt-5 rounded-lg'>
                    <div className='flex-rows gap-1 text-xl'>
                        <span className='text-dry'>Discover, </span>
                        <p>your artist!</p>
                    </div>
                    <Input label="Username" type="text" bg={true} />
                    <Input label="Password" type="password" bg={true} />
                    <Link to="/dashboard" className='bg-dry text-sm md:text-lg text-main hover:text-subMain px-4 py-3 rounded-md font-bold transitions w-full flex-rows gap-2 transitions'>
                        <IoLogIn />Sign In
                    </Link>
                    <p className='text-center'>
                        Don't have an account? {" "}
                        <Link to="/register" className='text-text '>Sign Up</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Login;