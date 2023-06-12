import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    todos : todoListReducer,
    users : userReducer
})


export default rootReducer;