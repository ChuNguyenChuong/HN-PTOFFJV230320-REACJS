import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai"

const ItemTodo = (props) => {
    const { isEdit, value, status, id, setTodoList, todoList} = props;

    return (
        <div className={`item-todo ${status === "completed" ? "completed" : ""}`}>
            <div>
                <AiOutlineCheckCircle size={32} color={status === "completed" ? "rgb(91, 149, 91)" : "black"} onClick={(e)=> {

                    const newTodo = todoList.map(todo => {
                        if (todo.id === id) {
                            if (todo.status === "completed") {
                                todo.status = "doing"
                            }else{
                                todo.status = "completed"
                            }
                        }
                        return  todo
                    })
                    setTodoList(newTodo)
                }} />
            </div>
            <input 
                value={value}
                className={`input-todo ${isEdit ? "editing-true" : "editing-false"}  ${status === "completed" ? "line-through" : ""}`}
                disabled={!isEdit}
                onChange={(e)=> {
                    const newTodo = todoList.map(todo => {
                        if (todo.id === id) {
                            todo.title =  e.target.value
                        }
                        return  todo
                    })

                    setTodoList(newTodo)
                }}
                 />
            <div>
                <AiOutlineEdit size={32} onClick={()=> {
                    const newTodo = todoList.map(todo => {
                        if (todo.id === id && todo.status !== "completed") {
                            todo.isEdit =  !todo.isEdit 
                        }
                        return  todo
                    })
                    setTodoList(newTodo)
                }}/>
            </div>
        </div>
    )
}

export default ItemTodo