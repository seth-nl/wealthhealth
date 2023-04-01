import { useState } from 'react'


//components
import TextInput from './TextInput'
import Button from '@mui/material/Button'
import DropdownForm from './Dropdown'
import DatepickerForm from './Datepicker'
import { Modal } from 'typescript-modal-component'

import states from '../assets/dataCities'
import departments from '../assets/dataDepartments'

//redux
import { useDispatch } from 'react-redux'

//features
import { reset, updateEmployee } from '../utils/store'
import { store } from '../utils/store'

function Form() {
	const dispatch = useDispatch()

	const [getFirstName, setFirstName] = useState()
	const [errorFirstName, setErrorFirstName] = useState()
	const [getlastName, setLastName] = useState()
	const [errorLastName, setErrorLastName] = useState()

	const [formState, setFormState] = useState()
	const [formDepartment, setFormDepartment] = useState()
	const [birthDate, setBirthDate] = useState()
	const [startDate, setStartDate] = useState()
	const [street, setStreet] = useState()
	const [city, setCity] = useState()
	const [zipCode, setZipCode] = useState()
	const [modal, setModal] = useState(false)

	//Form verificaton
	const handleSumbit = (e) => {
		e.preventDefault()
		const employee = {
		  firstname : getFirstName,
		  lastname : getlastName,
		  birthdate : birthDate,
		  startdate : startDate,
		  street : street,
		  city : city,
		  zipcode : zipCode,
		  state : formState,
		  department : formDepartment
		}

		if ((getFirstName === '' || undefined) & (getlastName === '' || undefined)) {
			setErrorFirstName(true)
			setErrorLastName(true)
			return
		}
		if (getlastName === '' || undefined) {
			setErrorLastName(true)
			return
		}
		if (getFirstName === '' || undefined) {
			setErrorFirstName(true)
			return
		} else setErrorFirstName(false)
		dispatch(updateEmployee(employee))
		setModal(true)
		updateEmployees()
		dispatch(reset())
	}

	//local storage dispatch
	const updateEmployees = () => {
		//check if localstorage exists, if not, create the employees item
		if(!localStorage.getItem('Employees')){
			localStorage.setItem('Employees', JSON.stringify([]))
		}
		// get localstorage item and parse it
		const employeesFromLocalStorage = localStorage.getItem('Employees')
		const employees = JSON.parse(employeesFromLocalStorage)
		// add item
		employees.push(store.getState())
		localStorage.setItem('Employees', JSON.stringify(employees))
	}

	return (
		<>
			<form action="#" id="create-employee" onSubmit={(e) => handleSumbit(e)}>
				<div className="employee-infos">
					<fieldset className="employee-personal-infos">
						<legend>Employee infos</legend>
						<TextInput errorStatus={errorFirstName} id="firstName" label="First Name" onchange={setFirstName} />
						<TextInput errorStatus={errorLastName} id="lastName" label="Last Name" onchange={setLastName} />
						<DatepickerForm label="Birth date" id="dateOfBirth" onchange={setBirthDate} />
						<DatepickerForm label="Start date" id="startDate" onchange={setStartDate} />
					</fieldset>
					<fieldset className="employee-adress">
						<legend>Address</legend>
						<TextInput id="street" label="Street" onchange={setStreet} />
						<TextInput id="city" label="City" onchange={setCity} />
						<DropdownForm id="state" label="State" options={states} onchange={setFormState}/>
						<TextInput id="zipCode" label="Zip Code" onchange={setZipCode} />
						<DropdownForm id="department" label="Department" options={departments} onchange={setFormDepartment}/>

					</fieldset>
				</div>
				 <Button type="submit" variant="contained" size="small">
					Save
				</Button>
			</form>

			<Modal toggler={setModal} modal={modal} text={"Employee created !"} />
		</>
	)
}

export default Form