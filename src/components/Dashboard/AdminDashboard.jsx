import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = ({ adminData }) => {
  return (
    <div className="min-h-screen w-full p-7 bg-gray-900 text-white">
      <Header data={adminData} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
