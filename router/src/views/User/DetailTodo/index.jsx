import { useParams, useSearchParams } from "react-router-dom"


const DetailTodo = () => {
    const prams = useParams()
    const [query,] = useSearchParams()

    console.log(query.get("query"));

    return <div>DetailTodo : {prams.id}</div>
}

export default DetailTodo