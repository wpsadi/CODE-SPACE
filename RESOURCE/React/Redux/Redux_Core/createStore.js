const {createStore} = require("redux")
const {bindActionCreators,combineReducers} = require("redux")


function todoReducer(state=[],action){
    if(action.type == "add_todo"){
        const todoText = action.payload.todoText;
        return [...state,{text:todoText,isFinished:false,id:(state.length ==0)? 1 : state[state.length-1].id + 1}]
    }
    else if (action.type == "delete_todo"){
        const todoID = action.payload.todoID;
        return state.filter(t=>t.id !=todoID)
    }
    return state
}


function UserReducer(state=[],action){
    if(action.type == "add_user"){
        const UserText = action.payload.UserText;
        return [...state,{text:UserText,isFinished:false,id:(state.length ==0)? 1 : state[state.length-1].id + 1}]
    }
    else if (action.type == "delete_user"){
        const UserID = action.payload.UserID;
        return state.filter(t=>t.id !=UserID)
    }
    return state
}
// action object
const add = (text)=>({type:"add_todo",payload:{todoText:text}})
const addUser = (text)=>({type:"add_user",payload:{UserText:text}})

const reducer = combineReducers({todo:todoReducer,users:UserReducer})

const {dispatch,getState,subscribe} = createStore(reducer)
subscribe(()=>console.log(getState()))

const actions = bindActionCreators({add,addUser},dispatch)


actions.add("todo1")
actions.addUser("aditya")
dispatch({type:"delete_todo",payload:{todoID:1}})