import React from 'react';
import { Routes, Route } from "react-router-dom"

import Home from './pages/homepage/homepage.component';
import WorkEl from './routes/workEl/workEl.component';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/work" element={ <WorkEl/> } />
      </Routes>
    </div>
  );
}

export default App;
