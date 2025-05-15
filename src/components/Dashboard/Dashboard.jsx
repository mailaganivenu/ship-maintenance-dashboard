import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const kpis = [
    { label: 'Total Ships', value: 12, color: 'bg-emerald-700' },
    { label: 'Overdue Maintenance', value: 3, color: 'bg-purple-600' },
    { label: 'Jobs in Progress', value: 7, color: 'bg-blue-600' },
    { label: 'Jobs Completed', value: 5, color: 'bg-green-700' },
  ];

  const notifications = [
    { id: 123, text: 'Job #123 Completed', time: '7 hours ago' },
    { id: 122, text: 'Job #122 Updated', time: '5 hours ago' },
    { id: 121, text: 'Job #121 Created', time: '1 day ago' },
  ];

  return (
    <div className="bg-[#0e1627] text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className={`p-6 rounded-xl ${kpi.color} shadow-lg`}>
            <p className="text-sm">{kpi.label}</p>
            <p className="text-3xl font-bold">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="rounded-xl p-6 shadow-md" style={{ backgroundColor: '#001F54' }}>
          <h2 className="text-xl font-semibold mb-4 text-white">Maintenance Calendar</h2>
          <Calendar className="!bg-[#0e1627] !text-white !rounded-xl !p-4" />
        </div>

        {/* Notifications */}
        <div className="rounded-xl p-6 shadow-md" style={{ backgroundColor: '#001F54' }}>
          <h2 className="text-xl font-semibold mb-4 text-white">Notifications</h2>
          <ul className="space-y-4">
            {notifications.map((note) => (
              <li
                key={note.id}
                className="bg-[#2b3553] p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-white">
                    <span className="text-orange-400 mr-2">●</span>
                    {note.text}
                  </p>
                  <p className="text-xs text-gray-200">{note.time}</p>
                </div>
                <button
                  aria-label="Close notification"
                  className="text-gray-200 hover:text-white transition text-xl"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
