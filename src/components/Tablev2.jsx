import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

function Tablev2 () {

  const getEmployees = localStorage.getItem("Employees")
  const employees = JSON.parse(getEmployees)
  console.log(employees)
  const [rowData] = useState(employees)

const [columnDefs] = useState([
    { field: 'city',
      sortable: true },
    { field: 'dateOfBirth',
      sortable: true },
    { field: 'department',
      sortable: true },
    { field: 'firstName',
      sortable: true },
    { field: 'lastName',
      sortable: true },
    { field: 'startDate',
      sortable: true },
    { field: 'state',
      sortable: true },
    { field: 'street',
      sortable: true },
    { field: 'zipCode',
      sortable: true }
])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   )
}

export default Tablev2