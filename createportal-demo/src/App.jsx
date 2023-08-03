import { useState } from 'react'
import './App.css';
import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
  
    </>
  )
}

export default App
