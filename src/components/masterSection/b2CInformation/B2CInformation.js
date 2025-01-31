import React from 'react'
import B2cHeader from './B2cHeader'
import B2cTable from './B2cTable'
import B2cForm from './B2cForm'

const B2CInformation = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
    <B2cHeader />
    <B2cForm />
    <B2cTable />
  </div>
  )
}

export default B2CInformation