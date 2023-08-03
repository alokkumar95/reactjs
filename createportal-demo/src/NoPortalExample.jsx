import React from 'react';
import Modal from './Modal';

function NoPortalExample() {
    const [showModal,setShowModal] = React.useState(false);
  return (
    <>
        NoPortalExample
        <button onClick={()=>setShowModal(true)}>Show Modal without Portal</button>
        {showModal&&<Modal onClose={()=>setShowModal(false)}/>}
    </>
  )
}

export default NoPortalExample