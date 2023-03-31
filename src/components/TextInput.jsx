//redux
// import { useDispatch } from 'react-redux'

//features
// import { storeUserInput } from '../utils/store'

import { TextField } from '@mui/material'

function TextInput({ id, label, errorStatus, onchange }) {
	// const dispatch = useDispatch()
    // const onChangeFunction = (e, id) => {
    //   console.log("--- id : ", id)
    //   dispatch(storeUserInput(e, id))
    // }
    // const onChangeFunction = (e) => {
    //     console.log(e)
    //     onchange(e.target.value)

    //   }
	return (
		<>
			<TextField
				helperText={errorStatus && 'please fill the ' + label}
				error={errorStatus}
				id={id}
				label={label}
				variant="outlined"
				size="small"
				onChange={(e) => {
					onchange(e.target.value)
				}}
			/>
		</>
	)
}
export default TextInput