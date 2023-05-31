import axios from "axios";

const validateLogOut = () => async (dispatch) => {
  const response = await axios.get("https://department-server-a76gwptdr-masterrachit777.vercel.app/api/logout", {
    withCredentials: true,
  });
  console.log(response.data);

  dispatch({
    type: "LOGOUT_SUCCESS",
    payload: response.data.success,
  });
};

export default validateLogOut;
