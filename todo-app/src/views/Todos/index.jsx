import { useEffect, useRef, useState } from "react"
import axios from "axios"

const TodoPage = () => {
  const [todoList, setTodoList] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    const fetData = async () => {
      const todos = await getTodo()
      setTodoList(todos)
    }
    fetData()
  }, [])

  const handleSubmit = () => {
    const value = inputRef.current.value;
    createTodo({
      title: value
    })
  }

  const createTodo = async (data) => {
    await axios.post("http://localhost:3000/todos", data)
    const todos = await getTodo()
    setTodoList(todos)
  }

  const getTodo = async () => {
    const response = await axios.get("http://localhost:3000/todos")
    const todo = response.data
    return todo
  }

  const handleUpdate = async (todo) => {
    console.log(todo);
    await axios.patch(`http://localhost:3000/todos/${todo.id}`, {
      isComplete: !todo.isComplete
    })
    const todos = await getTodo()
    setTodoList(todos)
  }

  return <div>
    <h1>todo page</h1>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
    <div>
      <ul>
        {
          todoList.map(todo => {
            return <li key={todo.id} style={{
              textDecoration: todo.isComplete ? "line-through" : ""
            }} onClick={() => handleUpdate(todo)} >{todo.title}</li>
          })
        }
      </ul>
    </div>
  </div>
}

export default TodoPage