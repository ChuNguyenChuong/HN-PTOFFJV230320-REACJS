import logo from './logo.svg';
import './App.css';
import ItemTodo from './components/ItemTodo';
import { useEffect, useMemo, useState } from 'react';
import InputTodo from './components/InputTodo';
import NavBar from './components/NavBar';

function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "asdasd",
      status: "completed",
      isEdit: false,
      id: 1
    }, 
    {
      title: "asdasd",
      status: "doing",
      isEdit: false,
      id: 2
    }, 
    {
      title: "item 3",
      status: "doing",
      isEdit: false,
      id: 3
    }
  ])

  const [filterBy, setFilterBy] = useState("all") // doing || completed

  const listTodoByFilter = useMemo(()=> {
    if (filterBy === "all") {
      return todoList
    }
    return todoList.filter(todoItem => todoItem.status === filterBy)

  }, [filterBy, todoList])

  useEffect(()=>{
    console.log("todoList", todoList);
  }, [todoList])

  return (
    <div className="App">
      <div className="title">todos</div>
      <div className="list-todo">
        <NavBar length={todoList.length} filterBy={filterBy} setFilterBy={setFilterBy} setTodoList={setTodoList} />
        <InputTodo />
        {
          listTodoByFilter.map(todo => <ItemTodo todoList={todoList} setTodoList={setTodoList} key={todo.id} id={todo.id} isEdit={todo.isEdit} value={todo.title} status={todo.status} />)
        }
      </div>
    </div>
  );
}

export default App;
