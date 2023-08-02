import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ErrorComponent from './ErrorComponent';

function App() {
  return (
    // to see the output UI without Error Boundary uncomment below code!
    <>
     <div>
      <h1>Main App Component</h1>
      <ErrorComponent />
     </div>
    </>

    //Error Handling with Error Boundary
  //   <ErrorBoundary>
  //   <div>
  //    <h1>Main App Component</h1>
  //    <ErrorComponent />
  //   </div>
  //  </ErrorBoundary>
  )
}

export default App
