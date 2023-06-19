const INIT_STATE_USER = {
    usersList: [],
    userDetail: null,
    user: null
}

const userReducer = (state = INIT_STATE_USER, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
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