import { combineReducers } from "redux";
import successReducer from "./successReducer";
import eventsReducer from "./eventsReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  success: successReducer,
  events: eventsReducer,
  news: newsReducer,
});
