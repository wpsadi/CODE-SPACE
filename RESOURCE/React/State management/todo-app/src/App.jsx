import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/todoList/todoList'
import AddTodo from './components/addTodo/addTodo'

import GlobalContext  from './components/TodoContext'

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "data1", finished: false },
    { id: 2, todoData: "data2", finished: true }
  ])

  return (
    <>
      <GlobalContext.Provider value={{ list, setList }}>
        <AddTodo setList={setList} list={list} />
        <br />
        <TodoList/>
      </GlobalContext.Provider> 

    </>
  )
}

export default App
