import axios from "axios";

const authenticateUser = () => async (dispatch) => {

    const response = await axios.get("https://department-server.vercel.app/api/home", { withCredentials: true });
    console.log(response.data);

    dispatch({
        type: "AUTHENTICATE_SUCCESS",
        payload: response.data.success
    });
}

export default authenticateUser;
