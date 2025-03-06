import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);

  if (!authData || !authData.employees) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-800 p-5 rounded mt-5 m-1'>
      <div className='bg-gray-900 mb-2 py-2 px-4 grid grid-cols-5 gap-4 rounded text-white'>
        <h2>First Name</h2>
        <h2>Active</h2>
        <h2>New Task</h2>
        <h2>Completed</h2>
        <h2>Failed</h2>
      </div>
      <div id='allTask' className='overflow-auto max-h-96' >
        {authData.employees.map((employee, empIndex) => (
          employee.tasks.map((task, taskIndex) => (
            <div
              key={`${empIndex}-${taskIndex}`}
              className={`mb-2 py-2 px-4 grid grid-cols-5 gap-4 rounded ${
                task.completed ? 'bg-green-400' 
                : task.newTask ? 'bg-blue-400' 
                : task.failed ? 'bg-red-400' 
                : 'bg-yellow-400'
              }`}
            >
              <h2>{employee.firstName}</h2>
              <h2>{task.active ? "Yes" : "No"}</h2>
              <h2>{task.newTask ? "Yes" : "No"}</h2>
              <h2>{task.completed ? "Yes" : "No"}</h2>
              <h2>{task.failed ? "Yes" : "No"}</h2>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default AllTask;
