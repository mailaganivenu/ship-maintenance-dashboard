// src/contexts/ComponentsContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockComponents } from '../data/mockData';

const ComponentsContext = createContext();

export const useComponents = () => useContext(ComponentsContext);

export const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Simulating fetching components data
    setComponents(mockComponents);
  }, []);

  const addComponent = (component) => {
    setComponents((prevComponents) => [...prevComponents, component]);
  };

  const deleteComponent = (componentId) => {
    setComponents((prevComponents) => prevComponents.filter((component) => component.id !== componentId));
  };

  return (
    <ComponentsContext.Provider value={{ components, addComponent, deleteComponent }}>
      {children}
    </ComponentsContext.Provider>
  );
};
