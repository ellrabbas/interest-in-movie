import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import { useDispatch, useSelector } from "react-redux";
import {
    createCategoryAction,
    updateCategoryAction,
} from "../../Redux/Actions/categoryActions";
import toast from "react-hot-toast";

function CategoryModal({ modalOpen, setModalOpen, category }) {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError } = useSelector(
        (state) => state.categoryCreate
    );
    const {
        isLoading: upLoading,
        isSuccess: upSuccess,
        isError: upError,
    } = useSelector((state) => state.categoryUpdate);

    const submitHandler = (e) => {
        e.preventDefault();
        if (title) {
            if (category) {
                dispatch(updateCategoryAction(category?._id, { title: title }));
                setModalOpen(!modalOpen);
            } else {
                dispatch(createCategoryAction({ title: title }));
                setTitle("");
                setModalOpen(!modalOpen);
            }
        } else {
            toast.error("Please, enter a category name");
        }
    };

    useEffect(() => {
        if (isSuccess || upSuccess) {
            dispatch({
                type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
            });
        }

        if (isError || upError) {
            toast.error(isError || upError);
            dispatch({
                type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET",
            });
        }

        if (category) {
            setTitle(category?.title);
        }

        if (modalOpen === false) {
            setTitle("");
        }
    }, [dispatch, isSuccess, isError, upSuccess, upError, category, modalOpen]);

    return (
        <MainModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            width="w-full md:w-[50%]"
        >
            <div className="border making-shadow bg-transparent inline-block w-full align-middle px-10 py-6 overflow-y-auto h-full rounded-2xl">
                <h2 className="text-2xl font-bold self-center">
                    {category ? "Update" : "Create"}
                </h2>
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col items-start gap-2"
                >
                    <label>Category name</label>
                    <input
                        placeholder="Actions"
                        type="text"
                        className="w-full font-semibold placeholder:text-text bg-dryGray rounded-md shadow-md py-2 px-3"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                        disabled={isLoading || upLoading}
                        type="submit"
                        className="self-center max-w-fit transitions border bg-main text-dry border-dry hover:bg-dry hover:text-main px-4 py-3 mt-2 rounded-md font-bold text-sm md:text-md"
                    >
                        {isLoading || upLoading
                            ? "Loading..."
                            : category
                                ? "Update"
                                : "Create"}
                    </button>
                </form>
            </div>
        </MainModal>
    );
}

export default CategoryModal;
