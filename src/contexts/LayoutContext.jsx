import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isCreativeLayout, setIsCreativeLayout] = useState(false);

  const toggleLayout = () => setIsCreativeLayout(!isCreativeLayout);

  return (
    <LayoutContext.Provider value={{ isCreativeLayout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);