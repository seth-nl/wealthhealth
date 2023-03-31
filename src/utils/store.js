// //Reduxtoolkit
// // import { combineReducers } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'

// //Reducers
// import employeeData from '../features/formData'

// //reducers
// // export const rootReducer = combineReducers({
// // 	employeeDataReducer: employeeData,
// // })

// //devtools
// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// //store
// const store = configureStore(employeeData, reduxDevtools)

// export { store }

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


const USERINPUT = 'storeUserInput'
const PLUGINSTATE = 'storePluginState'
const RESETSTATE = ''

export const storeUserInput = (event, inputType) => ({
	type: USERINPUT,
	payload: event.target.value,
	inputType: inputType,
})

export const storePluginState = (data, inputType) => ({
	type: PLUGINSTATE,
	payload: data,
	inputType: inputType,
})

export const reset = () => ({
	type: RESETSTATE,
})

export const updateEmployee = (employee) => ({
	type: "updateEmployee",
	payload: employee
})

// reducer
function reducer(state = initialState, action) {
//   if (action.type === "logUser") {
//     return produce(state, (draft) => {
//       draft.email = action.payload.email
//     })
//   }
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
  if (action.inputType === 'firstName') {
	return produce(state, (draft) => {
	  draft.firstName = action.payload
	})
  }
  if (action.inputType === 'lastName') {
	return produce(state, (draft) => {
	  draft.lastName = action.payload
	})
  }
  if (action.inputType === 'street') {
	return produce(state, (draft) => {
	  draft.street = action.payload
	})
  }
  if (action.inputType === 'city') {
	return produce(state, (draft) => {
	  draft.city = action.payload
	})
  }
  if (action.inputType === 'zipCode') {
	return produce(state, (draft) => {
	  draft.zipCode = action.payload
	})
  }
  if (action.inputType === 'dateOfBirth') {
	return produce(state, (draft) => {
	  draft.dateOfBirth = action.payload
	})
  }
  if (action.inputType === 'startDate') {
	return produce(state, (draft) => {
	  draft.startDate = action.payload
	})
  }
  if (action.inputType === 'state') {
	return produce(state, (draft) => {
	  draft.state = action.payload
	})
  }
  if (action.inputType === 'department') {
	return produce(state, (draft) => {
	  draft.department = action.payload
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