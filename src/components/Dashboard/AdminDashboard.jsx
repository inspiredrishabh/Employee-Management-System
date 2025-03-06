import React from 'react';
import Header from '../Others/Header';
import CreateTask from '../Others/CreateTask';
import AllTask from '../Others/AllTask';

function AdminDashboard() {
  return (
    <div className='min-h-screen w-full p-7 bg-gray-900 text-white'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
