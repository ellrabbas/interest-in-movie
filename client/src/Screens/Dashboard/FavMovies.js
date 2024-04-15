import React from 'react';
import SideBar from './SideBar';
import Table from '../../Components/Table';
import { Movies } from '../../Data/MovieData';

function FavMovies() {
    return (
        <SideBar>
            <div className='text-text flex flex-col gap-6'>
                <div className='flex-btn'>
                    <h2 className='text-xl font-bold'>Favorite movies</h2>
                    <button className='flex max-w-fit items-center gap-4 bg-dry border border-dry text-main hover:bg-main hover:text-dry transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Delete All
                    </button>
                </div>
                <Table data={Movies} admin={false} />
            </div>
        </SideBar>
    )
}

export default FavMovies