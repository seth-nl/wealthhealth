import { TextField } from '@mui/material'

function TextInput({ id, label, errorStatus, onchange }) {

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