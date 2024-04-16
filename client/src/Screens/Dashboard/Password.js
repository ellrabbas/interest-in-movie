import React from 'react';
import SideBar from './SideBar';
import { Input } from '../../Components/UserInputs';

function Password() {
    return (
        <SideBar>
            <div className='text-text flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Change password</h2>
                <Input label="Old password" type="password" bg={true} />
                <Input label="New password" type="password" bg={true} />
                <Input label="Confirm password" type="password" bg={true} />
                <div className='flex gap-2'>
                    <button className='flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Change Password
                    </button>
                </div>
            </div>
        </SideBar>
    )
}

export default Password;