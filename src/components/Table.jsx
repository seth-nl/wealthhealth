import React, { useState, useCallback, useRef } from 'react'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

function Table () {

  const getEmployees = localStorage.getItem("Employees")
  const employees = JSON.parse(getEmployees)
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
  const gridRef = useRef();
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
    document.getElementById('filter-text-box').value
  )
  }, [])
  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById('page-size').value
    gridRef.current.api.paginationSetPageSize(Number(value))
  }, [])

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <div className='ag-header' id="table-header">
        <div className="title-header">
          Page Size:
          <select onChange={onPageSizeChanged} id="page-size" defaultValue={10}>
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          onInput={onFilterTextBoxChanged}
        />
      </div>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        cacheQuickFilter={true}>
      </AgGridReact>
    </div>
   )
}

export default Table