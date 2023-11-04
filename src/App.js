// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CureAIApp from './components/CureAI';
import HomePage from './components/Home';
import DiagnosisApp from './components/Diagnosis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cure-ai" element={<CureAIApp />} />
        <Route path="/diagnosis-page" element={<DiagnosisApp />} />
        
      </Routes>
    </Router>
  );
}

export default App;
