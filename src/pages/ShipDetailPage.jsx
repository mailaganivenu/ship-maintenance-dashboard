// src/pages/ShipDetailPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShips } from '../contexts/ShipsContext';
import ComponentList from '../components/Components/ComponentList';
import ComponentForm from '../components/Components/ComponentForm';

const ShipDetailPage = () => {
  const { shipId } = useParams();
  const { ships } = useShips();
  const ship = ships.find(s => s.id === shipId);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleEdit = (component) => {
    setSelectedComponent(component);
    setIsFormVisible(true);
  };

  const handleAddNew = () => {
    setSelectedComponent(null);  // No component, indicating it's a new addition
    setIsFormVisible(true);
  };

  const handleSave = () => {
    setIsFormVisible(false);
    setSelectedComponent(null);  // Reset after saving
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{ship?.name} - Ship Details</h1>

      <button
        onClick={handleAddNew}
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add New Component
      </button>

      {isFormVisible && (
        <ComponentForm component={selectedComponent} onSave={handleSave} />
      )}

      <ComponentList onEdit={handleEdit} />
    </div>
  );
};

export default ShipDetailPage;
