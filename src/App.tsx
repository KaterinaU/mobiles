import React from 'react';

import { MainPage } from './pages/MainPage/MainPage';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
