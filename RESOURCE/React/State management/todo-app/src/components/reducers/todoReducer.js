function todoReducer(state,action){
    switch (action.type){
        case "add_todo":
            let input = action.payload.input;
            console.log(state)
            let id
            try{
                id = state[state.length - 1]["id"]
            }
            catch(e){
                id = 0
            }
            return [...state, { id: id, todoData: input }]
        case "edit_todo":
            let item = action.payload.item
            let text = action.payload.text
            const updatedList = state.map(t=>{
                if (t.id == item.id){
                    item.todoData = text
                }
                return t;
            })
            return updatedList

        case "deleteTodo":
            const newList = new Array();
            id = action.payload.id
    
            for (let x of state){
                if (x["id"] !== id){
                    newList.push(x)
                }
            }
            return newList
    }
}


export default todoReducer