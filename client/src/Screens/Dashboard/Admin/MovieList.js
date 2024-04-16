import React from 'react';
import SideBar from '../SideBar';
import Table from '../../../Components/Table';
import { Movies } from '../../../Data/MovieData';

function MovieList() {
    return (
        <SideBar>
            <div className='text-text flex flex-col gap-6'>
                <div className='flex-btn'>
                    <h2 className='text-xl font-bold'>Movies List</h2>
                    <button className='flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Delete All
                    </button>
                </div>
                <Table data={Movies} admin={true} />
            </div>
        </SideBar>
    )
}

export default MovieList;