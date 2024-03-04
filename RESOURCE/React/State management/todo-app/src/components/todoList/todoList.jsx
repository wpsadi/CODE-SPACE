import { useContext, useState } from "react"
import Todo from "../todo/todo"
import GlobalContext  from '../TodoContext'
import todoDispatchContext from "../todoDispatchContext"

function TodoList(){
    const list = useContext(GlobalContext)
    const dispatch = useContext(todoDispatchContext)
    const onFinished = (isFinished)=>{
        list[item["id"]-1]["finished"] = isFinished
        setList(list)

    }

    function onDelete(list,id){
        const newList = new Array();
        console.log(list)

        for (let x of list){
            if (x["id"] !== id){
                newList.push(x)
            }
        }
        setList(newList)

    }


    function onEdit(text,item){
        dispatch("edit_todo",{payload:{text:text,item:item}})
    }

    return (
        <div>
            {list.length>0 && list.map((item,index)=><Todo key={item["id"]} isFinished={item["finished"]} id={item["id"]} todoData={item["todoData"]} 
            changeFinished={(isFinished)=>onFinished(list,isFinished)}

            onDelete={(id)=>onDelete(list,id)}
            onEdit = {(text)=>{let l = onEdit(text,item)
            }}
            />)}
        </div>
    )
}

export default TodoList