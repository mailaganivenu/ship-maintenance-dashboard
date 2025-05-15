// src/components/Notifications/NotificationCenter.jsx
import React, { useState } from 'react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New job created for Main Engine' },
    { id: 2, message: 'Job updated: Radar Inspection' },
  ]);

  const dismiss = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>
      {notifications.length === 0 && <p className="text-gray-500">No notifications</p>}
      <ul>
        {notifications.map(note => (
          <li key={note.id} className="flex justify-between items-center border-b py-2">
            <span>{note.message}</span>
            <button onClick={() => dismiss(note.id)} className="text-red-500 text-sm">Dismiss</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
