import React, { useState } from 'react';
import logo from '../../imgs/logo.png';
import { HiOutlineBell } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";


const Topbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#588CD8] flex items-center justify-between px-6 py-2">
            {/* Left Side - Monogram */}
            <img
                src={logo}
                alt='Logo'
                className='w-44 h-11'
            />

            {/* Right Side - Notification and Admin Info */}
            <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <div className="bg-white px-2 pt-2 pb-1 rounded-lg ">
                    <button className="relative">
                        <HiOutlineBell size={24} className='p-0' />
                        {/* Notification Red Dot */}
                        <span className="absolute top-0 right-{-1} h-1.5 w-1.5 bg-red-600 rounded-full"></span>
                    </button>
                </div>

                {/* Admin Info */}
                <div className="relative">
                    <div onClick={toggleDropdown} className="flex items-center pl-6 pr-4 py-2.5 space-x-2 bg-white  rounded-lg cursor-pointer">
                        <div className="text-gray-600 flex flex-col">
                            <span className='text-sm font-semibold' >Courtney Henry</span>
                            <span className="text-sm font-normal">Admin</span>
                        </div>
                        <div>
                            <RiArrowDropDownLine size={24} />
                        </div>
                    </div>


                    {isOpen && (
                        <div className="absolute right-0 mt-1 w-28 bg-white border rounded-lg shadow-lg">
                            <button className="block px-4 py-2 text-gray-800 w-full text-center text-sm font-medium">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
