import { Link, Outlet } from "react-router-dom"

const TodoPage = () => {
    return <div>todo page
        <Link to={"/about"}>
            go to about page
      </Link>
        <Outlet/>
    </div>
}

export default TodoPage