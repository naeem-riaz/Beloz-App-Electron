import React from 'react';
import Topbar from '../components/navbar/Topbar';
import Sidebar from '../components/navbar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayouts() {
    return (
        <>
            <div className="h-screen flex flex-col  bg-[#E0E0E2]">
                <Topbar />
                <div className="flex flex-1 h-full">
                    <Sidebar />
                    <div
                        className="flex-1 w-full h-full overflow-hidden p-2 "
                    >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
