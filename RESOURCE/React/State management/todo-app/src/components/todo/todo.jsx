import { useContext, useState } from "react"
import todoDispatchContext from "../todoDispatchContext";

function Todo({todoData, isFinished,id,changeFinished, onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished)
    const [isEditing, setIsEditing] = useState(false)
    const [editText,setEditText] = useState("");
    const {dispatch} = useContext(todoDispatchContext)
    // console.log(id)
    return (<div>
        {/* <div>{todoData}</div> */}
        <div>
            <input type="checkbox" name="" id={id} defaultChecked={finished} onChange={(e)=>{
                setFinished(!isFinished)
                changeFinished(finished)
            }}/>
            <span>{isEditing ? <input type="text" defaultValue={todoData} onChange={(e)=>{
                setEditText(e.target.value)
                
            }}/> : todoData}</span>
            <button type="button" onClick={()=>{
                setIsEditing(!isEditing)
                if (isEditing == true){
                    onEdit(editText)
                }
            }}>{isEditing? "save" : "edit"}</button>
            <button onClick={()=>{
                onDelete(id)
            }}>Delete</button>
        </div>
        <br/>
    
        </div>)
}

export default Todo