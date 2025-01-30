import React from 'react'
import EditB2cForm from './EditB2cForm'
import EditB2cTable from './EditB2cTable'

const EditB2C = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
    <h2 className='bg-black p-2 text-white '>Edit B2C</h2>
    <EditB2cForm />
    <EditB2cTable />
  </div>
  )
}

export default EditB2C