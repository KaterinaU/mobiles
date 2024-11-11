import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
