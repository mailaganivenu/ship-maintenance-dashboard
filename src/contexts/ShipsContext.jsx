// src/contexts/ShipsContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockShips } from '../data/mockData';

const ShipsContext = createContext();

export const useShips = () => useContext(ShipsContext);

export const ShipsProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    // Simulating fetching ships data
    setShips(mockShips);
  }, []);

  const addShip = (ship) => {
    setShips((prevShips) => [...prevShips, { ...ship, id: Date.now().toString() }]);
  };

  const updateShip = (updatedShip) => {
    setShips((prevShips) =>
      prevShips.map((ship) => (ship.id === updatedShip.id ? updatedShip : ship))
    );
  };

  const deleteShip = (shipId) => {
    setShips((prevShips) => prevShips.filter((ship) => ship.id !== shipId));
  };

  return (
    <ShipsContext.Provider value={{ ships, addShip, updateShip, deleteShip }}>
      {children}
    </ShipsContext.Provider>
  );
};
