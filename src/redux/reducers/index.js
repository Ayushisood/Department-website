import { combineReducers } from "redux";
import successReducer from "./successReducer"
import eventsReducer from "./eventsReducer"

export default combineReducers({
    success: successReducer,
    events: eventsReducer
});
