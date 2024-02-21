import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/login.jsx'

function App() {
  const [action,setAction] = useState("signup")

  return (
    <><Page action={action} setAction={setAction}/></>
  )
}

export default App
