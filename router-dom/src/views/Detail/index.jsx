import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailPage = () => {
    const params = useParams()
    const [todos, setTodo] = useState()
    

    console.log(params);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        .then(response => response.json())
        .then(json => setTodo(json))
    }, [params])

    return <div>detail page { params.id } - {JSON.stringify(todos)}</div>
}

export default DetailPage