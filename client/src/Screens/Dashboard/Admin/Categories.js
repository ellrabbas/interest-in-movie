import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar';
import { CategoriesData } from '../../../Data/CategoriesData';
import Table2 from '../../../Components/Table2';
import { HiPlus } from "react-icons/hi";
import CategoryModal from '../../../Components/Modals/CategoryModal';

function Categories() {

    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState();

    const onEditCategory = (id) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        if (modalOpen === false) {
            setCategory();
        }
    }, [modalOpen]);

    return (
        <SideBar>
            <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category} />
            <div className='text-text flex flex-col gap-6'>
                <div className='flex-btn'>
                    <h2 className='text-xl font-bold'>Categories</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='flex max-w-fit items-center gap-3 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Create<HiPlus size={20} />
                    </button>
                </div>
                <Table2 data={CategoriesData} users={false} onEditCategory={onEditCategory} />
            </div>
        </SideBar>
    )
}

export default Categories;
