import React,{useState} from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(taskTitle, taskDescription, taskDate, assignTo, category)
    
  }

  return (
    <div>
        <div className='bg-gray-800 shadow-lg rounded-lg p-5 mt-10'>
        <h1 className='text-2xl font-bold mb-5'>Admin Dashboard</h1>

        <form onSubmit={(e)=>{
          submitHandler(e);
        }} className='flex flex-wrap w-full items-start justify-between space-y-4'>
          <div className='w-full md:w-1/2 md:pr-4'>
            <div className='mb-4'>
              <label className='block text-gray-400 font-bold mb-2'>Task Title</label>
              <input 
                value={taskTitle}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                type="text" 
                className='w-full p-2 border border-gray-600 rounded bg-gray-700 text-white' 
                placeholder='Make a UI Design' 
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-400 font-bold mb-2'>Date</label>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                type="date" 
                className='w-full p-2 border border-gray-600 rounded bg-gray-700 text-white' 
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-400 font-bold mb-2'>Assign To</label>
              <input 
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
                type="text" 
                className='w-full p-2 border border-gray-600 rounded bg-gray-700 text-white' 
                placeholder='Employee Name' 
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-400 font-bold mb-2'>Category</label>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                type="text" 
                className='w-full p-2 border border-gray-600 rounded bg-gray-700 text-white' 
                placeholder='Design,Dev,etc' 
              />
            </div>
          </div>

          <div className='w-full md:w-1/2 md:pl-4'>
            <div className='mb-4'>
              <label className='block text-gray-400 font-bold mb-2'>Description</label>
              <textarea 
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
                className='w-full p-2 border border-gray-600 rounded bg-gray-700 text-white' 
                rows='10' 
                placeholder='Describe the task...'
              ></textarea>
            </div>
          </div>

          <div className='w-full'>
            <button 
              type='submit' 
              className='bg-blue-500 text-white p-3 rounded shadow-lg hover:bg-blue-700 transition duration-300'>
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
