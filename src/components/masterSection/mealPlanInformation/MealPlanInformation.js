import React from 'react'
import MealPlanForm from './MealPlanForm'
import MealPlanHeader from './MealPlanHeader'
import MealPlanTable from './MealPlanTable'

const MealPlanInformation = () => {
    return (
        <div className="border  p-4 shadow-sm m-2 mt-2 rounded">
        <MealPlanHeader />
        <MealPlanForm />
        <MealPlanTable />
      </div>
      )
}

export default MealPlanInformation