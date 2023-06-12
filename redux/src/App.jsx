import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { useRef } from 'react'
import { nextCounterAction, setCounterAction } from './redux/action/todoAction'

function App() {
  const todosState = useSelector((state) => state.todos)
  // const usersState = useSelector((state) => state.users)

  const dispatch = useDispatch()


  const inputRef = useRef()

  return (
    <>
     app component
     <div>
      <button onClick={()=> {

        dispatch({
          type : "pre"
        })

      }}>pre</button>
      {todosState.counter}
      <button onClick={()=> {
        dispatch(nextCounterAction())
      }}>next</button>

      <input type="number" ref={inputRef}/>

      <button onClick={()=> {
        dispatch({
          type: "setCounter",
          payload : inputRef.current.value ? parseInt(inputRef.current.value) : 0
        })

        dispatch(setCounterAction( inputRef.current.value ? parseInt(inputRef.current.value) : 0))
      }}>submit counter</button>

     </div>
    </>
  )
}



export default App
