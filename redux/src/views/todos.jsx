import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/thunk/todoThunk";


const TodosList = () => {
    const todosState = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(()=> {
        console.log(todosState);
    }, [todosState])

    useEffect(()=> {
        dispatch(getTodoList())
    }, [])

    return <div>
        todo list
    </div>
}


export default TodosList;