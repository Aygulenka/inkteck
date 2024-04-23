// App.js
import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import LearningModule from './components/LearningModule';
import TestModule from './components/TestModule';
import Header from './components/Header';
import AdmPanel from './components/AdmPanel'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed BrowserRoute to BrowserRouter

function App() {
  return (
    <div className="App">
      <Header />

        <Routes>
          <Route path="/" element={<MainScreen />} /> {/* Removed element prop */}
          <Route path="/learn" element={<LearningModule />} /> {/* Removed element prop */}
          <Route path="/test" element={<TestModule />} /> {/* Removed element prop */}
       <Route path="/admPanel" element = {<AdmPanel/>}/>
        </Routes>

    </div>
  );
}

export default App;
