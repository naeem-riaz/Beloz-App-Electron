import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AllScreensLeftArea from './AllScreensLeftArea';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setError('');  // Clear any previous errors
            navigate('/otp-verification');
        } else {
            setError('Please enter a valid email address');
        }
    };

    return (
        <div className='flex h-screen '>
            <AllScreensLeftArea />
            <div className="bg-white rounded w-full justify-center flex flex-col px-4 sm:px-8 md:px-10 py-6 md:py-12">
                <div className='w-full mb-6'>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#588CD8]">Forgot Password</h1>
                    <p className="text-2xl sm:text-lg md:text-2xl font-semibold font-sans text-[#588CD8]">
                        Please provide the address linked to your account.
                    </p>
                </div>
                <div className="flex flex-col mb-6">
                    <div className="flex items-center p-3 border border-[#BDBDBD] rounded hover:border-[#1A2A41]">
                        <FontAwesomeIcon className='text-[#588CD8]' icon={faEnvelope} />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="ml-2 w-full border-none outline-none text-base font-normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <button
                    onClick={handleForgotPassword}
                    className="w-full py-3 bg-[#588CD8] text-white rounded text-xl font-bold font-sans"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ForgotPasswordScreen;
