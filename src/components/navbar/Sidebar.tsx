import React, { useState } from 'react';
import { FaUser, FaHistory, FaLanguage, FaPuzzlePiece } from 'react-icons/fa';

interface SidebarLinkProps {
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ label, icon, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center text-[14px] font-semibold 
      ${isActive ? 'bg-[#588CD8] text-white' : 'text-[#588CD8]'}
      w-full hover:bg-[#588CD8] hover:text-white transition-all duration-300`}
        >
            <div className="mr-3">{icon}</div>
            <span>{label}</span>
        </button>
    );
};

const Sidebar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('User');

    return (
        <div className="w-[260px] h-screen bg-white shadow-md  px-[20px] py-[12px]">
            <SidebarLink
                label="User"
                icon={<FaUser />}
                isActive={activeLink === 'User'}
                onClick={() => setActiveLink('User')}
            />
            <SidebarLink
                label="History"
                icon={<FaHistory />}
                isActive={activeLink === 'History'}
                onClick={() => setActiveLink('History')}
            />
            <SidebarLink
                label="Language & Rate"
                icon={<FaLanguage />}
                isActive={activeLink === 'Language & Rate'}
                onClick={() => setActiveLink('Language & Rate')}
            />
            <SidebarLink
                label="Extensions"
                icon={<FaPuzzlePiece />}
                isActive={activeLink === 'Extensions'}
                onClick={() => setActiveLink('Extensions')}
            />
        </div>
    );
};

export default Sidebar;
