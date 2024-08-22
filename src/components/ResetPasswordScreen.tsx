import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AllScreensLeftArea from './AllScreensLeftArea';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

const ResetPasswordScreen: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='flex h-screen'>
            <AllScreensLeftArea />
            <div className="bg-white rounded w-full justify-center flex flex-col px-4 sm:px-8 md:px-10  py-6 md:py-12">
                <div className='w-full mb-6'>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#588CD8]">Reset password</h1>
                    <p className="text-2xl sm:text-lg md:text-2xl font-semibold font-sans text-[#588CD8]">Create a strong and secure password</p>
                </div>

                {/* Password Input */}
                <div className="flex items-center mb-6 p-3 border border-[#BDBDBD] rounded hover:border-[#1A2A41]">
                    <FontAwesomeIcon className='text-[#588CD8]' icon={faLock} />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password here"
                        className="ml-2 w-full border-none outline-none text-base font-normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={`cursor-pointer ${showPassword ? 'hidden' : ''}`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    <FontAwesomeIcon
                        icon={faEye}
                        className={`cursor-pointer ${showPassword ? '' : 'hidden'}`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="flex items-center mb-6 p-3 border border-[#BDBDBD] rounded hover:border-[#1A2A41]">
                    <FontAwesomeIcon className='text-[#588CD8]' icon={faLock} />
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        className="ml-2 w-full border-none outline-none text-base font-normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={`cursor-pointer ${showConfirmPassword ? 'hidden' : ''}`}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    <FontAwesomeIcon
                        icon={faEye}
                        className={`cursor-pointer ${showConfirmPassword ? '' : 'hidden'}`}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                </div>

                <button
                    className="w-full py-3 bg-[#588CD8] text-white rounded text-xl font-bold font-sans"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ResetPasswordScreen;
