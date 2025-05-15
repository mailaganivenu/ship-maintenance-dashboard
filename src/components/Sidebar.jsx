// src/components/Sidebar.jsx
import React from 'react';
import { FaShip, FaTools, FaClipboardList, FaCalendarAlt, FaBell, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#1a1c23] p-5 text-white flex flex-col gap-6">
      <div className="text-xl font-bold flex items-center gap-2">
        <FaShip /> <span>Ship</span> <span className="text-gray-400">Maintenance</span>
      </div>
      <nav className="flex flex-col gap-4 text-sm">
        <a className="flex items-center gap-2 bg-[#2a2d36] p-2 rounded-md"><FaHome /> Dashboard</a>
        <a className="flex items-center gap-2 p-2 hover:bg-[#2a2d36] rounded-md"><FaShip /> Ships</a>
        <a className="flex items-center gap-2 p-2 hover:bg-[#2a2d36] rounded-md"><FaTools /> Components</a>
        <a className="flex items-center gap-2 p-2 hover:bg-[#2a2d36] rounded-md"><FaClipboardList /> Jobs</a>
        <a className="flex items-center gap-2 p-2 hover:bg-[#2a2d36] rounded-md"><FaCalendarAlt /> Calendar</a>
        <a className="flex items-center gap-2 p-2 hover:bg-[#2a2d36] rounded-md"><FaBell /> Notifications</a>
      </nav>
      <div className="mt-auto text-gray-400">Admin</div>
    </div>
  );
};

export default Sidebar;
