import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
   
  }
  
  return (
    <>
      <p>Counter:{count}</p>
      <button type="button"onClick={increment} >Increment</button>
      <button type="button"onClick={decrement}>Decrement</button>

    </>
  )
}

export default App

