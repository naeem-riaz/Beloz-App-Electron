
import React from 'react';
import img1 from '../imgs/abcd.png';
import logo from '../imgs/logo.png';

export default function AllScreensLeftArea() {
    return (
        <div className='bg-[#588CD8] w-full flex flex-col justify-center  px-28 md:px-10 lg:px-28 py-10'>
            <div className='flex w-full mb-6 justify-normal'>
                <img
                    src={logo}
                    alt='Logo'
                    className='pt-10 w-24 sm:w-32 md:w-48 lg:w-56'
                />
            </div>
            <div className='flex justify-center w-full'>
                <img
                    src={img1}
                    alt='Learning languages illustration'
                    className='w-full'
                />
            </div>
        </div>

    );
}
