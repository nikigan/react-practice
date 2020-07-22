import { applyMiddleware, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;
