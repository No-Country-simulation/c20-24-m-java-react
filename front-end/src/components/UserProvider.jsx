'use client';

import { createContext, useContext, useState } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [dataRecited, setDataRecited] = useState([]);

  return (
    <UserContext.Provider
      value={{ token, user, setToken, setUser, dataRecited, setDataRecited }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used inside a UserProvider');
  }
  return context;
};
