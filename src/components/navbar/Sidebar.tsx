import React from 'react';
import { FaUser, FaHistory, FaLanguage, FaPuzzlePiece } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

interface SidebarLinkProps {
    label: string;
    icon: React.ReactNode;
    to: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center text-[14px] font-semibold
                ${isActive ? 'bg-[#588CD8] text-white' : 'text-[#588CD8]'}
                w-full hover:bg-[#588CD8] hover:text-white transition-all duration-300 p-2 rounded`
            }
        >
            <div className="mr-3">{icon}</div>
            <span>{label}</span>
        </NavLink>
    );
};

const Sidebar: React.FC = () => {
    return (
        <div className="w-[260px] rounded-lg m-1 bg-white shadow-md px-[20px] py-[12px] flex flex-col gap-2">
            <SidebarLink
                label="User"
                icon={<FaUser />}
                to="/user"
            />
            <SidebarLink
                label="History"
                icon={<FaHistory />}
                to="/history"
            />
            <SidebarLink
                label="Language & Rate"
                icon={<FaLanguage />}
                to="/language-rate"
            />
            <SidebarLink
                label="Extensions"
                icon={<FaPuzzlePiece />}
                to="/extensions"
            />
        </div>
    );
};

export default Sidebar;
