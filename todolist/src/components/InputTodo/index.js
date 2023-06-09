import { AiOutlineCheckCircle, AiOutlineEdit } from "react-icons/ai"


const InputTodo = (props) => {
    const  {setTodoList }   = props
    return <div className={`item-todo`}>
        <div>
            <AiOutlineCheckCircle size={32}/>
        </div>
        <input className={`add-todo`} onKeyPress={(e)=> {
            if (e.key === 'Enter') {
                console.log(e.target.value);
                
                setTodoList((oldValue => {
                    const newItem = {
                        title: e.target.value,
                        status: "doing",
                        isEdit: false,
                        id: oldValue.length
                    }
                    return [...oldValue, newItem]
                }))
            }
        }}/>

    </div>
}

export default InputTodo