import { useState } from "react"

function Todo({todoData, isFinished,id,changeFinished, onDelete}){
    const [finished,setFinished] = useState(isFinished)
    return (<div>
        <div>{todoData}</div>
        <div>
            <input type="checkbox" name="" id={id} defaultChecked={finished} onChange={(e)=>{
                setFinished(!isFinished)
                changeFinished(finished)
            }}/>
            <button type="button" >Edit</button>
            <button onClick={()=>{
                onDelete(id)
            }}>Delete</button>
        </div>
        <br/>
    
        </div>)
}

export default Todo