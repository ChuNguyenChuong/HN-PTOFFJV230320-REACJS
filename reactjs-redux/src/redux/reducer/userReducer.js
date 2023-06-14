const INIT_STATE_USER = {
    usersList : [],
    userDetail : null
}

const userReducer = (state = INIT_STATE_USER, action) => {
    switch (action.type) {
        case "SET_USERS_FROM_API":
            return {
                ...state,
                usersList: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default userReducer