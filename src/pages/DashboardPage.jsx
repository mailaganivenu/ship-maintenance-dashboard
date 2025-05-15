// src/pages/DashboardPage.jsx
import React from 'react';
import KPICards from '../components/Dashboard/KPICards';
import Calendar from '../components/Dashboard/Calendar';
import Notifications from '../components/Dashboard/Notifications';

const DashboardPage = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <KPICards />
      <div className="grid grid-cols-2 gap-4">
        <Calendar />
        <Notifications />
      </div>
    </div>
  );
};

export default DashboardPage;
