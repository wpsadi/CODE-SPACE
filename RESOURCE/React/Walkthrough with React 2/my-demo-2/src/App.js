import './App.css';
import { useState } from 'react';
function App() {

  const [x,setX] = useState(0)
  const [listss] = useState(["hi there","how are you"])
  return (
    <>
    count : {x}
    <br/>
    <button onClick={()=>setX(x+1)}>Inc</button>
    <button onClick={()=>setX(x-1)}>Dec</button>

    <br/><br/>
    <ul>
    {listss.map((i,index)=><li key={index}>{i}</li>)}
    </ul>
    
    </>
  );
}

export default App;
