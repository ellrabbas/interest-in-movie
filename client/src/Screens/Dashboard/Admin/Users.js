import React from 'react';
import SideBar from '../SideBar';
import { UserData } from '../../../Data/UserData';
import Table2 from '../../../Components/Table2';

function Users() {
    return (
        <SideBar>
            <div className='text-text flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Users</h2>
                <Table2 data={UserData} users={true} />
            </div>
        </SideBar>
    )
}

export default Users;