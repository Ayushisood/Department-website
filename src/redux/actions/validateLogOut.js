import axios from "axios";

const validateLogOut = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/api/logout", {
    withCredentials: true,
  });
  console.log(response.data);

  dispatch({
    type: "LOGOUT_SUCCESS",
    payload: response.data.success,
  });
};

export default validateLogOut;
