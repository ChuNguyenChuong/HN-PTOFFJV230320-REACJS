import { useNavigate } from "react-router-dom"

const AboutPage = () => {
    const navigate = useNavigate()
    return <div>about page

        <div onClick={()=> {
            navigate(-2)
        }}>
            back
        </div>
    </div>
}

export default AboutPage