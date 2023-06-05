import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai"


const InputTodo = () => {
    return <div className={`item-todo`}>
        <div>
            <AiOutlineCheckCircle size={32}/>
        </div>
        <input className={`add-todo`} />

    </div>
}

export default InputTodo