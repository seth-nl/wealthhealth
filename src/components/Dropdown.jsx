import { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


function DropdownForm(props){
  // const options = [
  //   'one', 'two', 'three'
  // ]
  // const defaultOption = options[0]
  const [value, setValue] = useState(props.options[0])

  const onchangeFunc = (e) => {
    console.log("le LABEL --------", e.label)
    setValue(e.label)
    // console.log(props.onchange(value))
    console.log("dropdown value inside dropdown component : ", value)
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
