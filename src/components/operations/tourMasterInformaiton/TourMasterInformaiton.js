import React from 'react'
import TourMasterHeader from './TourMasterHeader'
import TourMasterForm from './TourMasterForm'
import TourMasterTable from './TourMasterTable'

const TourMasterInformaiton = () => {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <TourMasterHeader />
      <TourMasterForm />
      <TourMasterTable />
    </div>
  )
}

export default TourMasterInformaiton