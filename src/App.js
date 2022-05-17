import './App.scss';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register-page/register-page';
import React from 'react';
import LoginPage from './pages/login-page/login-page';
import { AuthProvider } from './authContext/authContext';
import DashBoard from './pages/Dashboard/dashboard';
import Card from './pages/Card/card';

function App() {
  return (
    <div>
      <React.StrictMode>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/' element={<RegisterPage />}></Route>
            <Route path='/account' element={<DashBoard />}></Route>
            <Route path='/card' element={<Card />}></Route>
          </Routes>
        </AuthProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
