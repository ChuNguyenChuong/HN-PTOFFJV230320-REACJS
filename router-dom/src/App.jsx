import { Link, NavLink, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <>
      app Compoment

      <Link to={"/todo"}>
        go to todo page
      </Link>

      <NavLink to={"/about"}>go to about page</NavLink>

      <button onClick={()=>{
        navigate("/home")
      }}>click me to go to home page</button>
    </>
  )
}

export default App
