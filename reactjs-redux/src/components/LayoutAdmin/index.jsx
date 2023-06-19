import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



const LayoutAdmin = () => {

    const userState = useSelector((state) => state.usersStore.user)

    if (userState && userState.id) {
        return <Outlet />
    }

    return <Navigate to={"/login"} />
}

export default LayoutAdmin