import { combineReducers } from "redux";
import places from "./places/reducer";
import place from "./place/reducer";
import dish from "./dish/reducer";

export default combineReducers({
  places,
  place,
  dish,
});
