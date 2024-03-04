import './App.css'
import AddTodo from './components/AddTodo/AddTodo'

import TodoList from './components/TodoList/TodoList'

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, finishTodo} from './slice/TodoSlice';
function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo,finishTodo}, dispatch);

  const todo = useSelector(state=>state)
  console.log(todo.todos)
  return (
   <>
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} finishTodo={actions.finishTodo} />
   </>
  )
}

export default App
