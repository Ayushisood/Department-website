import axios from "axios";

const getEvents = () => async (dispatch) => {

    const res = await axios.get("http://localhost:5000/api/events");
    console.log(res.data);

    dispatch({
        type: 'GET_EVENTS',
        payload: res.data
    });
}

export default getEvents;