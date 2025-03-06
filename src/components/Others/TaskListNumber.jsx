import React from 'react';

const TaskListNumber = ({ data }) => {
  // Make sure 'data' passed in has a taskNumbers object.
  return (
    <div className='text-white flex mt-10 justify-between gap-5'>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
