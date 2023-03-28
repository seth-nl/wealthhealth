//Reduxtoolkit
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

//Reducers
import employeeData from '../features/formData'

//reducers
export const rootReducer = combineReducers({
	employeeDataReducer: employeeData,
})

//devtools
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//store
const store = configureStore(rootReducer, reduxDevtools)

export { store }