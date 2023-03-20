import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Mission from'./Pages/Mission/Mission';
import Help from './Pages/Help/Help';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/mission' element={<Mission/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>
    </Router>
  );
}

export default App;
