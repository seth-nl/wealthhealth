//components
import { Link } from 'react-router-dom'
import Form from "../components/Form"


function HomePage() {

  return (
    <div>
      <div className="title">
            <h1>HRnet</h1>
      </div>
      <div className="container">
        {/* <a href="">View Current Employees</a> */}
        <Link to="/employee">View Current Employees</Link>
      </div>
      <h2>Create Employee</h2>
      <Form />
      {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>
  )
}

export default HomePage