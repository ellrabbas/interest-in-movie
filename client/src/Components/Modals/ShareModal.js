import React from "react";
import {
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import MainModal from "./MainModal";
import {
    FaSquareFacebook,
    FaSquareXTwitter,
    FaSquareWhatsapp,
    FaSquareReddit,
} from "react-icons/fa6";

function ShareModal({ modalOpen, setModalOpen, movie }) {
    const ShareData = [
        {
            icon: FaSquareFacebook,
            shareButton: FacebookShareButton,
        },
        {
            icon: FaSquareXTwitter,
            shareButton: TwitterShareButton,
        },
        {
            icon: FaSquareWhatsapp,
            shareButton: WhatsappShareButton,
        },
        {
            icon: FaSquareReddit,
            shareButton: RedditShareButton,
        },
    ];

    const url = `${window.location.protocol}//${window.location.host}/movie/${movie?._id}`;

    return (
        <MainModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            width="w-full md:w-[50%] lg:w-[40%]"
            sizes="top-[50%]"
        >
            <div className="border text-text making-shadow bg-gray-50 inline-block w-full align-middle px-10 py-6 overflow-y-auto h-full rounded-2xl">
                <h2 className="text-2xl font-bold text-center">{movie?.name}</h2>
                <form className="flex-rows flex-wrap mt-5 gap-5">
                    {ShareData.map((data, index) => (
                        <data.shareButton key={index} url={url} quote="Interest in Movie">
                            <div className="w-[50px] border bg-main text-dry border-dry hover:bg-dry hover:text-main flex-column transitions text-lg h-12 rounded-full">
                                <data.icon size={20} className="rounded-full" />
                            </div>
                        </data.shareButton>
                    ))}
                </form>
            </div>
        </MainModal>
    );
}

export default ShareModal;
