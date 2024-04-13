import React from 'react';
import AboutImg from '../assets/banner-1155437_960_720.webp'

function Head({ title }) {
    return (
        <div className='w-full bg-slate-200 lg:h-64 relative overflow-hidden rounded-md'>
            <img src={AboutImg} alt="about" className='w-full h-full object-cover' />
            <div className='absolute lg:top-24 top-16 w-full flex-column'>
                <h1 className='text-2xl lg:text-h1 text-center fon-bold tracking-wider capitalize'>
                    {title && title}
                </h1>
            </div>
        </div>
    )
}

export default Head