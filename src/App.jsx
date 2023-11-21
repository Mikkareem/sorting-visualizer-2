import { useState } from 'react'
import SortingVisualiser from './SortingVisualizer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <SortingVisualiser />
      </div>
    </>
  )
}

export default App
