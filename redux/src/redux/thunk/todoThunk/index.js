
function getTodoList() {
    return (dispatch) => {
        // you can use api and something else here
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "settodo",
                payload : json
            })
        })
       
    }
}

export {
    getTodoList
}
