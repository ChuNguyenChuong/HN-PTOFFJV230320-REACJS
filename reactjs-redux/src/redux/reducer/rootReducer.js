import {combineReducers} from "redux"
import bookReducer from "./bookReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    booksStore: bookReducer,
    usersStore: userReducer
})

export default rootReducer