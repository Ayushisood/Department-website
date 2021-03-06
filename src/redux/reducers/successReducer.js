const successReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return action.payload;
    case "SIGNIN_SUCCESS":
      return action.payload;
    case "AUTHENTICATE_SUCCESS":
      return action.payload;
    case "LOGOUT_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default successReducer;
