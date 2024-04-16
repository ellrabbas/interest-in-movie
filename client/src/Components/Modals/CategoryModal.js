import React from "react";
import MainModal from "./MainModal";

function CategoryModal({ modalOpen, setModalOpen, category }) {
    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="border making-shadow bg-gray-50 inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full align-middle px-10 py-6 overflow-y-auto h-full rounded-2xl">
                <form>
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="text-2xl font-bold self-center">{category ? "Update" : "Create"}</h2>
                        <label>Category name</label>
                        <input
                            placeholder={category ? category.title : ""}
                            type="text"
                            className="w-full font-semibold placeholder:text-text bg-dryGray rounded-md shadow-md py-2 px-3"
                        />
                        <button
                            onClick={() => setModalOpen(false)}
                            className="self-center max-w-fit bg-dry text-main px-4 py-3 mt-2 transitions rounded-md font-bold text-sm md:text-md"
                        >
                            {category ? "Edit" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </MainModal>
    );
}

export default CategoryModal;
