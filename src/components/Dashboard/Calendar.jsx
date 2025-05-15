import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  return (
    <div className="rounded-xl p-6 shadow-md text-white" style={{ backgroundColor: '#001F54' }}>
      <h2 className="text-xl font-semibold mb-4">Maintenance Calendar</h2>
      <Calendar className="!bg-[#0e1627] !text-white !rounded-xl !p-4" />
    </div>
  );
};

export default CustomCalendar;
