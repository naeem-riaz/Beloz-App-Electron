import React, { useState } from 'react';
import AllScreensLeftArea from './AllScreensLeftArea';
import { useNavigate } from 'react-router-dom';

const OtpVerificationScreen: React.FC = () => {
    const [otp, setOtp] = useState(Array(4).fill(''));
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < 3) { // Ensure proper index for 4 OTP fields
                const nextInput = document.getElementById(`otp-input-${index + 1}`) as HTMLInputElement;
                if (nextInput) nextInput.focus();
            }
        }
    };

    const handleOtpSubmit = () => {

        navigate('/reset-password');
    };

    return (
        <div className='flex h-screen '>
            <AllScreensLeftArea />
            <div className="bg-white rounded w-full justify-center flex flex-col px-4 sm:px-8 md:px-10 py-6 md:py-12">
                <div className='w-full mb-6'>
                    <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#588CD8]">Enter OTP</h1>
                    <p className="text-2xl sm:text-lg md:text-2xl font-semibold font-sans text-[#588CD8]">
                        Please enter OTP we’ve sent to warren.wade@example.com
                    </p>
                </div>
                <div className="flex justify-between w-full  mb-4">
                    {
                        otp.map((value, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                className="border border-[#BDBDBD] rounded text-center w-16 h-16 text-3xl font-medium"
                            />
                        ))
                    }
                </div>
                <a href="/forgot-password" className="text-base font-normal font-sans mb-6 text-right text-[#588CD8] hover:underline">
                    Didn’t Receive Code? 00:00
                </a>
                <button
                    onClick={handleOtpSubmit}
                    className="w-full py-3 bg-[#588CD8] text-white rounded text-xl font-bold font-sans"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OtpVerificationScreen;
