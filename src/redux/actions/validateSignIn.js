import axios from "axios";

const validateSignIn = (username, password) => async (dispatch) => {
  const postBody = new URLSearchParams({
    username: username,
    password: password,
  }).toString();

  const response = await axios.post(
    "http://localhost:5000/api/login",
    postBody,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log("Sign-in response : ", response.data);

  dispatch({
    type: "SIGNIN_SUCCESS",
    payload: response.data.success,
  });
};

export default validateSignIn;
