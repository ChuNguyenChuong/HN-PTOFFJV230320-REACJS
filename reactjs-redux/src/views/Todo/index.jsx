import axios from "axios"
import { useEffect, useState } from "react"

const TodoView = () => {
    const [stateTodo, setStateTodo] = useState([])

    useEffect(() => {
        const fetApi = async () => {
            const userLogin = await axios.get("http://localhost:3000/users/2")
            console.log(userLogin);
            const todos = await axios.get(`http://localhost:3000/todos?userId=${userLogin.data.id}`)
            console.log(todos);
            setStateTodo(todos.data)
        }

        fetApi()


    }, [])

    if (stateTodo.length === 0) {
        return <div>khong co du lieu to do</div>
    }

    return <div>
        TodoView

        {
            stateTodo.map(todo => {
                return <div key={todo.id}>{todo.title}</div>
            })
        }

    </div>
}

export default TodoView