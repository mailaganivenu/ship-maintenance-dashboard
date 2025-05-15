// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <DashboardPage />
    </div>
  );
};

export default App;
