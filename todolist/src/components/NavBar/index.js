const NavBar = (props) => {
    const {length, filterBy, setFilterBy, setTodoList} = props
    

    return <div className="nav-bar">
        <div>
            {length} item
        </div>
        <div className="btn-group">
            <div onClick={()=> setFilterBy("all")} className={`btn ${filterBy === "all" ? "btn-active": ""}`}>all</div>
            <div onClick={()=> setFilterBy("doing")} className={`btn ${filterBy === "doing" ? "btn-active": ""}`}>doing</div>
            <div onClick={()=> setFilterBy("completed")} className={`btn ${filterBy === "completed" ? "btn-active": ""}`}>completed</div>
        </div>
        <div className="btn" onClick={(e)=> setTodoList((oldValue)=> {
            return oldValue.filter(todo=> todo.status !== 'completed')
        }) }>
            clear completed
        </div>
    </div>
}

export default NavBar