import React, { useState } from 'react';
import AllScreensLeftArea from './AllScreensLeftArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Handle login functionality here
    };

    return (
        <div className='flex h-screen '>
            <AllScreensLeftArea />
            <div className="bg-white rounded w-full justify-center flex flex-col px-4 sm:px-8 md:px-10  py-6 md:py-12">
                <div className='w-full mb-6'>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#588CD8]">Welcome Back :)</h1>
                    <p className="text-2xl sm:text-lg md:text-2xl font-semibold font-sans text-[#588CD8]">
                        Please Enter Your Login Details Below
                    </p>
                </div>
                <div className="flex items-center mb-6 p-3 border border-[#BDBDBD] rounded hover:border-[#1A2A41]">
                    <FontAwesomeIcon className='text-[#588CD8]' icon={faEnvelope} />
                    <input
                        type="email"
                        placeholder="Enter your username here"
                        className="ml-2 w-full border-none outline-none text-base font-normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
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

                <a href="/forgot-password" className="text-base font-normal font-sans mb-6 text-right text-[#588CD8] hover:underline">
                    Forgot Password?
                </a>

                <button
                    onClick={handleLogin}
                    className="w-full py-3 bg-[#588CD8] text-white rounded text-xl font-bold font-sans"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginScreen;
