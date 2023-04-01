import produce from "immer"
import { configureStore } from "@reduxjs/toolkit"


//initialState
export const initialState = {
	firstName: '',
	lastName: '',
	dateOfBirth: '',
	startDate: '',
	department: '',
	street: '',
	city: '',
	state: '',
	zipCode: '',
}

const RESETSTATE = ''

export const reset = () => ({
	type: RESETSTATE,
})

export const updateEmployee = (employee) => ({
	type: "updateEmployee",
	payload: employee
})

// reducer
function reducer(state = initialState, action) {

  if (action.type === 'updateEmployee') {
    return produce(state, (draft) => {
	  draft.firstName = action.payload.firstname
	  draft.lastName = action.payload.lastname
	  draft.dateOfBirth = action.payload.birthdate
	  draft.startDate = action.payload.startdate
	  draft.department = action.payload.department
	  draft.street = action.payload.street
	  draft.city = action.payload.city
	  draft.state = action.payload.state
	  draft.zipCode = action.payload.zipcode
	})
  }
  if (action.inputType === '') {
	return initialState
  }
  if (action.inputType === 'reset') {
    return produce(state, (draft) => {
		draft.firstName = ''
		draft.lastName = ''
		draft.dateOfBirth = ''
		draft.startDate = ''
		draft.department = ''
		draft.street = ''
		draft.city = ''
		draft.state = ''
		draft.zipCode = ''
	  })
  }

    return state
}


const store = configureStore({ reducer })
export {store}

store.subscribe(() => {
  console.log("nouveau state")
  console.log(store.getState())
})