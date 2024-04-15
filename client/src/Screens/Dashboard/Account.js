import React from 'react';
import SideBar from './SideBar';
import Uploader from '../../Components/Uploader';
import { Input } from '../../Components/UserInputs';

const Account = () => {
    return (
        <SideBar>
            <div className='text-text flex flex-col gap-6'>
                <h2 className='text-xl font-bold'>Account</h2>
                <Uploader />
                <Input label="Firstname" type="text" bg={true} />
                <Input label="Lastname" type="text" bg={true} />
                <Input label="Email address" type="text" bg={true} />
                <Input label="Username" type="text" bg={true} />
                <div className='flex gap-2'>
                    <button className='max-w-fit text-center bg-dry text-white hover:text-subMain transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Delete Account
                    </button>
                    <button className='max-w-fit text-center bg-dry text-white hover:text-subMain transitions px-4 py-3 rounded-md font-bold text-sm md:text-md'>
                        Update Account
                    </button>
                </div>
            </div>
        </SideBar>
    )
}

export default Account;