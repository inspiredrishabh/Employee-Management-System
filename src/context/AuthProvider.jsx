import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Function to refresh data from localStorage
  const refreshUserData = () => {
    const data = getLocalStorage();
    setUserData(data);
  };

  useEffect(() => {
    // Only seed local storage if data is missing.
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }

    refreshUserData();

    // Set up storage event listener
    const handleStorageChange = (e) => {
      if (
        e.key === "employees" ||
        e.key === "admin" ||
        e.key === "loggedInUser"
      ) {
        refreshUserData();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Show a loading state until userData is loaded.
  if (!userData) {
    return <div>Loading authentication data...</div>;
  }

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
