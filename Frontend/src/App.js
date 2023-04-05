import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          
          <Route path="/login"  element={<Login/>}/>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/register"  element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;