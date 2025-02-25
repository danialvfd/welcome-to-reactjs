import React, { createContext, useState, useContext } from 'react';

const SelectedItemContext = createContext();

const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

const useSelectedItem = () => {
  return useContext(SelectedItemContext);
};

export { SelectedItemProvider, useSelectedItem };
