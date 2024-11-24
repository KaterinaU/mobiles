import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <MainPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
