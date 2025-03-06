import React, { useState } from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Retrieve local storage data
    const localData = getLocalStorage();
    if (!localData || !localData.employees) {
      alert(
        "Local storage not initialized. Please call setLocalStorage() to seed the data."
      );
      return;
    }

    let employees = localData.employees;
    console.log("Current employees data:", employees);

    // Find employee by first name (case-insensitive)
    const employeeIndex = employees.findIndex(
      (emp) =>
        emp.firstName.toLowerCase() === assignTo.trim().toLowerCase()
    );

    if (employeeIndex === -1) {
      alert(`Employee "${assignTo}" not found in the database.`);
      return;
    }

    // Append the new task and update task numbers
    employees[employeeIndex].tasks.push(newTask);

    if (employees[employeeIndex].taskNumbers) {
      employees[employeeIndex].taskNumbers.active =
        (employees[employeeIndex].taskNumbers.active || 0) + 1;
      employees[employeeIndex].taskNumbers.newTask =
        (employees[employeeIndex].taskNumbers.newTask || 0) + 1;
    } else {
      employees[employeeIndex].taskNumbers = {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      };
    }

    // Save the updated data back to local storage
    localStorage.setItem('employees', JSON.stringify(employees));
    console.log("Employee updated:", employees[employeeIndex]);

    // Optionally, reset the form fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div>
      <div className="bg-gray-800 shadow-lg rounded-lg p-5 mt-10">
        <h1 className="text-2xl font-bold mb-5">Admin Dashboard</h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-wrap w-full items-start justify-between space-y-4"
        >
          <div className="w-full md:w-1/2 md:pr-4">
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                placeholder="Make a UI Design"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Assign To
              </label>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                placeholder="Employee Name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Category
              </label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-4">
            <div className="mb-4">
              <label className="block text-gray-400 font-bold mb-2">
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
                rows="10"
                placeholder="Describe the task..."
              ></textarea>
            </div>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
