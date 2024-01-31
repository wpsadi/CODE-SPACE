import { useState } from 'react'
import "../src/Component/Pokedex/Pokedex.css"
import CustomRoutes from './Routes/CustomRoutes'
import {Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="pokedex-wrapper">
    <h1 id="hd-1"><Link to="/" className='anchorH1'>Pokedex</Link></h1>
    </div>
    
      <CustomRoutes/>
      
    </>
  )
}

export default App
