import { combineReducers } from "redux";
import places from "./places/reducer";
import place from "./place/reducer";

export default combineReducers({
  places,
  place,
});
