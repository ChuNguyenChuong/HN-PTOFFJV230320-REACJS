const INIT_STATE_USER = {
    users : [],
    name: "chuong"
}

const userReducer = (state = INIT_STATE_USER, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, 
                users : action.payload
            }
        default: 
            return { ...state }
    }

}

export default userReducer