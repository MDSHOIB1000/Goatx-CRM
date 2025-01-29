import React from 'react'
import TourMasterHeader from './TourMasterHeader'
import TourMasterForm from './TourMasterForm'
import TourMasterTable from './TourMasterTable'

const TourMasterInformaiton = () => {
  return (
    <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
      <TourMasterHeader />
      <TourMasterForm />
      <TourMasterTable />
    </div>
  )
}

export default TourMasterInformaiton