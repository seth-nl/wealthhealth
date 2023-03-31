import { Link } from 'react-router-dom'
// import DataTable from '../components/Table'

// import DataTable from '../../Components/DataTable';
import Tablev2 from '../components/Tablev2'

function EmployeeListPage() {
	return (
		<div id="employee-div" className="container">
			<h1>Current Employees</h1>
			<Link to="/">Home</Link>
			<table id="employee-table" className="display"></table>
			{/* <DataTable /> */}
			{/* <DataTable /> */}
			<Tablev2 />
		</div>
	)
}

export default EmployeeListPage