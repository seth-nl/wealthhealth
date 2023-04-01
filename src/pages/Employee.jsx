import { Link } from 'react-router-dom'
import Table from '../components/Table'

function EmployeeListPage() {
	return (
		<div id="employee-div" className="container">
			<h1>Current Employees</h1>
			<Link to="/">Home</Link>
			<Table />
		</div>
	)
}

export default EmployeeListPage