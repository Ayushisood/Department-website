import axios from "axios";

const getNews = () => async (dispatch) => {
  const res = await axios.get("https://department-server.vercel.app/api/news");
  console.log(res.data);

  dispatch({
    type: "GET_NEWS",
    payload: res.data,
  });
};

export default getNews;
