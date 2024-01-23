// ServiceContext.js
import React, { createContext, useContext, useState } from 'react';

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const selectService = (service) => {
    setSelectedServices((prevSelected) => [...prevSelected, service]);
  };

  const removeService = (index) => {
    setSelectedServices((prevSelected) =>
      prevSelected.filter((_, i) => i !== index)
    );
  };

  return (
    <ServiceContext.Provider value={{ selectedServices, selectService, removeService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};
