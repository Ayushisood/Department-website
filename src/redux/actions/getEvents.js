import axios from "axios";

const getEvents = () => async (dispatch) => {

    const res = await axios.get("https://department-server.vercel.app/api/events");
    console.log(res.data);

    dispatch({
        type: 'GET_EVENTS',
        payload: res.data
    });
}

export default getEvents;
