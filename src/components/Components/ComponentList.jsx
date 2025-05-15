// src/components/Components/ComponentList.jsx
import React from 'react';
import { useComponents } from '../../contexts/ComponentsContext';

const ComponentList = ({ onEdit }) => {
  const { components, deleteComponent } = useComponents();

  return (
    <div>
      <h2>Component List</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Serial Number</th>
            <th className="border px-4 py-2">Installation Date</th>
            <th className="border px-4 py-2">Last Maintenance Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {components.map((component) => (
            <tr key={component.id}>
              <td className="border px-4 py-2">{component.name}</td>
              <td className="border px-4 py-2">{component.serialNumber}</td>
              <td className="border px-4 py-2">{component.installDate}</td>
              <td className="border px-4 py-2">{component.lastMaintenanceDate}</td>
              <td className="border px-4 py-2">
                <button onClick={() => onEdit(component)} className="text-blue-500 hover:underline">Edit</button>
                <button onClick={() => deleteComponent(component.id)} className="ml-2 text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentList;
