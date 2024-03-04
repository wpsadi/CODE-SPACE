import { useContext, useState } from "react"
import GlobalContext  from '../TodoContext'
import todoDispatchContext from "../todoDispatchContext"


function AddTodo({  }) {
    let [text, setText] = useState("")
    const dispatch = useContext(todoDispatchContext)
    const {list,setList} = useContext(GlobalContext)
    return (<>
        <div>
            <input type="text" placeholder="Create a new Todo" value={text} id="input-task" onChange={(e) => {
                setText(e.target.value.trim())
            }} />
            <button type="button" onClick={(e) => {
                let input = text
                dispatch({type:"add_todo",payload:{input:input}})
                text = ""
                setText("")
            }}>Add</button>
        </div>
    </>)
}

export default AddTodo