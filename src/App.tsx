import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import User from './pages/users/User';
import History from './pages/history/History';
import LanguageAndRate from './pages/Language-&-Rate/LanguageAndRate';
import Extensions from './pages/Extensions/Extensions';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/user" element={<User />} />
          <Route path="/history" element={<History />} />
          <Route path="/language-rate" element={<LanguageAndRate />} />
          <Route path="/extensions" element={<Extensions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
