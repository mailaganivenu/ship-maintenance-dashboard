// src/components/Ships/ShipForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useShips } from '../../contexts/ShipsContext';

const ShipForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ships, addShip, updateShip } = useShips();

  const [ship, setShip] = useState({
    name: '',
    imoNumber: '',
  });

  useEffect(() => {
    if (id) {
      const existingShip = ships.find((s) => s.id === id);
      if (existingShip) {
        setShip(existingShip);
      }
    }
  }, [id, ships]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShip((prevShip) => ({ ...prevShip, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateShip(ship);
    } else {
      addShip(ship);
    }
    navigate('/ships');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{id ? 'Edit Ship' : 'Add New Ship'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block">Ship Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={ship.name} 
            onChange={handleChange} 
            className="border px-4 py-2 w-full" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imoNumber" className="block">IMO Number</label>
          <input 
            type="text" 
            id="imoNumber" 
            name="imoNumber" 
            value={ship.imoNumber} 
            onChange={handleChange} 
            className="border px-4 py-2 w-full" 
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {id ? 'Update Ship' : 'Add Ship'}
        </button>
      </form>
    </div>
  );
};

export default ShipForm;
