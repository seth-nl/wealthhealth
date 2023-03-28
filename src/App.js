import './App.css';
import HomePage from './pages/homepage'
import EmployeeListPage from './pages/Employee'
import Page404 from './pages/Page404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
		<Router>
			<Routes>
			  <Route path="/" element={<HomePage />}></Route>
			  <Route path="/employee" element={<EmployeeListPage />}></Route>
			  <Route path="/*" element={<Page404 />}></Route>
			</Routes>
		</Router>
  )
}

export default App;
