import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
    Count is : {count}<br/>
    <button type="button" onClick={()=>{setCount(()=>count+1)}}>Increment</button>
    <button type="button" onClick={()=>{setCount(()=>{
      if (count-1 <0){
        return count
      }
      else{
        return count-1
      }
    })}}>Decrement</button>
    </>
  )
}

export default App
