import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mission from'./Pages/Mission/Mission';
import About from './Pages/About/About';
import Gallery from './Pages/Gallery/Gallery';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </Router>
  );
}

export default App;
