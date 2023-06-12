
const INIT_STATE = {
    todos : [],
    counter : 0
}

const todoListReducer = (state = INIT_STATE, action) =>{
    console.log(action);
    switch (action.type) {
        case "next":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "pre":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "setCounter": 
            return {
                ...state,
                counter: action.payload
            }
        case "settodo": 
            return {
                ...state,
                todos: action.payload
            }
        case "random": 
            return {
                ...state,
                counter : state.counter + action.payload
            }
        default:
            return {...state}
    }
}

export default todoListReducer