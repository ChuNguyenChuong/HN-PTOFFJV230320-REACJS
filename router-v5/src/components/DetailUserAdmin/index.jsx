import {useParams} from "react-router-dom"
const DetailUserAdmin = ()=> {
    const prams = useParams()

    return <div>DetailUserAdmin : {prams.id}</div>
}

export default DetailUserAdmin;