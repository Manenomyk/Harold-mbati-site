import React from 'react'
import './App.css';
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
