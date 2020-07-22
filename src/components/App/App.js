import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useDispatch, useSelector } from "react-redux";
import AppRouter from "../../router/AppRouter";
import Header from "../Header";
import "./App.scss";
import onTestStore from "../../store/test/action";

function App() {
  const tested = useSelector((state) => state.tested);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(onTestStore()), 1500);
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Container className="app-container">
        <AppRouter />
        <span className="counter">
          Store протестирован:
          {tested ? "Да" : "Нет"}
        </span>
      </Container>
    </div>
  );
}

export default App;
