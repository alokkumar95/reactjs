import React from 'react'

function Modal({onClose}) {
  return (
    <div className='modal'>
        <p>Modal Content</p>
        <button onClick={onClose}>Close</button>

    </div>
  )
}

export default Modal