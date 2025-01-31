import React from 'react';
import QueriesList from './QueriesList';
import TotalSells from './TotalSells';
import MonthWise from './MonthWise';
import TopSell from './TopSells';
import QueryWiseStatus from './WiseStatus';
import Querysells from './QuerySells';
import TopAgentsChart from './TopAgentsChart';
import Task from './Task';
import CrmTable from './CrmTable';

function CrmDashboard() {
  return (
    <div className="border rounded-lg shadow p-4 m-4">
      <div>
        <QueriesList />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div>
          <TotalSells />
        </div>
        
        <div>
          <MonthWise />
        </div>
        <div>
          <TopSell />
        </div>
        
        {/* <div>
          <QueryWiseStatus />
        </div>  */}
        <div>
          <Querysells />
        </div>
         <div>
          <TopAgentsChart />
        </div>
        <div>
          <TopAgentsChart />
        </div>
      </div>

      <div className="my-6">
        <Task />
      </div>
      <div>
        <CrmTable />
      </div> 
    </div>
  );
}

export default CrmDashboard;
