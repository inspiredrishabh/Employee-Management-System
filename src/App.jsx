import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import './App.css';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

function App() {
    const [user, setUser] = useState(null);
    const authData = useContext(AuthContext);
    const [loggedInUserData, setloggedInUserData] = useState(null);

    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
          const userData = JSON.parse(loggedInUser);
          setUser(userData.role);
          setloggedInUserData(userData.data);
      }      
    }, [])
    

    const handleLogin = (email, password) => {
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin');
            localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'admin' }));
        } else if (authData) {
            const employee = authData.employees.find((e) => e.email === email && e.password === password);
            if (employee) {
                setUser('employee');
                setloggedInUserData(employee);
                localStorage.setItem("LoggedInUser", JSON.stringify({ role: 'employee', data: employee }));
            } 
        } else {
            alert("Invalid Credentials");
        }
    };

    return (
        <>
            {!user ? <Login handleLogin={handleLogin} /> : ''}
            {user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
            {/* <EmployeeDashboard /> */}
            {/* <AdminDashboard /> */}
        </>
    );
}

export default App;
