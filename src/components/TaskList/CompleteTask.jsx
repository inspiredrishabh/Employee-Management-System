import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-72 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center p-3">
        <h3 className="text-sm bg-red-600 px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 ml-6 text-xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 mx-6">
        {data.description}
      </p>
      <div className="flex justify-between mt-4 mx-6">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">Accepted</button>
      </div>
    </div>
  )
}

export default CompleteTask
