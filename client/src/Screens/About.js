import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import { MdGridView, MdLocalMovies } from "react-icons/md";
import { SlSpeech } from "react-icons/sl";
import { FaBoltLightning } from "react-icons/fa6";

function About() {
    return (
        <Layout>
            <div className="min-height-screen mx-auto mb-6">
                <Head title="About our page" />
                <div className="xl:py-20 py-10 px-4 text-text">
                    <div className="grid grid-flow-row grid-cols-1 gap-4 xl:gap-16 items-center">
                        <h3 className="text-xl lg:text-3xl mb-4 font-semibold text-center capitalize">
                            Welcome to our page
                        </h3>
                        <div className="mt-3 text-sm leading-8">
                            <p>
                                Welcome to our movie haven, where cinephiles unite in a shared
                                passion for cinematic storytelling. Founded by enthusiasts, our
                                platform celebrates the art of film, offering a curated
                                collection of timeless classics, contemporary masterpieces, and
                                hidden gems. Dive into a world where every frame tells a story,
                                and each scene evokes emotion. Whether you're seeking
                                heart-pounding action, gripping drama, or heartwarming tales,
                                our diverse selection caters to every taste and mood. Join us on
                                a journey through the magic of cinema, where every visit
                                promises discovery and delight. Embrace your love for film and
                                explore the boundless horizons of storytelling with us.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 mt-5">
                            <div className="p-8 rounded-lg bg-dry text-white">
                                <div className="flex-rows gap-2">
                                    <MdGridView size={20} />
                                    <h4 className="text-lg text-center font-bold my-2 ">
                                        Monthly Viewership
                                    </h4>
                                </div>
                                <p className="mb-0 leading-7 text-md">
                                    Join our community of movie lovers with over 10,000 monthly
                                    viewers experiencing the magic of cinema together.
                                </p>
                            </div>
                            <div className="p-8 rounded-lg bg-dry text-white">
                                <div className="flex-rows gap-2">
                                    <MdLocalMovies size={20} />
                                    <h4 className="text-lg text-center font-bold my-2 ">
                                        More than Movies
                                    </h4>
                                </div>
                                <p className="mb-0 leading-7 text-md">
                                    Discover exclusive behind-the-scenes content, interviews with
                                    filmmakers, and in-depth analysis of your favorite films.
                                </p>
                            </div>
                            <div className="p-8 rounded-lg bg-dry text-white">
                                <div className="flex-rows gap-2">
                                    <SlSpeech size={20} />
                                    <h4 className="text-lg text-center font-bold my-2 ">
                                        User Recommendations
                                    </h4>
                                </div>
                                <p className="mb-0 leading-7 text-md">
                                    Explore curated lists of must-watch films recommended by our
                                    community members and expert cinephiles.
                                </p>
                            </div>
                            <div className="p-8 rounded-lg bg-dry text-white">
                                <div className="flex-rows gap-2">
                                    <FaBoltLightning size={20} />
                                    <h4 className="text-lg text-center font-bold my-2 ">
                                        Interactive Features
                                    </h4>
                                </div>
                                <p className="mb-0 leading-7 text-md">
                                    Engage with fellow movie enthusiasts through live discussions,
                                    polls, and interactive events hosted regularly on our
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;