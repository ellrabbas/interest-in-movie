import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Table2 from "../../../Components/Table2";
import { HiPlus } from "react-icons/hi";
import CategoryModal from "../../../Components/Modals/CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction } from "../../../Redux/Actions/categoryActions";
import Loader from "../../../Components/Notifications/Loading";
import { EmptyForCategories } from "../../../Components/Notifications/Empty";

function Categories() {
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState();
    const dispatch = useDispatch();

    const { categories, isLoading } = useSelector(
        (state) => state.categoryGetAll
    );
    const { isSuccess, isError } = useSelector((state) => state.categoryDelete);

    const adminDeleteCategory = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(deleteCategoryAction(id));
        }
    };

    const onEditFunction = (id) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: "DELETE_CATEGORY_RESET" });
        }

        if (isError) {
            dispatch({ type: "DELETE_CATEGORY_RESET" });
        }

        if (modalOpen === false) {
            setCategory();
        }
    }, [modalOpen, dispatch, isSuccess, isError]);

    return (
        <SideBar>
            <CategoryModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                category={category}
            />
            <div className="text-text flex flex-col gap-6">
                <div className="flex-btn">
                    <h2 className="text-xl font-bold">Categories</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="flex max-w-fit items-center gap-3 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                    >
                        Create
                        <HiPlus size={20} />
                    </button>
                </div>
                {isLoading ? (
                    <Loader />
                ) : categories?.length > 0 ? (
                    <Table2
                        data={categories}
                        users={false}
                        onEditFunction={onEditFunction}
                        onDeleteFunction={adminDeleteCategory}
                    />
                ) : (
                    <EmptyForCategories message="Sorry, you don't have any categories" />
                )}
            </div>
        </SideBar>
    );
}

export default Categories;
