import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function DatepickerForm(props){
  const [startDate, setStartDate] = useState(new Date())
  const onchangeFunc = (e) => {
    setStartDate(e)
    // console.log(props.onchange(value))
    props.onchange(e.toString())
  }



  return (
    <div>
      <p>{props.label}</p>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      <DatePicker selected={startDate} onChange={(date) => {onchangeFunc(date)}} dateFormat='yyyy-MM-dd' />
    </div>
  )

}

export default DatepickerForm
