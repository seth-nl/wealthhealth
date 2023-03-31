// import { useState } from 'react'


function Modal(props){
//   const [isOpen, setIsOpen] = useState(props.isOpen)
  return (
    props.modal &&
    <div className='modal-container'>
      <div className="modal-bg" onClick={() => {props.toggler(false)}}></div>
      <div className="modal-text-container">
        <p>{props.text}</p>
        <div className='modal-close-button' onClick={() => {props.toggler(false)}}><span>X</span></div>
      </div>
    </div>
  )

}

export default Modal
