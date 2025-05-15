import React from 'react';

const notifications = [
  { id: 123, text: 'Job #123 Completed', time: '7 hours ago' },
  { id: 122, text: 'Job #122 Updated', time: '5 hours ago' },
  { id: 121, text: 'Job #121 Created', time: '1 day ago' },
];

const Notifications = () => {
  return (
    <div className="rounded-xl p-6 shadow-md text-white" style={{ backgroundColor: '#001F54' }}>
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="bg-[#2b3553] p-4 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="text-sm">
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
  );
};

export default Notifications;
