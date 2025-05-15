// src/components/Dashboard/KPICards.jsx
import React from 'react';

const kpis = [
  { label: 'Total Ships', value: 12, color: 'bg-emerald-700' },
  { label: 'Overdue Maintenance', value: 3, color: 'bg-purple-600' },
  { label: 'Jobs in Progress', value: 7, color: 'bg-blue-600' },
  { label: 'Jobs Completed', value: 5, color: 'bg-green-700' },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {kpis.map((kpi, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-xl ${kpi.color} shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
        >
          <p className="text-sm opacity-80">{kpi.label}</p>
          <p className="text-3xl font-bold">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
