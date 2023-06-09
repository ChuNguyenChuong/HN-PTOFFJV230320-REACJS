import { Navigate, Outlet } from "react-router-dom"

const PrivatedRouter = () => {
    const isLogin = true

    return isLogin ? <Outlet></Outlet> : <Navigate to={"/home"}/>
}

export default PrivatedRouter