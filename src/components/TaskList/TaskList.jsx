import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id='tasklist'
      className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'
    >
      {data.tasks.map((elem, idx) => {
        // Decide what to render based on flag priority.
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        } else if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        } else if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        } else if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        return null; // Fallback if no flag is true.
      })}
    </div>
  )
}

export default TaskList;
