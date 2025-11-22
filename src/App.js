import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Usuarios from './pages/users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
