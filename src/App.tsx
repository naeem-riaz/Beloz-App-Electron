// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginScreen from './components/LoginScreen';
// import ForgotPasswordScreen from './components/ForgotPasswordScreen';
// import OtpVerificationScreen from './components/OtpVerificationScreen';
// import ResetPasswordScreen from './components/ResetPasswordScreen';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginScreen />} />
//         <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
//         <Route path="/otp-verification" element={<OtpVerificationScreen />} />
//         <Route path="/reset-password" element={<ResetPasswordScreen />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import Sidebar from './components/navbar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Baqi ka app content */}
      <div className="flex-1 p-4">
        {/* Yahan app ka main content ho ga */}
      </div>
    </div>
  );
};

export default App;
