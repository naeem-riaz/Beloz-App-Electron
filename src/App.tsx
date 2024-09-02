import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import User from './pages/users/User';
import History from './pages/history/History';
import LanguageAndRate from './pages/Language-&-Rate/LanguageAndRate';
import Extensions from './pages/Extensions/Extensions';
import AvailabilityReport from './pages/availabilityReport/AvailabilityReport';
import WebTimesheet from './pages/webAndmobileTimesheet/WebTimesheet';
import MobileTimesheet from './pages/webAndmobileTimesheet/MobileTimesheet';
import WebCustomer from './pages/webAndmobileCustomer/WebCustomer';
import MobileCustomer from './pages/webAndmobileCustomer/MobileCustomer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/" element={<User />} />
          <Route path="/history" element={<History />} />
          <Route path="/language-rate" element={<LanguageAndRate />} />
          <Route path="/extensions" element={<Extensions />} />
          <Route path="/availability-report" element={<AvailabilityReport />} />
          <Route path="/web-timesheet" element={<WebTimesheet />} />
          <Route path="/mobile-timesheet" element={<MobileTimesheet />} />
          <Route path="/web-customer" element={<WebCustomer />} />
          <Route path="/mobile-customer" element={<MobileCustomer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
