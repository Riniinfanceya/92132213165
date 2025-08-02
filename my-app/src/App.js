import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import URLShortenerPage from './pages/URLShortenerPage';
import URLStatsPage from './pages/URLStatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortenerPage />} />
        <Route path="/stats" element={<URLStatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
