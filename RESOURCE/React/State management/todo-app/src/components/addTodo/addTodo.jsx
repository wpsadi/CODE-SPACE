import { useState } from "react"

function AddTodo({setList,list}){
    let [text,setText] = useState("")
    return (<>
        <div>
            <input type="text" placeholder="Create a new Todo" value={text} id="input-task" onChange={(e)=>{
                setText(e.target.value.trim())
            }}/>
            <button type="button" onClick={(e)=>{
                let input = text
                if (input.length>0 ){
                    setList([...list,{id:list.length+1,todoData:input}])
                    text=""
                    setText("")
                    // document.getElementById("input-task").value=""
                }
            }}>Add</button>
        </div>
    </>)
}

export default AddTodo