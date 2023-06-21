import { Link, Outlet } from 'react-router-dom'

function HeaderComponent() {

  return (
    <>
      <div style={{
        display: "flex",
        gap: "30px"
      }}>
        <Link to={"/"}>home</Link>
        <Link to={"/todos"}>todos</Link>
        <Link to={"/users"}>users</Link>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default HeaderComponent
