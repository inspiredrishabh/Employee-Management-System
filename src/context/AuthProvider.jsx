import React, { useEffect, useState, createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Only seed local storage if data is missing.
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  // Show a loading state until userData is loaded.
  if (!userData) {
    return <div>Loading authentication data...</div>;
  }

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
