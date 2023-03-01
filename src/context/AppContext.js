import React, { createContext, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [student, setStudent] = useState();

  return (
    <AppContext.Provider value={{ student, setStudent }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
