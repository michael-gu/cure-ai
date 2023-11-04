// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CureAIApp from './components/CureAI';
import HomePage from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cureai" element={<CureAIApp />} />
      </Routes>
    </Router>
  );
}

export default App;
