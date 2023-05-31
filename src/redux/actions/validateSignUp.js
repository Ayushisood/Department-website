import axios from "axios";

const validateSignUp = (name, username, password) => async (dispatch) => {
    
    const postBody = new URLSearchParams({
        name: name,
        username: username,
        password: password
      }).toString();
  
    const response = await axios.post("https://department-server-a76gwptdr-masterrachit777.vercel.app/api/register", postBody, {
        withCredentials: true,
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    console.log(response.data);

    dispatch({
        type: "SIGNUP_SUCCESS",
        payload: response.data.success
    });
}

export default validateSignUp;