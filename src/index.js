/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import App from "./components/App/App";
import "./index.scss";

// Проврка работы Store
store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
store.dispatch({ type: "TEST_STORE" });
//

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
