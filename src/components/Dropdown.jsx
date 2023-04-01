import { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


function DropdownForm(props){

  const [value, setValue] = useState(props.options[0])

  const onchangeFunc = (e) => {
    setValue(e.label)
    props.onchange(e.label)
  }
  return (
    <div>
      <p>{props.label}</p>
      <Dropdown options={props.options} value={value} placeholder="Select an option" onChange={onchangeFunc}/>
    </div>
  )

}

export default DropdownForm
