const successReducer = (state=false, action) => {
    switch(action.type) {
        case "SIGNUP_SUCCESS":
            return action.payload;
        default:
            return state;
    }
}

export default successReducer;