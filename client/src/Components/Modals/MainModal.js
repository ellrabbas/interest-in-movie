import React, { Fragment, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

function MainModal({ modalOpen, setModalOpen, children, sizes, width }) {
    const cancelButtonRef = useRef();

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            {modalOpen && (
                <div
                    className={`fixed ${sizes} inset-0 z-1000 overflow-hidden text-center`}
                >
                    <div className="min-h-screen flex justify-center px-4 bg-transparent">
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <div className={`inline-block ${width} align-middle`}>
                            <div className="bg-white w-full rounded-lg text-left relative">
                                {children}
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="absolute top-0 right-0 mt-2 mr-2 border border-dry text-dry bg-main hover:bg-dry hover:text-main font-bold transitions rounded-full inline-flex justify-center p-2 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 text-md"
                                >
                                    <IoCloseSharp />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default MainModal;
