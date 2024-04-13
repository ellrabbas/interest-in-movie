import React from 'react';
import MobileApp from '../../Assets/f9c24100-0434-11eb-851f-b88860f2f90c-removebg-preview.png';

function Promos() {
    return (
        <div className='my-20 py-20 md:px-20 px-8 bg-zinc-100'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                <div className='flex lg:gap-10 gap-6 flex-col items-center'>
                    <h1 className='xl:text-3xl text-xl capitalize font-sans font-bold xl:leading-relaxed'>
                        Now, download your movies offline
                        <br />
                        Watch comfortably on your phone
                    </h1>
                    <div className='flex gap-4 md:text-lg text-sm'>
                        <div className='flex-columns bg-yellow-400 text-white px-6 py-3 rounded-lg font-semibold'>
                            HD 4K
                        </div>
                        <div className='flex-columns bg-yellow-400 text-white px-6 py-3 rounded-lg font-semibold'>
                            2K
                        </div>
                    </div>
                </div>
                <div>
                    <img src={MobileApp} alt="Mobile app" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Promos;