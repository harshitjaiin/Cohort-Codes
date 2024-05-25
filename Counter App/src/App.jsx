import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button onClick = {()=> setCount((count)=>count*2)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
