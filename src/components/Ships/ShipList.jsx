// src/components/Ships/ShipList.jsx
import React from 'react';
import { useShips } from '../../contexts/ShipsContext';
import { useNavigate } from 'react-router-dom';

const ShipList = ({ onEdit }) => {
  const { ships, deleteShip } = useShips();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Ship List</h2>
      <button
        onClick={() => navigate('/ships/new')}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add New Ship
      </button>

      {ships.length === 0 ? (
        <p>No ships available.</p>
      ) : (
        <table className="min-w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">IMO Number</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ships.map((ship) => (
              <tr key={ship.id} className="border-t">
                <td className="border p-2">{ship.name}</td>
                <td className="border p-2">{ship.imoNumber}</td>
                <td className="border p-2">
                  <button onClick={() => onEdit(ship)} className="text-blue-500 mr-2">Edit</button>
                  <button onClick={() => deleteShip(ship.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShipList;
