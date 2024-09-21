import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  const handleSearch = (username) => {
    console.log('Searching for:', username);
   
  };

  return (
    <Router>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Search onSearch={handleSearch} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
