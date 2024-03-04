import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/todoList/todoList'
import AddTodo from './components/addTodo/addTodo'

import GlobalContext from './components/TodoContext'
import todoReducer from './components/reducers/todoReducer.js'
import todoDispatchContext from './components/todoDispatchContext.jsx'

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: "data1", finished: false },
  //   { id: 2, todoData: "data2", finished: true }
  // ])

  const [list,dispatch] = useReducer(todoReducer,[])

  return (
    <>
      <GlobalContext.Provider value={{ list}}>
        <todoDispatchContext.Provider value={dispatch}>
        <AddTodo  />
        <br />
        <TodoList />
        </todoDispatchContext.Provider>

      </GlobalContext.Provider>

    </>
  )
}

export default App
