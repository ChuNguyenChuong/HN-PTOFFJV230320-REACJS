import { useSearchParams } from "react-router-dom"

const HomePage = () => {
    const [params, setParams] = useSearchParams()

    console.log(params.get("name"));
    console.log(params.get("age"));


    return <div>home page 
        <button onClick={()=>{
            params.set("name", "duc anh")
            setParams(params)   
        }}>click set query</button>
    </div>
}

export default HomePage