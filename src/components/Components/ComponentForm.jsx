// src/components/Components/ComponentForm.jsx
import React, { useState, useEffect } from 'react';
import { useComponents } from '../../contexts/ComponentsContext';

const ComponentForm = ({ componentToEdit, onSave }) => {
  const { addComponent, updateComponent } = useComponents();
  const [name, setName] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [installDate, setInstallDate] = useState('');
  const [lastMaintenanceDate, setLastMaintenanceDate] = useState('');

  // Pre-fill form with component data if editing
  useEffect(() => {
    if (componentToEdit) {
      setName(componentToEdit.name);
      setSerialNumber(componentToEdit.serialNumber);
      setInstallDate(componentToEdit.installDate);
      setLastMaintenanceDate(componentToEdit.lastMaintenanceDate);
    }
  }, [componentToEdit]);

  const handleSave = () => {
    const newComponent = {
      id: componentToEdit ? componentToEdit.id : Date.now().toString(),
      name,
      serialNumber,
      installDate,
      lastMaintenanceDate,
    };

    if (componentToEdit) {
      updateComponent(newComponent);
    } else {
      addComponent(newComponent);
    }

    onSave(); // Close the form after saving
  };

  return (
    <div>
      <h2>{componentToEdit ? 'Edit Component' : 'Add New Component'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>Serial Number:</label>
        <input
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>Installation Date:</label>
        <input
          type="date"
          value={installDate}
          onChange={(e) => setInstallDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <div>
        <label>Last Maintenance Date:</label>
        <input
          type="date"
          value={lastMaintenanceDate}
          onChange={(e) => setLastMaintenanceDate(e.target.value)}
          className="border p-2"
        />
      </div>
      <button onClick={handleSave} className="mt-2 bg-blue-500 text-white p-2 rounded">
        Save
      </button>
    </div>
  );
};

export default ComponentForm;
