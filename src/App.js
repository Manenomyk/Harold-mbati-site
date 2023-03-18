import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
