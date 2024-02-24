import { useContext, useState } from "react"
import Todo from "../todo/todo"
import GlobalContext  from '../TodoContext'

function TodoList(){
    const {list,setList} = useContext(GlobalContext)


    return (
        <div>
            {list.length>0 && list.map((item,index)=><Todo key={item["id"]} isFinished={item["finished"]} id={item["id"]} todoData={item["todoData"]} 
            changeFinished={(isFinished)=>{
                list[item["id"]-1]["finished"] = isFinished
                setList(list)

            }}

            onDelete={(id)=>{
                const newList = new Array();

                for (let x of list){
                    if (x["id"] != id){
                        newList.push(x)
                    }
                }
                setList(newList)

            }}
            
            />)}
        </div>
    )
}

export default TodoList